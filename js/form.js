class Form{

constructor (){}

display(){

var title=createElement(h1)
title.html("gadeyu ki savariya")
title.position(200,10)
var input=createInput("ENTER YOUR NAME")
input.position(200,100)
var button=createButton("PRESS TO START")
button.position(200,200)

button.mousePressed(function(){

title.hide()
button.hide()
var name=input.value()
playerCount+=1  
player.update(name)
player.updateCount(playerCount)

greeting.html("hiii "+name)
greeting.position(480,250)

})

}
   
}