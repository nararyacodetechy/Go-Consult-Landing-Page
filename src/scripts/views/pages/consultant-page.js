import GetData from '../../../data/get-data';
import createConsultantCardTemplate from '../templates/createConsultCard';
import css from 'bootstrap/dist/css/bootstrap.min.css';

const ConsultantPage = {
  async render() {
    return `
      <style>
        ${css}
      </style>
      <section class="consultants">
        <div class="list-consultant">
          <h5 class="main-title consultant">Our Consultant</h5>
          <form class="d-flex search" role="search">
            <input id="search-consultant" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit" >Search</button>
          </form>
          <div id="list-consultant" class="container-consultant">
              
          </div>
        </div>
        <div class="list-class">
          <div class="category">
            <div class="title-category">
              <i class="fa-regular fa-bookmark fa-shake"></i>
              <h3>Upcoming Class</h3>
            </div>
            <div class="class">
              <img src="./images/list-class/mastering-front-end.png">
              <div class="description">
                <h4>Mastering Frontend HTML/CSS/JS</h4>
                <p>2h 15m</p>
              </div>
            </div>
            <div class="class">
              <img src="./images/list-class/project-developing.png">
              <div class="description">
                <h4>Project Developing</h4>
                <p>2h 15m</p>
              </div>
            </div>
            <div class="class">
              <img src="./images/list-class/devops.png">
              <div class="description">
                <h4>DevOps</h4>
                <p>2h 15m</p>
              </div>
            </div>
          </div>
          <div class="category">
            <div class="title-category">
              <i class="fa-regular fa-bookmark fa-shake"></i>
              <h3>Upcoming Class</h3>
            </div>
            <div class="class">
              <img src="./images/list-class/prototype-designing.png">
              <div class="description">
                <h4>Prototype Designing</h4>
                <p>2h 15m</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const consultants = await GetData.getListConsultant();

    const consultantContainer = document.querySelector('#list-consultant');
    consultants.forEach((consultant) => {
      consultantContainer.innerHTML += createConsultantCardTemplate(consultant);
    });
  },
};

export default ConsultantPage;
