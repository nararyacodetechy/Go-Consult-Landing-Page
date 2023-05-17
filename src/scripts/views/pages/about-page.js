const AboutPage = {
  async render() {
    return `
      <section class="about">
        <div class="text-about">
          <h2 class="main-title about">About Us</h2>
          <p><b>GO Consult</b> is a platform that exists as a solution to problems that are often faced by job seekers, fresh graduates, and final year students when looking for work or when facing competition in the world of work. We present various HR, especially in the field of Recruitment from well-known companies in Indonesia to become consultants for our users when they want to consult. All consultations at Go Consult are carried out online with a flexible schedule.</p>
        </div>
        <img src="./images/about.png">
      </section>
      <section class="team">
        <h2 class="main-title team">Our Team</h2>
        <div class="container-team">
          <div class="card-team">
            <img src="./images/team/abdul-salam.png">
            <h5>Abdul Salam</h5>
            <p>CEO</p>
          </div>
          <div class="card-team">
            <img src="./images/team/amel.png">
            <h5>Amel</h5>
            <p>COO</p>
          </div>
          <div class="card-team">
            <img src="./images/team/ayut.png">
            <h5>Ayut</h5>
            <p>CMO</p>
          </div>
          <div class="card-team">
            <img src="./images/team/lea.png">
            <h5>Lea</h5>
            <p>CPO</p>
          </div>
          <div class="card-team">
            <img src="./images/team/laila.png">
            <h5>Laila</h5>
            <p>CFO</p>
          </div>
          <div class="card-team">
            <img src="./images/team/dana.png">
            <h5>Dana</h5>
            <p>CTO</p>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutPage;
