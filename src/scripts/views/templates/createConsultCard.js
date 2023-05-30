const createConsultantCardTemplate = (consultant) => `
    <a href="#/detail-consultant-page/${consultant.id}" id="card-consultant" class="card-consultant">
        <img src="${consultant.picture}">
        <div class="description-consultants">
            <h4 id="name-consultant" class="name-consultant">${consultant.name}</h4>
            <p class="job-consultant">${consultant.job}</p>
            <div class="d-flex justify-content-between">
                <p class="country">${consultant.country}</p>
                <i class="fa-regular fa-heart favorite"></i>
            </div>
            <div class="rating d-flex">
                <p>5.0</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
    </a>
`;

const createDetailConsultantTemplate = (consultant) => `
    <div class="detail-content">
        <div class="banner-container">
            <img src="${consultant.backdrop}" class="image-banner" alt="Image Banner">
            <div class="banner-content">
                <img src="${consultant.picture}" class="image-profile" alt="Image Profile">
            </div>
        </div>
        <table class="identy">
            <tr>
                <th>Consultant Name</th>
                <td><p>: ${consultant.name}</p></td>
            </tr>
            <tr>
                <th>Email</th>
                <td><p>: ${consultant.email}</p></td>
            </tr>
            <tr>
                <th>LinkedIn</th>
                <td><p>: <a href="${consultant.linkedin}">${consultant.usernameLinkedin}</p></td>
            </tr>
            <tr>
                <th>Expertise</th>
                <td><p>: ${consultant.job}</p></td>
            </tr>
        </table>                                                              
        <div class="description">
            <h3>Description</h3>
            <div class="ket">
                <p>${consultant.description}</p>
            </div>
        </div>
        <div class="rating">
            <h3>Rating</h3>
            <div class="ket">
                <p>5.0</p>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="riview">
            <h3>Riviews</h3>
            <div class="ket">
                <p>${consultant.riviews}</p>
            </div>
        </div>
        <div class="booking-class">
            <a href="#/schedule-page" >Booking Schedule</a>
        </div>
    </div>
`;

export default createConsultantCardTemplate;

export { createConsultantCardTemplate, createDetailConsultantTemplate };
