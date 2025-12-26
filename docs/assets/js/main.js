/**
 * Student Perks - Site Functionality
 * This script handles dynamic enhancements for the Jekyll-built site.
 * Note: Jekyll/Kramdown generates raw HTML tables from Markdown.
 */

(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────────────────────
  // Mobile Menu Toggle
  // ─────────────────────────────────────────────────────────────────────────────
  function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-links');

    if (!toggle || !nav) return;

    // Toggle menu on button click
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('active');
      toggle.setAttribute('aria-expanded', nav.classList.contains('active'));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Table Wrapper for Mobile Scroll
  // Jekyll generates bare <table> elements from Markdown, so we wrap them
  // dynamically for horizontal scrolling on mobile devices.
  // ─────────────────────────────────────────────────────────────────────────────
  function wrapTables() {
    const tables = document.querySelectorAll('main table');

    tables.forEach((table) => {
      // Skip if already wrapped
      if (table.parentElement.classList.contains('table-scroll')) return;

      // Create wrapper structure
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper';

      const scroll = document.createElement('div');
      scroll.className = 'table-scroll';

      // Insert wrapper before table, then move table inside
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(scroll);
      scroll.appendChild(table);
    });
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Smooth Scroll for Anchor Links
  // Offset for sticky navbar
  // ─────────────────────────────────────────────────────────────────────────────
  function initSmoothScroll() {
    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '64'
    );

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Update URL without triggering scroll
        history.pushState(null, '', targetId);
      });
    });
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Handle Details/Summary Open State
  // Persist open/closed state in session storage
  // ─────────────────────────────────────────────────────────────────────────────
  function initDetailsState() {
    const details = document.querySelectorAll('details');

    details.forEach((detail, index) => {
      const key = `details-${index}`;
      const stored = sessionStorage.getItem(key);

      // Restore state if previously set
      if (stored === 'closed') {
        detail.removeAttribute('open');
      } else if (stored === 'open') {
        detail.setAttribute('open', '');
      }

      // Save state on toggle
      detail.addEventListener('toggle', () => {
        sessionStorage.setItem(key, detail.open ? 'open' : 'closed');
      });
    });
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Initialize on DOM Ready
  // ─────────────────────────────────────────────────────────────────────────────
  function init() {
    initMobileMenu();
    wrapTables();
    initSmoothScroll();
    initDetailsState();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
