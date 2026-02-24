async function loadProjects() {
  const repoContainer = document.getElementById("repo-card");
  if (!repoContainer) return;

  const renderProjects = (repos) => {
    repoContainer.innerHTML = repos
      .map(
        (repo) => `
        <article class="card project-card">
          <p class="project-meta">${repo.category} · ${repo.date}</p>
          <h3><a href="${repo.url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
          <p>${repo.description}</p>
          <p class="project-tech">${repo.tech}</p>
        </article>
      `
      )
      .join("");
  };

  try {
    const response = await fetch("assets/static/json/repos.json");
    const repos = await response.json();
    renderProjects(repos);
  } catch (error) {
    if (Array.isArray(window.__PROJECTS_FALLBACK__) && window.__PROJECTS_FALLBACK__.length > 0) {
      renderProjects(window.__PROJECTS_FALLBACK__);
      return;
    }
    repoContainer.innerHTML = '<p class="error-text">Unable to load projects right now.</p>';
    console.error(error);
  }
}

document.addEventListener("partials:loaded", loadProjects);
document.addEventListener("DOMContentLoaded", loadProjects);
