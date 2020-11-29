var readlineSync = require('readline-sync')
var chalk= require('chalk')
var score=0
var name=readlineSync.question(chalk.greenBright("Enter your name "))
console.log()
console.log(chalk.blue("Hello "+name.toUpperCase()+"\n"))
console.log(chalk.red("Let's play a quiz!!!\n"))
function Play(question,answer){
    var input=readlineSync.question(chalk.red(question))
    if(input.toLowerCase()===answer){
        console.log(chalk.bold.green("You are right!!"))
        score++
    }
    else{
        console.log(chalk.bold.red("You were wrong"))
        score--
    }
    

}
var questions =[{question:"What is my age: ",answer:"21" },{question:"What is the name of my fav game: ",answer:"csgo"},
{question:"My frist pet name: ",answer:"rommy"},{question:"Where do I live: ",answer:"Bangalore"},{question:"Favourite colour: ",answer:"Blue"},
{question:"What's my nick name: ",answer:"micku"}]
for(var i=0;i<questions.length;i++){
    var current=questions[i]
    Play(current.question,current.answer);
}
console.log(chalk.magenta("Final Score is: "+score))
