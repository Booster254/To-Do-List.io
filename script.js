function showSignUpForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "Nyakeri254" && password === "@Nyakeri254") {
        document.getElementById("loginError").textContent = "";
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("eisenhowerMatrix").style.display = "block";
    } else {
        document.getElementById("loginError").textContent = "Invalid username or password.";
    }
}

function signUp() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;


    document.getElementById("signUpSuccess").textContent = "Sign up successful! You can now login.";
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");

    var taskDescription = taskInput.value;
    var taskPriority = parseInt(prioritySelect.value);

    if (taskDescription.trim() === "") {
        alert("Please enter a task description.");
        return;
    }

    var task = document.createElement("li");
    task.textContent = taskDescription;
    task.classList.add("task-item");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            task.classList.add("completed");
        } else {
            task.classList.remove("completed");
        }
    });

    task.insertBefore(checkbox, task.firstChild);

    switch (taskPriority) {
        case 1:
            document.getElementById("tasks1").appendChild(task);
            break;
        case 2:
            document.getElementById("tasks2").appendChild(task);
            break;
        case 3:
            document.getElementById("tasks3").appendChild(task);
            break;
        case 4:
            document.getElementById("tasks4").appendChild(task);
            break;
    }

    taskInput.value = "";
    prioritySelect.value = "1";

  
    document.getElementById("taskListContainer").style.display = "block";
    document.getElementById("taskList").appendChild(task.cloneNode(true));
}

function toggleTasks(quadrantId) {
    var tasks = document.getElementById(quadrantId).getElementsByTagName("li")[0];

    if (tasks.style.display === "none") {
        tasks.style.display = "block";
    } else {
        tasks.style.display = "none";
    }
}
