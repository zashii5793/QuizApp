// This is a JavaScript file
var app = angular.module('quiz', ['onsen']);
app.controller('topCtrl', function(){
    this.gameStart = function(){
        myNavigator.pushPage('game.html');
    };
});
app.controller('gameCtrl', function(){
    
});
