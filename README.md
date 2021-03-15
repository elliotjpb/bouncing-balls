# Bouncing Balls

Interactive bouncing balls application.

Whenever you click on the page a ball is released from the clicked position at a random speed and angle.

Once a ball reaches the bottom of the window the ball bounces until it stops.

When a ball collides with another, they both change to a random colour.

### Build Instructions

Application currently runs locally.

Node and npm are required to run this project.

Nodemon for the server: `npm install -g nodemon`

To run project:

Make sure dependencies are installed:

`npm install`

Run project

`nodemon server-local.js`

Testing requires Jest:

Install Jest: `npm i jest`

To run tests:

`npm test`

### Improvements to be made:

- Mock canvas during tests to allow for more compressive tests.
- Resolve workaround for exports wrapper in main.js for testing.
- Fix netlify deployment to serve the HTML page from express.
- Separate main.js into relevant parts. (e.g. Ball class)
