import css from 'bootstrap/dist/css/bootstrap.min.css';
// import aos from 'https://unpkg.com/aos@2.3.1/dist/aos.css';

const HomePage = {
  async render() {
    return `
      <style>
        ${css}
      </style>
      <section class="hero">
        <div class="text-hero">
          <h2>Build and Realize Your Dream Career With Go Consult</h2>
          <h4>GO Consult is a digital consulting service platform, a platform that exists as a career preparation assistance solution</h4>
          <div class="connect-button">
            <a class="button" href="#/login-page">Connect to Consult</a>
            <a class="button" href="#/be-consult-page">Connect to be Consultant</a>
          </div>
        </div>
        <div class="image-hero">
          <img src="./images/hero.png">
        </div>
      </section>
      <section class="statistic" data-aos="fade-up">
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
            <b>RP. 49.000</b>
            <p>Review CV general<br>
            Live session career development<br>
            Sertifikat
            </p>
          </div>
          <div class="card-package">
            <img src="./icons/packages/package-2.png">
            <h2 class="title-packages">Gold Package</h2>
            <b>RP. 79.000</b>
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
            <b>RP. 129.000</b>
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
            <div class="title-flow d-flex align-items-center">
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
            <img src="./images/riviews/anonim.png">
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
      <section class="faq">
        <div class="main-title faq">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div class="accordion" id="faq">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Who is target mentee of go Consult?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                are Student, fresh graduated, professionals, entrepreneurs, and individuals who want to enhance their skills, knowledge, and understanding in various fields. Those seeking guidance, support, and coaching to achieve their personal and professional goals
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How packages Go consult?  
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Go Consult package offers a comprehensive and personalized approach to mentoring and coaching, like Tailored Guidance, Expert Mentors, Skill Development, and Additional Resources
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What is the Go Consult consulting concept like?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                The concept of "Go Consult" revolves around individuals who wish to develop their potential, identify suitable career paths based on their potential, and gain deeper insights into their respective professions through online consultations with experts. Users can customize the experience according to their needs, check the consultation schedule with experts, make payments, and proceed with the consultation.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Who is the partner of the Go Consult platform?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Go Consult collaborates with experts such as academics, practitioners, and professionals who are based in Indonesia. These experts possess specialized knowledge and experience in various fields. By partnering with a diverse range of experts, Go Consult aims to provide comprehensive and tailored consulting services to individuals seeking guidance and insights in their respective areas of interest.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog">
        <div class="main-title blog">
          <h3>Blogs, Articel and Event</h3>
          <a href="#/blog-page" class="see-more">
            <b>See more</b>
            <i class="fa-solid fa-arrow-right fa-beat-fade"></i>
          </a>
        </div>
        <div class="container-blog">
          <div class="card-blog">
            <img src="./images/blogs/blog-1.png">
            <div class="description-blog">
              <p class="date-blog">19 Jan 2022</p>
              <h4 class="title-blog">Easy Ways to Start Learning Programming</h4>
              <p class="description">Choose the programming language you want to learn by considering your goals and the type of project you want to work on.</p>
              <a href="" class="see-more">
                <b>Read more</b>
                <i class="fa-solid fa-arrow-right fa-beat-fade"></i>
              </a>
            </div>
          </div>
          <div class="card-blog">
            <img src="./images/blogs/blog-2.png">
            <div class="description-blog">
              <p class="date-blog">03 Jun 2022</p>
              <h4 class="title-blog">Tips for Making a Website Landing Page Business</h4>
              <p class="description">An attractive landing page can increase conversions and strengthen your product brand.</p>
              <a href="" class="see-more">
                <b>Read more</b>
                <i class="fa-solid fa-arrow-right fa-beat-fade"></i>
              </a>
            </div>
          </div>
          <div class="card-blog">
            <img src="./images/blogs/blog-3.png">
            <div class="description-blog">
              <p class="date-blog">23 Feb 2023</p>
              <h4 class="title-blog">How to be the real startup founder for millenial?</h4>
              <p class="description">Establishing a startup requires innovative solutions to help the problems faced by many people. How to think innovatively?</p>
              <a href="" class="see-more">
                <b>Read more</b>
                <i class="fa-solid fa-arrow-right fa-beat-fade"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="job-vacancy">
        <div class="big-title-vacancy">
          <h3 class="main-title job-vacancy">Job Vacancy Info</h3>
          <div class="select-view">
            <a href="#/none-page" class="see-more category-blog">
              <b>Category</b>
              <i class="fa-solid fa-caret-down fa-bounce"></i>
            </a>
            <a href="#/none-page">View More</a>
          </div>
        </div>
        <div class="container-vacancy">
          <a href="#/none-page" class="card-vacancy">
            <img src="./images/blogs/blog-1.png">
            <div class="description-vacancy">
                <h4 class="title-job">Startup Building</h4>
                <p class="description-job">responsible for managing startup operations, planning business strategy.</p>
                <div class="information-vacancy">
                    <p class="meeting">5 Meeting</p>
                    <p class="videos">20 Video</p>
                    <p class="applications">1.900 applications</p>
                </div>
            </div>
          </a>
          <a href="#/none-page" class="card-vacancy">
            <img src="./images/blogs/blog-2.png">
            <div class="description-vacancy">
                <h4 class="title-job">Startup Building</h4>
                <p class="description-job">responsible for managing startup operations, planning business strategy.</p>
                <div class="information-vacancy">
                    <p class="meeting">5 Meeting</p>
                    <p class="videos">20 Video</p>
                    <p class="applications">1.900 applications</p>
                </div>
            </div>
          </a>
          <a href="#/none-page" class="card-vacancy">
            <img src="./images/blogs/blog-3.png">
            <div class="description-vacancy">
                <h4 class="title-job">Startup Building</h4>
                <p class="description-job">responsible for managing startup operations, planning business strategy.</p>
                <div class="information-vacancy">
                    <p class="meeting">5 Meeting</p>
                    <p class="videos">20 Video</p>
                    <p class="applications">1.900 applications</p>
                </div>
            </div>
          </a>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
