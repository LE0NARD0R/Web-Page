import Task from "../models/Task";

export const renderConfig = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("config", { tasks: tasks });
};

export const goToHome = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("home", { tasks: tasks });
};

export const renderMen = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("men", { tasks: tasks });
};

export const renderWomen = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("women", { tasks: tasks });
};

export const createTask = async (req, res) => {
  const task = Task(req.body);

  try {
    if (task.sex == "Male" && task.male == false) {
      task.male = !task.male;
    }
    else if (task.sex == "Female" && task.female == false) {  
      task.female = !task.female;
    }
  } catch (error) {
    console.log(error);
  }

  await task.save();
  res.redirect("/config");
};

export const editTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const endeditTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id).lean();
    if (task.sex == "Male" && task.male == false) {
      task.male = !task.male;
      task.female = false;
    }
    else if (task.sex == "Female" && task.female == false) {  
      task.female = !task.female;
      task.male = false;
    }
    console.log(task);
  } catch (error) {
    console.log(error);
  }
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/config");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/config");
};

export const togleTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

export const about = (req, res) => {
  res.render("about");
};
