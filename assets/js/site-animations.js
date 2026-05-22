(() => {
  const navbar = document.querySelector(".site-navbar");

  if (navbar) {
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
