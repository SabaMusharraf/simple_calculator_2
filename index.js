import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "firstNumber" },
    {
        message: "Select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Add(+)", "Subtract(-)", "Multiply(*)", "Divide(/)"],
    },
    { message: "Enter your Second Number", type: "number", name: "secondNumber" },
]);
console.log(answer);
if (answer.operator === "Add(+)") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtract(-)") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiply(*)") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Divide(/)") {
    console.log(answer.firstNumber / answer.secondNumber);
}
