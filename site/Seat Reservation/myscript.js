document.addEventListener("DOMContentLoaded",function(){
    let reservedSeats={
        record1:{
            owner:{
                fname:"Annonymous",
                lname:""
            },
            seat:"b19"
        },
        record2:{
            owner:{
                fname:"Annonymous",
                lname:""
            },
            seat:"b20"
        },
        record3:{
            owner:{
                fname:"Annonymous",
                lname:""
            },
            seat:"b21"
        },
        record4:{
            owner:{
                fname:"Annonymous",
                lname:""
            },
            seat:"b22"
        }
    } //seats already reserved
    
    function seatReservation(sectionLength,rowLength,position){
    let html=""
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
    let counter=1;
    alphabet.forEach(row=>{
        switch(position){
            case "left": html+=`<div class="label">${row}</div>`;break;
            case "right":counter+=rowLength-sectionLength;break;
            default:counter+=(rowLength-sectionLength)/2;break;
        }
        //loop here
        for(let i=0;i<sectionLength;i++){
            html+=`<div class="a" id="${row+counter}">${counter}</div>`
            counter++;
        }
        switch(position){
            case "left":counter+=rowLength-sectionLength;break;
            case "right":html+=`<div class="label">${row}</div>`;break;
            default:counter+=(rowLength-sectionLength)/2;break;
        }
    })
    document.getElementById(position).innerHTML=html;
    }
    seatReservation(3,15,"left")
    seatReservation(9,15,"middle")
    seatReservation(3,15,"right")
    
    for(const key in reservedSeats){
        const obj=reservedSeats[key]
        if(reservedSeats.hasOwnProperty(key)){

        
            document.getElementById(obj.seat).className="r";
            document.getElementById(obj.seat).innerHTML="R";
        }
    
    }
    let selectedSeats=[]
    let seats=document.querySelectorAll(".a");
    seats.forEach(elements=>{
        elements.addEventListener("click",()=>{
            seatSelectionProcess(elements.id)
            //get the id of the sit
            // seatSelectionProcess to add on the sit
        })
    })
    function seatSelectionProcess(thisSeat){
        // selectedSeats.push(thisSeat)
        let index=selectedSeats.indexOf(thisSeat)
        if(!document.getElementById(thisSeat).classList.contains("r")){
        if(index>-1){
            //take the seat out of the array
            // change the class back to a
            selectedSeats.splice(index,1);
            document.getElementById(thisSeat).className="a";
        }else{
              // take the seat inside the array
            //change the class to s
            selectedSeats.push(thisSeat)
            document.getElementById(thisSeat).className="s";
          
        }
        console.log(selectedSeats)
        managedConfirmedForm()
    }

      
    }
    document.getElementById("reserve").addEventListener("click",event=>{
        document.getElementById("resform").style.display="block"
     
        event.preventDefault();
    })
    document.getElementById("cancel").addEventListener("click",event=>{
        document.getElementById("resform").style.display="none"
        event.preventDefault()
    })

    function managedConfirmedForm(){
        if(selectedSeats.length==0){
            document.getElementById("confirmres").style.display="none"
            document.getElementById("selectedseats").innerHTML=`You need to select some seats to be reserved.
            <br><a href="#" id="error">Close</a> this dialog box and pick at least one seat.`
            document.getElementById("error").addEventListener("click",event=>{
                document.getElementById("resform").style.display="none"
                event.preventDefault()
            })

        }else{
            let seatString=selectedSeats.toString();
            seatString=seatString.replace(/,/g,", ")
            let index=seatString.lastIndexOf(",");
            if(index!=-1){
                seatString=seatString.slice(0,index)+" and"+seatString.slice(index+1);
            }
            if(selectedSeats.length!=1){
                document.getElementById("selectedseats").innerHTML=`You have selected seats ${seatString} `
            }else{
                document.getElementById("selectedseats").innerHTML=`You have selected seat ${seatString} `
            }
            
            
            
            document.getElementById("confirmres").style.display="block"
      
        }
    }

    managedConfirmedForm()
    document.getElementById("confirmres").addEventListener("submit",event=>{
        event.preventDefault();

        processReservation();
        

    })
    let eachSeat="";
   let message="";
   let messageValue="<i>This page is not using any kind of database all information is based on local compuer</i> <p>Reserved Seats<p>";
    function processReservation(){
        const hardCoreRecords=Object.keys(reservedSeats).length;
        const fname=document.getElementById("fname").value;
        const lname=document.getElementById("lname").value;
        let counter=1;
        let nextrecord='';
        selectedSeats.forEach((thisSeat)=>{
            document.getElementById(thisSeat).className="r";
            document.getElementById(thisSeat).innerHTML="R";
            nextrecord=`record${counter+hardCoreRecords}`
            
            reservedSeats[nextrecord]={
                owner:{
                    fname:fname,
                    lname:lname
                },
                seat:thisSeat
            }
            eachSeat+=`${reservedSeats[nextrecord].seat} `
           

            counter++;
            
    
        })
        message += `<p>${reservedSeats[nextrecord].owner.fname} ${reservedSeats[nextrecord].owner.lname}: ${eachSeat}</p>`;
       message=message.toUpperCase()
       
        messageValue+=message;
        message="";
        eachSeat="";
        document.getElementById("displayer").innerHTML=messageValue;
        
        document.getElementById("resform").style.display="none";
        selectedSeats=[];
        managedConfirmedForm()
        console.log(reservedSeats)
       
    }

})
