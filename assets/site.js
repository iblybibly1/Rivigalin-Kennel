// Shared site behavior: header/footer rendering, mobile menu, variant switcher.
(function () {
  const CURRENT = (document.body && document.body.dataset.page) || "";

  const NAV = [
    { href: "index.html",   labelFi: "Etusivu",        labelEn: "Home",           key: "home" },
    { href: "about.html",   labelFi: "Meistä",         labelEn: "About us",       key: "about" },
    { href: "puppies.html", labelFi: "Pentu meiltä?",  labelEn: "Puppy from us?", key: "puppies" },
    { href: "contact.html", labelFi: "Ota yhteyttä",   labelEn: "Contact",        key: "contact" }
  ];

  function navHTML() {
    return NAV.map(item => {
      const active = item.key === CURRENT;
      const cls = active
        ? "text-label-md font-label-md text-primary border-b-2 border-primary pb-1"
        : "text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors duration-200";
      return `<a class="${cls}" href="${item.href}" data-en="${item.labelEn}">${item.labelFi}</a>`;
    }).join("");
  }

  function footerNavHTML() {
    return NAV.map(item => {
      const active = item.key === CURRENT;
      const cls = active
        ? "text-body-md font-body-md text-primary font-bold transition-colors"
        : "text-body-md font-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100";
      return `<li><a class="${cls}" href="${item.href}" data-en="${item.labelEn}">${item.labelFi}</a></li>`;
    }).join("");
  }

  function renderHeader() {
    const mount = document.querySelector("[data-mount=header]");
    if (!mount) return;
    mount.outerHTML = `
      <header data-nav class="bg-background/85 backdrop-blur-md sticky top-0 z-50 w-full transition-all duration-300 border-b border-surface-variant/40">
        <nav class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <a href="index.html" class="text-headline-md font-headline-md font-bold text-primary flex items-center gap-2">
            <span class="material-symbols-outlined text-3xl" data-fill="1">pets</span>
            Rivigalin Kennel
          </a>
          <div class="hidden md:flex gap-8 items-center">
            ${navHTML()}
          </div>
          <div class="hidden md:flex items-center gap-3">
            <div class="lang-switcher" role="group" aria-label="Language">
              <button type="button" data-lang="fi">FI</button>
              <span class="sep" aria-hidden="true">/</span>
              <button type="button" data-lang="en">EN</button>
            </div>
            <a class="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-on-primary-container transition-colors duration-200 shadow-md" href="contact.html" data-en="Contact Us">
              Contact Us
            </a>
          </div>
          <button type="button" aria-label="Open menu" class="md:hidden text-primary" data-mobile-toggle>
            <span class="material-symbols-outlined text-3xl">menu</span>
          </button>
        </nav>
      </header>
      <div class="mobile-menu" data-mobile-menu>
        <div class="mobile-menu-panel">
          <div class="flex justify-between items-center">
            <a href="index.html" class="text-headline-md font-headline-md font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined" data-fill="1">pets</span>
              Rivigalin
            </a>
            <button type="button" aria-label="Close menu" class="text-on-surface" data-mobile-close>
              <span class="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          <div class="flex flex-col gap-5 mt-4">
            ${NAV.map(i => `<a href="${i.href}" class="${i.key === CURRENT ? "active" : ""}" data-en="${i.labelEn}">${i.labelFi}</a>`).join("")}
          </div>
          <div class="lang-switcher lang-switcher--block" role="group" aria-label="Language">
            <button type="button" data-lang="fi">FI</button>
            <span class="sep" aria-hidden="true">/</span>
            <button type="button" data-lang="en">EN</button>
          </div>
          <a class="mt-auto inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full" href="contact.html" data-en="Contact Us">
            Contact Us
          </a>
        </div>
      </div>
    `;
  }

  function renderFooter() {
    const mount = document.querySelector("[data-mount=footer]");
    if (!mount) return;
    mount.outerHTML = `
      <footer class="bg-surface-container rounded-t-3xl mt-auto">
        <div class="w-full px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto flex flex-col md:flex-row justify-between gap-gutter items-center md:items-start">
          <div class="flex flex-col items-center md:items-start gap-3 mb-8 md:mb-0">
            <a href="index.html" class="text-headline-md font-headline-md font-bold text-primary flex items-center gap-2">
              <span class="material-symbols-outlined text-2xl" data-fill="1">pets</span>
              Rivigalin Kennel
            </a>
            <p class="text-body-md font-body-md text-on-surface-variant text-center md:text-left max-w-xs" data-en="© 2024 Rivigalin Kennel. Family-based breeding in Inkoo.">
              © 2024 Rivigalin Kennel. Perhelähtöistä kasvatusta Inkoossa.
            </p>
            <p class="text-caption font-caption text-on-surface-variant/80 text-center md:text-left max-w-xs" data-en="Belgian Shepherds &amp; Mittelspitz — raised with heart.">
              Belgianpaimenkoiria &amp; Mittelspitzejä — Rakkaudella
            </p>
          </div>
          <ul class="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 items-center">
            ${footerNavHTML()}
            <li><a class="text-caption font-caption text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="privacy.html">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    `;
  }

  function wireMobileMenu() {
    const toggle = document.querySelector("[data-mobile-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    const close = document.querySelector("[data-mobile-close]");
    if (!toggle || !menu) return;
    const open = () => menu.classList.add("open");
    const shut = () => menu.classList.remove("open");
    toggle.addEventListener("click", open);
    close && close.addEventListener("click", shut);
    menu.addEventListener("click", (e) => {
      if (e.target === menu) shut();
    });
  }

  function wireScrollNav() {
    const header = document.querySelector("header[data-nav]");
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 12) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Language switcher.
  function applyLang(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
      if (el.dataset.fi == null) el.dataset.fi = el.textContent;
      el.textContent = lang === "en" ? el.dataset.en : el.dataset.fi;
    });
    document.querySelectorAll("[data-en-html]").forEach(el => {
      if (el.dataset.fiHtml == null) el.dataset.fiHtml = el.innerHTML;
      el.innerHTML = lang === "en" ? el.dataset.enHtml : el.dataset.fiHtml;
    });
    document.querySelectorAll("[data-en-placeholder]").forEach(el => {
      if (el.dataset.fiPlaceholder == null) el.dataset.fiPlaceholder = el.placeholder || "";
      el.placeholder = lang === "en" ? el.dataset.enPlaceholder : el.dataset.fiPlaceholder;
    });
    document.querySelectorAll("[data-en-aria-label]").forEach(el => {
      if (el.dataset.fiAriaLabel == null) el.dataset.fiAriaLabel = el.getAttribute("aria-label") || "";
      el.setAttribute("aria-label", lang === "en" ? el.dataset.enAriaLabel : el.dataset.fiAriaLabel);
    });
    document.documentElement.lang = lang;
    if (document.documentElement.dataset.titleEn) {
      document.title = lang === "en"
        ? document.documentElement.dataset.titleEn
        : (document.documentElement.dataset.titleFi || document.title);
    }
    document.querySelectorAll(".lang-switcher [data-lang]").forEach(b => {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
  }

  function wireLangSwitcher() {
    if (!document.documentElement.dataset.titleFi) {
      document.documentElement.dataset.titleFi = document.title;
    }
    const stored = localStorage.getItem("rivigalin.lang");
    const initial = stored === "en" || stored === "fi" ? stored : "fi";
    applyLang(initial);

    document.querySelectorAll(".lang-switcher [data-lang]").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        localStorage.setItem("rivigalin.lang", lang);
        applyLang(lang);
      });
    });
  }

  // Variant switcher — for pages that opt-in with data-variants.
  function wireVariantSwitcher() {
    const root = document.querySelector("[data-variant-root]");
    if (!root) return;
    const key = root.getAttribute("data-variant-key") || "variant";
    const opts = (root.getAttribute("data-variants") || "").split(",").map(s => s.trim()).filter(Boolean);
    const labelText = root.getAttribute("data-variant-label") || "Style";
    if (opts.length < 2) return;

    const stored = localStorage.getItem("rivigalin." + key);
    const initial = opts.includes(stored) ? stored : opts[0];
    apply(initial);

    const switcher = document.createElement("div");
    switcher.className = "variant-switcher";
    switcher.innerHTML = `
      <span class="vs-label">${labelText}</span>
      ${opts.map(o => `<button type="button" data-opt="${o}">${o}</button>`).join("")}
    `;
    document.body.appendChild(switcher);
    switcher.querySelectorAll("button").forEach(b => {
      b.addEventListener("click", () => {
        const v = b.getAttribute("data-opt");
        localStorage.setItem("rivigalin." + key, v);
        apply(v);
      });
    });

    function apply(v) {
      root.setAttribute("data-current-variant", v);
      // toggle is-active on buttons
      document.querySelectorAll(".variant-switcher button").forEach(b => {
        b.classList.toggle("is-active", b.getAttribute("data-opt") === v);
      });
    }
  }

  function init() {
    renderHeader();
    renderFooter();
    wireMobileMenu();
    wireScrollNav();
    wireLangSwitcher();
    wireVariantSwitcher();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
