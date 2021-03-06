const pointsEl = document.getElementById("points-p");
const btnsContainer = document.getElementById("btns-container");

const actionsArr = [
  {
    name: "recycledPaper",
    emoji: "π",
    text: "recycled paper",
    good: true,
  },
  {
    name: "boughtSecondHand",
    emoji: "π",
    text: "bought 2nd hand",
    good: true,
  },
  {
    name: "tookTrain",
    emoji: "π",
    text: "took train",
    good: true,
  },
  {
    name: "leftLightsOn",
    emoji: "π‘",
    text: "left lights on",
    good: false,
  },
  {
    name: "drippingTap",
    emoji: "π°",
    text: "let tap drip",
    good: false,
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "π¦",
    text: "left car running while ducks crossed road",
    good: false,
  },
];

// 1. Render buttons onto page
function renderBtns() {
  actionsArr.forEach((item) => {
    let button = document.createElement("button");
    button.innerHTML = `${item.emoji} ${item.name}`;
    button.classList.add("btn");
    button.value = item.good;
    button.value === "true"
      ? (button.style.background = "chartreuse")
      : (button.style.background = "indianred");
    button.addEventListener("click", updatePoints);
    btnsContainer.append(button);
  });
}

let points = 0;
let activity = 0;

// 2. Update points
function updatePoints(e) {
  e.target.value === "true" ? (points = points + 5) : (points = points - 5);
  pointsEl.innerHTML = `${points} points today!`;
  if (points < 0) {
    btnsContainer.style.background = "red";
  } else {
    btnsContainer.style.background = "green";
  }
  updateActivity();
}

function updateActivity() {
  activity++;
  document.querySelector("#activity").innerHTML = `Activity count: ${activity}`;
}

renderBtns();

// Task: βοΈ For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show:
// βοΈ 1. the emoji
// βοΈ 2. the action name
// βοΈ 3. Add +5 points to the userβs score for good actions, and -5 for bad actions on click
// βοΈ 4. Update the points total in the DOM on click

// βοΈ stretch goal 1οΈβ£: Change each button color, green for good activities, red for bad.

// βοΈ stretch goal 2οΈβ£: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.

// βοΈ stretch goal 3οΈβ£: Add an activity count.
