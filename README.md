# password
password generator

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

For this assignment I created a password generator that follows five criteria that includes the following: character length, lowercase, uppercase, numbers, and symbols.

Using JavaScript, I was able to set values to the inputs from the user through HTML and set a variable charSet as an empty string to receive aforementioned criteria. Using a loop, I was able to get a randomized character combination from the charSet, thus allowing as to generate a randomly generated password. The document command allows us to render the randomly generated password.