// taskManager object
const taskManager = {
    tasks: [],
    addTask: function addNewTask(taskdescription){
        if(typeof taskdescription != "string"){
            return('Please enter a valid description!')
        }
    }
  };