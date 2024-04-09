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
    // creating a function for completing the task
    completeTask: function completeTask (){
        const taskID = parseInt(prompt("Please enter a task ID to mark it as completed: "));
        // checking taskID if it is not a number. 
        if (isNaN(taskID)){
            alert(`Please enter a valid task ID! ${taskID} can only be numbers!`);
            this.completeTask();
        }
        //checking the tasks array if the given taskID exists in the list and assign it to a new variable. 
        const task = this.tasks.find((task) => task.id === taskID);
        if(task === undefined){
            alert(`Please enter a valid task ID! ${taskID} cannot be found!`)
        }
        //if task is a valid id; then, register it as a completed task
        else {
            task.completed = true;
            alert(`The task ${taskID} is registered as completed.`);
        }
    },
    //creating a function to list all the tasks
    allTasks: function listAllTasks (listAll){
        console.log(`Listing all the tasks: ${JSON.stringify(this.tasks)}`);
        alert(JSON.stringify(this.tasks));
    },
    //creating the the function to list all the completed tasks
    completedTasks: function listCompletedTasks(){
        //an empty array for completed tasks
        let allCompletedTasks = [];
        let i = 0;
        while(i < this.tasks.length){
            const task = this.tasks[i];
            if (task.completed === true){
                allCompletedTasks.push(task)
            }
            i++
        }
        console.log(`Listing all the completed tasks: ${JSON.stringify(allCompletedTasks)}`);
        alert(JSON.stringify(allCompletedTasks));
    }
  };
  

//Menu function to show the user his/her choices    
function menu(){
    //first get the user name and print a welcome message if the entry is valid
    let userName = askUserName()
    //Here is the menu with 5 different options/cases.
    while(userName){
        let menuOptions = parseInt(prompt('Menu: \n Please enter the right number :\n 1. Please enter 1 to add a task \n 2. Please enter 2 to complete a task \n 3. Please enter 3 to list all the tasks \n 4. Please enter 4 to list all the completed tasks \n 5. Please enter 5 to exit the task manager'));
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
