/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running

*/



/*
Algorithm:

1. Take the input string to calculate.
2. Check for different errors.
a. Characters apart from numbers , operators and brackets.
b. Brackets must be in correct order.
c. No operators must be together.
3. Pass the string to calculateCorrectString function.
a. Convert to postfix expression
b. Calculate the output of the postfix expression
*/
class CheckCondition extends Error { 
    constructor(msg) { 
        super(msg); 
    } 
  } 
  
  class Calculator {
  
    constructor(){
      this.result = 0; // Initiating the variable
      this.validChars = "0123456789+-/*().";
      this.oprtr = "+-/*";
      this.num = "0123456789.";
      this.err;
    }
  
    add(a){
      this.result += a;
    }
    subtract(a){
      this.result -= a;
    }
    multiply(a){
      this.result *= a;
    }
    divide(a){
      if(a==0){   
        throw new CheckCondition("Division by 0 encountered");
      }
      this.result /= a;
    }
    clear(){
      this.result = 0;
    }
    getResult(){
      return this.result;
    }
     // Function to check if the string contains all the valid characters.
    validCharacters(str){
      let brackets = "";
      for(let i=0;i<str.length;i++){
        if(!this.validChars.includes(str[i])){
            this.err ="Invalid characters in the expression.";
            throw new CheckCondition("Invalid characters...");
        } else {
            if(str[i]=='(' || str[i]==')'){
                brackets+=str[i];
            }
        }
      }
      return brackets;
    }
  
    // The brackets are valid for the string.
    validBrackets(brackets){
      let stk = [];
      for(let i=0;i<brackets.length;i++){
            if(brackets[i]!='(' && i == 0){
            this.err ="Misplaced or Mismatched brackets in the expression";
              throw new CheckCondition("Misplaced or Mismatched brackets.");
            } else if(brackets[i] == '('){
                stk.push(brackets[i]);
            } else if(brackets[i] == ')' && stk[stk.length-1] == '('){
                stk.pop();
            }
            else{
                stk.push(brackets[[i]]);
            }
      }
        
      if(stk.length > 0){
        this.err = "Misplaced or Mismatched brackets in the expression.";
        throw new CheckCondition("Misplaced or Mismatched brackets.");
      }
    }
  
    validOperatorPositions(str){
      for(let i=0;i<str.length-1;i++){
        if(this.oprtr.includes(str[i]) && this.oprtr.includes(str[i+1])){
            this.err = "Consecutive operators can't be together."
           throw new CheckCondition("No two operators must be together");
            
        }
      }
    }
  
    validOperandPositions(str_input){
          
      let expectedOperator = false;
      for(let i=0;i<str_input.length;i++){
        if((!expectedOperator && this.oprtr.includes(str_input[i])) || (expectedOperator && this.num.includes(str_input[i]))){
            this.err = "Operand expected between two operators.";
            throw new CheckCondition("Misplaced operands");

           
        }
        // Changing the expected character value
        if(str_input[i] !=' ' && str_input[i]!='(' && str_input[i]!=')'){
            if(i<=str_input.length-1 && !this.num.includes(str_input[i+1])){
                expectedOperator = !expectedOperator;
            }else if(this.oprtr.includes(str_input[i])){ // We would not check next char if the current character is operator.
                expectedOperator = !expectedOperator;
            }
            
        } else{
            continue;
        }
      }
    }
  
    modifyInputString(str){
      // Count of operands and operators differ by 1.
      let oprtr_count = 0;
      let operand_cnt = 0;
      //returned modified string.
      let ret_string = "";
      for(let i=0;i<str.length;i++){
        if(str[i] != '(' && str[i] != ')'){
            if(this.oprtr.includes(str[i])){
                oprtr_count++;
                ret_string = ret_string+str[i]+" ";
            }else{
                while(i<str.length-1 && this.num.includes(str[i+1])){
                    ret_string =ret_string+ str[i];
                    i++;
                }
                ret_string= ret_string+str[i]+" ";
                operand_cnt++;
            }
        } else{
            ret_string = ret_string+str[i]+" ";
        }
      }
      if(operand_cnt == 0 && operand_cnt == 0){
        this.err = "Enter some expression";
        throw new CheckCondition("Enter some expression");
      }
      if(operand_cnt != oprtr_count+1){
        this.err = "Missing operand"
       throw new CheckCondition("Missing Operand.");
  
      }
  
      return ret_string;
  
    }
    validString(str_input){
  
    // Error Handling in the string
      let str = str_input.split(" ").join("");
      //Valid characters
      let brackets = this.validCharacters(str);
      
      //Valid Brackets
      this.validBrackets(brackets);
  
      //No operators together
  
      this.validOperatorPositions(str);
     
      // No two numbers together after a space.
  
      this.validOperandPositions(str_input);
  
      // Return the final modified string if the count of operator and operands is valid.
  
      return this.modifyInputString(str);
      
      
    }
  
    infixToPostfix(arr){
      let ret = [];
      let stk = [];
      let nums = "0123456789";
     
      for(let i=0;i<arr.length;i++){
          let curr_char = arr[i];
          if(curr_char.match("[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)")){
            ret.push(parseFloat(curr_char));
          }
          else{
          if(curr_char == '('){
            stk.push(curr_char);
          } else if(curr_char== ')'){
            let x = stk.pop();          
            while(x!='('){
              ret.push(x);
              x = stk.pop();
            }
          } else {
            if(curr_char == '*' || curr_char == '/'){
              while(stk[stk.length-1] == '*' || stk[stk.length-1]=='/'){
                ret.push(stk.pop());
              }
            } else{
              while(stk[stk.length-1] == '*' || stk[stk.length-1]=='/' || stk[stk.length-1] == '+' || stk[stk.length-1]=='-'){
                ret.push(stk.pop());
              }
            }
            stk.push(curr_char);
          }}
      }
  
      while(stk.length!=0){
        ret.push(stk.pop());
      }
      return ret;
    }
  
    postfixCalculator(arr){
      let stk = [];
      let i =0;
      for(i=0;i<arr.length-1;i++){
        if(this.oprtr.includes(arr[i])){
          let x = stk.pop();
          let y = stk.pop();
          if(arr[i] =='+'){
            stk.push(x+y);
          } else if(arr[i] =='-'){
            stk.push(y-x);
          } else if(arr[i] =='*'){
            stk.push(x*y);
          } else{
            if(x == 0){
                this.err="Division by zero encountered. Invalid Expression.";

              throw new CheckCondition("Division by 0 encountered...");
            }
            stk.push(y/x);
          }
        }
        else{
          stk.push(arr[i]);
        }
      }
      
     this.result = stk.pop();
    }
  
    calculate(str){
        try{
        this.clearContent();
        let valid = this.validString(str);
        this.postfixCalculator(this.infixToPostfix(valid.split(" ")));
        this.displayResult();
        } catch(err){
          this.displayError(err);
        }
    }
  
    displayError(){
        document.getElementById("errorDiv").innerHTML = this.err;  
    }

    displayResult(){
        document.getElementById("result").innerHTML = this.result;
    }
    
    clearContent(){
        document.getElementById("errorDiv").innerHTML="";
        document.getElementById("result").innerHTML ="";
        
    }

  }

  function clearRadioBtn(){
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
    }
    document.getElementById("errorDiv").innerHTML="";
    document.getElementById("result").innerHTML ="";
  }
  
  function btnClick(){

    let str = document.getElementById("expression").value;
    solve(str);
  }
  function solve(str){
     document.getElementById("expression").value = str;
    obj = new Calculator();
    obj.calculate(str);
  }
  
  
  