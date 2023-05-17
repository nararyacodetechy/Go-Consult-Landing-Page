const FaqPage = {
  async render() {
    return `
        <section class="blog">
            <div class="main-title blog">
                <h5>Blogs, Articel and Event</h5>
                <a href="">See more</a>
            </div>
            <div class="container-blog">
                <div class="card-blog">
                    <img src="./images/blogs/blog-1.png">
                    <p class="date-blog">19 Jan 2022</p>
                    <h4 class="title-blog">Easy Ways to Start Learning Programming</h4>
                    <p class="description-blog">Choose the programming language you want to learn by considering your goals and the type of project you want to work on.</p>
                    <a href="">Read More</a>
                </div>
                <div class="card-blog">
                    <img src="./images/blogs/blog-2.png">
                    <p class="date-blog">03 Jun 2022</p>
                    <h4 class="title-blog">Tips for Making a Website Landing Page Business</h4>
                    <p class="description-blog">An attractive landing page can increase conversions and strengthen your product brand.</p>
                    <a href="">Read More</a>
                </div>
                <div class="card-blog">
                    <img src="./images/blogs/blog-3.png">
                    <p class="date-blog">23 Feb 2023</p>
                    <h4 class="title-blog">How to be the real startup founder for millenial?</h4>
                    <p class="description-blog">Establishing a startup requires innovative solutions to help the problems faced by many people. How to think innovatively?</p>
                    <a class="read-more" href="">Read More</a>
                </div>
                <div class="card-blog">
                    <img src="./images/blogs/blog-1.png">
                    <p class="date-blog">19 Jan 2022</p>
                    <h4 class="title-blog">Easy Ways to Start Learning Programming</h4>
                    <p class="description-blog">Choose the programming language you want to learn by considering your goals and the type of project you want to work on.</p>
                    <a href="">Read More</a>
                </div>
                <div class="card-blog">
                    <img src="./images/blogs/blog-2.png">
                    <p class="date-blog">03 Jun 2022</p>
                    <h4 class="title-blog">Tips for Making a Website Landing Page Business</h4>
                    <p class="description-blog">An attractive landing page can increase conversions and strengthen your product brand.</p>
                    <a href="">Read More</a>
                </div>
                <div class="card-blog">
                    <img src="./images/blogs/blog-3.png">
                    <p class="date-blog">23 Feb 2023</p>
                    <h4 class="title-blog">How to be the real startup founder for millenial?</h4>
                    <p class="description-blog">Establishing a startup requires innovative solutions to help the problems faced by many people. How to think innovatively?</p>
                    <a class="read-more" href="">Read More</a>
                </div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default FaqPage;
