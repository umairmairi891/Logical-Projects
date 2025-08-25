

const list = document.querySelector('.ul');


function makeList() {
    const input = document.getElementById('input').value;

    const taskList = document.createElement('li');
    if (input == '') { alert('Please Enter a task') }
    taskList.innerHTML = input;

    taskList.className = 'list mb-5 w-[100%] py-2 rounded-xl text-xl bg-white'
    const icon = document.createElement('i');
    icon.className = 'fa fa-close icon mt-1 mr-5  cursor-pointer';



    icon.addEventListener('click', (e) => {
        e.preventDefault()
        taskList.remove(taskList);
    })


    const icon2 = document.createElement('i');
    icon2.className = 'fa fa-comment icon2 mt-1 mr-10 cursor-pointer';
    icon2.addEventListener('click', () => {

        const newEdit = prompt('Edit Task', input);
        taskList.innerHTML = newEdit;

        taskList.appendChild(icon)
        taskList.appendChild(icon2)
    })
    taskList.appendChild(icon)
    taskList.appendChild(icon2)
    list.appendChild(taskList);
}








