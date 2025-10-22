// Tiny interactions: thumbnail -> change center pastry image, reveal on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Thumbnail carousel interaction
  const thumbs = document.querySelectorAll('.thumb');
  const centerImg = document.querySelector('.pastry--center');

  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      const newSrc = t.getAttribute('data-img');
      // soft transition
      centerImg.style.opacity = 0;
      setTimeout(() => {
        centerImg.src = newSrc;
        centerImg.style.opacity = 1;
      }, 220);

      // visual active state
      thumbs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });

  // Reveal elements when scrolled into view
  const revealElems = document.querySelectorAll('.card, .about-image, .pastry-stage, .site-header');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElems.forEach(el => io.observe(el));

  // small parallax on mouse move for fun (hero right only)
  const stage = document.querySelector('.pastry-stage');
  if (stage) {
    stage.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = stage.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      const imgs = stage.querySelectorAll('img');
      imgs.forEach((img, i) => {
        const depth = (i + 1) * 6;
        img.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0) rotate(${(i - 2) * 3}deg)`;
      });
    });

    stage.addEventListener('mouseleave', () => {
      const imgs = stage.querySelectorAll('img');
      imgs.forEach((img, i) => {
        // restore base transforms from CSS using classes
        img.style.transform = '';
      });
    });
  }
});

