document.getElementById("ruling").addEventListener("click",function(){
    document.getElementById("covering").className="info"
    document.getElementById("blank").className="cover"
    document.getElementById("x").className="close"
    document.getElementById("tournament_catagorey").style.display="none"
    document.getElementById("content").style.display="none"
    document.getElementById("rule_container").style.display="none"
    
})
document.getElementById("x").addEventListener("click",function(){
    document.getElementById("covering").className="disabled"
    document.getElementById("blank").className="disabled"
    document.getElementById("x").className="disabled"
    document.getElementById("rule_container").style.display="block"
    document.getElementById("rule_container").className="rule"
    document.getElementById("content").style.display="grid"
    document.getElementById("tournament_catagorey").style.display="flex"
})
document.getElementById("y").addEventListener("click",function(){
    document.getElementById("answer").className="disabled"
    document.getElementById("y").className="disabled"
    document.getElementById("content").style.display="grid"
    document.getElementById("score").className="disabled"
    clearTime()
})
let gettingValue={
    user:0,
    cpu:0,
    cwin:0,
    uwin:0,
    round:1,
    thisRound:0,
    turncwin:0,
    turnuwin:0
}
let checkbox=document.getElementById("impossible");

let rand;
let elements=["Rock","Paper","Scissor"]
let image=["Rock1.jpg","papper2.jpg","scissor2.jpg"]
let clicker=document.querySelectorAll("img");
let target;
let myTimeOut;
let problem;
let selectElement = document.getElementById("tournament");
let counter=1;
selectElement.addEventListener("change",function(){
    if(selectElement.value=="two"){
        document.getElementById("op").className="animeout"
        setTimeout(function(){
            document.getElementById("op").style.display="none"
        },1000)
        gettingValue.round=2;
    }else if(selectElement.value=="three"){
        document.getElementById("op").className="animeout"
        setTimeout(function(){
            document.getElementById("op").style.display="none"
        },1000)
        gettingValue.round=3;
    }else{
        document.getElementById("op").className="animein"
        setTimeout(function(){
            document.getElementById("op").style.display="inline-block"
        },1000)
        gettingValue.round=1
    }
})
document.getElementById("op").addEventListener("click",function(){
    if(checkbox.checked){
    document.getElementById("op").style.opacity="1"
    }else{
        document.getElementById("op").style.opacity="0.5"
    }
})
for(let i=0;i<clicker.length;i++){
clicker[i].addEventListener("click",function(){
    target=this.id;
    rand=Math.floor(Math.random()*3);
    document.getElementById("content").style.display="none"
    document.getElementById("answer").className="changed";
    document.getElementById("npc").src=image[i];
 

    document.getElementById("cpu").src="loading.gif";
    document.getElementById("teller").className="result"
    document.getElementById("teller").innerHTML="Good luck"
if(gettingValue.round==1){
    if(checkbox.checked){
        
        gettingValue.user=i;
        
        myTimeOut=setTimeout(function(){
        
            winningImpossibleCondition()
            document.getElementById("cpu").src=image[gettingValue.cpu];
            document.getElementById("y").className="close";
        
            setTimeout(()=>{
                winingTeller()
                 problem=setTimeout(()=>{
                    document.getElementById("answer").className="disabled"
                    document.getElementById("y").className="disabled"
                    document.getElementById("content").style.display="grid"
                    clearTime()
                },4000)
            },100)
        },2000)
    }
    else{
        gettingValue.cpu=rand;
        gettingValue.user=i;

        myTimeOut=setTimeout(function(){
        
            winningCondition()
            document.getElementById("cpu").src=image[gettingValue.cpu];
            document.getElementById("y").className="close";
        
            setTimeout(()=>{
                winingTeller()
                 problem=setTimeout(()=>{
                    document.getElementById("answer").className="disabled"
                    document.getElementById("y").className="disabled"
                    document.getElementById("content").style.display="grid"
                    clearTime()
                },4000)
            },100)
        },2000)
    }
}else if(gettingValue.round==2){
    gettingValue.cpu=rand;
    gettingValue.user=i;
   

    myTimeOut=setTimeout(function(){
        
        winningCondition()
       
        document.getElementById("cpu").src=image[gettingValue.cpu];
        document.getElementById("y").className="close";
    
        setTimeout(()=>{
            roundWiningTeller()// you are a winner or a loser ( just text defination) and increment the turn win.
            showingpoint()
            document.getElementById("op").style.display="none";
            document.getElementById("tournament_catagorey").style.display="none";
            if(gettingValue.turncwin==2){
                document.getElementById("teller").innerHTML="You  lose by a cumalation of this round . End of the round"
                problem=setTimeout(()=>{
                    stopping()
                    document.getElementById("answer").className="disabled"
                    document.getElementById("y").className="disabled"
                    document.getElementById("content").style.display="grid"
                    clearTime()
                },4000)
            }else if(gettingValue.turnuwin==2){
                document.getElementById("teller").innerHTML="Congragulation !You  win by a cumalation of this round . End of the round"
                problem=setTimeout(()=>{
                    stopping()
                    document.getElementById("answer").className="disabled"
                    document.getElementById("y").className="disabled"
                    document.getElementById("content").style.display="grid"
                   
                    clearTime()
                },4000)
            }

                
             problem=setTimeout(()=>{
                document.getElementById("answer").className="disabled"
                document.getElementById("y").className="disabled"
                document.getElementById("content").style.display="grid"
                document.getElementById("score").className="disabled"
                clearTime()
            },4000)
        },100)
    },2000)


}else if(gettingValue.round==3){

    gettingValue.cpu=rand;
    gettingValue.user=i;
   

    myTimeOut=setTimeout(function(){
        
        winningCondition()
       
        document.getElementById("cpu").src=image[gettingValue.cpu];
        document.getElementById("y").className="close";
    
        setTimeout(()=>{
            roundWiningTeller()// you are a winner or a loser ( just text defination) and increment the turn win.
            showingpoint()
            document.getElementById("op").style.display="none";
            document.getElementById("tournament_catagorey").style.display="none";
            if(gettingValue.turncwin==3){
                document.getElementById("teller").innerHTML="You  lose by a cumulation  of this round . End of the round"
                problem=setTimeout(()=>{
                    stopping()
                    document.getElementById("answer").className="disabled"
                    document.getElementById("y").className="disabled"
                    document.getElementById("content").style.display="grid"
                    clearTime()
                },4000)
            }else if(gettingValue.turnuwin==3){
                document.getElementById("teller").innerHTML="Congragulation !You  win by a cumulation  of this round . End of the round"
                problem=setTimeout(()=>{
                    stopping()
                    document.getElementById("answer").className="disabled"
                    document.getElementById("y").className="disabled"
                    document.getElementById("content").style.display="grid"
                   
                    clearTime()
                },4000)
            }

                
             problem=setTimeout(()=>{
                document.getElementById("answer").className="disabled"
                document.getElementById("y").className="disabled"
                document.getElementById("content").style.display="grid"
                document.getElementById("score").className="disabled"
                clearTime()
            },4000)
        },100)
    },2000)
}




})
}
const duration = 7200;
const alwaysH2 = document.getElementById("always");
setTimeout(function() {
    document.getElementById("loading-container").style.display = "none";
    alwaysH2.style.display = "none";
}, duration);

