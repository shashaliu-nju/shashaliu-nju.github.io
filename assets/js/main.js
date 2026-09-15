// Highlight the nav link of the section currently in view
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const sections = [];
  links.forEach(function (link) {
    const id = link.getAttribute('href');
    if (id && id.startsWith('#')) {
      const section = document.querySelector(id);
      if (section) sections.push({ link: link, section: section });
    }
  });

  function update() {
    const scrollPos = window.scrollY + 90;
    let current = sections[0];
    sections.forEach(function (entry) {
      if (entry.section.offsetTop <= scrollPos) current = entry;
    });
    links.forEach(function (link) { link.classList.remove('active'); });
    if (current && window.scrollY > 100) current.link.classList.add('active');
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
