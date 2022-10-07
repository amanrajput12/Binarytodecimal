  

let  binary = document.querySelector("#binary")
let result =document.querySelector(".result")

// rst.innerText ="hello"
const subBtn= document.querySelector(".btn")

subBtn.addEventListener("click",binaryToDecimal)
function binaryToDecimal(e){
  e.preventDefault();
    let bnrValue = binary.value;
    console.log(bnrValue);
   let digit = parseInt(bnrValue, 2);
    console.log(digit);
    result.innerText= `decimal value is : ${digit}`
   
   
}





