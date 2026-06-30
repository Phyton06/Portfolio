const THEMES = ['midnight', 'sunset', 'forest', 'ocean', 'lavender', 'paper'] as const;
const STORAGE_KEY = 'theme';

class ThemeToggle extends HTMLElement {
  connectedCallback() {
    const current = document.documentElement.getAttribute('data-theme') || 'midnight';
    this.innerHTML = `
      <button class="theme-toggle-btn" aria-label="Cambiar tema actual: ${current}" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <span class="sr-only">Tema: ${current}</span>
      </button>
    `;

    this.querySelector('button')!.addEventListener('click', () => {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') || 'midnight';
      const idx = THEMES.indexOf(current as (typeof THEMES)[number]);
      const next = THEMES[(idx + 1) % THEMES.length];

      html.setAttribute('data-theme', next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}

      this.querySelector('button')!.setAttribute('aria-label', `Cambiar tema actual: ${next}`);
      this.querySelector('.sr-only')!.textContent = `Tema: ${next}`;

      const live = document.getElementById('announcements');
      if (live) live.textContent = `Tema cambiado a ${next}.`;
    });
  }
}

customElements.define('theme-toggle', ThemeToggle);
