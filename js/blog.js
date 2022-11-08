const url = "https://rainydays.shepardavenue.online/wp-json/wp/v2/posts?_embed";
const blogContainer = document.querySelector(".blogposts");
const viewMore = document.querySelector(".viewmore button");

async function getBlog(url) {
  const response = await fetch(url);
  const posts = await response.json();

  posts.forEach(function(post){
    blogContainer.innerHTML += `
    <div class="post">
    <a href="blogpage.html?postTitle=${post.title.rendered}">
    <div class="featured"><img src="${post._embedded['wp:featuredmedia'][0].media_details.sizes.woocommerce_gallery_thumbnail.source_url}"></div>
    <div class="excerpt">
    <h2>${post.title.rendered}</h2>
    <div>${post.excerpt.rendered}</div>
    </div>
    </a>
    </div>
    `
  })

}

getBlog(url);

viewMore.onclick = function() {
  const newUrl = url + "?per_page=20";
  blogContainer.innerHTML = "";
  getBlog(newUrl);
} 