var form1, form2, form3, ans, ask, correctAns, ansVal, correctAnsVal, check, user
var state = 0
var game, quesCount = 0
var allQuestions
var flag = 1
var givenAnswer
var rightA, Question0, noQuestion, correctImg, correctDisplay, wrongImg, wrongDisplay, warning

function preload(){
  rightA = loadImage("images/right.png")
  Question0 = loadImage("images/no Question.jpg")
  correctImg = loadImage("images/correct.png")
  wrongImg = loadImage("images/wrongImg.jpg")
  warning = loadImage("images/warning.png")
}

function setup() {
  createCanvas(600,600);
  database = firebase.database();

  user = new User1()

  form2 = new Form2()
  game = new State()
  
  //noQuestion = createSprite(300,300)
  //noQuestion.shapeColor = "#FF1546"
 
}

function draw() {
  background(255,21,70); 
  
  fill("yellow")
  textSize(45)
  text("Welcome", 200, 50)
  //text(mouseX + "," + mouseY, mouseX,mouseY)
  image(rightA, 350, 85, 50, 50)
  image(rightA, 420, 135, 50, 50)
  image(rightA, 420, 530, 50, 50)
  fill("cyan")
  if(quesCount === 0){
    textSize(25)
    text("Click here to add questions ",35,120)
  }else{
    textSize(23)
    text("Click here to add more questions",10,120)
  }
  textSize(20)
  text("Click here to remove all the entered questions", 5, 170)
  textSize(25)
  text("Click here to ask the questions", 48, 550)
  text("that you have entered to practice", 40, 580)
  
  if(state === 0){
    //clear()
    form2.show1()
    form2.display()
  }else if(state === 1){
    clear()
    background("dodgerblue")
    fill("lime")
    stroke("lawngreen")
    textSize(25)
    text("Type the questions and answers to Practice",50,50)

    push()
    fill("dodgerblue")
    stroke("lime")
    ellipse(90,295,10,10)
    ellipse(90,345,10,10)
    pop()

    textSize(20)
    stroke("limegreen")
    text("Note : ",50,250)
    text("Enter the correct question, there is no auto correct...",100,300)
    text("Enter the correct answer, there is no auto correct...",100,350)

    form1.show1()
    form1.display()
    form2.hide()
  }else if(state === 2){
    clear();
    background("hotpink")
    form3.display()
    fill("blue")
    stroke("navy")
    textSize(25)
    text("Let's prepare for test",width/2 - 150,50)

    image(warning,10,300,50,50)

    fill("red")
    stroke("indianred")
    text("Don't cheat, this is for your preparation of test",50,400)
    fill("aqua")
    stroke(0,255,255)
    text("Keep practicing",width/2 - 100,450)
  }
  //console.log(state)
  drawSprites();
}

