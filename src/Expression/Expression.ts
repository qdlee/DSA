import Stack from '../Stack/Stack';

/*
 * 1、convert infix expression to postfix expression
 * 2、calculate the result
 */

/**
 * 1+2
 * @param infix infix expression
 * @return postfix expression
 */
export function convert(infix: string): string {
  let operators = ['+', '-', '*', '/', '%'];
  let operandStack = new Stack<string>();
  let operatorStack = new Stack<string>();
  for (let char of infix) {
    if (operators.indexOf(char) > -1) {
      operatorStack.push(char);
    }

    if (/\d/.test(char)) {
      operandStack.push(char);
    }
  }
  let postfixStack = new Stack<string>();
  while (!operandStack.isEmpty() || !operatorStack.isEmpty()) {
    postfixStack.push(operatorStack.pop());
    postfixStack.push(operandStack.pop());
    postfixStack.push(operandStack.pop());
  }
  let expression = '';
  while (!postfixStack.isEmpty()) {
    expression += postfixStack.pop();
  }
  return expression;
}


// function calculate(postfix: string): number {

// }