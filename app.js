const calculator = document.querySelector("#calculator");
const displayArea = document.querySelector(".display")

let operator = null;

// 1. 0 will be shown on the display area before you do the calculation
const zeroBtn = document.querySelector("#calculator .row:last-child .button.number");
displayArea.innerText = zeroBtn.innerText;

function handleClick(e) {
    // 2. click 1 number, 7, the 0 will be erased, 7 will shows up on the display area
    const clickedBtn = e.target;
    // console.log(typeof clickedBtn.innerText) // string


    if (e.target.classList.contains("number")) {
        if (displayArea.innerText === "0") {
            displayArea.innerText = clickedBtn.innerText
        } else {
            // 3. click another number, 8, it will be added to the right of the 7
            displayArea.innerText += clickedBtn.innerText;
        }
    } else {
        // 4. click + operator, it will be added to the right of 78
        // 5. click number, 1, it will be added to the right of 78+
        // 6. click number 2, it will be added to the right of 78+1
        // 7. Now, it will shows 78+12 on the display panel
        switch (e.target.innerText) {
            case "+":
                operator = "+"
                displayArea.innerText = displayArea.innerText + operator
                break;

            case "-":
                operator = "-"
                displayArea.innerText = displayArea.innerText + operator
                break;

            case "*":
                operator = "*"
                displayArea.innerText = displayArea.innerText + operator
                break;

            case "/":
                operator = "/"
                displayArea.innerText = displayArea.innerText + operator
                break;

            // 8. then you click =, it will shows 90 on the display area
            case "=":
                const arrOfNums = displayArea.innerText.split(operator)

                const firstNum = Number(arrOfNums[0]);
                const secondNum = Number(arrOfNums[1]);

                switch (operator) {
                    case "+":
                        displayArea.innerText = firstNum + secondNum;
                        break;

                    case "-":
                        displayArea.innerText = firstNum - secondNum;
                        break;

                    case "*":
                        displayArea.innerText = firstNum * secondNum;
                        break;

                    case "/":
                        displayArea.innerText = firstNum / secondNum;
                        break;

                    default:
                        break;
                }
                break;

            // 9. click C, the display area shows 0
            default:
                displayArea.innerText = 0;
                break;
        }
    }
}

calculator.addEventListener("click", handleClick)
