let qrimg=document.getElementById("qrimg");
let qrtext=document.getElementById("qrtext");
//let imgdiv=document.getElementById("imgdiv");


function qrcode(){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    // qrimg.classList.add("show-img")
}

