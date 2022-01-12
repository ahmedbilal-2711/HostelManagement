// Setting the height of the iframe- Our screen
let heightScreen = window.innerHeight;
let orgHeight=document.getElementById("navBarUl").offsetHeight;
let orgHeightTop=document.getElementById("topBar").offsetHeight;
document.getElementById("navBarUl").style.paddingBottom=(heightScreen-orgHeight-orgHeightTop)+"px";

// let m = document.querySelector('.modules');
window.addEventListener('load', () => {
    fetch('http://localhost:3000/users').then(res => res.json()).then(data => console.log(data))
})
let m = document.querySelectorAll('.modules');
let pages=document.getElementsByClassName('pages');
console.log(m);
for (let i = 0; i < m.length; i++) {
    m[i].addEventListener('click', (e)=>{
            // console.log(m[i].innerHTML);
            if (m[i].innerHTML==='Home') {
                pages[1].style.display='none'
                pages[2].style.display='none'
                pages[3].style.display='none'
                pages[4].style.display='none'
                pages[0].style.display='block'
            }
            else if (m[i].innerHTML==='Expense Calculator') {
                pages[0].style.display='none'
                pages[2].style.display='none'
                pages[3].style.display='none'
                pages[4].style.display='none'
                pages[1].style.display='block'
            }
            else if (m[i].innerHTML==='Mess Schedule') {
                pages[0].style.display='none'
                pages[1].style.display='none'
                pages[3].style.display='none'
                pages[4].style.display='none'
                pages[2].style.display='block'
            }
            else if (m[i].innerHTML==='Bill Generator') {
                pages[0].style.display='none'
                pages[1].style.display='none'
                pages[2].style.display='none'
                pages[4].style.display='none'
                pages[3].style.display='block'
            }
            else if (m[i].innerHTML==='Time Table'){
                pages[0].style.display='none'
                pages[1].style.display='none'
                pages[2].style.display='none'
                pages[3].style.display='none'
                pages[4].style.display='block'
            }
            /* else if(m[i].innerHTML==='Home')
            document.getElementsByClassName('pages')[0].style.display='block'
            else if(m[i].innerHTML==='Mess Shedule')
            document.getElementById('ms').style.display='block'
            else if(m[i].innerHTML==='Bill Generator')
            document.getElementById('bg').style.display='block'
            else if(m[i].innerHTML==='Time Table')
            document.getElementById('tt').style.display='block' */
        });
}