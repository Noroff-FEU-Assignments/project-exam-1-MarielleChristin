const detailContainer = document.querySelector(".detail")

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const title = params.get("postTitle");

console.log(title);

const url ="https://rainydays.shepardavenue.online/wp-json/wp/v2/posts?_embed" + title;

document.title = title;

async function getDetails(url) {
  const response = await fetch(url);
  const posts = await response.json();

  posts.forEach(function(post) {
  detailContainer.innerHTML = `
  <div>
  <h1 class="centered">${post.title.rendered}</h1>
  <div class="content">${post.content.rendered}</div>
  </div>
  `
  })
}

getDetails(url);