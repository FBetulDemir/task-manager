// taskManager object
const taskManager = {
    //empty array for the tasks
    tasks: [], 
    //function for adding new tasks
    addTask: function addNewTask(taskDescription){
        taskDescription = parseInt(prompt("Please enter a description for the new task to be added: "));
        if(typeof taskDescription !== "string"){
            return ('Please enter a valid description!');
            addNewTask();
        } else{
            const task = {
                id: this.tasks.length + 1,
                description: taskDescription,
                completed: false
            };
            this.tasks.push(task);
            console.log(`Your ${taskDescription} is added to the list.`)
        }
    },
    completeTask: function completeTask (taskID){
        const task = parseInt(prompt("Please enter a description id to mark it as completed: "));
        if (task.id === taskID){
            task.completed = true;
            console.log('The task is registered as completed.')
        } else {
            console.log ('Please enter a valid task id! ${taskID} cannot be found!')
        }
    },
    allTasks: function listAllTasks (listAll){
        console.log(this.tasks);
    },
    completedTasks: function listCompletedTasks(){
        if (task.completed = true) {
            console.log("Here is the list of all completed tasks: ");
            console.log(task.completed);
        } else{
            console.log('Unfortunately, there is no completed task to show.')
        }
    }
  };
  

    
function menu(){
    askUserName()
    let menuOptions = parseInt(prompt('Menu: \n Please enter the right number :\n 1. Please enter 1 to add a task \n 2. Please enter 2 to complete a task \n 3. Please enter 3 to list all the tasks \n 4. Please enter 4 to list all the completed tasks \n 5. Please enter 5 to exit the task manager'));
    while(menuOptions > 0 && menuOptions < 6){
        switch (menuOptions){
            case 1:
                taskManager.addTask();
                break;
            case 2:
                taskManager.completeTask();
                break;
            case 3:
                taskManager.allTasks();
                break;
            case 4:
                taskManager.completedTasks();
                break;
            case 5:
                console.log('Exiting the task Manager.');
                return;
            default:
                console.log('The number you entered is invalid. Please enter a number between 1 and 5.');
                
        }
    }
  
    menuOptions = parseInt(prompt('Menu: \n 1. Please enter 1 to add a task \n 2. Please enter 2 to complete a task \n 3. Please enter 3 to list all the tasks \n 4. Please enter 4 to list all the completed tasks \n 5. Please enter 5 to exit the task manager \n Please enter the right number :'));
}
const userName = askUserName (); 
function askUserName(){ 
    return prompt("Please enter your name:");
    if (typeof userName === "string"){
        console.log(`Welcome ${userName}!`);
        menu();
    } else{
      alert("The entry is invalid. Please enter your name!");
      askUserName();
    }
}
  
menu();