function roundWiningTeller(){
    
    if(gettingValue.cwin>gettingValue.uwin){
        document.getElementById("teller").innerHTML="You lose"
       gettingValue.turncwin+=1;

       
    }else if(gettingValue.cwin<gettingValue.uwin){
        document.getElementById("teller").innerHTML="You won"
        gettingValue.turnuwin+=1;
    }
    else{
        document.getElementById("teller").innerHTML="Draw ready to play again"
   
    }
    gettingValue.cwin = 0;
    gettingValue.uwin = 0
}
function winingTeller(){
    if(gettingValue.cwin>gettingValue.uwin){
        document.getElementById("teller").innerHTML="You lose"
       

       
    }else if(gettingValue.cwin==gettingValue.uwin){
        document.getElementById("teller").innerHTML="Draw Ready to Play again"

    }
    else{
        document.getElementById("teller").innerHTML="You won"
    }
    resetValue()
}

function winningCondition(){
    if(gettingValue.cpu==0&&gettingValue.user==1){
        gettingValue.uwin=1
    
    }
    else if(gettingValue.cpu==1&&gettingValue.user==0){
        gettingValue.cwin=1
    }
    else if(gettingValue.cpu==0&&gettingValue.user==2){
        gettingValue.cwin=1
    }
    else if(gettingValue.cpu==2&&gettingValue.user==0){
        gettingValue.uwin=1
    }
    else if(gettingValue.cpu==2&&gettingValue.user==1){
        gettingValue.cwin=1
    }else if(gettingValue.cpu==1&&gettingValue.user==2){
        gettingValue.uwin=1
    }

    else {
        gettingValue.uwin=0;
        gettingValue.cwin=0;
    }
    
}
function winningImpossibleCondition(){
    if(gettingValue.user==0){
        gettingValue.cpu=1
        gettingValue.cwin=1
    }
   else if(gettingValue.user==1){
        gettingValue.cpu=2
        gettingValue.cwin=1
    }
    else if(gettingValue.user==2){
        gettingValue.cpu=0
        gettingValue.cwin=1
    }
   
    
}
function resetValue(){
    for(let x in gettingValue){
        gettingValue[x]=0;
    }
    gettingValue.round=1;
}
function clearTime(){
    clearTimeout(problem)

}
function stopping(){
    document.getElementById("op").style.display="inline-block";
    document.getElementById("tournament_catagorey").style.display="flex";
    document.getElementById("score").className="disabled";
    gettingValue.turncwin=0;
    gettingValue.turnuwin=0;
    gettingValue.round=1;
    selectElement.value="one"
}
function showingpoint(){
    document.getElementById("score").className="winner";
    document.getElementById("score").innerHTML=`You:${gettingValue.turnuwin} CPU:${gettingValue.turncwin} `
}
