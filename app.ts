#!/usr/bin/env node
import inquirer from "inquirer";

const todos: string[] = [];
let loop = true;

while (loop) {
  const anwsers: {
    TODO: string;
    addMore: boolean;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: "What do you want to do?",
    },
    {
      type: "confirm",
      name: "addMore",
      message: "Do you want to add more?",
      default: false,
    },
  ]);
  const { TODO, addMore } = anwsers;
  // console.log(anwsers);
  loop = addMore;
  if (TODO) {
    todos.push(TODO);
  } else {
    console.log("Invalid Input");
  }
}
if (todos.length > 0) {
  console.log("Your todos are: \n");
  todos.forEach((todo) => {
    console.log(todo);
  });
} else {
  console.log("No todos found");
}
