import fs from 'fs';
import inquirer from 'inquirer';







const questions = [

    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: ["Square", "Circle", "Triangle"],
    },
    {
        type: "input",
        name: "Shape Color",
        message: "What color would you like your shape to be?"
    },
    {
        type: "input",
        name: "text",
        message: "Type (3) characters for logo name"
    },
    {
        type: "input",
        name: "text color",
        message: "What color would you like your text to be?"
    },
]; 
