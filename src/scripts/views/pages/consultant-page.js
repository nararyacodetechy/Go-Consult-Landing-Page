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
        <h5 class="main-title consultant">Our Consultant</h5>
        <form class="d-flex search" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div id="list-consultant" class="container-consultant">
            
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
