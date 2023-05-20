const SchedulePage = {
  async render() {
    return `
          <section class="schedule">
            <img src="./images/schedule.png">
            <h2 class="main-title schedule">Make Payment Immediately</h2>
            <p>please check your email If you have made a payment, <br>
            you can arrange a consultation schedule with the consultant</p>
            <a href="#/home-page" class="buttonSuccess">Schedule</a>
          </section>
        `;
  },

  async afterRender() {},
};

export default SchedulePage;
