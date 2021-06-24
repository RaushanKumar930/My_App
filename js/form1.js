class Form1{
    constructor(){
        this.question = createInput(quesCount + ") ")
        this.ans = createInput("Answer: ")
        this.add = createButton()
        this.back = createButton()
    }
    hide(){
        this.ans.hide()
        this.question.hide()
        this.add.hide()
        this.back.hide()
    }
    show1(){
        this.ans.show()
        this.add.show()
        this.question.show()
        this.back.show()
    }
    display(){
        this.question.position(50,100)
        this.ans.position(50,150)
        this.add.html("Add")
        this.add.position(400,100)
        this.back.html("<< Back")
        this.back.position(100,570)
        this.add.mousePressed(() => {
            user.question = this.question.value()
            user.answer = this.ans.value()
            user.updateQuestion()
            state = 0
            game.updateState(0)
            this.ans.hide()
            this.question.hide()
            this.add.hide()
            this.back.hide()
            form1.display()
        });
        this.back.mousePressed(() => {
            state = 0;
            game.updateState(0);
            quesCount--
            user.updateCount(quesCount)

            this.ans.hide()
            this.question.hide()
            this.add.hide()
            this.back.hide()
            form1.display()
        });
    }
}