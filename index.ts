#!/usr/bin/env node  
import inquirer from "inquirer";

let todo = [];

let condition = true;

while(condition){
    let questionsAns = await inquirer.prompt([
        {message : "Would you like to you add in your tados" , type : "input",
         name : "firstQuestion"},
        {message : "Would you like to more add in your tados" , type : "confirm" ,
         default : "true" , name : "secondQuestion" }
    
    ])
        todo.push(questionsAns.firstQuestion);
        for(let names of todo){
            console.log(names);
            
        }
        condition = questionsAns.secondQuestion;
}

