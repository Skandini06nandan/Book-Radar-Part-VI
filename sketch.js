var form,record1,user,recordCount,bg;

function setup() {
  createCanvas(800,400);
  form = new Form();
  // record1 =new Record();

  //databes reference
   database =firebase.database();
game = new Game();
bg= loadImage("screen.jpg")
  }

function draw() {
  background(bg);
 
  form.display();

  
 if(recordCount === 0){
  game.update(1)  
  form = new Form();
  }
  if(recordCount ===1){
    game.update(2)
    slides =new Slide();
  }
  async function timezone(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
  
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0000 && hour<=1100){
     text("Good Morning Explorer" ,10 ,200)
    }
    else if(hour>=1200 && hour <= 0300){
       text("Good Afternoon Explorer", 10,200);
    }
    else if(hour>= 0400 && hour <= 1100){
      text("Good Evening Explorer",10,300) 
    }
  
  }
  
}
