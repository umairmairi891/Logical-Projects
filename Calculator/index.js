let input = document.getElementById('input');

const button = document.querySelectorAll('button');
let string = ''
let arr = Array.from(button);

arr.forEach((val) => {
    val.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = ''
            input.value = string
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1)
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

const sidebar=document.createElement('div');

sidebar.className='sidebar';

function history(){
 
const lastbtn=document.getElementById('lastbtn');


string=eval(string);
input.value=string;


const li=document.createElement('li');
li.innerHTML=input.value;
li.innerHTML=eval(string)
li.className='bg-blue-500'
sidebar.appendChild(li);
}

document.body.appendChild(sidebar);