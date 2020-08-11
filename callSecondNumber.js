let number = 10 ;
function myNumber(callSecondNumber){ 
  number +=5; 
  callSecondNumber();
} 

function callSecondNumber(){
  console.log(number--) ; 
}

myNumber(callSecondNumber);