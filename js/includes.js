async function loadIncludes() {

  const elements = document.querySelectorAll('[data-include]');

  for (const el of elements) {

    const file = el.getAttribute('data-include');

    const response = await fetch(file);

    if (response.ok) {
      el.innerHTML = await response.text();
    }
  }
}

loadIncludes();
