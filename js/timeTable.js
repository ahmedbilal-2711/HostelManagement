let t=document.getElementById('table');
// let t = document.querySelector('#table>td');
t.addEventListener('click',(e)=>{
    /*  if (e.target.includes('tr')) {
        t.removeEventListener('click');
    } */
    let check = document.getElementById('fname');
    if (check===null) {
        console.log(t.children[0]);
        let val=e.target.innerHTML;
        e.target.innerHTML="";
        e.target.outerHTML= `<input type="text" id="fname" name="fname" placeholder="${val}"></input>`;
        let cell = document.getElementById("fname");
        setTimeout(() => {
            cell.focus();
        }, 5);
    }
    else{
        let cell = document.getElementById("fname");
        setTimeout(() => {
            cell.focus();
        }, 5);
           
    }
        // document.getElementById('fname').style.focus
});

t.addEventListener('keypress',(e)=>{
        // console.log(e.target.value);
        if (e.key==='Enter') {
            let val = e.target.value;
            e.target.outerHTML=`<td>${val}</td>`;   
    }
});