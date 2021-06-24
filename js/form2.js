class Form2{
    constructor(){
        this.add = createButton()
        this.ask = createButton()
        this.remove = createButton()
    }
    hide(){
        this.add.hide()
        this.ask.hide()
        this.remove.hide()
    }
    show1(){
        this.add.show()
        this.ask.show()
        this.remove.show()
    }
    display(){
        this.ask.html("Ask")
        this.ask.position(500,550)
        this.add.html("Add 1 question")
        this.add.position(400,100)
        this.remove.html("Remove questions")
        this.remove.position(470,150)
        if(quesCount !== 0){
            this.ask.mousePressed(() => {
                this.ask.hide()
                this.add.hide()
                this.remove.hide()
                state = 2;
                game.updateState(state)
                form3 = new Form3()

            });
        }else if(quesCount === 0){
            this.ask.mousePressed(() => {
                noQuestion = createSprite(300,300)
                noQuestion.addImage(Question0)
                noQuestion.scale = 0.5
                noQuestion.lifetime = 20
            })
        }
        this.add.mousePressed(() => {
            state = 1;
            game.updateState(state)
            quesCount++
            user.updateCount(quesCount)
            form1 = new Form1()
        })
        this.remove.mousePressed(() => {
            user.removeQuestions()
            quesCount = 0
            user.updateCount(0)
            state = 0
            game.updateState(0)
        })
    }
}