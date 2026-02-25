async function loadBlogIndex() {
  const listNode = document.getElementById("blog-list");
  if (!listNode) return;

  let posts = [];
  try {
    const response = await fetch("../assets/static/blog/posts/index.json");
    posts = await response.json();
  } catch (error) {
    posts = Array.isArray(window.__BLOG_POSTS_FALLBACK__) ? window.__BLOG_POSTS_FALLBACK__ : [];
  }

  if (!posts.length) {
    listNode.innerHTML = "<p class='error-text'>No posts available yet.</p>";
    return;
  }

  listNode.innerHTML = posts
    .map(
      (post) => `
      <article class="card">
        <p class="project-meta">${post.date} · ${post.tags.join(", ")}</p>
        <h2><a href="./post.html?slug=${encodeURIComponent(post.slug)}">${post.title}</a></h2>
        <p>${post.excerpt}</p>
      </article>
    `
    )
    .join("");
}

async function loadBlogPost() {
  const titleNode = document.getElementById("post-title");
  const metaNode = document.getElementById("post-meta");
  const contentNode = document.getElementById("post-content");
  if (!titleNode || !metaNode || !contentNode) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  if (!slug) {
    titleNode.textContent = "Post not found";
    return;
  }

  let posts = [];
  try {
    const indexResponse = await fetch("../assets/static/blog/posts/index.json");
    posts = await indexResponse.json();
  } catch (error) {
    posts = Array.isArray(window.__BLOG_POSTS_FALLBACK__) ? window.__BLOG_POSTS_FALLBACK__ : [];
  }

  const postMeta = posts.find((post) => post.slug === slug);

  if (!postMeta) {
    titleNode.textContent = "Post not found";
    return;
  }

  titleNode.textContent = postMeta.title;
  metaNode.textContent = `${postMeta.date} · ${postMeta.tags.join(", ")}`;
  try {
    const postResponse = await fetch(`../assets/static/blog/posts/${slug}.md`);
    const markdown = await postResponse.text();
    const markdownWithoutTitle = markdown.replace(/^\s*#\s+.*(?:\r?\n)+/, "");
    contentNode.innerHTML = window.marked
      ? window.marked.parse(markdownWithoutTitle)
      : markdownWithoutTitle;
  } catch (error) {
    const fallbackHtml =
      window.__BLOG_CONTENT_FALLBACK__ && window.__BLOG_CONTENT_FALLBACK__[slug]
        ? window.__BLOG_CONTENT_FALLBACK__[slug]
        : "<p>Post content is unavailable in this viewing mode.</p>";
    const fallbackWithoutTitle = fallbackHtml.replace(
      /^\s*<h[1-6][^>]*>.*?<\/h[1-6]>\s*/i,
      ""
    );
    contentNode.innerHTML = fallbackWithoutTitle;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await loadBlogIndex();
    await loadBlogPost();
  } catch (error) {
    console.error(error);
  }
});
