interface SwitchDef {
  attr: string;
  store: string;
  onVal: string;
  offVal: string;
  label: string;
}

const SWITCHES: SwitchDef[] = [
  { attr: 'data-animations', store: 'phyton-animations', onVal: 'paused', offVal: 'play', label: 'Pausar animaciones' },
  { attr: 'data-underline', store: 'phyton-underline', onVal: 'true', offVal: 'false', label: 'Subrayar todos los links' },
  { attr: 'data-reduced-transparency', store: 'phyton-transparency', onVal: 'true', offVal: 'false', label: 'Reducir transparencia' },
  { attr: 'data-ruler', store: 'phyton-ruler', onVal: 'true', offVal: 'false', label: 'Regla de lectura' },
  { attr: 'data-large-cursor', store: 'phyton-cursor', onVal: 'true', offVal: 'false', label: 'Cursor grande' },
  { attr: 'data-colorblind', store: 'phyton-colorblind', onVal: 'true', offVal: 'false', label: 'Paleta segura (daltonismo)' },
];

const FONT_SIZES = [
  { id: '100', label: '100%' },
  { id: '125', label: '125%' },
  { id: '150', label: '150%' },
];

class AccessPanel extends HTMLElement {
  private open = false;

  connectedCallback() {
    this.innerHTML = `
      <button class="fab-btn" aria-label="Abrir panel de accesibilidad" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v.01M12 10v4M12 18v.01"/>
        </svg>
      </button>
      <div class="access-panel-overlay hidden"></div>
      <div class="access-panel hidden" role="dialog" aria-label="Panel de accesibilidad" aria-hidden="true">
        <div class="access-panel-header">
          <h2 id="access-title">Accesibilidad</h2>
          <button class="close-btn" aria-label="Cerrar panel de accesibilidad" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="access-panel-body">
          <fieldset>
            <legend>Tamaño de fuente</legend>
            <div class="font-size-options" role="radiogroup" aria-label="Tamaño de fuente">
              ${FONT_SIZES.map((fs) => `
                <label class="font-size-option">
                  <input type="radio" name="font-size" value="${fs.id}" ${fs.id === '100' ? 'checked' : ''} />
                  <span>${fs.label}</span>
                </label>
              `).join('')}
            </div>
          </fieldset>
          <div class="switches">
            ${SWITCHES.map((sw) => `
              <label class="switch-row">
                <span>${sw.label}</span>
                <input type="checkbox" data-attr="${sw.attr}" data-store="${sw.store}" data-on="${sw.onVal}" data-off="${sw.offVal}" role="switch" />
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const html = document.documentElement;

    // Init switches from data attributes
    this.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach((input) => {
      const attr = input.dataset.attr!;
      const onVal = input.dataset.on!;
      const current = html.getAttribute(attr);
      input.checked = current === onVal;

      input.addEventListener('change', () => {
        const val = input.checked ? onVal : input.dataset.off!;
        html.setAttribute(attr, val);
        try { localStorage.setItem(input.dataset.store!, val); } catch {}

        // Handle ruler visual
        if (attr === 'data-ruler') {
          this.toggleRuler(val === 'true');
        }

        // Sync reduce motion with animations
        if (attr === 'data-animations') {
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
          // If user explicitly paused, respect it
        }
      });
    });

    // Init font size from data attribute
    const currentSize = html.getAttribute('data-font-size') || '100';
    const sizeRadio = this.querySelector<HTMLInputElement>(`input[name="font-size"][value="${currentSize}"]`);
    if (sizeRadio) sizeRadio.checked = true;

    this.querySelectorAll<HTMLInputElement>('input[name="font-size"]').forEach((input) => {
      input.addEventListener('change', () => {
        if (!input.checked) return;
        html.setAttribute('data-font-size', input.value);
        try { localStorage.setItem('phyton-font-size', input.value); } catch {}
      });
    });

    // Toggle panel
    const fab = this.querySelector('.fab-btn')!;
    const overlay = this.querySelector('.access-panel-overlay')!;
    const panel = this.querySelector('.access-panel')!;
    const closeBtn = this.querySelector('.close-btn')!;

    const open = () => {
      this.open = true;
      panel.classList.remove('hidden');
      panel.setAttribute('aria-hidden', 'false');
      overlay.classList.remove('hidden');
      fab.setAttribute('aria-label', 'Cerrar panel de accesibilidad');
    };

    const close = () => {
      this.open = false;
      panel.classList.add('hidden');
      panel.setAttribute('aria-hidden', 'true');
      overlay.classList.add('hidden');
      fab.setAttribute('aria-label', 'Abrir panel de accesibilidad');
    };

    fab.addEventListener('click', () => this.open ? close() : open());
    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);

    // Ruler: create element if active
    if (html.getAttribute('data-ruler') === 'true') {
      this.toggleRuler(true);
    }

    // Listen for prefers-reduced-motion
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionMedia.addEventListener('change', (e) => {
      // Only auto-pause if user hasn't explicitly set it
      const stored = localStorage.getItem('phyton-animations');
      if (!stored) {
        html.setAttribute('data-animations', e.matches ? 'paused' : 'play');
      }
    });
  }

  private toggleRuler(active: boolean) {
    let ruler = document.getElementById('reading-ruler');
    if (active && !ruler) {
      ruler = document.createElement('div');
      ruler.id = 'reading-ruler';
      ruler.style.cssText = 'position:fixed;left:0;right:0;height:1.5em;background:rgba(255,255,0,0.15);border-top:2px solid rgba(255,255,0,0.4);border-bottom:2px solid rgba(255,255,0,0.4);pointer-events:none;z-index:9999;display:none;';
      document.body.appendChild(ruler);

      document.addEventListener('mousemove', (e) => {
        const r = document.getElementById('reading-ruler');
        if (r && r.style.display !== 'none') {
          r.style.top = `${e.clientY - 12}px`;
        }
      });

      document.addEventListener('touchmove', (e) => {
        const r = document.getElementById('reading-ruler');
        if (r && r.style.display !== 'none') {
          r.style.top = `${e.touches[0].clientY - 12}px`;
        }
      });
    }
    if (ruler) ruler.style.display = active ? 'block' : 'none';
  }
}

customElements.define('access-panel', AccessPanel);
