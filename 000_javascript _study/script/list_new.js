const suplist = [];
const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', plusList);

function plusList() {
    const sup = document.querySelector('#sup').value;
    if (sup != "") {
        suplist.push(sup);
        document.querySelector('#sup').value ="";
        document.querySelector('#sup').focus();
    }
    showsupList();
}

function showsupList() {
    let list = "<ul>" ;
    for(let i=0; i<suplist.length; i++) {
        list += "<li>"+suplist[i]+"<span class='close' id=" + i + ">─</span></li>"
    }
    list +="</ul>";
    document.querySelector('#plusList').innerHTML = list;
    const dele = document.querySelectorAll(".close");
    for(let i=0; i<dele.length; i++) {
        dele[i].addEventListener("click",deleList);
    }
}

function deleList() {
    const id = this.getAttribute('id');
    suplist.splice(id,1);

    showsupList();
}
