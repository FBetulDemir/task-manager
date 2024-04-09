// taskManager object
const taskManager = {
    //empty array for the tasks
    tasks: [], 
    //function for adding new tasks
    addTask: function addNewTask(taskDescription){
        taskDescription = prompt("Please enter a description for the new task to be added: ");
        // checking if the type of description typed by the user is relevant.
        console.log("Task Description: ", taskDescription);
        console.log("Task Description: ", typeof taskDescription);
        //checking if the description is a number or not or the typed charachter is 0 or if it is a null
        if(!isNaN(parseInt(taskDescription)) || taskDescription.length === 0 || taskDescription === null){
            //if it is any of the conditions given above, it is an invalid description
            alert ('Please enter a valid description!');
            this.addTask();
        } else{
            //otherwise, I want to save the task
            const task = {
                id: this.tasks.length + 1,
                description: taskDescription,
                completed: false
            };
            //Adding the task to the empty array created on the top
            this.tasks.push(task);
            console.log(`Your ${taskDescription} is added to the list with ${this.id} and ${task.completed}.`);
            console.log(this.tasks);
        }
    },
    completeTask: function completeTask (taskID){
        const task = parseInt(prompt("Please enter a description id to mark it as completed: "));
        if (task.id === taskID){
            task.completed = true;
            console.log('The task is registered as completed.')
        } else {
            console.log (`Please enter a valid task id! ${taskID} cannot be found!`)
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

function askUserName(){ 
    const userName = prompt("Please enter your name:");
    if (typeof userName !== 'number' && userName !== null){
        console.log(`Welcome ${userName}!`);
        return userName;
        //menu();
    } else{
      alert("The entry is invalid. Please enter your name!");
      askUserName();
    }
}
  
menu();
