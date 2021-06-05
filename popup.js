var toggle=document.getElementById('toggle');

function enableDisable(){
    if(localStorage.getItem('enable') === "yes" ){
        localStorage.setItem('enable','no');
        toggle.innerHTML=`<button id="enable-disable" onclick="enableDisable()">Disable</button>`;
    }else{
        localStorage.setItem('enable','yes');
        toggle.innerHTML=`<button id="enable-disable" onclick="enableDisable()">Enable</button>`;
    }
}

window.addEventListener('load',enableDisable());