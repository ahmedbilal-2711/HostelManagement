let signCardTxt = document.getElementById("signCardTxt");
let box = document.getElementById("rSec");
let c=box.children;
let angle=0;
signCardTxt.addEventListener('click',()=>{
    if(c[4].innerHTML.includes("Sign In")){
        // Display Sign In Page after rotation
        angle+=180;
        // console.log(c[4]);
        box.style.transitionDuration="2000ms";
        box.style.transform=`rotateY(${angle}deg)`;
        setTimeout(() => {
            signIn();
            Array.from(c).forEach(element => {
                element.style.transform=`rotateY(${angle}deg)`;
            });
        }, 500);
    }
    else if(c[4].innerHTML.includes("Create Account")){
        // Display Sign Up Page after rotation
        angle+=180;
        // console.log(c[4]);
        box.style.transitionDuration="2000ms";
        box.style.transform=`rotateY(${angle}deg)`;
        setTimeout(() => {
            signUp();
            Array.from(c).forEach(element => {
                element.style.transform=`rotateY(${angle}deg)`;
            });
        }, 500);
    }
});

c[3].addEventListener('click',()=>{
    if (c[3].innerHTML==='Sign Up'){
        console.log("dfkdlfjk");
        window.open("../html/bioForm.html",'_blank');
    }
});


/* document.getElementById("cancel").addEventListener("click",()=>{
    console.log("cancel");
    box.style.display='flex';
    moreInfoCard.style.animationName='rollUp';
    box.style.animationName='rollDown';
    setTimeout(() => {
        moreInfoCard.style.display='none';
    }, 2000);
}); */

//Sign Up && Sign In Action
/* let moreInfoCard=document.getElementById("info");
c[3].addEventListener('click',()=>{
    if (c[3].innerHTML==='Sign Up') {
        moreInfoCard.style.display='flex';
        moreInfoCard.style.animationName='rollDown';
        box.style.animationName='rollUp';
        setTimeout(() => {
            box.style.display='none';
        }, 2000);
    }
    else{
        // sign in validation
    }
}); */

//Submit Button Action
/* let submit = document.getElementById("submit");
submit.addEventListener('click',()=>{
    angle+=180;
    moreInfoCard.style.animationName='rollUp';
    box.style.display='flex';
    box.style.animationName='rollDown';
    signIn();
    setTimeout(() => {
        moreInfoCard.style.display='none';
    }, 2000);
}); */

// Functions
// Display Sign In page
function signIn() {
    box.style.boxShadow='0px 0px 18px 14px rgba(80, 135, 184, 0.781)';
    box.style.backgroundColor='rgba(80, 135, 184, 0.581)';
    c[0].children[0].innerHTML='Sign In';
    c[3].innerHTML="Sign In";
    c[4].innerHTML='Create Account';
}
function signUp() {
    box.style.boxShadow='0px 0px 18px 14px rgba(37, 44, 38, 0.493)';
    box.style.backgroundColor='rgba(37, 44, 38, 0.393)';
    c[0].children[0].innerHTML='Sign Up';       
    c[3].innerHTML="Sign Up";
    c[4].innerHTML='Sign In';
}