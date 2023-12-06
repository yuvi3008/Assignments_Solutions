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
    this.result /= a;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  
  validString(str_input){
  // Error Handling in the string
    let str = str_input.split(" ").join("");
    let brackets = "";
    let validChars = "0123456789+-/*()";

    // Valid Characters
    for(let i=0;i<str.length;i++){
      if(!validChars.includes(str[i])){
          throw new CheckCondition("Invalid characters...");
      } else {
          if(str[i]=='(' || str[i]==')'){
              brackets+=str[i];
          }
      }
    }

    //Valid Brackets
    let stk = [];
    for(let i=0;i<brackets.length;i++){
          if(brackets[i]!='(' && i == 0){
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
      throw new CheckCondition("Misplaced or Mismatched brackets.");
    }

    //No operators together
    const oprtr = "+-/*";
    for(let i=0;i<str.length-1;i++){
      if(oprtr.includes(str[i]) && oprtr.includes(str[i+1])){
          
         throw new CheckCondition("No two operators must be together");
          
      }
    }
    // No two numbers together after a space.

    const num = "0123456789";
    let expectedOperator = false;
    for(let i=0;i<str_input.length;i++){
      if((!expectedOperator && oprtr.includes(str_input[i])) || (expectedOperator && num.includes(str_input[i]))){
          throw new CheckCondition("Misplaced operands");
         
      }
      // Changing the expected character value
      if(str_input[i] !=' ' && str_input[i]!='(' && str_input[i]!=')'){
          if(i<=str_input.length-1 && !num.includes(str_input[i+1])){
              expectedOperator = !expectedOperator;
          }else if(oprtr.includes(str_input[i])){ // We would not checknext char if the current character is operator.
              expectedOperator = !expectedOperator;
          }
          
      } else{
          continue;
      }
    }

    // Count of operands and operators differ by 1.
    let oprtr_count = 0;
    let operand_cnt = 0;
    //returned modified string.
    let ret_string = "";
    for(let i=0;i<str.length;i++){
      if(str[i] != '(' && str[i] != ')'){
          if(oprtr.includes(str[i])){
              oprtr_count++;
              ret_string = ret_string+str[i]+" ";
          }else{
              while(i<str.length-1 && num.includes(str[i+1])){
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
      throw new CheckCondition("Enter some expression");

    }
    if(operand_cnt != oprtr_count+1){
     throw new CheckCondition("Mismatch in operator and operand counts.");

    }

    return ret_string;
    
  }
  calculate(str){

      try{
      let valid = this.validString(str);
      console.log(valid);
      } catch(err){
        throw new CheckCondition("Error");
          console.log(err);
      }
      



  }

}
module.exports = Calculator;
