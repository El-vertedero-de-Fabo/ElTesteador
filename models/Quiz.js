// @ts-check
import {Question} from './Question.js'

export class Quiz{

    questionIndex = 0;
    score = 0;


    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions = questions;
    }

    /**
     * 
     * @returns {Question} Pregunta encontrada
     */
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }

    isEnded(){ //Solo comparo la longitud del array con la pregunta actual
        return this.questions.length === this.questionIndex
    }

    /**
     * 
     * @param {string} answer texto 
     */
    guess(answer){
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }

        this.questionIndex++
    }
}
