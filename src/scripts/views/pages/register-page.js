const RegisterPage = {
  async render() {
    return `
        <section class="register">
            <img src="./images/registration/register.png">
            <form>
              <h3>Register</h3>
              <p>Prepare yourself for a future full of starts.<br>
              The first, complete your account</p>
              <input type="text" placeholder="Your Name">
              <input type="email" placeholder="Your Email">
              <input type="password" placeholder="Your Password">
              <button type="submit">Register</button>
              <p class="login-already">Already have an account?<a href="#/login-page">Login</a></p>
            </form>
        </section>
      `;
  },

  async afterRender() {},
};

export default RegisterPage;
