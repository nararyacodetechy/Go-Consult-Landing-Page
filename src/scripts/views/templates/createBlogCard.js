const createBlogCardTemplate = (blog) => `
    <div class="card-blog">
        <img src="${blog.picture}">
        <div class="description-blog">
            <p class="date-blog">${blog.date}</p>
            <h4 class="title-blog"><a href="#/none-page">${blog.title}</a></h4>
            <p class="description">${blog.description}</p>
            <a href="" class="see-more">
            <b>Read more</b>
            <i class="fa-solid fa-arrow-left fa-beat-fade"></i>
            </a>
        </div>
    </div>
`;

export default createBlogCardTemplate;
