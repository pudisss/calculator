

// Code begins here

class Calculator {
    constructor() {
        this.result = document.getElementById("result");
        this.expression = document.getElementById("expression");
        this.numberExpression = "";
        this.previousExpression = this.numberExpression;
        
        this.Expression = "";
        
        
    }

    numberButton(number) {
        // Initialize data

        this.numberExpression += number.toString();
    
      
        
    
        
       // Make sure that the text isn't 0 before adding numbers to it
        if (this.result.innerText == "0") {
            // Change the result
            this.result.innerText = "";
            this.result.innerText += number.toString();

            

        } else {
            this.result.innerText += number.toString();
            
        }

        // Make sure the expression have already a data or not if have add it if doesn't change the expression to blank and add
        
        if (this.expression.innerText == "0") {
            this.expression.innerText = "";
            this.expression.innerText += number.toString();
        } else {
            if (isNaN(this.expression.innerText.charAt(this.expression.innerText.length - 1))) {
                this.expression.innerText += " " + number.toString();
                
            } else {
                this.expression.innerText += number.toString();
               
            }
        }
        
        
    }

    symbolButton(symbol) {
        

        switch (symbol) {
            case 11:
                this.expression.innerText += " / ";
            

                
                break;
            case 13:
                this.expression.innerText += " * ";
               
                
               
                break;
            case 14:
                this.expression.innerText += " - ";
                
                
                
                break;
            case 15:
                this.expression.innerText += " + ";
                
                
                
                
                break;
        }
        var arrayNumbers = this.numberExpression.split("");

                arrayNumbers = [""];

                
                this.numberExpression = arrayNumbers.toString();

                this.result.innerText = arrayNumbers.toString();
                this.result.innerText = 0;


    }
    
    
    specialFunction(action) {
        switch (action) {
            case null:
                var arrayNumbers = this.numberExpression.split("");

                arrayNumbers = [""];

                
                this.numberExpression = arrayNumbers.toString();

                this.result.innerText = arrayNumbers.toString();
                this.result.innerText = 0;
                
                break;
            case undefined:
                var arrayNumbers = this.numberExpression.split("");

                arrayNumbers = [""];

                
                this.numberExpression = arrayNumbers.toString();

                this.result.innerText = arrayNumbers.toString();
                this.result.innerText = 0;
                break;
            case 12:
                var arrayNumbers = this.numberExpression.split("");

                if (arrayNumbers.length == 0) {
                    this.result.innerText = 0;
                } else {
                    arrayNumbers.pop();

                this.numberExpression = arrayNumbers.join("");

                this.result.innerText = this.numberExpression;
                this.expression.innerHTML = this.numberExpression;
                }
            case 16:
                this.result.innerText = Number(eval(this.expression.innerText)).toFixed(2);
                this.expression = "";
                break;
        }
    }
}

let c = new Calculator();