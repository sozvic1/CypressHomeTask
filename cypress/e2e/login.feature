Feature: Practice Form

Feature This Feature is required for student registration form
@smoke @sanity
Scenario: Success student registration form
Given A user opens the student registration form page
When A user fill form as Following
| username | lastName | email       | gender | mobile     | subjects | hobbies |
| Alex     | Sozontov | qqq@aaa.com | Male   | 090900222  | aaaaaaa  | Sports  |
| A        | Soz      | qqq@aaa.com | Female | 0909003333 | aaaa     | Reading |
| A        | Soz      | qqq@aaa.com | Other  | 0909003333 | aaaa     | Music   |

And A user clicks on the submit button
Then Receiving submitting form with valid data
| username | email       | gender | mobile     | subjects | hobbies |
| Alex     | qqq@aaa.com | Male   | 0987654321 | aaaaaaa  | Sports  |
| A        | qqq@aaa.com | Female | 0987654321 | aaaa     | Reading |
| A        | qqq@aaa.com | Other  | 0987654321 | aaaa     | Music |

Scenario: Validate required field student registration form
Given A user opens the student registration form page
And A user clicks on the submit button
Then Validate message appear