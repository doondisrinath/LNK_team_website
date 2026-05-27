(() => {
  const navbar = document.querySelector(".site-navbar");

  if (navbar) {
    const navLinks = navbar.querySelector(".nav-links");

    if (navLinks && !navbar.querySelector(".nav-toggle")) {
      navbar.classList.add("has-mobile-nav");

      if (!navLinks.id) {
        navLinks.id = "primary-navigation";
      }

      const navToggle = document.createElement("button");
      navToggle.className = "nav-toggle";
      navToggle.type = "button";
      navToggle.setAttribute("aria-label", "Open navigation menu");
      navToggle.setAttribute("aria-controls", navLinks.id);
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.innerHTML = "<span></span><span></span><span></span>";

      const navBackdrop = document.createElement("button");
      navBackdrop.className = "nav-backdrop";
      navBackdrop.type = "button";
      navBackdrop.setAttribute("aria-label", "Close navigation menu");

      navbar.insertBefore(navToggle, navLinks);
      navbar.insertBefore(navBackdrop, navLinks);

      const setMenuOpen = (isOpen) => {
        navbar.classList.toggle("is-open", isOpen);
        document.body.classList.toggle("nav-open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute(
          "aria-label",
          isOpen ? "Close navigation menu" : "Open navigation menu"
        );
      };

      navToggle.addEventListener("click", () => {
        setMenuOpen(!navbar.classList.contains("is-open"));
      });

      navBackdrop.addEventListener("click", () => {
        setMenuOpen(false);
      });

      navLinks.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
          setMenuOpen(false);
        }
      });

      document.addEventListener("click", (event) => {
        if (!navbar.classList.contains("is-open") || navbar.contains(event.target)) {
          return;
        }

        setMenuOpen(false);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          setMenuOpen(false);
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 820) {
          setMenuOpen(false);
        }
      });
    }

    const updateNavbar = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
  }

  const revealSelector = [
    ".hero-content",
    ".hero-visual",
    ".section-header",
    ".about-content",
    ".about-image",
    ".about-hero-copy",
    ".about-hero-media",
    ".about-section-heading",
    ".about-image-frame",
    ".about-story-panel",
    ".about-value-card",
    ".about-lineage-images",
    ".about-family-media",
    ".about-cta-v2",
    ".kuchipudi-hero-copy",
    ".kuchipudi-hero-media",
    ".kuchipudi-section-heading",
    ".kuchipudi-focus-grid article",
    ".kuchipudi-compare-copy",
    ".kuchipudi-compare-cards article",
    ".kuchipudi-table-wrap",
    ".kuchipudi-path-grid article",
    ".kuchipudi-cta",
    ".folk-content",
    ".folk-image",
    ".content-box",
    ".difference-box",
    ".culture-box",
    ".list-box",
    ".query-box",
    ".query-intro-panel",
    ".query-info-grid div",
    ".image-card",
    ".event-card",
    ".events-section-header",
    ".events-insta-copy",
    ".events-insta-widget",
    ".event-contact-inner",
    ".gallery-card",
    ".location-card",
    ".folk-card",
    ".contact-line",
    ".academy-copy",
    ".academy-media",
    ".academy-focus-item",
    ".course-card",
    ".training-item",
    ".location-strip a",
    ".moment-card",
    ".table-container",
    ".contact-hero-copy",
    ".contact-hero-panel",
    ".contact-highlights",
    ".contact-intro",
    ".location-header"
  ].join(",");

  const items = Array.from(document.querySelectorAll(revealSelector));

  items.forEach((item, index) => {
    item.classList.add("lnk-reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12
    }
  );

  items.forEach((item) => observer.observe(item));
})();
