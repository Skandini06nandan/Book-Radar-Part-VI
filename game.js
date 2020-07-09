class Game{
    constructor(){
}
//taking the states from the database
    getState(){
 var gameStateRef =database.ref('gameState');
gameStateRef.on("value",function(data){
gameState =data.val();
  });
}
//taking the Record numbers as record counts from database
  getCount(){
    var recordCountRef =database.ref('recordCount');
   recordCountRef.on("value",function(data){
   recordCount =data.val();
     });
    }
    //updating values
update(Count){
  database.ref('/').update({
    recordCount : count
  });
}

    update(state){
database.ref('/').update({
    gameState: state
    });
    }

  }