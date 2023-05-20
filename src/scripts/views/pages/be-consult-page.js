const BeConsultPage = {
  async render() {
    return `
          <h5 class="title-page">Connect to be Consultan</h5>
          <section class="be-consultant">
            <h2 class="main-title">Consultant Registration Form</h2>
            <form>
              <div class="registration-consultant">
                <div class="required-input">
                  <input type="text" placeholder="Full Name" required>
                  <input type="email" placeholder="Email" required>
                  <input type="tel" placeholder="Telephone" required>
                  <input type="text" placeholder="Address" required>
                  <input type="text" placeholder="Education" required>
                  <input type="text" placeholder="Expertise" required>
                </div>
                <input class="upload-foto" type="image" src="./images/upload-foto.png">
              </div>
              <div class="description-be-consultant">
                <textarea placeholder="Describe Yourself"></textarea>
                <textarea placeholder="Your reason why you want to be consultant"></textarea>
              </div>
              <div class="save-login">
                  <input type="checkbox" id="save">
                  <label for="save">By signing this, it means you have followed the terms and conditions as a consultant</label>
              </div>
              <button type="submit"><a href="#/successfully-page">Submit Aplications</a></button>
            </form>
          </section>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default BeConsultPage;
