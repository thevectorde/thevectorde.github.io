// static/js/search.js
let fuse;
let indexData = [];

async function loadIndex() {
  const res = await fetch("/index.json");
  indexData = await res.json();
  fuse = new Fuse(indexData, {
    keys: ["title", "summary"],
    threshold: 0.3,
  });
}

function render(results) {
  const container = document.getElementById("search-results");
  if (!container) return;
  container.innerHTML = "";
  results.forEach(r => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = r.item.url;
    a.textContent = r.item.title;
    li.appendChild(a);
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadIndex();
  const input = document.getElementById("search-input");
  if (!input) return;

  input.addEventListener("input", e => {
    const q = e.target.value.trim();
    if (!q) {
      render([]);
      return;
    }
    const results = fuse.search(q);
    render(results);
  });
});



