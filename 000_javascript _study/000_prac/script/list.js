const itemList = [];
const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addList);

function addList() {
    const item = document.querySelector('#item').value;
    // 텍스트 필드 내용 가져옴
    if (item != null) {
        itemList.push(item); //itemList 배열의 끝에 item 변수값추가
        document.querySelector('#item').value = ""; //id ="item"인 요소의 값을 
        document.querySelector('#item').focus();
        //텍스트 필드에 focus() 메서드 적용
    }

    showList();
}

function showList() {
    let list = "<ul>";
    //목록을 시작하는 ul태그 저장
    for(let i=0; i<itemList.length; i++) {
        //배열 요소마다 반복
        list +="<li>"+itemList[i]+"<span class='close' id=" + i + ">X</span></li>";
        //요소와 삭제버튼을 li로 묶음
    }
    list += "</ul>";
    //목록을 끝내는 ul태그 저장
    document.querySelector('#itemList').innerHTML = list;
    const remove = document.querySelectorAll(".close");
    for(let i=0; i<remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

//선택한 항목을 목록에서 삭제하는 함수
function removeList() {
    const id = this.getAttribute("id"); //id의 속성(배열 0,1,2)를 가져옴
    itemList.splice(id,1); //id인덱스에서 1개 제거

    showList(); //삭제한 거 빼고 목록 재정
    //삭제한 걸 제외하고 다시 배열 돌려야해서 showList(); 호출
}
