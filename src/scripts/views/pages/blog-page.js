import GetData from '../../../data/get-data';
import createBlogCardTemplate from '../templates/createBlogCard';

const BlogPage = {
  async render() {
    return `
        <section class="blog">
            <div class="main-title blogs">
                <h5>Blogs, Articel and Event</h5>
            </div>
            <div id="list-blog" class="container-blog">
                
            </div>
        </section>
      `;
  },

  async afterRender() {
    const blogs = await GetData.getListBlog();

    const blogContainer = document.querySelector('#list-blog');
    blogs.forEach((blog) => {
      blogContainer.innerHTML += createBlogCardTemplate(blog);
    });
  },
};

export default BlogPage;
