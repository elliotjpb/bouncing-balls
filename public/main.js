let canvas, context
let balls = []

canvas = document.getElementById("bouncingBallsCanvas")
context = context = canvas?.getContext('2d')

class Ball {
    constructor(mouseX, mouseY, speedX, speedY) {
        this.x = mouseX
        this.y = mouseY
        this.size = 7
        this.drag = 0.4
        this.speedX = speedX
        this.speedY = speedY
    }
}

function mousePressed() {
    //creates new ball object with the current mouse positions and random speed
    const ball = new Ball(
        event.clientX,
        event.clientY,
        randomNumber(12, 2),
        randomNumber(12, 2)
    )
    balls.push(ball)

    //Random direction
    if (balls[balls.length - 1].speedX % 2 === 0) {
        balls[balls.length - 1].speedX = - randomNumber(12, 2)
    }
    if (balls[balls.length - 1].speedY % 2 === 0) {
        balls[balls.length - 1].speedY = - randomNumber(12, 2)
    }
}

function randomNumber(max, min) {
    const num = Math.floor(Math.random() * (max - min) + min)
    return num
}

function drawBall(ball) {
    context.fillStyle = "black"
    context.beginPath()
    context.arc(ball.x, ball.y, ball.size, 0, 2.5 * Math.PI)
    context.fill()
}


//For unit testing only
//Calls each function for
//https://caolan.uk/articles/writing-for-node-and-the-browser/
(function(exports){

    exports.sumTest = function(a, b) {
        return sum(a, b)
    }

    exports.randomNumberTest = function(max, min) {
        return randomNumber(max, min)
    }

})(typeof exports === 'undefined'? this['main']={}: exports);

function sum(a, b) {
    return a + b;
}

function friction(ball) {
    const friction = 0.1
    ball.speedX >= 0 ? ball.speedX -= friction : ball.speedX += friction
}

function ballPhysics(ball) {
    //Allows balls to fall
    const gravity = 0.9
    ball.speedY = ball.speedY + gravity
    //Adds movements to balls from the starting position
    ball.x = ball.x + ball.speedX
    ball.y = ball.y + ball.speedY

    //Prevents balls moving off the sides of the canvas
    if (ball.x >= canvas.width - ball.size || ball.x <= ball.size) {
        //Ball changes direction when it hits the wall
        ball.speedX = ball.speedX * -1
    }
    //Prevents balls falling below canvas
    if (ball.y >= canvas.height - ball.size || ball.y <= ball.size) {
        ball.y = canvas.height - ball.size
        //Drag slows the ball after it reaches the floor
        ball.speedY = ball.speedY * -ball.drag
    }
}

function loop() {
    //Background
    if (context !== undefined) {
        context.fillStyle = 'white'
        context.fillRect(0, 0, canvas.width, canvas.height)
    }


    //Looping through ballsArray to draw and animate balls
    for (const i of balls) {
        drawBall(i)
        ballPhysics(i)
        friction(i)
    }
    requestAnimationFrame(loop)
}

loop()

