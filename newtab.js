let gr=document.getElementById('greet');
let jp=document.getElementById('jotpad');

function greet(){
    if(localStorage.getItem('Name') && localStorage.getItem('enable') =="yes"){
        // if name is added in the local storage
        let name=localStorage.getItem("Name");
        gr.innerHTML =`<h1> Hello ${name} </h1>`;
        jp.style.visibility="visible";
        console.log("storage item is set");
    }else{
        console.log("else loop");
       let name = prompt("Please enter your name:","Name");
        localStorage.setItem("Name",name);
        localStorage.setItem("enable","yes");
        greet();
        jp.style.visibility="hidden";
    }
}

window.addEventListener('load', greet());
/*
document.getElementById('submit').addEventListener( "click", getName);
function getName(){
    document.getElementsByTagName('body').innerHTML="";
    let n= document.getElementById('name').value;
    console.log("hey");
    localStorage.setItem("Name",n);
    let name=localStorage.getItem("Name");
    console.log(name);
}
*/