/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
//Algorithm.


///Test commit

class Errors extends Error{
  constructor(msg){
    super(msg);

  }
}
class Todo {
  constructor(){
    this.todo = [];
    this.size = 0;
  }

  add(task){
    this.todo.push(task);
    this.size++;
  }

  remove(index){
    if(index >=0 && index<this.size){
      this.todo.splice(index,1);
      this.size--;
    }

  }

  update(index, task){
    if(index >=0 && index<this.size){
      this.todo.splice(index,1);
      this.todo.splice(index,0,task);
    }
    
  }
  getAll(){
    return this.todo;
  }

  getCount(){
    return this.size;
  }
  
  get(index){
    if(index >=0 && index<this.size){

      return this.todo[index];
    }
    return null;
  
  }
  clear(){
    this.todo.splice(0,this.size);
  }

}



module.exports = Todo;
