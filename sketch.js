var backgroundImage;
var database;
var form, player;
var playerCount;
var formulario
var jogo

function preload(){

  backgroundImage = loadImage("./assets/planodefundo.png");


}

function setup(){

  createCanvas(windowWidth, windowHeight);
  // criando banco de dados
  database = firebase.database();
  jogo = new Jogo();
  jogo.start();
}

function draw(){
  background(backgroundImage);


}
// função de ajustar a tela 
function windowResized(){

  resizeCanvas(windowWidth, windowHeight)

}
