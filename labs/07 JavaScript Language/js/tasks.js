// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = [];

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    /*on updatePage function
    // Reference to where the output goes:
    var output = document.getElementById('output');*/

    /*on updatePage function
    // For the output:
    var message = '';*/

    if (task.value) {
        // Add the item to the array:
        tasks.push(task.value);
        updatePage();

        /*on updatePage function
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
              message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;*/
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;

} // End of addTask() function.

// function Update the page:
function updatePage() {
    var output = document.getElementById('output');
    var message = '';
    message = '<h2>To-Do</h2><ol>';
    for (var i = 0, count = tasks.length; i < count; i++) {
        message += '<li>' + tasks[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
}

//Function remove dublicates
function removeDuplicates() {
    'use strict';
    var inspect = tasks[0];
    for (var i = 1; i<tasks.length; i++) {
        if (inspect == tasks[i]) {
            tasks.splice(i, 1);
            i--;
        } else {
            inspect = tasks[i];
        }

    }
    updatePage();

}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
    document.getElementById('dupe').onclick = removeDuplicates;
} // End of init() function.
window.onload = init;