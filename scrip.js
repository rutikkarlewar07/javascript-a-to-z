

const operatorList = ["+", "-", "*", "/"]; //create a array for all operetor 
let currentOpIndex = 0;  // start with 0 means +
const operator = (document.querySelector("#operator"));  // acsses operetpre id from html  

operator.addEventListener("click", () => {
    currentOpIndex = (currentOpIndex + 1) % operatorList.length;
    operator.textContent = operatorList[currentOpIndex];  // the block for act like loop to chaneg operator 
});

function calculate() {
    const num1 = parseFloat(document.querySelector("#num1").value); 
    const num2 = parseFloat(document.querySelector("#num2").value);
    const op = operatorList[currentOpIndex]; 
    let result;

    if (num1 == 0 && num2 == 0) {
        alert("please enter a numbe ");
        return;
    }
    else {
        if (op == "+") result = num1 + num2;
        else if (op == "-") result = num1 - num2;
        else if (op == "*") result = num1 * num2;
        else if (op == "/"){
            result=num2 !==0 ?num1/num2:"Cannot Divide by zero "
        }
    }
    document.getElementById("result").textContent = "Result: " + result;

}

const btn = document.querySelector("#btn");
btn.addEventListener("click", calculate);
