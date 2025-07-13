let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let operators = ['+', '-', '*', '/'];

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            input.value = string;
        }
        else if (value == 'AC') {
            string = "";
            input.value = string;
        }
        else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            let lastChar = string[string.length - 1];
            if (operators.includes(value)) {
                if (operators.includes(lastChar)) {
                    string = string.slice(0, -1) + value;
                } else {
                    string += value;
                }
            } else {
                string += value;
            }
            input.value = string;
        }
    });
});
