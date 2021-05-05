class Player{
    constructor(){
      this.index=null
      this.distance=0
      this.name=null
    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
          playerCount = data.val();
        })
      }
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
      updateInfo(){
        database.ref('players/player'+this.index).update({
          name:this.name,
          distance:this.distance
        });
      }
      static getPlayersInfo(){
        database.ref("players").on("value",(data)=>{
          players=data.val()
        })
      }
}