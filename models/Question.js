export class Question{
    
    /**
     * 
     * @param {string} text texto de la pregunta
     * @param {string[]} choices opciones de la pregunta
     * @param {*} answer respuesta correcta
     */
    constructor(text, choices, answer){ 
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice algun texto para adivinar
     * @returns {boolean} true si la respuesta es correcta
     */
    correctAnswer(choice){
        return choice === this.answer;
    }

}
