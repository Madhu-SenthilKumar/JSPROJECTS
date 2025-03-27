function addtask() {
    const taskinput = document.getElementById('taskinput');
    const tasklist = document.getElementById('tasklist');
    const tasktext = taskinput.value.trim();

    if (tasktext === "") {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = tasktext;  // Corrected `textContent`

    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'Delete';
    deletebutton.onclick = function () {
        tasklist.removeChild(li);
    };

    li.appendChild(deletebutton);
    tasklist.appendChild(li);
    taskinput.value = '';  
}

