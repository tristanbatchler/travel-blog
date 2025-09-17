class Scroller {
  static init() {
    const toc = document.querySelector('#TableOfContents');
    if (!toc) return;

    this.tocLinks = toc.querySelectorAll('a');
    this.headers = Array.from(this.tocLinks).map(link => {
      let id = decodeURIComponent(link.hash.substring(1));
      return document.getElementById(id);
    }).filter(Boolean);

    // add smooth class transitions
    this.tocLinks.forEach(link =>
      link.classList.add('transition', 'duration-200')
    );

    this.visibleHeaders = new Set();
    this.height = document.body.clientHeight;
    this.observer = this.beginObservation(this.height);

    // highlight the first item initially
    this.markActive(this.tocLinks[0]);

    // update observer on resize
    let resizeDebounce;
    window.addEventListener('resize', () => {
      clearTimeout(resizeDebounce);
      resizeDebounce = setTimeout(() => {
        const newHeight = document.body.clientHeight;
        if (newHeight !== this.height) {
          this.height = newHeight;
          this.observer.disconnect();
          this.observer = this.beginObservation(newHeight);
        }
      }, 200);
    });

    console.log('Scroller initialized');
  }

  static beginObservation(docHeight) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visibleHeaders.add(entry.target);
          } else {
            this.visibleHeaders.delete(entry.target);
          }
        });

        // pick the "last visible" header
        const lastVisible = Array.from(this.visibleHeaders.values())
          .sort((a, b) => this.headers.indexOf(b) - this.headers.indexOf(a))[0];

        if (!lastVisible) return;

        const activeLink = document.querySelector(
          `#TableOfContents a[href="#${lastVisible.id}"]`
        );
        if (activeLink) this.markActive(activeLink);
      },
      {
        rootMargin: `${docHeight}px 0px -33% 0px`,
        threshold: 1,
      }
    );

    this.headers.forEach(h => observer.observe(h));
    return observer;
  }

  static markActive(link) {
    this.tocLinks.forEach(l => l.classList.remove('text-active'));
    link.classList.add('text-active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Scroller.init();
});
