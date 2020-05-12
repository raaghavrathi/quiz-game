var canvas, backgroundImage;

var gameState = "start";

var allPlayers;



var form, player, game;



function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  game = new Game();

 
}


function draw(){
  if(gameState === "start"){
    game.start();
  }
  if(gameState === "section"){
    clear();
    form.displaySectionScreen()
  }
  if(gameState === "movies"){
    form.displayMovies()
   }

  if(gameState === "science"){
    form.displayScience()
  }
  if(gameState === "tv"){
    form.displayTv();
  }
}
