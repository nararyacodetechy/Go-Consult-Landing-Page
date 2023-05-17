const HomePage = {
  async render() {
    return `
      <section class="hero">
        <div class="text-hero">
          <h2>Build and Realize Your Dream Career With Go Consult</h2>
          <h4>GO Consult is a digital consulting service platform, a platform that exists as a career preparation assistance solution</h4>
          <div class="connect-button">
            <a class="button" href="">Connect to Consult</a>
            <a class="button" href="#/be-consult-page">Connect to be Consultant</a>
          </div>
        </div>
        <div class="image-hero">
          <img src="./images/hero.png">
        </div>
      </section>
      <section class="statistic">
        <div class="category-statistic">
          <h2>21.000 +</h2>
          <p>Alumni</p>
        </div>
        <div class="category-statistic">
          <h2>100 +</h2>
          <p>Consultans</p>
        </div>
        <div class="category-statistic">
          <h2>150 +</h2>
          <p>Class</p>
        </div>
        <div class="category-statistic">
          <h2>150 +</h2>
          <p>Partners</p>
        </div>
      </section>
      <section class="benefits">
        <h2 class="main-title">Benefits of Joining Go Consult <p>Career Consulting Center</p></h2>
        <div class="container-benefits">
          <div class="card-benefits">
            <img src="./icons/benefits/benefit-1.png" class="number"></img>
            <h2 class="title-benefits">Professional Consultant</h2>
            <p>Providing skilled and experienced professional consultants in various fields such as technology, business, health, and many more.</p>
          </div>
          <div class="card-benefits">
            <img src="./icons/benefits/benefit-2.png" class="number"></img>
            <h2 class="title-benefits">Flexible Consulting</h2>
            <p>Offers flexible consultations that can be tailored to user needs. In addition, flexible consulting can also allow users to choose a consultant according to their needs.</p>
          </div>
          <div class="card-benefits">
            <img src="./icons/benefits/benefit-3.png" class="number"></img>
            <h2 class="title-benefits">Various Skills</h2>
            <p>Consultants will receive employee training such as work ethics, professional behavior in accordance with company policies.</p>
          </div>
          <div class="card-benefits">
            <img src="./icons/benefits/benefit-4.png" class="number"></img>
            <h2 class="title-benefits">Trusted</h2>
            <p>A trusted platform that provides security, openness and transparency in conducting online activities or transactions.</p>
          </div>
          <div class="card-benefits">
            <img src="./icons/benefits/benefit-5.png" class="number"></img>
            <h2 class="title-benefits">More Focused Learning</h2>
            <p>Consultations that run systematically and organized with the aim of assisting users in solving problems in various fields.</p>
          </div>
          <div class="card-benefits">
            <img src="./icons/benefits/benefit-6.png" class="number"></img>
            <h2 class="title-benefits">Complete Content Access</h2>
            <p>Offers a wide range of options and choices to meet different user needs and preferences.</p>
          </div>
        </div>
      </section>
      <section class="service-packages">
        <h2 class="main-title service-pakages">Go Consult Service Packages</h2>
        <div class="container-packages">
          <div class="card-package">
            <img src="./icons/packages/package-1.png">
            <h2 class="title-packages">Basic Package</h2>
            <p>Review CV general<br>
            Live session career development<br>
            Sertifikat
            </p>
          </div>
          <div class="card-package">
            <img src="./icons/packages/package-2.png">
            <h2 class="title-packages">Gold Package</h2>
            <p>Semua yang ada di paket basic<br>
            Review CV<br>
            Sesi 1 : Workshop personal branding<br>
            Sesi 2 : Mendapat kelas jobseeker<br>
            Sesi 3 : Try out/ simulasi interview<br>
            Sertifikat<br>
            Modul</p>
          </div>
          <div class="card-package">
            <img src="./icons/packages/package-3.png">
            <h2 class="title-packages">Exclusive Package</h2>
            <p>Semua yang ada di paket gold<br>
            Template CV recommended<br>
            Sesi 4 : Simulasi interview dari expert <br>
            Sesi 5 : Job matching (klob.id)<br>
            Sesi 6 : Kesempatan pendampingan perampungan berkas<br>
            Sertifikat<br>
            Recording class dan video inspirasi
            </p>
          </div>
        </div>
      </section>
      <section class="flow-cosultation">
        <h2 class="main-title flow">Consultation Flow</h2>
        <div class="container-flow">
          <div class="card-flow">
            <img src="./images/consultant-flow/amico-1.png">
            <div class="title-flow">
              <img src="./icons/consultant-flow/flow-1.png">
              <h3>Choose the Consultant</h3>
            </div>
            <p>Choose a consultation package with the most convenient method for you</p>
          </div>
          <div class="card-flow">
            <img src="./images/consultant-flow/amico-2.png">
            <div class="title-flow">
              <img src="./icons/consultant-flow/flow-2.png">
              <h3>Choose the Consultant</h3>
            </div>
            <p>Choose your own consultant and schedule through the dashboard</p>
          </div>
          <div class="card-flow">
            <img src="./images/consultant-flow/amico-3.png">
            <div class="title-flow">
              <img src="./icons/consultant-flow/flow-3.png">
              <h3>Choose the Consultant</h3>
            </div>
            <p>Start your session in the Consultation Room (Using Conference video app)</p>
          </div>
        </div>
      </section>
      <section class="riviews">
        <div class="main-title riviews">
          <h2>What They Say about <br> Go Consult</h2>
          <p>Go Consult has been trusted by more than 10,000 students</p>
        </div>
        <div class="riview">
          <div class="riview-acording">
            <p>"The material presented is easy to understand, the quality of the instructors is very good and the response is fast. So, I highly recommend this course !!"</p>
          </div>
          <div class="riviewer">
            <img src="">
            <div class="profile">
              <p class="name">Jenny Wilson</p>
              <p class="jobs">Freshgraduate in Engineering field</p>
            </div>
            <div class="circle-pagination">
              <span></span>
              <span class="active"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>  
        </div>
      </section>
      <section class="blog">
        <div class="main-title blog">
          <h5>Blogs, Articel and Event</h5>
          <a href="#/blog-page">See more</a>
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
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
