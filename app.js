const home = document.getElementById('home-view');
const detail = document.getElementById('detail-view');

// Paths are relative to index.html, including when hosted at /gamedev/.
const pages = {
  avernus: { path: 'pages/avernus/index.html', title: 'Avernus' },
  illyria: { path: 'pages/avernus/illyria-house.html', title: 'Illyria’s House' },
  cassius: { path: 'pages/avernus/cassius-burgal.html', title: 'Cassius Burgal' },
  knucklebone: { path: 'pages/avernus/fort-knucklebone.html', title: 'Fort Knucklebone' },
  stormwreck: { path: 'pages/stormwreck/index.html', title: 'Stormwreck' },
  'stormwreck-design': { path: 'pages/stormwreck/exploration-design.html', title: 'Stormwreck Exploration Design' },
  'stormwreck-unreal': { path: 'pages/stormwreck/unreal-prototype.html', title: 'Stormwreck Unreal Prototype' }
};
const contentCache = new Map();
let renderVersion = 0;

function showStatus(message, retry = false) {
  const section = document.createElement('div');
  section.className = 'detail';
  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  section.append(paragraph);
  if (retry) {
    const button = document.createElement('button');
    button.className = 'button';
    button.type = 'button';
    button.textContent = 'Try again';
    button.addEventListener('click', render);
    section.append(button);
  }
  detail.replaceChildren(section);
}

async function render() {
  const version = ++renderVersion;
  const key = location.hash.slice(1);
  const page = Object.hasOwn(pages, key) ? pages[key] : null;

  if (!page) {
    home.hidden = false;
    detail.hidden = true;
    detail.replaceChildren();
    detail.removeAttribute('aria-busy');
    document.title = 'Guilherme Araújo — RPG & Systems Design';
    if (key) requestAnimationFrame(() => {
      if (version === renderVersion) document.getElementById(key)?.scrollIntoView();
    });
    return;
  }

  home.hidden = true;
  detail.hidden = false;
  detail.setAttribute('aria-busy', 'true');
  document.title = `${page.title} — Guilherme Araújo`;
  window.scrollTo(0, 0);
  showStatus('Loading case content…');

  try {
    let content = contentCache.get(page.path);
    if (content === undefined) {
      const response = await fetch(page.path);
      if (!response.ok) throw new Error(`Page request failed: ${response.status}`);
      content = await response.text();
      contentCache.set(page.path, content);
    }
    // An older request must not replace the user's latest navigation.
    if (version !== renderVersion) return;
    detail.innerHTML = content;
  } catch (error) {
    if (version !== renderVersion) return;
    showStatus('This page could not be loaded. Please try again.', true);
    console.error(error);
  } finally {
    if (version === renderVersion) detail.removeAttribute('aria-busy');
  }
}

window.addEventListener('hashchange', render);
render();
