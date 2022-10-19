const url = "https://rainydays.shepardavenue.online/wp-json/wp/v2/posts";
const blogContainer = document.querySelector(".blogposts");

async function getBlog(url) {
  const response = await fetch(url);
  const blog = await response.json();

  blog.forEach(function(){
    blogContainer.innerHTML += `
    <div class="">
    <h2>${blog.title}</h2>
    <div>${blog.content}</div>
    </div>
    `
  })
}

getBlog(url);