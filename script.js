/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebar
      sidebar.classList.remove("opened")
      sidebarButton.textContent = ("›")
      
    } else {
      // Open the sidebar
      sidebar.classList.add("opened")
      sidebarButton.textContent = ("‹")
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  if (!taskName || !addTodoButton || !todoListUl) {
    console.error("One or more elements were not found!");
    return;
  }

  // Add event listener to the Add Todo button
  addTodoButton.addEventListener("click", () => {
    const taskText = taskName.value.trim(); // Get input value and remove extra spaces

    if (taskText === "") {  // Ensure input is not empty
      alert("Task cannot be empty!"); // Show alert message (or use a better UI feedback)
      return;
    }
    
    if (taskText !== "") {  // Ensure input is not empty
        const newTodoItem = document.createElement("li"); // Create a new <li> element
        newTodoItem.textContent = taskText; // Set the text content of the new item
        todoListUl.appendChild(newTodoItem); // Append the new item to the list

        taskName.value = ""; // Clear the input field after adding the todo
    }
  });
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (firstName || lastName) {
      message.textContent = `Hello ${firstName} ${lastName}!`;
    } else {
      message.textContent = "Hello!"
    }
  };

  // Add event listeners to detect input changes
  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);

};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
