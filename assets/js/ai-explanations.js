export function initAIExplanations() {
  // Placeholder: integrate with a backend or client-side LLM
  const projectCards = document.querySelectorAll('[data-project-id]');
  projectCards.forEach(card => {
    card.addEventListener('click', async () => {
      const id = card.dataset.projectId;
      // Simulate AI explanation fetch
      const summary = await fetchAIExplanation(id);
      showExplanationModal(summary);
    });
  });
}

async function fetchAIExplanation(projectId) {
  // Replace with real API call
  return `AI-generated summary for project ${projectId}: architecture, key decisions, performance wins.`;
}

function showExplanationModal(text) {
  const modal = document.createElement('div');
  modal.className = 'glass-panel';
  modal.style.cssText = 'position:fixed;inset:0;margin:auto;width:min(600px,92vw);padding:32px;z-index:200;';
  modal.innerHTML = `<p style="line-height:1.6;">${text}</p>`;
  modal.addEventListener('click', () => modal.remove());
  document.body.appendChild(modal);
}
