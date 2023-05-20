const createConsultantCardTemplate = (consultant) => `
    <div class="card-consultant">
        <img src="${consultant.picture}">
        <div class="description-consultants">
            <h4 class="name-consultant">${consultant.name}</h4>
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
    </div>
`;

export default createConsultantCardTemplate;
