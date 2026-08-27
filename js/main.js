/**
 * hai.filiate — main.js
 * Scroll reveal + FAQ accordion chevron (using native <details>)
 * No dependencies. Total < 15KB.
 */

'use strict';

// ── Scroll Reveal ──────────────────────────────────────────
(function initScrollReveal() {
  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const revealEls = document.querySelectorAll('.reveal-section');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // only reveal once
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

// ── Smooth scroll for anchor links ────────────────────────
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Move focus for accessibility
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
})();

// ── CTA click tracking (if analytics active) ──────────────
(function initCTATracking() {
  document.querySelectorAll('a.btn-primary').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (typeof fbq === 'function') {
        fbq('track', 'InitiateCheckout');
      }
      if (typeof ttq !== 'undefined' && typeof ttq.track === 'function') {
        ttq.track('InitiateCheckout');
      }
    });
  });
})();


// -- Copy Prompt Button (skrip-gratis.html) ----------------
(function initCopyPrompt() {
  const btn = document.getElementById('copyPromptBtn');
  const promptEl = document.getElementById('promptText');
  if (!btn || !promptEl) return;

  btn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(promptEl.textContent);
      } else {
        const range = document.createRange();
        range.selectNodeContents(promptEl);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        const success = document.execCommand('copy');
        sel.removeAllRanges();
        if (!success) throw new Error('execCommand failed');
      }
      const original = btn.textContent;
      btn.textContent = 'Tersalin!';
      btn.classList.add('is-copied');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('is-copied');
      }, 2000);
    } catch (err) {
      btn.textContent = 'Gagal - pilih teks lalu Ctrl+C';
      setTimeout(() => { btn.textContent = 'Salin Prompt'; }, 3000);
    }
  });
})();
