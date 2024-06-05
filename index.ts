#!/usr/bin/env node
import inquirer from 'inquirer';  // Importing the inquirer module


    let user_ans = await inquirer.prompt([
        {
            name: 'word',  // Name of the prompt
            type: 'input',  // Type of the prompt
            message: 'Please enter your Sentence ... '  // Message to display to the user
        }
    ]);

    // Trim the input to remove any leading or trailing spaces
    // Split the input string by whitespace to get an array of words
    // Count the number of words in the array
    let wordCount = user_ans.word.trim().split(/\s+/).length;

    // Log the number of words to the console
    console.log(`Your Sentence has ${wordCount} words`);
