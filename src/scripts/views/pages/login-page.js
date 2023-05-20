const LoginPage = {
  async render() {
    return `
        <section class="autentication">
            <img src="./images/registration/register.png">
            <form>
                <h3>Login</h3>
                <p>Prepare yourself for a future full of stars.<br>
                Fill the login form the first</p>
                <input type="email" placeholder="Your Email" required>
                <input type="password" placeholder="Your Password" required>
                <div class="save-login">
                    <input type="checkbox" id="save">
                    <label for="save">Save Login</label>
                </div>
                <button type="submit"><a href="#/consultant-page">Sign In</a></button>
                <p class="login-already">don't have an account yet ?<a href="#/register-page">Register</a></p>
            </form>
        </section>
        `;
  },

  async afterRender() {},
};

export default LoginPage;
