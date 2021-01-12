
function increase(id,price,ctn,total){
     var inp=document.getElementById(id);
     let prix4=document.getElementById(total)
     let prix=document.getElementById(price)
     var val=Number(inp.value);
     val++;
     inp.value=val;
     prix.value=inp.value*ctn;
     prix4.value=Number(prix4.value)+ctn
}

function decrease(id,price,ctn,total){
    let prix4=document.getElementById(total)
    let prix=document.getElementById(price)
    let inp=document.getElementById(id);
    let val=parseInt(inp.value);
    if (val>0){val--
    }
    else val=0
    inp.value=val;
    prix.value=inp.value*ctn

}



    



// function multiplication(price){
//     let price=document.getElementById(price);
//     console.log(price);

//     let price=(inp.value*140);
// }

