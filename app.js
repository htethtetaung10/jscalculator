function input(input){
    let inputtxt = document.getElementById("inputtext").value;
    inputtxt = inputtxt.concat(input);
    document.getElementById("inputtext").value = inputtxt; 
}

function calculate(){
    var num1="", num2="", num3="", num4="", signsearch, sign, cal;
    var i=0, j=0;

    let inputtxt = document.getElementById("inputtext").value;
    // console.log(inputtxt);
    
    while(inputtxt[j]!="+" && inputtxt[j]!="-" && inputtxt[j]!="*" && inputtxt[j]!="/" && inputtxt[j]!="%" && j<inputtxt.length){
        j++;
    }
    // console.log(j);

    for(i; i<inputtxt.length; i++){
        if(inputtxt[i]!="+" && inputtxt[i]!="-" && inputtxt[i]!="*" && inputtxt[i]!="/" && inputtxt[i]!="%" && i<j){
            num3 = inputtxt[i];
            num1 = num1.concat(num3);
        }else if(i==j){
                sign = inputtxt[i];
        }
        else{
            num4 = inputtxt[i];
            num2 = num2.concat(num4)
        }	
    }

    num1 = Number(num1);
    num2 = Number(num2);
    // console.log(num1);
    // console.log(num2);
    // console.log(sign);
    console.log(typeof num1);
    console.log(typeof num2);

    switch(sign){
        case "+":
        cal = num1 + num2;
        break;

        case "-":
        cal = num1-num2;
        break;

        case "*":
        cal = num1*num2;
        break;

        case "/":
        cal = num1/num2;
        break;

        case "%":
        cal = num1%num2;
        break;

        default:
        console.log("No Sign");
    }

    document.getElementById("inputtext").value = inputtxt + " = " + cal;

}

document.getElementById("btnclear").addEventListener("click", clear);

function clear(){
    document.getElementById("inputtext").value= '';
    document.getElementById("result").value= '';
}

document.getElementById("btndel").addEventListener("click", del);

function del(){
    let remainedtext;
    let inputtxt = document.getElementById("inputtext").value;
    
    remainedtext = inputtxt.slice(0, inputtxt.length-1);
    // console.log(remainedtext);
    document.getElementById("inputtext").value = remainedtext;
}

const buttons = document.getElementsByClassName("btn");
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("mouseover", function(){buttons[i].style.background = "#E2A1BE";}); 
    buttons[i].addEventListener("mouseout", function(){buttons[i].style.background = "snow";});  
}

const inputs = document.getElementsByClassName("input");
for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener("mouseover", function(){inputs[i].style.background = "#E2A1BE";});   
    inputs[i].addEventListener("mouseout", function(){inputs[i].style.background = "snow";});  
}
