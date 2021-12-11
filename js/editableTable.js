// Editable Table Made
let t=document.getElementById('table');
t.addEventListener('click',(e)=>{
    let check = document.getElementById('fname');
    let val = e.target.innerHTML;
    let height = document.getElementsByTagName('TH')[0].clientHeight;
    let width = document.getElementsByTagName('TH')[0].clientWidth;
    console.log(height);
    console.log(width);
    if (e.target.outerHTML===`<th>${val}</th>`) {
    }
    else{
        if (check===null) {
            // let v=e.target.outerHTML;
            // let val=e.target.innerHTML;
            e.target.outerHTML= `<input type="text" id="fname" name="fname" value="${val}"></input>`;
            let cell = document.getElementById("fname");
            setTimeout(() => {
                cell.style.height='243px';
                cell.style.height='40px';
                // cell.style.padding='5px'
                cell.style.backgroundColor='rgba(255, 255, 255, 0.089)';
                cell.focus();
            }, 5);
        }
        else{
            let cell = document.getElementById("fname");
            setTimeout(() => {
                alert('Press Enter to continue')
                cell.focus();
            }, 5);
               
        }
    }
});

t.addEventListener('keypress',(e)=>{
        // console.log(e.target.value);
        if (e.key==='Enter') {
            let val = e.target.value;
            e.target.outerHTML=`<td>${val}</td>`;   
    }
});