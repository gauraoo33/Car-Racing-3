class Game{
    constructor(){}
    getState(){
        database.ref('gameState').on("value",function(data){
          gameState = data.val();
        })
      }
      updateState(state){
        database.ref('/').update({
          gameState: state
        });
      }
      start(){
          if(gameState===0){
              player=new Player()
              player.getCount()
              form=new Form()
              form.display()
          }
      }
      play(){
        form.title.hide()
        form.input.hide()
        form.greeting.hide()
        form.button.hide()
        text("Game Started",120,100)
      }
}