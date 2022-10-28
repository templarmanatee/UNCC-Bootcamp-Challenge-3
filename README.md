# Password Generator
UNCC Bootcamp Challenge 3
Dylan Freeman

## Project Review 

This project was created to generate secure passwords based on user criteria.

Over the course of programming this application, I tackled issues related to handling and verifying user input, array concatenation, and selecting characters using RNG. Debugging was focused firstly on concatenating the arrays of applicable characters and secondly on validating that the user had put in a valid integer. 

## Installation

Github Pages: https://templarmanatee.github.io/UNCC-Bootcamp-Challenge-3/
Github Repository: https://github.com/templarmanatee/UNCC-Bootcamp-Challenge-3

## Usage

The user clicks the 'Generate Password' button and is presented with a series of prompts. 
These prompts ask the user how long they would like the password (as an integer) as well as which character sets they would like to use.
A password is then randomly generated and displayed dynamically to the user. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

### User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
### Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page