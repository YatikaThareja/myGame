var db;
var gameState=0;
var playerCount,form,player,game;
var allPlayers;
var player1,player2,player3,player4;
var player2Img,player3Img,player1Img,player4Img,track;
var bg

function preload(){
  player1Img=loadImage("Images/img1.jpeg");
  player2Img=loadImage("Images/img2.png");
  player3Img=loadImage("Images/img1.jpeg");
  player4Img=loadImage("Images/img2.png");
  track=loadImage("Images/track.jpeg")
  bg=loadImage("Images/image3.jpeg")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  db=firebase.database();
  db.ref("gameState").on("value",(data)=>{
  gameState=data.val();
  })
  console.log(gameState);
  form=new Form()
  form.display()

}

function draw() {
  background(bg);
  
}