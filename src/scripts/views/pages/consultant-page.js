import GetData from '../../../data/get-data';
import createConsultantCardTemplate from '../templates/createConsultCard';

const ConsultantPage = {
  async render() {
    return `
      <section class="consultants">
        <h5 class="main-title consultant">Our Consultant</h5>
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
