document.addEventListener("DOMContentLoaded", function () {
   
    let gaming = {
        players: 0,
        turn1Win: 0,
        turn2Win:0,
        player1Win: 0,
        player2Win: 0,
        draw:0,
        ai:0,
        aiWin:0,
        checked:0,
        aiTurn:0,
    };
let rand=Math.floor(Math.random()*2)
gaming.players=rand;
let color = "dark";
document.getElementById("darkmode").addEventListener("click", function() {
    if (color == "dark") {
        color = "light";
        document.getElementById("body").style.background = "#72A0C1";
        document.getElementById("h2").style.background = "#72A0C1";
        document.getElementById("h2").style.color = "#000";
        document.getElementById("foot").style.background = "#2c3968";
    } else {
        color = "dark";
        document.getElementById("body").style.background = "linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)";
        document.getElementById("h2").style.background = "#000";
        document.getElementById("h2").style.color = "#fff";
        document.getElementById("foot").style.background = "#000";
    }
});

let ongoing=document.getElementById("ongoing");
let box1=document.getElementById("box1");
let box2=document.getElementById("box2")
let box3=document.getElementById("box3")
let box4=document.getElementById("box4")
let box5=document.getElementById("box5")
let box6=document.getElementById("box6")
let box7=document.getElementById("box7")
let box8=document.getElementById("box8")
let box9=document.getElementById("box9")
let message=document.getElementById("message")
let counter=0; 
let boxes = document.querySelectorAll(".box");
let boxx = document.querySelectorAll(".within");
let y;
let round=document.getElementById("tournament").value;

document.getElementById("tournament").addEventListener("change",function(){
    round=document.getElementById("tournament").value;
});
document.getElementById("aimessage").innerHTML="Play With Ai"
document.getElementById("aimessage").addEventListener("click",function(){
    if(document.getElementById("aimessage").classList.contains("aimsg")){
        document.getElementById("aimessage").innerHTML="Playing With Ai"
        document.getElementById("aimessage").classList.remove("aimsg")
        document.getElementById("aimessage").classList.add("activator");

        gaming.checked=1;

    }else{
        document.getElementById("aimessage").innerHTML="Play With Ai"
        document.getElementById("aimessage").classList.remove("activator")
        document.getElementById("aimessage").classList.add("aimsg")
        gaming.checked=0;
    }
    if(gaming.checked==0){
        if(rand==0){
            document.getElementById("first").classList.add("increaseOpacity")
        }else{
            message.innerHTML="Start The Game - player 2"
            document.getElementById("first").classList.remove("increaseOpacity")
            document.getElementById("second").classList.add("increaseOpacity")
        }
    }else{
        document.getElementById("first").classList.add("increaseOpacity")
        document.getElementById("second").classList.remove("increaseOpacity")
    }

})
if(gaming.checked==0){
    if(rand==0){
        document.getElementById("first").classList.add("increaseOpacity")
    }else{
        message.innerHTML="Start The Game - player 2"
        document.getElementById("first").classList.remove("increaseOpacity")
        document.getElementById("second").classList.add("increaseOpacity")
    }
}else{
    document.getElementById("first").classList.add("increaseOpacity")
}

 boxes.forEach(box => {
        box.addEventListener("click", function (event) {
            // box.classList.add("clicked");
            let box=event.target;
            let boxId = event.target.id;
            document.getElementById("round").style.display="none"
            document.getElementById("aimessage").style.display="none"
            ongoing.className="going"
            showingWhichRound()
            y = document.querySelector(`#${boxId} > div`); // Fix selector
            

            if (y && !(box.classList.contains("ochecked")) && !(box.classList.contains("xchecked"))) {
                // y.classList.remove("disabled");
                // y.classList.add("circle");
                // y.classList.add("ochecked");
                if(gaming.checked==0){
                switch(round){
                    case "one": if(gaming.players==0){
                        y.classList.remove("disabled");
                        y.classList.add("circle");
                        box.classList.add("ochecked");
                       document.getElementById("a").style.display="none"
                       document.getElementById("b").style.display="none"
                       document.getElementById("c").style.display="none"
                        counter++;
                        winingConditionO();
                       opacity()
                        gaming.players=1;
                        finishing()

                    }else{
                        box.classList.add("xchecked");
                        box.classList.add("clicked")
                        document.getElementById("a").style.display="none"
                        document.getElementById("b").style.display="none"
                        document.getElementById("c").style.display="none"
                        winingConditionX()
                        counter++
                        opacity()
                        gaming.players=0;
                       
                        finishing()
                    };break;
                    case "two": 
                    if(gaming.players==0){
                        y.classList.remove("disabled");
                        y.classList.add("circle");
                        box.classList.add("ochecked");
                        document.getElementById("a").style.display="block"
                        document.getElementById("b").style.display="block"
                        
                        counter++;
                        winingConditionO();
                       opacity()
                        gaming.players=1;
                        finishingRound2()
                    }else{
                        box.classList.add("xchecked");
                        box.classList.add("clicked")
                      
                        document.getElementById("a").style.display="block"
                        document.getElementById("b").style.display="block"
                        
                        winingConditionX()
                        counter++
                        opacity()
                        gaming.players=0;
                       
                        finishingRound2()
                    };break;
                    case "three": 
                    if(gaming.players==0){
                        y.classList.remove("disabled");
                        y.classList.add("circle");
                        box.classList.add("ochecked");
                       
                        document.getElementById("a").style.display="block"
                        document.getElementById("b").style.display="block"
                      
                        counter++;
                        winingConditionO();
                        opacity()
                        gaming.players=1;
                        finishingRound3()
                    }else{
                        box.classList.add("xchecked");
                        box.classList.add("clicked")
                     
                        document.getElementById("a").style.display="block"
                        document.getElementById("b").style.display="block"
                        
                        winingConditionX()
                        counter++;
                        opacity()
                        gaming.players=0;
                       
                        finishingRound3()
                    };
                    break;
                }
            }else{
                switch(round){
                    case "one": 
                        y.classList.remove("disabled");
                        y.classList.add("circle");
                        box.classList.add("ochecked");
                        document.getElementById("a").style.display="block"
                        document.getElementById("b").style.display="block"
                        document.getElementById("c").style.display="block"
                        
                        counter++;
                        winingConditionO();
                       
                       
                        finishing()
                        aiCompiled()
                        winingConditionAi()
                        counter++
                        
                        
                        finishing()
                    break;
                    case "two": 
                    y.classList.remove("disabled");
                    y.classList.add("circle");
                    box.classList.add("ochecked");
                    document.getElementById("a").style.display="block"
                    document.getElementById("b").style.display="block"
                    document.getElementById("c").style.display="block"
                    
                    counter++;
                    finishingaisecondRound();
                   
                   
                    aiCompiled()
                    winingConditionAi()
                    counter++
                    
                    
                    finishingaisecondRound()
                break;
                    case "three": 
                    y.classList.remove("disabled");
                    y.classList.add("circle");
                    box.classList.add("ochecked");
                    document.getElementById("a").style.display="block"
                    document.getElementById("b").style.display="block"
                    document.getElementById("c").style.display="block"
                    
                    counter++;
                    finishingaithirdRound();
                   
                   
                    
                    aiCompiled()
                    winingConditionAi()
                    counter++
                    
                    
                    finishingaithirdRound()
                    break;
                }
            }
            } else {
                console.log(" user trying to mark again")
            }
 
        });
    });
 function winingConditionO(){
        if(box1.classList.contains("ochecked")&&box2.classList.contains("ochecked")&&box3.classList.contains("ochecked")){
            gaming.player1Win=1;
            gaming.turn1Win++;
        }else if(box4.classList.contains("ochecked")&&box5.classList.contains("ochecked")&&box6.classList.contains("ochecked")){
            gaming.player1Win=1
            gaming.turn1Win++;
        }else  if(box7.classList.contains("ochecked")&&box8.classList.contains("ochecked")&&box9.classList.contains("ochecked")){
            gaming.player1Win=1
            gaming.turn1Win++;
        }else if(box1.classList.contains("ochecked")&&box4.classList.contains("ochecked")&&box7.classList.contains("ochecked")){
            gaming.player1Win=1
            gaming.turn1Win++;
        }else   if(box2.classList.contains("ochecked")&&box5.classList.contains("ochecked")&&box8.classList.contains("ochecked")){
            gaming.player1Win=1
            gaming.turn1Win++;
        }else   if(box3.classList.contains("ochecked")&&box6.classList.contains("ochecked")&&box9.classList.contains("ochecked")){
            gaming.player1Win=1
            gaming.turn1Win++;
        }else    if(box1.classList.contains("ochecked")&&box5.classList.contains("ochecked")&&box9.classList.contains("ochecked")){
            gaming.player1Win=1
            gaming.turn1Win++;
        }else   if(box3.classList.contains("ochecked")&&box5.classList.contains("ochecked")&&box7.classList.contains("ochecked")){
            gaming.player1Win=1
            gaming.turn1Win++;
        }
    }
function winingConditionAi(){
        if(box1.classList.contains("xchecked")&&box2.classList.contains("xchecked")&&box3.classList.contains("xchecked")){
            gaming.aiWin=1
            gaming.aiTurn++;
        }else if(box4.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&box6.classList.contains("xchecked")){
            gaming.aiWin=1
            gaming.aiTurn++;
        }else  if(box7.classList.contains("xchecked")&&box8.classList.contains("xchecked")&&box9.classList.contains("xchecked")){
            gaming.aiWin=1
            gaming.aiTurn++;
        }else if(box1.classList.contains("xchecked")&&box4.classList.contains("xchecked")&&box7.classList.contains("xchecked")){
            gaming.aiWin=1
            gaming.aiTurn++;
        }else   if(box2.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&box8.classList.contains("xchecked")){
            gaming.aiWin=1
            gaming.aiTurn++;
        }else   if(box3.classList.contains("xchecked")&&box6.classList.contains("xchecked")&&box9.classList.contains("xchecked")){
            gaming.aiWin=1
            gaming.aiTurn++;
        }else    if(box1.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&box9.classList.contains("xchecked")){
            gaming.aiWin=1
            gaming.aiTurn++;
        }else   if(box3.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&box7.classList.contains("xchecked")){
            gaming.aiWin=1
            gaming.aiTurn++;
        }
    }
function winingConditionX(){
    if(box1.classList.contains("xchecked")&&box2.classList.contains("xchecked")&&box3.classList.contains("xchecked")){
        gaming.player2Win=1
        gaming.turn2Win++;
    }else if(box4.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&box6.classList.contains("xchecked")){
        gaming.player2Win=1
        gaming.turn2Win++;
    }else  if(box7.classList.contains("xchecked")&&box8.classList.contains("xchecked")&&box9.classList.contains("xchecked")){
        gaming.player2Win=1
        gaming.turn2Win++;
    }else if(box1.classList.contains("xchecked")&&box4.classList.contains("xchecked")&&box7.classList.contains("xchecked")){
        gaming.player2Win=1
        gaming.turn2Win++;
    }else   if(box2.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&box8.classList.contains("xchecked")){
        gaming.player2Win=1
        gaming.turn2Win++;
    }else   if(box3.classList.contains("xchecked")&&box6.classList.contains("xchecked")&&box9.classList.contains("xchecked")){
        gaming.player2Win=1
        gaming.turn2Win++;
    }else    if(box1.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&box9.classList.contains("xchecked")){
        gaming.player2Win=1
        gaming.turn2Win++;
    }else   if(box3.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&box7.classList.contains("xchecked")){
        gaming.player2Win=1
        gaming.turn2Win++;
    }
}
function finishingRound3(){
    if(gaming.turn1Win==3){
        document.getElementById("a").innerHTML=gaming.turn1Win;
        document.getElementById("b").innerHTML=gaming.turn2Win;
            elementsClassRemoverRound()
            display()
        }else if(gaming.turn2Win==3){
            document.getElementById("a").innerHTML=gaming.turn1Win;
            document.getElementById("b").innerHTML=gaming.turn2Win;
            display()
            elementsClassRemoverRound()
        }else if((gaming.player2Win==1||gaming.player1Win==1)&&(gaming.turn1Win==1||gaming.turn2Win==1)){
        
            document.getElementById("a").innerHTML=gaming.turn1Win;
            document.getElementById("b").innerHTML=gaming.turn2Win;
            elementsClassRemover()
    
        }else if((gaming.player2Win==1||gaming.player1Win==1)&&(gaming.turn1Win==2||gaming.turn2Win==2)){
        
            document.getElementById("a").innerHTML=gaming.turn1Win;
            document.getElementById("b").innerHTML=gaming.turn2Win;
            elementsClassRemover()
    
        }else if(counter==9){
          
            elementsClassRemover()
          
        }
       }
function finishingRound2(){
 if(gaming.turn1Win==2){
    document.getElementById("a").innerHTML=gaming.turn1Win;
    document.getElementById("b").innerHTML=gaming.turn2Win;
        elementsClassRemoverRound()
        display()
    }else if(gaming.turn2Win==2){
        document.getElementById("a").innerHTML=gaming.turn1Win;
        document.getElementById("b").innerHTML=gaming.turn2Win;
        display()
        elementsClassRemoverRound()
    }else if((gaming.player2Win==1||gaming.player1Win==1)&&(gaming.turn1Win==1||gaming.turn2Win==1)){
    
        document.getElementById("a").innerHTML=gaming.turn1Win;
        document.getElementById("b").innerHTML=gaming.turn2Win;
        elementsClassRemover()

    }else if(counter==9){
      
        elementsClassRemover()
      
    }
    
}
function finishingaisecondRound(){
    if(gaming.aiTurn==2){
        document.getElementById("a").innerHTML=gaming.turn1Win;
        document.getElementById("c").innerHTML=gaming.aiTurn;
            elementsClassRemoverRound()
            display()
        }else if(gaming.turn1Win==2){
            document.getElementById("a").innerHTML=gaming.turn1Win;
            document.getElementById("c").innerHTML=gaming.aiTurn;
            display()
            elementsClassRemoverRound()
        }else if((gaming.aiWin==1||gaming.player1Win==1)&&(gaming.turn1Win==1||gaming.aiTurn==1)){
        
            document.getElementById("a").innerHTML=gaming.turn1Win;
            document.getElementById("c").innerHTML=gaming.aiTurn;
            elementsClassRemover()
    
        }else if(counter==9){
          
            elementsClassRemover()
          
        }
}
function finishingaithirdRound(){
    if(gaming.turn1Win==3){
        document.getElementById("a").innerHTML=gaming.turn1Win;
        document.getElementById("c").innerHTML=gaming.aiTurn;
            elementsClassRemoverRound()
            display()
        }else if(gaming.aiTurn==3){
            document.getElementById("a").innerHTML=gaming.turn1Win;
            document.getElementById("c").innerHTML=gaming.aiTurn;
            display()
            elementsClassRemoverRound()
        }else if((gaming.aiWin==1||gaming.player1Win==1)&&(gaming.turn1Win==1||gaming.aiTurn==1)){
        
            document.getElementById("a").innerHTML=gaming.turn1Win;
            document.getElementById("c").innerHTML=gaming.aiTurn;
            elementsClassRemover()
    
        }else if((gaming.aiWin==1||gaming.player1Win==1)&&(gaming.turn1Win==2||gaming.aiTurn==2)){
        
        document.getElementById("a").innerHTML=gaming.turn1Win;
        document.getElementById("c").innerHTML=gaming.aiTurn;
            elementsClassRemover()
    
        }else if(counter==9){
          
            elementsClassRemover()
          
        }
}
 function finishing(){
        if(gaming.player1Win==1){
            message.innerHTML="Player 1 Won"
            elementsClassRemover()
            gaming.turn1Win=0;
            gaming.turn2Win=0;
            gaming.aiTurn=0;
            ongoing.className="disabled";
             display();
        }else if(gaming.player2Win==1){
            message.innerHTML="Player 2 Won"
            gaming.turn1Win=0;
            gaming.turn2Win=0;
            gaming.aiTurn=0;
            ongoing.className="disabled";
            elementsClassRemover()
            display();
        }else if(gaming.aiWin==1){
            message.innerHTML="Player 2 Won"
            gaming.turn1Win=0;
            gaming.turn2Win=0;
            gaming.aiTurn=0;
            ongoing.className="disabled";
            elementsClassRemover()
            display();
        }else if(counter==9){
            message.innerHTML="Draw Let's try again"
            gaming.turn1Win=0;
            gaming.turn2Win=0;
            ongoing.className="disabled";
            elementsClassRemover()
            display();
        }
       
       

       }
function elementsClassRemoverRound(){
    score();
    elementsClassRemover()
    gaming.turn1Win=0;
    gaming.turn2Win=0;
    gaming.aiTurn=0;
    ongoing.className="disabled";
    

}
function elementsClassRemover(){
        setTimeout(()=>{
            boxes.forEach(box => {
            
                box.className="box";
            
        })
        boxx.forEach(box => {
            
            box.classList.remove("circle");
            box.classList.add("disabled");
        
    })
    rand=Math.floor(Math.random()*2)
    gaming.players=rand;
    gaming.player1Win=0;
    gaming.player2Win=0;
    gaming.aiWin=0;
    gaming.ai=0;
    counter=0;
   if(gaming.checked==0){
    if(rand==0){
        document.getElementById("second").classList.remoe("increaseOpacity")
        document.getElementById("first").classList.add("increaseOpacity")
    }else{
        message.innerHTML="Start The Game - player 2"
        document.getElementById("first").classList.remove("increaseOpacity")
        document.getElementById("second").classList.add("increaseOpacity")
    }
   }

    

        },2000)
    }
function display(){
    setTimeout(function(){
        document.getElementById("round").style.display="block"
        document.getElementById("aimessage").style.display="block"
    },2000)
    
}
function showingWhichRound(){
    setTimeout(function(){
        switch(round){
            case "one":ongoing.innerHTML="You are playing only one match";break;
            case "two":ongoing.innerHTML="You are playing best of two";break;
            case "three":ongoing.innerHTML="You are playing best of three";break
                
        }
    },200)

}


function opacity(){
    if(gaming.checked==0){
    if(gaming.players==0){
        document.getElementById("first").classList.remove("increaseOpacity")
        document.getElementById("second").classList.add("increaseOpacity")
        }else if(gaming.players==1){
            document.getElementById("second").classList.remove("increaseOpacity")
            document.getElementById("first").classList.add("increaseOpacity")
        }
    }else{
        if(gaming.ai==0){
            document.getElementById("third").classList.remove("increaseOpacity")
            document.getElementById("first").classList.add("increaseOpacity")
        }else if(gaming.ai==1){
            document.getElementById("first").classList.remove("increaseOpacity")
            document.getElementById("third").classList.add("increaseOpacity")
        }
    }
}
function score(){
    setTimeout(function(){
        if(gaming.checked==0){
            document.getElementById("a").innerHTML="0";
            document.getElementById("b").innerHTML="0";
            document.getElementById("a").style.display="none";
            document.getElementById("b").style.display="none"
        }else{
            document.getElementById("a").innerHTML="0";
            document.getElementById("c").innerHTML="0";
            document.getElementById("a").style.display="none";
            document.getElementById("c").style.display="none"
        }
    },2000)

}
function aiCompiled(){
   
    if(box1.classList.contains("xchecked")&&box2.classList.contains("xchecked")&&!(box3.classList.contains("ochecked"))){
        box3.classList.add("xchecked");
        box3.classList.add("clicked")
    }else  if(box2.classList.contains("xchecked")&&box3.classList.contains("xchecked")&&!(box1.classList.contains("ochecked"))){
        box1.classList.add("xchecked");
        box1.classList.add("clicked")
    }else  if(box1.classList.contains("xchecked")&&box3.classList.contains("xchecked")&&!(box2.classList.contains("ochecked"))){
        box2.classList.add("xchecked");
        box2.classList.add("clicked")
    }else if(box4.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&!(box6.classList.contains("ochecked"))){
        box6.classList.add("xchecked");
        box6.classList.add("clicked")
    }else if(box5.classList.contains("xchecked")&&box6.classList.contains("xchecked")&&!(box4.classList.contains("ochecked"))){
        box4.classList.add("xchecked");
        box4.classList.add("clicked")
    }else if(box4.classList.contains("xchecked")&&box6.classList.contains("xchecked")&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");
        box5.classList.add("clicked")
    } 
    else  if(box7.classList.contains("xchecked")&&box8.classList.contains("xchecked")&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");
        box9.classList.add("clicked")
    }else if(box8.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box7.classList.contains("ochecked"))){
        box7.classList.add("xchecked");
        box7.classList.add("clicked")
    }else if(box7.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box8.classList.contains("ochecked"))){
        box8.classList.add("xchecked");
        box8.classList.add("clicked")
    }
    else if(box1.classList.contains("xchecked")&&box4.classList.contains("xchecked")&&!(box7.classList.contains("ochecked"))){
        box7.classList.add("xchecked");
        box7.classList.add("clicked")
    }else if(box4.classList.contains("xchecked")&&box7.classList.contains("xchecked")&&!(box1.classList.contains("ochecked"))){
        box1.classList.add("xchecked");
        box1.classList.add("clicked")
    }else if(box1.classList.contains("xchecked")&&box7.classList.contains("xchecked")&&!(box4.classList.contains("ochecked"))){
        box4.classList.add("xchecked");
        box4.classList.add("clicked")
    }
    else  if(box2.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&!(box8.classList.contains("ochecked"))){
        box8.classList.add("xchecked");
        box8.classList.add("clicked")
    }else if(box5.classList.contains("xchecked")&&box8.classList.contains("xchecked")&&!(box2.classList.contains("ochecked"))){
        box2.classList.add("xchecked");
        box2.classList.add("clicked")
    }else if(box2.classList.contains("xchecked")&&box8.classList.contains("xchecked")&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");
        box5.classList.add("clicked")
    }
    else   if(box3.classList.contains("xchecked")&&box6.classList.contains("xchecked")&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");
        box9.classList.add("clicked")
    }else if(box6.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box3.classList.contains("ochecked"))){
        box3.classList.add("xchecked");
        box3.classList.add("clicked")
    }else if(box3.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box6.classList.contains("ochecked"))){
        box6.classList.add("xchecked");
        box6.classList.add("clicked")
    }
    
    else    if(box1.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");
        box9.classList.add("clicked");
    }else if(box5.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box1.classList.contains("ochecked"))){
        box1.classList.add("xchecked");
        box1.classList.add("clicked");
    }else if(box1.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");
        box5.classList.add("clicked");
    }
    else   if(box3.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&!(box7.classList.contains("ochecked"))){
        box7.classList.add("xchecked");
        box7.classList.add("clicked");
    }else if(box5.classList.contains("xchecked")&&box7.classList.contains("xchecked")&&!(box3.classList.contains("ochecked"))){
        box3.classList.add("xchecked");
        box3.classList.add("clicked");
    }else if(box3.classList.contains("xchecked")&&box7.classList.contains("xchecked")&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");
        box5.classList.add("clicked")
    }else if ((box1.classList.contains("ochecked")) && (box2.classList.contains("ochecked")) && !(box3.classList.contains("xchecked")) && !(box3.classList.contains("ochecked"))) {
        box3.classList.add("xchecked");
        box3.classList.add("clicked");
    } else if ((box2.classList.contains("ochecked")) && (box3.classList.contains("ochecked")) && !(box1.classList.contains("xchecked")) && !(box1.classList.contains("ochecked"))) {
        box1.classList.add("xchecked");
        box1.classList.add("clicked");
    } else if ((box1.classList.contains("ochecked")) && (box3.classList.contains("ochecked")) && !(box2.classList.contains("xchecked")) && !(box2.classList.contains("ochecked"))) {
        box2.classList.add("xchecked");
        box2.classList.add("clicked");
    } else if ((box4.classList.contains("ochecked")) && (box5.classList.contains("ochecked")) && !(box6.classList.contains("xchecked")) && !(box6.classList.contains("ochecked"))) {
        box6.classList.add("xchecked");
        box6.classList.add("clicked");
    } else if ((box5.classList.contains("ochecked")) && (box6.classList.contains("ochecked")) && !(box4.classList.contains("xchecked")) && !(box4.classList.contains("ochecked"))) {
        box4.classList.add("xchecked");
        box4.classList.add("clicked");
    } else if ((box4.classList.contains("ochecked")) && (box6.classList.contains("ochecked")) && !(box5.classList.contains("xchecked")) && !(box5.classList.contains("ochecked"))) {
        box5.classList.add("xchecked");
        box5.classList.add("clicked");
    } else if ((box7.classList.contains("ochecked")) && (box8.classList.contains("ochecked")) && !(box9.classList.contains("xchecked")) && !(box9.classList.contains("ochecked"))) {
        box9.classList.add("xchecked");
        box9.classList.add("clicked");
    } else if ((box8.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box7.classList.contains("xchecked")) && !(box7.classList.contains("ochecked"))) {
        box7.classList.add("xchecked");
        box7.classList.add("clicked");
    } else if ((box7.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box8.classList.contains("xchecked")) && !(box8.classList.contains("ochecked"))) {
        box8.classList.add("xchecked");
        box8.classList.add("clicked");
    } else if ((box1.classList.contains("ochecked")) && (box4.classList.contains("ochecked")) && !(box7.classList.contains("xchecked")) && !(box7.classList.contains("ochecked"))) {
        box7.classList.add("xchecked");
        box7.classList.add("clicked");
    } else if ((box4.classList.contains("ochecked")) && (box7.classList.contains("ochecked")) && !(box1.classList.contains("xchecked")) && !(box1.classList.contains("ochecked"))) {
        box1.classList.add("xchecked");
        box1.classList.add("clicked");
    } else if ((box1.classList.contains("ochecked")) && (box7.classList.contains("ochecked")) && !(box4.classList.contains("xchecked")) && !(box4.classList.contains("ochecked"))) {
        box4.classList.add("xchecked");
        box4.classList.add("clicked");
    } else if ((box2.classList.contains("ochecked")) && (box5.classList.contains("ochecked")) && !(box8.classList.contains("xchecked")) && !(box8.classList.contains("ochecked"))) {
        box8.classList.add("xchecked");
        box8.classList.add("clicked");
    } else if ((box5.classList.contains("ochecked")) && (box8.classList.contains("ochecked")) && !(box2.classList.contains("xchecked")) && !(box2.classList.contains("ochecked"))) {
        box2.classList.add("xchecked");
        box2.classList.add("clicked");
    } else if ((box2.classList.contains("ochecked")) && (box8.classList.contains("ochecked")) && !(box5.classList.contains("xchecked")) && !(box5.classList.contains("ochecked"))) {
        box5.classList.add("xchecked");
        box5.classList.add("clicked");
    } else if ((box3.classList.contains("ochecked")) && (box6.classList.contains("ochecked")) && !(box9.classList.contains("xchecked")) && !(box9.classList.contains("ochecked"))) {
        box9.classList.add("xchecked");
        box9.classList.add("clicked");
    } else if ((box6.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box3.classList.contains("xchecked")) && !(box3.classList.contains("ochecked"))) {
        box3.classList.add("xchecked");
        box3.classList.add("clicked");
    } else if ((box3.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box6.classList.contains("xchecked")) && !(box6.classList.contains("ochecked"))) {
        box6.classList.add("xchecked");
        box6.classList.add("clicked");
    } else if ((box1.classList.contains("ochecked")) && (box5.classList.contains("ochecked")) && !(box9.classList.contains("xchecked")) && !(box9.classList.contains("ochecked"))) {
        box9.classList.add("xchecked");
        box9.classList.add("clicked");
    } else if ((box5.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box1.classList.contains("xchecked")) && !(box1.classList.contains("ochecked"))) {
        box1.classList.add("xchecked");
        box1.classList.add("clicked");
    } else if ((box1.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box5.classList.contains("xchecked")) && !(box5.classList.contains("ochecked"))) {
        box5.classList.add("xchecked");
        box5.classList.add("clicked");
    } else if ((box3.classList.contains("ochecked")) && (box5.classList.contains("ochecked")) && !(box7.classList.contains("xchecked")) && !(box7.classList.contains("ochecked"))) {
        box7.classList.add("xchecked");
        box7.classList.add("clicked");
    } else if ((box5.classList.contains("ochecked")) && (box7.classList.contains("ochecked")) && !(box3.classList.contains("xchecked")) && !(box3.classList.contains("ochecked"))) {
        box3.classList.add("xchecked");
        box3.classList.add("clicked");
    } else if ((box3.classList.contains("ochecked")) && (box7.classList.contains("ochecked")) && !(box5.classList.contains("xchecked")) && !(box5.classList.contains("ochecked"))) {
        box5.classList.add("xchecked");
        box5.classList.add("clicked");
    }else if((box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked"); //box 1 clicked
        box9.classList.add("clicked")
    }else  if(!(box1.classList.contains("ochecked"))&&(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");//box 2 clicked
        box9.classList.add("clicked")
    }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");//box 3 clicked
        box9.classList.add("clicked")
    }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");//box 4 clicked
        box9.classList.add("clicked")
    } else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");//box 5 clicked
        box9.classList.add("clicked")
    }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");//box 6 clicked
        box9.classList.add("clicked")
    }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");// box 7 clicked
        box9.classList.add("clicked")
    }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");//box 8 clicked
        box9.classList.add("clicked")
    }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&(box9.classList.contains("ochecked"))){
        box1.classList.add("xchecked");//box 9 clicked
        box1.classList.add("clicked")
    }else if((box1.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
        box3.classList.add("xchecked");//first and  sixth checked
        box3.classList.add("clicked")
    }else  if((box1.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box7.classList.contains("xchecked"))&&!(box7.classList.contains("ochecked"))){
        box7.classList.add("xchecked");//first and  eighth cheked
        box7.classList.add("clicked")
    }else  if((box2.classList.contains("ochecked"))&&(box4.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box1.classList.contains("ochecked"))){
        box1.classList.add("xchecked");// second and fourth checked
        box1.classList.add("clicked")
    }else  if((box2.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
        box3.classList.add("xchecked"); //second and sixth checked
        box3.classList.add("clicked")
    }else  if((box1.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box1.classList.contains("ochecked"))){
        box1.classList.add("xchecked"); //second and seventh checked
        box1.classList.add("clicked")
    }else  if((box3.classList.contains("ochecked"))&&(box4.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box1.classList.contains("ochecked"))){
        box1.classList.add("xchecked");// third and fourth checked
        box1.classList.add("clicked")
    }else  if((box1.classList.contains("ochecked"))&&(box2.classList.contains("ochecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
        box2.classList.add("xchecked");// second and ninth checked
        box9.classList.add("clicked")
    }else  if((box3.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box9.classList.contains("xchecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked"); //third and eight checked
        box9.classList.add("clicked")
    }else if((box4.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box7.classList.contains("xchecked"))&&!(box7.classList.contains("ochecked"))){
        box7.classList.add("xchecked");//fourth and eighth
        box7.classList.add("clicked")
    }else if((box4.classList.contains("ochecked"))&&(box9.classList.contains("ochecked"))&&!(box7.classList.contains("xchecked"))&&!(box7.classList.contains("ochecked"))){
        box7.classList.add("xchecked");//fourth and nineth
        box7.classList.add("clicked")
    }else if((box6.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box9.classList.contains("xchecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");//sixth and  eigth checked
        box9.classList.add("clicked")
    }else if((box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box9.classList.contains("xchecked"))&&!(box9.classList.contains("ochecked"))){
        box9.classList.add("xchecked");//sixth and  seventh checked
        box9.classList.add("clicked")
    }else if((box1.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
        box3.classList.add("xchecked");//box 9 clicked by ai || box 1 and 5 clicked by person
        box3.classList.add("clicked") //done airoadsecondblock
    }else  if((box3.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");//box 9 clicked by ai || box 3 and 6 clicked by person
        box5.classList.add("clicked") //done airoadsecondblock
    }else  if((box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");//box 9 clicked by ai || box 6 and 7 clicked by person
        box5.classList.add("clicked") //done airoadsecondblock
    }else  if((box7.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");//box 9 clicked by ai || box 7 and 8 clicked by person
        box5.classList.add("clicked") //done airoadsecondblock
    }else  if((box6.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");//box 9 clicked by ai || box 6 and 8 clicked by person
        box5.classList.add("clicked")//done airroadsecondblock
    }else  if((box9.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box1.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
        box3.classList.add("xchecked");//box 1 clicked by ai || box 9 and 5 clicked by person
        box3.classList.add("clicked")
    }else if((box1.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&(box3.classList.contains("xchecked"))&&(box4.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&!(box2.classList.contains("ochecked"))){
        box2.classList.add("xchecked");//box 3,4,9 clicked by ai || box 1,5,6,7 clicked by person
        box2.classList.add("clicked")
    }else if((box2.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&(box9.classList.contains("ochecked"))&&(box1.classList.contains("xchecked"))&&(box3.classList.contains("xchecked"))&&(box8.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box4.classList.contains("ochecked"))){
        box4.classList.add("xchecked");//box 1,3,8 clicked by ai || box  2  5,7,9 clicked by person
        box4.classList.add("clicked")
    }else if((box1.classList.contains("ochecked"))&&(box2.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&(box3.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
        box5.classList.add("xchecked");//box 3,9 clicked by ai || box  1  2,6 clicked by person
        box5.classList.add("clicked")
    }else if((box1.classList.contains("ochecked"))&&(box3.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&(box2.classList.contains("xchecked"))&&(box7.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box4.classList.contains("ochecked"))){
        box4.classList.add("xchecked");//box 2,7,9 clicked by ai || box  1  3,5,8 clicked by person
        box4.classList.add("clicked")
    }else if((box3.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box4.classList.contains("xchecked"))&&!(box4.classList.contains("ochecked"))){
        box4.classList.add("xchecked");//box 9 clicked by ai || box    3,8 clicked by person
        box4.classList.add("clicked")
    }else if((box2.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box1.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))){
        box1.classList.add("xchecked");//box 9 clicked by ai || box    3,8 clicked by person
        box1.classList.add("clicked")
    }



}
});

// function aiThinkingDefendCritical() {
//     if ((box1.classList.contains("ochecked")) && (box2.classList.contains("ochecked")) && !(box3.classList.contains("xchecked")) && !(box3.classList.contains("ochecked"))) {
//         box3.classList.add("xchecked");
//         box3.classList.add("clicked");
//     } else if ((box2.classList.contains("ochecked")) && (box3.classList.contains("ochecked")) && !(box1.classList.contains("xchecked")) && !(box1.classList.contains("ochecked"))) {
//         box1.classList.add("xchecked");
//         box1.classList.add("clicked");
//     } else if ((box1.classList.contains("ochecked")) && (box3.classList.contains("ochecked")) && !(box2.classList.contains("xchecked")) && !(box2.classList.contains("ochecked"))) {
//         box2.classList.add("xchecked");
//         box2.classList.add("clicked");
//     } else if ((box4.classList.contains("ochecked")) && (box5.classList.contains("ochecked")) && !(box6.classList.contains("xchecked")) && !(box6.classList.contains("ochecked"))) {
//         box6.classList.add("xchecked");
//         box6.classList.add("clicked");
//     } else if ((box5.classList.contains("ochecked")) && (box6.classList.contains("ochecked")) && !(box4.classList.contains("xchecked")) && !(box4.classList.contains("ochecked"))) {
//         box4.classList.add("xchecked");
//         box4.classList.add("clicked");
//     } else if ((box4.classList.contains("ochecked")) && (box6.classList.contains("ochecked")) && !(box5.classList.contains("xchecked")) && !(box5.classList.contains("ochecked"))) {
//         box5.classList.add("xchecked");
//         box5.classList.add("clicked");
//     } else if ((box7.classList.contains("ochecked")) && (box8.classList.contains("ochecked")) && !(box9.classList.contains("xchecked")) && !(box9.classList.contains("ochecked"))) {
//         box9.classList.add("xchecked");
//         box9.classList.add("clicked");
//     } else if ((box8.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box7.classList.contains("xchecked")) && !(box7.classList.contains("ochecked"))) {
//         box7.classList.add("xchecked");
//         box7.classList.add("clicked");
//     } else if ((box7.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box8.classList.contains("xchecked")) && !(box8.classList.contains("ochecked"))) {
//         box8.classList.add("xchecked");
//         box8.classList.add("clicked");
//     } else if ((box1.classList.contains("ochecked")) && (box4.classList.contains("ochecked")) && !(box7.classList.contains("xchecked")) && !(box7.classList.contains("ochecked"))) {
//         box7.classList.add("xchecked");
//         box7.classList.add("clicked");
//     } else if ((box4.classList.contains("ochecked")) && (box7.classList.contains("ochecked")) && !(box1.classList.contains("xchecked")) && !(box1.classList.contains("ochecked"))) {
//         box1.classList.add("xchecked");
//         box1.classList.add("clicked");
//     } else if ((box1.classList.contains("ochecked")) && (box7.classList.contains("ochecked")) && !(box4.classList.contains("xchecked")) && !(box4.classList.contains("ochecked"))) {
//         box4.classList.add("xchecked");
//         box4.classList.add("clicked");
//     } else if ((box2.classList.contains("ochecked")) && (box5.classList.contains("ochecked")) && !(box8.classList.contains("xchecked")) && !(box8.classList.contains("ochecked"))) {
//         box8.classList.add("xchecked");
//         box8.classList.add("clicked");
//     } else if ((box5.classList.contains("ochecked")) && (box8.classList.contains("ochecked")) && !(box2.classList.contains("xchecked")) && !(box2.classList.contains("ochecked"))) {
//         box2.classList.add("xchecked");
//         box2.classList.add("clicked");
//     } else if ((box2.classList.contains("ochecked")) && (box8.classList.contains("ochecked")) && !(box5.classList.contains("xchecked")) && !(box5.classList.contains("ochecked"))) {
//         box5.classList.add("xchecked");
//         box5.classList.add("clicked");
//     } else if ((box3.classList.contains("ochecked")) && (box6.classList.contains("ochecked")) && !(box9.classList.contains("xchecked")) && !(box9.classList.contains("ochecked"))) {
//         box9.classList.add("xchecked");
//         box9.classList.add("clicked");
//     } else if ((box6.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box3.classList.contains("xchecked")) && !(box3.classList.contains("ochecked"))) {
//         box3.classList.add("xchecked");
//         box3.classList.add("clicked");
//     } else if ((box3.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box6.classList.contains("xchecked")) && !(box6.classList.contains("ochecked"))) {
//         box6.classList.add("xchecked");
//         box6.classList.add("clicked");
//     } else if ((box1.classList.contains("ochecked")) && (box5.classList.contains("ochecked")) && !(box9.classList.contains("xchecked")) && !(box9.classList.contains("ochecked"))) {
//         box9.classList.add("xchecked");
//         box9.classList.add("clicked");
//     } else if ((box5.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box1.classList.contains("xchecked")) && !(box1.classList.contains("ochecked"))) {
//         box1.classList.add("xchecked");
//         box1.classList.add("clicked");
//     } else if ((box1.classList.contains("ochecked")) && (box9.classList.contains("ochecked")) && !(box5.classList.contains("xchecked")) && !(box5.classList.contains("ochecked"))) {
//         box5.classList.add("xchecked");
//         box5.classList.add("clicked");
//     } else if ((box3.classList.contains("ochecked")) && (box5.classList.contains("ochecked")) && !(box7.classList.contains("xchecked")) && !(box7.classList.contains("ochecked"))) {
//         box7.classList.add("xchecked");
//         box7.classList.add("clicked");
//     } else if ((box5.classList.contains("ochecked")) && (box7.classList.contains("ochecked")) && !(box3.classList.contains("xchecked")) && !(box3.classList.contains("ochecked"))) {
//         box3.classList.add("xchecked");
//         box3.classList.add("clicked");
//     } else if ((box3.classList.contains("ochecked")) && (box7.classList.contains("ochecked")) && !(box5.classList.contains("xchecked")) && !(box5.classList.contains("ochecked"))) {
//         box5.classList.add("xchecked");
//         box5.classList.add("clicked");
//     }
// }//ai proof done

// function aiThinkingStarting(){
//  if((box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked"); //box 1 clicked
//         box9.classList.add("clicked")
//     }else  if(!(box1.classList.contains("ochecked"))&&(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");//box 2 clicked
//         box9.classList.add("clicked")
//     }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");//box 3 clicked
//         box9.classList.add("clicked")
//     }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");//box 4 clicked
//         box9.classList.add("clicked")
//     } else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");//box 5 clicked
//         box9.classList.add("clicked")
//     }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");//box 6 clicked
//         box9.classList.add("clicked")
//     }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");// box 7 clicked
//         box9.classList.add("clicked")
//     }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");//box 8 clicked
//         box9.classList.add("clicked")
//     }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&(box9.classList.contains("ochecked"))){
//         box1.classList.add("xchecked");//box 9 clicked
//         box1.classList.add("clicked")
//     }
// }//ai proof done
// function aiThinking2Step(){
//     if((box1.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
//         box3.classList.add("xchecked");//first and  sixth checked
//         box3.classList.add("clicked")
//     }else  if((box1.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box7.classList.contains("xchecked"))&&!(box7.classList.contains("ochecked"))){
//         box7.classList.add("xchecked");//first and  eighth cheked
//         box7.classList.add("clicked")
//     }else  if((box2.classList.contains("ochecked"))&&(box4.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box1.classList.contains("ochecked"))){
//         box1.classList.add("xchecked");// second and fourth checked
//         box1.classList.add("clicked")
//     }else  if((box2.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
//         box3.classList.add("xchecked"); //second and sixth checked
//         box3.classList.add("clicked")
//     }else  if((box1.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box1.classList.contains("ochecked"))){
//         box1.classList.add("xchecked"); //second and seventh checked
//         box1.classList.add("clicked")
//     }else  if((box3.classList.contains("ochecked"))&&(box4.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box1.classList.contains("ochecked"))){
//         box1.classList.add("xchecked");// third and fourth checked
//         box1.classList.add("clicked")
//     }else  if((box1.classList.contains("ochecked"))&&(box2.classList.contains("ochecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
//         box2.classList.add("xchecked");// second and ninth checked
//         box9.classList.add("clicked")
//     }else  if((box3.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box9.classList.contains("xchecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked"); //third and eight checked
//         box9.classList.add("clicked")
//     }else if((box4.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box7.classList.contains("xchecked"))&&!(box7.classList.contains("ochecked"))){
//         box7.classList.add("xchecked");//fourth and eighth
//         box7.classList.add("clicked")
//     }else if((box4.classList.contains("ochecked"))&&(box9.classList.contains("ochecked"))&&!(box7.classList.contains("xchecked"))&&!(box7.classList.contains("ochecked"))){
//         box7.classList.add("xchecked");//fourth and nineth
//         box7.classList.add("clicked")
//     }else if((box6.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box9.classList.contains("xchecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");//sixth and  eigth checked
//         box9.classList.add("clicked")
//     }else if((box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box9.classList.contains("xchecked"))&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");//sixth and  seventh checked
//         box9.classList.add("clicked")
//     }
//     //1 - 8,6,  //2 - 4,6,7,9  //3-  4,8,   //4- 8,9  //6- 8 7 
// }//ai proof done


// function aiRoadBlockSecondMovev(){
//     if((box1.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&(box3.classList.contains("xchecked"))&&(box4.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&!(box2.classList.contains("ochecked"))){
//         box2.classList.add("xchecked");//box 3,4,9 clicked by ai || box 1,5,6,7 clicked by person
//         box2.classList.add("clicked")
//     }else if((box2.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&(box9.classList.contains("ochecked"))&&(box1.classList.contains("xchecked"))&&(box3.classList.contains("xchecked"))&&(box8.classList.contains("xchecked"))&&!(box.classList.contains("xchecked"))&&!(box4.classList.contains("ochecked"))){
//         box4.classList.add("xchecked");//box 1,3,8 clicked by ai || box  2  5,7,9 clicked by person
//         box4.classList.add("clicked")
//     }
// }//done
// function aiAttacker(){
//     if(box1.classList.contains("xchecked")&&box2.classList.contains("xchecked")&&!(box3.classList.contains("ochecked"))){
//         box3.classList.add("xchecked");
//         box3.classList.add("clicked")
//     }else  if(box2.classList.contains("xchecked")&&box3.classList.contains("xchecked")&&!(box1.classList.contains("ochecked"))){
//         box1.classList.add("xchecked");
//         box1.classList.add("clicked")
//     }else  if(box1.classList.contains("xchecked")&&box3.classList.contains("xchecked")&&!(box2.classList.contains("ochecked"))){
//         box2.classList.add("xchecked");
//         box2.classList.add("clicked")
//     }else if(box4.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&!(box6.classList.contains("ochecked"))){
//         box6.classList.add("xchecked");
//         box6.classList.add("clicked")
//     }else if(box5.classList.contains("xchecked")&&box6.classList.contains("xchecked")&&!(box4.classList.contains("ochecked"))){
//         box4.classList.add("xchecked");
//         box4.classList.add("clicked")
//     }else if(box4.classList.contains("xchecked")&&box6.classList.contains("xchecked")&&!(box5.classList.contains("ochecked"))){
//         box5.classList.add("xchecked");
//         box5.classList.add("clicked")
//     } 
//     else  if(box7.classList.contains("xchecked")&&box8.classList.contains("xchecked")&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");
//         box9.classList.add("clicked")
//     }else if(box8.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box7.classList.contains("ochecked"))){
//         box7.classList.add("xchecked");
//         box7.classList.add("clicked")
//     }else if(box7.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box8.classList.contains("ochecked"))){
//         box8.classList.add("xchecked");
//         box8.classList.add("clicked")
//     }
//     else if(box1.classList.contains("xchecked")&&box4.classList.contains("xchecked")&&!(box7.classList.contains("ochecked"))){
//         box7.classList.add("xchecked");
//         box7.classList.add("clicked")
//     }else if(box4.classList.contains("xchecked")&&box7.classList.contains("xchecked")&&!(box1.classList.contains("ochecked"))){
//         box1.classList.add("xchecked");
//         box1.classList.add("clicked")
//     }else if(box1.classList.contains("xchecked")&&box7.classList.contains("xchecked")&&!(box4.classList.contains("ochecked"))){
//         box4.classList.add("xchecked");
//         box4.classList.add("clicked")
//     }
//     else  if(box2.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&!(box8.classList.contains("ochecked"))){
//         box8.classList.add("xchecked");
//         box8.classList.add("clicked")
//     }else if(box5.classList.contains("xchecked")&&box8.classList.contains("xchecked")&&!(box2.classList.contains("ochecked"))){
//         box2.classList.add("xchecked");
//         box2.classList.add("clicked")
//     }else if(box2.classList.contains("xchecked")&&box8.classList.contains("xchecked")&&!(box5.classList.contains("ochecked"))){
//         box5.classList.add("xchecked");
//         box5.classList.add("clicked")
//     }
//     else   if(box3.classList.contains("xchecked")&&box6.classList.contains("xchecked")&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");
//         box9.classList.add("clicked")
//     }else if(box6.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box3.classList.contains("ochecked"))){
//         box3.classList.add("xchecked");
//         box3.classList.add("clicked")
//     }else if(box3.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box6.classList.contains("ochecked"))){
//         box6.classList.add("xchecked");
//         box6.classList.add("clicked")
//     }
    
//     else    if(box1.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&!(box9.classList.contains("ochecked"))){
//         box9.classList.add("xchecked");
//         box9.classList.add("clicked");
//     }else if(box5.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box1.classList.contains("ochecked"))){
//         box1.classList.add("xchecked");
//         box1.classList.add("clicked");
//     }else if(box1.classList.contains("xchecked")&&box9.classList.contains("xchecked")&&!(box5.classList.contains("ochecked"))){
//         box5.classList.add("xchecked");
//         box5.classList.add("clicked");
//     }
//     else   if(box3.classList.contains("xchecked")&&box5.classList.contains("xchecked")&&!(box7.classList.contains("ochecked"))){
//         box7.classList.add("xchecked");
//         box7.classList.add("clicked");
//     }else if(box5.classList.contains("xchecked")&&box7.classList.contains("xchecked")&&!(box3.classList.contains("ochecked"))){
//         box3.classList.add("xchecked");
//         box3.classList.add("clicked");
//     }else if(box3.classList.contains("xchecked")&&box7.classList.contains("xchecked")&&!(box5.classList.contains("ochecked"))){
//         box5.classList.add("xchecked");
//         box5.classList.add("clicked")
//     }}//aiproof done
// function aiRoadBlockFirstMovev(){
//     if((box1.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
//         box3.classList.add("xchecked");//box 9 clicked by ai || box 1 and 5 clicked by person
//         box3.classList.add("clicked") //done airoadsecondblock
//     }else  if((box3.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
//         box5.classList.add("xchecked");//box 9 clicked by ai || box 3 and 6 clicked by person
//         box5.classList.add("clicked") //done airoadsecondblock
//     }else  if((box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
//         box5.classList.add("xchecked");//box 9 clicked by ai || box 6 and 7 clicked by person
//         box5.classList.add("clicked") //done airoadsecondblock
//     }else  if((box7.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
//         box5.classList.add("xchecked");//box 9 clicked by ai || box 7 and 8 clicked by person
//         box5.classList.add("clicked") //done airoadsecondblock
//     }else  if((box6.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&(box9.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box5.classList.contains("ochecked"))){
//         box5.classList.add("xchecked");//box 9 clicked by ai || box 6 and 8 clicked by person
//         box5.classList.add("clicked")//done airroadsecondblock
//     }else  if((box9.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box1.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box3.classList.contains("ochecked"))){
//         box3.classList.add("xchecked");//box 1 clicked by ai || box 9 and 5 clicked by person
//         box3.classList.add("clicked")
//     }
// }//ai proof done
// function aiRoadBlockSecondMove(){
//     if((box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&(box3.classList.contains("xchecked"))&&(box4.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box6.classList.contains("xchecked"))&&!(box7.classList.contains("xchecked"))&&!(box8.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))){
//         box2.classList.add("xchecked");//box 3,4,9 clicked by ai || box 1,5,6,7 clicked by person
//         box2.classList.add("clicked")
//     }else if(!(box1.classList.contains("ochecked"))&&(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&(box9.classList.contains("ochecked"))&&(box1.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&(box3.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box6.classList.contains("xchecked"))&&!(box7.classList.contains("xchecked"))&&(box8.classList.contains("xchecked"))&&!(box9.classList.contains("xchecked"))){
//         box4.classList.add("xchecked");//box 1,3,8 clicked by ai || box  2  5,7,9 clicked by person
//         box4.classList.add("clicked")
//     }
// }
// function aiRoadBlockFirstMove(){
//     if((box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box6.classList.contains("xchecked"))&&!(box7.classList.contains("xchecked"))&&!(box8.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))){
//           box3.classList.add("xchecked");//box 9 clicked by ai || box 1 and 5 clicked by person
//           box3.classList.add("clicked") //done airoadsecondblock
//       }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box6.classList.contains("xchecked"))&&!(box7.classList.contains("xchecked"))&&!(box8.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))){
//           box5.classList.add("xchecked");//box 9 clicked by ai || box 3 and 6 clicked by person
//           box5.classList.add("clicked") //done airoadsecondblock
//       }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box6.classList.contains("xchecked"))&&!(box7.classList.contains("xchecked"))&&!(box8.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))){
//           box5.classList.add("xchecked");//box 9 clicked by ai || box 6 and 7 clicked by person
//           box5.classList.add("clicked") //done airoadsecondblock
//       }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&(box7.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box6.classList.contains("xchecked"))&&!(box7.classList.contains("xchecked"))&&!(box8.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))){
//           box5.classList.add("xchecked");//box 9 clicked by ai || box 7 and 8 clicked by person
//           box5.classList.add("clicked") //done airoadsecondblock
//       }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&!(box5.classList.contains("ochecked"))&&(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&(box8.classList.contains("ochecked"))&&!(box9.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box6.classList.contains("xchecked"))&&!(box7.classList.contains("xchecked"))&&!(box8.classList.contains("xchecked"))&&(box9.classList.contains("xchecked"))){
//           box5.classList.add("xchecked");//box 9 clicked by ai || box 6 and 8 clicked by person
//           box5.classList.add("clicked")//done airroadsecondblock
//       }else  if(!(box1.classList.contains("ochecked"))&&!(box2.classList.contains("ochecked"))&&!(box3.classList.contains("ochecked"))&&!(box4.classList.contains("ochecked"))&&(box5.classList.contains("ochecked"))&&!(box6.classList.contains("ochecked"))&&!(box7.classList.contains("ochecked"))&&!(box8.classList.contains("ochecked"))&&(box9.classList.contains("ochecked"))&&!(box1.classList.contains("xchecked"))&&!(box2.classList.contains("xchecked"))&&!(box3.classList.contains("xchecked"))&&!(box4.classList.contains("xchecked"))&&!(box5.classList.contains("xchecked"))&&!(box6.classList.contains("xchecked"))&&!(box7.classList.contains("xchecked"))&&!(box8.classList.contains("xchecked"))&&!(box9.classList.contains("xchecked"))){
//           box3.classList.add("xchecked");//box 1 clicked by ai || box 9 and 5 clicked by person
//           box3.classList.add("clicked")
//       }
//   }