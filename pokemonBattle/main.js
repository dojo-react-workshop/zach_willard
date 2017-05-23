var game = {
  players: [],
  addPlayer: function(name){
    this.players.push(playerConstructor(name));
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(){
    $.ajax(`http://pokeapi.co/api/v2/pokemon/${Math.ceil(Math.random() * 721)}`).done(
        function (card){
            player.hand.push(card);
        });
  };
  return player;
};

game.addPlayer("Zach");
game.players[0].addCard();
console.log(game);

