let table = document.getElementById('table');


function generateTable() {
    let input = document.getElementById('input').value;
    if (input == '') {
        alert('Please Enter a Number')
    }
    const tbody = document.createElement('tbody');
    table.innerHTML = ''
    tbody.className = 'p-5'
    if(!input==''){
    for (let i = 0; i <= 10; i++) {
        console.log(`${input}*${i}=${input * i}`);
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.innerHTML = `
     ${input} * ${i} 
     `
        row.appendChild(cell1);

        const cell2 = document.createElement('tr');
        cell2.innerHTML = '='
        row.appendChild(cell2)

        const cell3 = document.createElement('tr');
        cell3.innerHTML = `
     ${input * i}
     `
     row.className='border border-black rounded text-xl flex justify-around py-3 outline-none'
        row.appendChild(cell3);
        tbody.appendChild(row);
        table.appendChild(tbody)
    }
}




}