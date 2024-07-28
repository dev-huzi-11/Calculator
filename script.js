const buttons = document.querySelectorAll("button");
const input = document.querySelector("#input")


let string = "";
let arr = Array.from(buttons);

arr.forEach((btn) => {
    btn.addEventListener("click", (element) => {
        if(element.target.innerHTML == "="){
            string = eval(string);
            input.value = string
        }

        else if(element.target.innerHTML == "AC"){
            string = ""
            input.value = string
        }

        else if(element.target.innerHTML == "C"){
            string = string.substring(0, string.length-1)
            input.value = string
        }

        else{
            string += element.target.innerHTML;
            input.value = string
        }
    })
})