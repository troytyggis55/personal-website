<template>
  <div ref="sketch"></div>
</template>

<script>
// Import the p5 library
import p5 from 'p5';

export default {
  name: 'FluidSimulation',

  mounted() {
    const sketch = (p) => {

      // Constants
      let searchRadius = 40; // How many pixels until nodes affect each other
      let maxNodeSpeed = 5; // Maximum speed of nodes
      let repellingForce = 0.03; // How much nodes repel each other
      let gravity = 0.09; // The strength of gravity
      let friction = 0.99; // How much the nodes slow down over time, 1 = no friction

      let nodes = []; // Array to hold all nodes
      let grid = []; // Grid to hold nodes for faster neighbor search

      p.setup = () => {
        p.createCanvas(600, 400);
        clearGrid();

        p.frameRate(60);

        // Create nodes
        for (let i = 0; i < 20; i++) {
          nodes.push(new Node(p.random(p.width), p.random(p.height)));
        }

        updateGrid()
      };

      p.draw = () => {
        p.background(0);

        userInput();

        for (let node of nodes) {
          node.accelerate();
        }

        for (let node of nodes) {
          node.move();
          node.draw();
        }

        updateGrid();
        drawGrid();

        //Draw fps in top right corner
        p.fill(255);
        p.text("FPS: " + p.round(p.frameRate()), p.width - 50, 20);
        p.text("Nodes: " + nodes.length, p.width - 60, 40);
      };

      class Node {
        constructor(x, y) {
          this.pos = p.createVector(x, y);
          this.vel = p.createVector(0, 0);
          this.gridPos = p.createVector(Math.floor(x / searchRadius), Math.floor(y /
              searchRadius));
          this.neighbors = [];
          this.size = 5;
        }

        accelerate() {
          // Wall force
          if (this.pos.x < searchRadius) {
            this.vel.x += searchRadius / this.pos.x;
          } else if (this.pos.x > p.width - searchRadius) {
            this.vel.x -= searchRadius / (p.width - this.pos.x);
          }

          if (this.pos.y < searchRadius) {
            this.vel.y += searchRadius / this.pos.y;
          } else if (this.pos.y > p.height - searchRadius) {
            this.vel.y -= searchRadius / (p.height - this.pos.y);
          }

          // Limit speed
          this.vel.limit(maxNodeSpeed);

          this.neighbors = [];
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              let x = this.gridPos.x + i;
              let y = this.gridPos.y + j;
              if (x >= 0 && x < p.width / searchRadius && y >= 0 && y < p.height / searchRadius) {
                for (let node of grid[x][y]) {
                  if (p5.Vector.dist(this.pos, node.pos) < searchRadius) {
                    this.neighbors.push(node);
                  }
                }
              }
            }
          }

          for (let neighbor of this.neighbors) {
            let force = p5.Vector.sub(this.pos, neighbor.pos);
            let magnitude = searchRadius - force.mag();
            force.setMag(magnitude * repellingForce);
            this.vel.add(force);
          }

          // Update velocity and position
          this.vel.y += gravity;
          this.vel.mult(friction);
        }

        move() {
          this.pos.add(this.vel);

          // Wall boundaries
          if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x *= -1;
          } else if (this.pos.x > p.width) {
            this.pos.x = p.width;
            this.vel.x *= -1;
          }

          if (this.pos.y < 0) {
            this.pos.y = 0;
            this.vel.y *= -1;
          } else if (this.pos.y > p.height) {
            this.pos.y = p.height;
            this.vel.y *= -1;
          }

          // Update grid position
          this.gridPos = p.createVector(Math.floor(this.pos.x / searchRadius), Math.floor(this.pos.y /
              searchRadius));
        }

        draw() {
          p.stroke(255);
          p.strokeWeight(2);
          p.point(this.pos.x, this.pos.y);
        }

      }
      function clearGrid() {
        for (let i = 0; i < p.width / searchRadius; i++) {
          grid[i] = [];
          for (let j = 0; j < p.height / searchRadius; j++) {
            grid[i][j] = [];
          }
        }
      }

      function updateGrid() {
        clearGrid();
        for (let node of nodes) {
          let currentGridPos = node.gridPos;
          grid[currentGridPos.x][currentGridPos.y].push(node);
        }
      }

      function drawGrid() {
        for (let i = 0; i < p.width / searchRadius; i++) {
          for (let j = 0; j < p.height / searchRadius; j++) {
            let population = grid[i][j].length;

            p.stroke(255, 50);
            p.strokeWeight(1);
            p.fill(255, 10 * population);
            p.rect(i * searchRadius, j * searchRadius, searchRadius, searchRadius);
          }
        }
      }

      function userInput() {
        if (p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height) {
          return;
        }

        if (p.mouseIsPressed && p.mouseButton === p.LEFT) {
          nodes.push(new Node(p.mouseX, p.mouseY));
          updateGrid();
        } else if (p.mouseIsPressed && p.mouseButton === p.RIGHT) {
          nodes.pop();
          updateGrid();
        }
      }

    };


    // Create a new p5 instance and attach it to the Vue component
    this.sketch = new p5(sketch, this.$refs.sketch);
  },

  beforeUnmount() {
    // Clean up and remove the p5 sketch when the component is destroyed
    this.sketch.remove();
  },
};
</script>

<style scoped>

</style>
