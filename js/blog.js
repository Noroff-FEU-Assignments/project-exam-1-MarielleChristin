const url = "https://rainydays.shepardavenue.online/wp-json/wp/v2/posts?_embed";
const blogContainer = document.querySelector(".blogposts");

async function getBlog(url) {
  const response = await fetch(url);
  const posts = await response.json();

  posts.forEach(function(post){
    blogContainer.innerHTML += `
    <div class="post">
    <div class="featured"><img src="${post._embedded['wp:featuredmedia'][0].media_details.sizes["woocommerce_gallery_thumbnail"].source_url}"></div>
    <h2>${post.title.rendered}</h2>
    <div>${post.date}</div>
    <div>${post.excerpt.rendered}</div>
    <div class="post-tags">${post.categories}</div>
    </div>
    `
  })

}

getBlog(url);