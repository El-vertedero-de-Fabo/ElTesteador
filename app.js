import { questions } from "./data/questions.js"; //Falta este xd
import {Quiz} from './models/Quiz.js'

function main(){
    const quiz = new Quiz(questions)
    console.log(quiz)
}

main()