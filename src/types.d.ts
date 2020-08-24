/*
  If you declare this file name as "types.ts", you sholud use 'export' keyword like this:

  export type Todo = {
    text: string,
    complete: boolean
  }

  But if you declare it as "types.d.ts", which mean "declaration ts file", you should not use 'export' keyword like this
  This process is automatically done by typescript compiler
*/

type Todo = {
  text: string,
  complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void