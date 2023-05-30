const RegisterPage = {
  async render() {
    return `
        <section class="autentication">
            <img src="./images/registration/register.png">
            <form >
              <h3>Register</h3>
              <p>Prepare yourself for a future full of starts.<br>
              The first, complete your account</p>
              <input type="text" placeholder="Your Name" required>
              <input type="email" placeholder="youremail@example.com" required>
              <input type="password" placeholder="Your Password" required>
              <button type="submit"><a href="#/login-page">Register</a></button>
              <p class="login-already">Already have an account?<a href="#/login-page">Login</a></p>
            </form>
        </section>
      `;
  },

  async afterRender() {},
};

export default RegisterPage;
