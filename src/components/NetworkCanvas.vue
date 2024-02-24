<script setup>
import {onMounted, onUnmounted} from "vue";
import victor from "victor";

let intervalId;
let resizeListener;


onMounted(() => {
  let canvas = document.getElementById("canvas");
  if (!canvas) {
    console.error('Canvas element not found!');
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let pixelAmount = canvas.width * canvas.height;
  const searchRadiusFraction = 2;

  const nodeFraction = 50000;
  const minNodeAmount = 5;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "white";

  let nodes = [];

  let minDimension = Math.min(canvas.width, canvas.height);

  for (let i = 0; i < pixelAmount / nodeFraction + minNodeAmount; i++) {
    nodes.push(new Node(randNum(canvas.width), randNum(canvas.height), randRange(-1, 1),
        randRange(-1, 1), minDimension / searchRadiusFraction));
  }

  resizeListener = () => {
    let xdiff = window.innerWidth / canvas.width;
    let ydiff = window.innerHeight / canvas.height;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    pixelAmount = canvas.width * canvas.height;
    minDimension = Math.min(canvas.width, canvas.height);

    for (let node of nodes) {
      node.pos.x *= xdiff;
      node.pos.y *= ydiff;
      node.searchRadius = Math.min(randRange(minDimension / searchRadiusFraction * 0.8,
          minDimension / searchRadiusFraction * 1.2), 200);
    }

    if (nodes.length > pixelAmount / nodeFraction + minNodeAmount) {
      nodes.splice(pixelAmount / nodeFraction, nodes.length - pixelAmount / nodeFraction);
    } else {
      for (let i = 0; i < pixelAmount / nodeFraction - nodes.length + minNodeAmount; i++) {
        nodes.push(new Node(randNum(canvas.width), randNum(canvas.height), randRange(-1, 1),
            randRange(-1, 1), minDimension / searchRadiusFraction));
      }
    }
  };

  window.addEventListener("resize", resizeListener);

  intervalId = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let node of nodes) {
      node.move(canvas);
    }

    for (let node of nodes) {
      node.detect(nodes, canvas);
      node.drawNode(ctx);
      node.drawLines(ctx, canvas);
    }
  }, 1000 / 24);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  window.removeEventListener("resize", resizeListener);
});

class Node {
  constructor(x, y, dx, dy, sr) {
    this.pos = victor(x, y);
    this.vel = victor(dx, dy);
    this.searchRadius = Math.min(randRange(sr * 0.8, sr * 1.2), 200);

    this.trueNeighbors = [];
    this.aboveNeighbors = [];
    this.belowNeighbors = [];
    this.leftNeighbors = [];
    this.rightNeighbors = [];
  }

  detect(nodes, canvas) {
    this.trueNeighbors = [];
    this.aboveNeighbors = [];
    this.belowNeighbors = [];
    this.leftNeighbors = [];
    this.rightNeighbors = [];
    let checkedNodes = nodes.slice();

    for (let node of checkedNodes) {
      if (node === this) {
        checkedNodes.splice(checkedNodes.indexOf(node), 1);
        continue;
      }

      if (this.pos.distance(node.pos) < this.searchRadius) {
        this.trueNeighbors.push(node);
        checkedNodes.splice(checkedNodes.indexOf(node), 1);
      }
    }

    let distance;

    if (this.pos.x < this.searchRadius) {
      for (let node of checkedNodes) {
        if (node.pos.x > canvas.width - this.searchRadius) {
          distance = this.pos.distance(victor(node.pos.x - canvas.width, node.pos.y));
          if (distance < this.searchRadius) {
            this.leftNeighbors.push(node);
            checkedNodes.splice(checkedNodes.indexOf(node), 1);
          }
        }
      }
    } else if (this.pos.x > canvas.width - this.searchRadius) {
      for (let node of checkedNodes) {
        if (node.pos.x < this.searchRadius) {
          distance = this.pos.distance(victor(node.pos.x + canvas.width, node.pos.y));
          if (distance < this.searchRadius) {
            this.rightNeighbors.push(node);
            checkedNodes.splice(checkedNodes.indexOf(node), 1);
          }
        }
      }
    }

    if (this.pos.y < this.searchRadius) {
      for (let node of checkedNodes) {
        if (node.pos.y > canvas.height - this.searchRadius) {
          distance = this.pos.distance(victor(node.pos.x, node.pos.y - canvas.height));
          if (distance < this.searchRadius) {
            this.aboveNeighbors.push(node);
            checkedNodes.splice(checkedNodes.indexOf(node), 1);
          }
        }
      }
    } else if (this.pos.y > canvas.height - this.searchRadius) {
      for (let node of checkedNodes) {
        if (node.pos.y < this.searchRadius) {
          distance = this.pos.distance(victor(node.pos.x, node.pos.y + canvas.height));
          if (distance < this.searchRadius) {
            this.belowNeighbors.push(node);
            checkedNodes.splice(checkedNodes.indexOf(node), 1);
          }
        }
      }
    }
  }

  move(canvas) {
    this.pos.add(this.vel);

    if (this.pos.x < 0) {
      this.pos.x = canvas.width;
    } else if (this.pos.x > canvas.width) {
      this.pos.x = 0;
    }

    if (this.pos.y < 0) {
      this.pos.y = canvas.height;
    } else if (this.pos.y > canvas.height) {
      this.pos.y = 0;
    }
  }

  drawNode(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 5, 0, Math.PI * 2, true);
    ctx.fill();
  }

  drawLines(ctx, canvas) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    for (let node of this.trueNeighbors) {
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(node.pos.x, node.pos.y);
      ctx.stroke();
    }

    for (let node of this.aboveNeighbors) {
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(node.pos.x, node.pos.y - canvas.height);
      ctx.stroke();
    }

    for (let node of this.belowNeighbors) {
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(node.pos.x, node.pos.y + canvas.height);
      ctx.stroke();
    }

    for (let node of this.leftNeighbors) {
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(node.pos.x - canvas.width, node.pos.y);
      ctx.stroke();
    }

    for (let node of this.rightNeighbors) {
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(node.pos.x + canvas.width, node.pos.y);
      ctx.stroke();
    }
  }
}

const randNum = (num) => { return Math.random() * num; };
const randRange = (min, max) => { return Math.random() * (max - min) + min; };
</script>

<template>
  <canvas id="canvas"></canvas>
</template>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

</style>