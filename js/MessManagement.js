let data=document.getElementById('tabledata')
data.addEventListener('click',editdata);

function editdata(e){
    let val=e.target.innerHTML;
    let height=document.getElementsByTagName('TH')[0].clientHeight;
    let width=document.getElementsByTagName('TH')[0].clientWidth;
    console.log(height,width);
    
}