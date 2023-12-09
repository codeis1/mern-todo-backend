import ToDoModel from "../models/ToDoModel.js";

export async function getToDo(req, res) {
  const toDo = await ToDoModel.find();
  res.send(toDo);
}

export async function saveToDo(req, res) {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
}

export async function updateToDo(req, res) {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err));
}

export async function deleteToDo(req, res) {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err));
}
