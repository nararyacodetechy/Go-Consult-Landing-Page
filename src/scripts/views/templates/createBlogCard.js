const createBlogCardTemplate = (blog) => `
    <div class="card-blog">
        <img src="${blog.picture}">
        <div class="description-blog">
            <p class="date-blog">${blog.date}</p>
            <h4 class="title-blog">${blog.title}</h4>
            <p class="description">${blog.description}</p>
            <a href="">Read More</a>
        </div>
    </div>
`;

export default createBlogCardTemplate;
