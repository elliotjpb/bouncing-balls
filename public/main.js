let canvas, context
let balls = []

canvas = document.getElementById("bouncingBallsCanvas")
//canvas? - to check if undefined for unit tests
context = context = canvas?.getContext('2d')

class Ball {

    COLOURS = {
        RED: "red",
        YELLOW: "yellow",
        GREEN: "green",
        BLUE: "blue"
    }

    constructor(mouseX, mouseY, speedX, speedY) {
        this.x = mouseX
        this.y = mouseY
        this.size = 7
        this.colour = "black"
        this.drag = 0.4
        this.speedX = speedX
        this.speedY = speedY
    }

    drawBall() {
        context.beginPath()
        context.fillStyle = this.colour
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        context.fill()
    }

    detectCollisions() {
        for(const ball of balls) {
            if (!(this === ball)) {
                const dx = this.x - ball.x
                const dy = this.y - ball.y
                const distance = calculateDistance(dx, dy)
                this.colourCollision(ball, distance)
            }
        }
    }

    colourCollision(ball, distance) {
        //If two different balls touch
        if (distance < this.size + ball.size) {
            //Colour changes to a random colour from COLOURS enum
            ball.colour = this.color = this.COLOURS[Object.keys(this.COLOURS)[randomNumber(4, 0)]]
        }
    }
}

canvas?.addEventListener('click', function (event){
    //creates new ball object with the current mouse positions and random speed
    const ball = new Ball(
        event.clientX,
        event.clientY,
        randomNumber(12, 2),
        randomNumber(12, 2)
    )
    //adds ball to balls array
    balls.push(ball)

    //Random direction
    if (balls[balls.length - 1].speedX % 2 === 0) {
        balls[balls.length - 1].speedX = - randomNumber(12, 2)
    }
    if (balls[balls.length - 1].speedY % 2 === 0) {
        balls[balls.length - 1].speedY = - randomNumber(12, 2)
    }
})

function calculateDistance(dx, dy) {
    return Math.sqrt(dx ** 2 + dy ** 2)
}

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
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

setInterval(draw, 1000 / 35);
function draw() {
    //Background
    if (context !== undefined) {
        context.fillStyle = 'white'
        context.fillRect(0, 0, canvas.width, canvas.height)
    }
    //Looping through ballsArray to draw and animate balls
    for (const i of balls) {
        i.drawBall()
        ballPhysics(i)
        friction(i)
        i.detectCollisions()
    }
}

//For unit testing only
//Current workaround to be able to test functions
//Calls function to allow it to be tested in tests/main.test.js
//https://caolan.uk/articles/writing-for-node-and-the-browser/
(function(exports){

    exports.randomNumberTest = function(max, min) {
        return randomNumber(max, min)
    }

    exports.distanceCalculationTest = function (dx, dy) {
        return calculateDistance(dx, dy)
    }

    exports.ballTest = function() {

        return new Ball(
            100,
            100,
            10,
            10)
    }

    exports.subtractedFrictionTest = function() {

        const ballTest = new Ball(
            100,
            100,
            10,
            10)

        friction(ballTest)
        return ballTest
    }

    exports.addedFrictionTest = function() {

        const ballFrictionTest = new Ball(
            100,
            100,
            -2,
            10)

        friction(ballFrictionTest)
        return ballFrictionTest
    }

})(typeof exports === 'undefined'? this['main']={}: exports);
