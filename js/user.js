class User1{
    constructor(){
        this.question = null
        this.answer = null
    }
    updateQuestion(){
        var questionIndex = 'Questions/Question' + quesCount
        database.ref(questionIndex).set({
            Q : this.question,
            A : this.answer
        })
    }
    getCount(){
        database.ref("questionCount").on("value",() => {
            quesCount = data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            questionCount : count
        })
    }
    removeQuestions(){
        var questionRef = database.ref('Questions')
        questionRef.remove()
    }
    static getQuestionInfo(){
        var questionInfoRef = database.ref('Questions')
        questionInfoRef.on("value", (data) => {
            allQuestions = data.val()
        })
    }
}