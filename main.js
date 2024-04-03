// taskManager object
const taskManager = {
    //empty array for the tasks
    tasks: [], 
    //function for adding new tasks
    addTask: function addNewTask(taskDescription){
        taskDescription = parseInt(prompt("Please enter a description for the new task to be added: "));
        if(typeof taskDescription != "string"){
            return ('Please enter a valid description!');
            addNewTask();
        } else{
            const task = {
                id: this.tasks.length + 1,
                description: taskDescription,
                completed: false
            };
            this.tasks.push(task);
            return ('Your ${this.taskDescription} is added');
            console.log(taskDescription)
        }
    },
    completeTask: function completeTask (taskID){
        const task = parseInt(prompt("Please enter a description id to mark it as completed: "));
        if (task.id === taskID){
            task.completed = true;
        } else {
            console.log ('Please enter a valid task id! ${taskID} cannot be found!')
        }
    },

  };
  

    
function menu(){
    askUserName()
    const menuOptions = parseInt(prompt('Please enter the right number :'));
    while(true){
        console.log('1. Please enter 1 to add a task');
        console.log('2. Please enter 2 to complete a task');
        console.log('3. Please enter 3 to list all the tasks');
        console.log('4. Please enter 4 to list all the completed tasks');
        console.log('5. Please enter 5 to exit the task manager');
    }
    switch (menuOptions){
        case 1:
            taskManager.addTask();
            break;
        case 2:
            taskManager.completeTask();
            break;
        
    }
    
}
  
function askUserName(){
     
    const userName = prompt("Please enter your name:");
    
    if (typeof userName === 'string'){
        console.log(userName)
        //console.log (`Welcome ${userName} !');
        menu();
    } else{
      alert(
        "The entry is invalid. Please enter your name!"
      );
    }
}
  
menu();
