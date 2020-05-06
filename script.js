var d1 = Math.floor(Math.random()*6+1)
var d2 = Math.floor(Math.random()*6+1)

if(d1 === 1){
  document.getElementsByClassName("img1")[0].setAttribute("src", "dice1.png")
} else if (d1 === 2) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "dice2.png")
} else if (d1 === 3) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "dice3.png")
} else if (d1 === 4) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "dice4.png")
} else if (d1 === 5) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "dice5.png")
} else if (d1 === 6) {
  document.getElementsByClassName("img1")[0].setAttribute("src", "dice6.png")
}

if(d2 === 1){
  document.getElementsByClassName("img2")[0].setAttribute("src", "dice1.png")
} else if (d2 === 2) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "dice2.png")
} else if (d2 === 3) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "dice3.png")
} else if (d2 === 4) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "dice4.png")
} else if (d2 === 5) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "dice5.png")
} else if (d2 === 6) {
  document.getElementsByClassName("img2")[0].setAttribute("src", "dice6.png")
}


if (d1>d2){
  document.querySelector("h1").innerText = "🚩Player 1 Wins"
} else if (d2>d1) {
  document.querySelector("h1").innerText = "Player 2 Wins🚩"
} else{
  document.querySelector("h1").innerText = "Its a tie"
}
