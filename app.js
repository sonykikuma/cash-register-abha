const billAmount=document.querySelector("#bill-amount")
const cashGiven= document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-button")
const message= document.querySelector("#error-message")
const noOfNotes= document.querySelectorAll(".no-of-notes")



const availableNotes = [2000, 500 , 100, 20, 10 , 1];

function showMessage(errorMessage){
    message.style.display= "block";
    message.innerText = errorMessage;
}



const validateBillamount=()=>{
message.style.display="none";

    if(billAmount.value > 0){

if(cashGiven.value > billAmount.value && cashGiven.value === billAmount.value){
const amountTobeReturned = cashGiven.value - billAmount.value;
calculateChange(amountTobeReturned)

}else{
    showMessage("the cash provided should be atleast equal to bill amount")
}
    } else 
    {showMessage("Invalid bill amount")
    }

}

function calculateChange(amountTobeReturned){
for(let i = 0; i < availableNotes.length; i++){
    const numberofNotes = Math.trunc(amountTobeReturned / availableNotes[i]);
amountTobeReturned = amountTobeReturned % availableNotes[i];
noOfNotes[i].innerText = numberofNotes;

}
}
checkButton.addEventListener("click", validateBillamount
)