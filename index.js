const express = require("express");
const app = express();

let todo = [
    {
        id:1,
        todo: "write love poem",
        done: false
    },
    {
        id:2,
        todo: "read her chat",
        done: true
    },
];

app.post("/add", function (req, res) {
  const id=todo.length+1;
  const newTodo=req.query.todo;
//   const done=Boolean(req.query.done);

  const newly={
    id:id,
    todo:newTodo,
    done:false
    
  }


  todo.push(newly);
  res.send(todo);
});

app.get("/homepage", function (req, res) {
  res.send(todo);
});

app.put("/", function (req, res) {
//   const index = Number(req.query.idx);
//   const newTodo = req.query.newTodo;
//   todo[index] = newTodo;
//   res.send(todo);

const index=req.query.idx;
const done=req.query.done;
const newTodo=req.query.todo;

if(newTodo!=null){
  todo[index].todo=newTodo;
}

if(done!=null){
todo[index].done=done;
}
res.send(todo[index])
});

app.delete("/", function(req,res){
    const index=req.query.idx;
    const deleteTodo=todo[index];
    todo.splice(index, 1);
    res.send(`todo deleted ${deleteTodo}`)
})



app.listen(3000);

