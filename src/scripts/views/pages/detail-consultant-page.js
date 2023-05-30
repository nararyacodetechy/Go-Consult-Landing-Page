import GetData from '../../../data/get-data';
import UrlParser from '../../routes/url-parser';
import { createDetailConsultantTemplate } from '../templates/createConsultCard';

const DetailConsultantPage = {
  async render() {
    return `
        <section class="consultants">
            <div class="detail-consultant">
                <div id="detail-consultant" class="container-consultant">
                    
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const idDetail = await GetData.getDetailConsultant(url.id);
      const detailContainer = document.querySelector('#detail-consultant');

      detailContainer.innerHTML = createDetailConsultantTemplate(idDetail);
    } catch (error) {
      console.error(error.message);
    }
  },
};

export default DetailConsultantPage;
