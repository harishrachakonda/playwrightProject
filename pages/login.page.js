class LoginPage {
  get userName() {
    return ("//*[@name='username']");
  }

  get password() {
    return ("//*[@name='password']")
  }

  get loginBtn() {
    return ("//*[@type='submit']")
  }
}
export default new LoginPage();