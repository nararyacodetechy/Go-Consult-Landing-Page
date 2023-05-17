const getListBlog = async () => {
  const { default: responseJson } = await import('./../../data/blogs.json', {
    assert: { type: 'json' },
  });
  //   const blogJson = JSON.stringify(responseJson.blogs);
  renderAllListBlogs(responseJson.blogs);
  //   console.log(responseJson.blogs);
};

const renderAllListBlogs = (listblog) => {
  const listBlogElement = document.querySelector('#list-blog');

  listBlogElement.innerHTML = '';

  listblog.forEach((blog) => {
    listBlogElement.innerHTML += `
        <style>

        </style>
        <a href="#" class="card-blog">
            <img src="${blog.picture}">
            <p class="date-blog">${blog.date}</p>
            <h4 class="title-blog">${blog.title}</h4>
            <p class="description-blog">${blog.description}</p>
            <a href="">Read More</a>
        </a>
    `;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  getListBlog();
});
