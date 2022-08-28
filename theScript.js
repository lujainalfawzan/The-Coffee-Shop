//  var Choose = document.getElementById("floated2");
 // Choose.addEventListener("click", coffeeshop , false);

function coffeeshop(){

var o = window.prompt("what you want to order?")

var result = window.prompt("What size do you like?");

if(result){
  window.alert("Thank you for your order!");

}else{
  window.alert("Please choose the size");

}
}



function mouseover(x){

    if( x.target.getAttribute("id")=="b"){
        document.getElementById("output").innerHTML= "Black Coffee";
    }

    if( x.target.getAttribute("id")=="i"){
        document.getElementById("output").innerHTML= "Ice Coffee";
    }

    if( x.target.getAttribute("id")=="l"){
        document.getElementById("output").innerHTML= "Ice latte";
    }

    if( x.target.getAttribute("id")=="f"){
        document.getElementById("output").innerHTML= "Flat White";
    }
    
   
}

function mouseout(x){
    
  if( x.target.getAttribute("id")=="b"){
    document.getElementById("output").innerHTML= "";
}

if( x.target.getAttribute("id")=="i"){
    document.getElementById("output").innerHTML= "";
}

if( x.target.getAttribute("id")=="l"){
    document.getElementById("output").innerHTML= "";
}

if( x.target.getAttribute("id")=="f"){
    document.getElementById("output").innerHTML= "";
}
}


document.addEventListener("mouseover", mouseover,false);
document.addEventListener("mouseout", mouseout , false);



