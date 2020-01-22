var todo = [];
var input = prompt("what would you like to do?");

while (input !== "quit") {
    if (input === "list") {
         listTodo();
    } else if (input === "new") {
         newTOdo();
    } else if (input="delete"){
     deeteTodo()
        
    }
    var input = prompt("what would you like to do?");
}
console.log("ok then, I guess i will see you some day!!")

function newTOdo(){
    var newToDo = prompt("what would you like to add?");
    todo.push(newToDo);
    console.log("added new todo")

}
function deeteTodo(){
    var index=prompt("Enter the index to delete");
    todo.splice(index,1);
    console.log("deleted todo")
}
function listTodo(){
    console.log("*******")
    todo.forEach(function(todos,i){
        console.log(i + ": " + todos);
    });
    console.log("*******")
}