const NonePage = {
  async render() {
    return `
            <section class="schedule">
              <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000">
              <h2 class="main-title schedule">Page Not Found</h2>
              <p>Sorry, this page is not yet available</p>
              <a href="#/home-page" class="buttonSuccess">Back to Home</a>
            </section>
          `;
  },

  async afterRender() {},
};

export default NonePage;
