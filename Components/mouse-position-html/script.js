const main = document.getElementById("main");
const cursorFollower = document.getElementById("cursor-follower");
const xCoord = document.getElementById("x-coord");
const yCoord = document.getElementById("y-coord");

let position = { x: 0, y: 0 };

function handleMouseMove(e) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const clientX = e.clientX;
  const clientY = e.clientY;

  position.x = clientX / width;
  position.y = clientY / height;

  // Update cursor follower position
  cursorFollower.style.transform = `translate(${position.x * width - 16}px, ${
    position.y * height - 16
  }px)`;

  // Update coordinates display
  xCoord.textContent = (position.x * 100).toFixed(2);
  yCoord.textContent = (position.y * 100).toFixed(2);
}

main.addEventListener("mousemove", handleMouseMove);
