const SuccessfullyPage = {
  async render() {
    return `
            <section class="successfully">
                <h1 class="ok">OK</h1>
                <h2 class="main-title registration">Registration Succesfully</h2>
                <p>Your application has been sent. please wait for the results<br>
                of file validation in your email. Thank You</p>
                <a href="#/home-page" class="buttonSuccess">Back To Home</a>
            </section>
          `;
  },

  async afterRender() {},
};

export default SuccessfullyPage;
