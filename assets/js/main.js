import { initParticles } from './particles.js';
import { initSkillGraphs } from './skill-graphs.js';
import { initAIExplanations } from './ai-explanations.js';
import { t, setLanguage, getLanguage } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initSkillGraphs();
  initAIExplanations();

  // Language toggle
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = getLanguage() === 'en' ? '🇲🇲 MM' : '🇬🇧 EN';
    langBtn.addEventListener('click', () => {
      const next = getLanguage() === 'en' ? 'mm' : 'en';
      setLanguage(next);
      langBtn.textContent = next === 'en' ? '🇲🇲 MM' : '🇬🇧 EN';
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = t(key);
      });
    });
  }

  // Cinematic scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.cinematic-fade').forEach(el => observer.observe(el));
});
