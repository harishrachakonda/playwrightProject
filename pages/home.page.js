class HomePage{
    get logoutDropdown() {
        return ("//*[contains(@class,'userdropdown-icon')]")
      }

    get logoutBtn() {
        return ("//*[@role='menuitem' and text()='Logout']")
    }
}
export default new HomePage();