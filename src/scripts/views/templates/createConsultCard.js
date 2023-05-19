const createConsultantCardTemplate = (consultant) => `
    <a href="#" class="card-consultant">
        <img src="${consultant.picture}">
        <div class="description-consultant">
            <h4 class="name-consultant">${consultant.name}</h4>
            <p class="job-consultant">${consultant.job}</p>
            <div class="information">
                <p class="available"><span></span> ${consultant.available}</p>
                <p class="riview">${consultant.riview} Riview</p>
                <p class="guidance">${consultant.guidance} Bimbingan</p>
            </div>
        </div>
    </a>
`;

export default createConsultantCardTemplate;
