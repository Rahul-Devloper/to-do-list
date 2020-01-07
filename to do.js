var todo=[];
var input=prompt("what would you like to do?");

while(input!=="quit"){
    if(input==="list"){
        console.log(todo);
    }
    else if(input==="new"){
        var newToDo=prompt("what would you like to add?");
        todo.push(newToDo);
        
    }
    var input=prompt("what would you like to do?");

}
console.log("ok then, I guess i will see you some day!!")