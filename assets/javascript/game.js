let teamOneShoot = document.querySelector("#teamone-shoot-button");
let teamTwoShoot = document.querySelector("#teamtwo-shoot-button");
let teamOneShots = document.querySelector("#teamone-numshots");
let teamTwoShots = document.querySelector("#teamtwo-numshots");
let teamOneCount = 0;
let teamOneScore = 0;
let teamTwoCount = 0;
let teamTwoScore = 0;
let teamOneGoals = document.querySelector("#teamone-numgoals");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals");
let reset = document.querySelector("#reset-button");
let resetNum = document.querySelector("#num-resets");
let resetCount = 0;

teamOneShoot.addEventListener("click", function () {
  teamOneCount += 1;
  console.log(teamOneCount);
  teamOneShots.innerHTML = teamOneCount;
  let chance = Math.floor(Math.random() * 10);
  console.log(chance);
  if (chance <= 4) {
    teamOneScore += 1;
    teamOneGoals.innerHTML = teamOneScore;
  }
});

teamTwoShoot.addEventListener("click", function () {
  teamTwoCount += 1;
  console.log(teamTwoCount);
  teamTwoShots.innerHTML = teamTwoCount;
  let chance = Math.floor(Math.random() * 10);
  console.log(chance);
  if (chance <= 4) {
    teamTwoScore += 1;
    teamTwoGoals.innerHTML = teamTwoScore;
  }
});

reset.addEventListener("click", function () {
  if (teamOneScore > teamTwoScore) {
    alert("Team One Wins!");
  } else {
    alert("Team Two Wins!");
  }
  teamOneCount = 0;
  teamOneScore = 0;
  teamTwoCount = 0;
  teamTwoScore = 0;
  teamOneShots.innerHTML = 0;
  teamTwoShots.innerHTML = 0;
  teamOneGoals.innerHTML = 0;
  teamTwoGoals.innerHTML = 0;
  resetCount += 1;
  resetNum.innerHTML = resetCount;
});
