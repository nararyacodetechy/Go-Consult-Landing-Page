const HomePage = {
  async render() {
    return `
      <section class="hero">
        <div class="text-hero">
          <h2>Build and Realize Your Dream Career With Go Consult</h2>
          <h4>EXCUSEME is a preparation consulting service for future careers with expert consultants online</h4>
          <div class="connect-button">
            <a class="button" href="">Connect to Consult</a>
            <a class="button" href="">Connect to be Consultant</a>
          </div>
        </div>
        <div class="image-hero">
          <img src=".//images/hero.png">
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
