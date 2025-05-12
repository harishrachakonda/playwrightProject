Feature: Verify Login Logout Functionality

    Scenario: Verify successful login
        Then I should be redirected to the home page
        When I logout from the application
        Then I should be redirected to the login page