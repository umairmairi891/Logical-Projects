let output=document.getElementById('output')
let output2=document.getElementById('output2')
function wordCount(){
    let counter=0;
    let input=document.getElementById('input').value;
    if(input=='') alert('Enter Some Words');

    let words=input.split('');
    input=''
    for (let i = 0; i < words.length; i++) {
        counter++;
    }
    output.innerHTML=counter;
    output2.innerHTML=words;
    input.innerHTML=''
}