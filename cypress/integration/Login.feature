Feature: Login in lsf admin portal

    @focus
    Scenario: User enter email and password
        Given User visit login page
        When User enter email "brkjohn.3@gmail.com" in email field
        And User enter password "brkjohn.123" in password field 
        Then Check email address is present in email field
        And Check password is present in password field

    @focus
    Scenario Outline: User check validation email and password
        Given User visit login page
        When User validation input from users
        Then Check validity email as '<email>' and password as '<password>'
        Then Check errors occurance if email is not valid  
        Examples: 
            | email | password |
            | ambokilekifukwe@ | 1234 |
            | elibarikijohn10@ | 678 |
            | elibarikijohn10@gmail.com | 6781232323 |

