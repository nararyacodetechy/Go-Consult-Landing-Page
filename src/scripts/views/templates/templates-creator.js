const createBlogCardTemplate = (blog) => `
    <a href="#" class="card-blog">
        <img src="${blog.picture}">
        <p class="date-blog">${blog.date}</p>
        <h4 class="title-blog">${blog.title}</h4>
        <p class="description-blog">${blog.description}</p>
        <a href="">Read More</a>
    </a>
`;

export default createBlogCardTemplate;
