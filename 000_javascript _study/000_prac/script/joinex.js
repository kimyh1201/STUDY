function validateForm() {
    let m = document.member_form;
    const reg_exp = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$");
    const IdName = reg_exp.exec(m.id.value);
    
    if (IdName==null) {
        alert("4~12자의 영문자,숫자,특수기호를 혼합해 작성해주시기 바랍니다")
        return false;
    }

    const F_Name = document.forms["member_form"]["name"].value;
    if (F_Name == null || F_Name =="")
    {alert("이름을 입력하세요.");
      return false;
    }

    const reg_exp1 = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{8,10}$");
    const pwd = reg_exp1.exec(m.pass.value);
    if (pwd==null){
      alert("8~10자의 영문자, 숫자를 혼합해서 작성해주시기 바랍니다");
      return false;
    }

    
    const pwd1=document.forms["member_form"]["pass"].value;
    const pwd2=document.forms["member_form"]["pass_confirm"].value;
    if (pwd1 != pwd2) {
        alert("비밀번호가 일치하지 않습니다");
        return false;
    }

    const tel = document.forms["member_form"]["tel"].value;
    if(tel==null || tel=="") {
        alert("전화번호를 입력하세요");
        return false;
    }

    const mail = document.forms["member_form"]["email1"].value;
    if(mail==null || mail=="") {
        alert("이메일을 입력하세요");
        return false;
    }

    const sns = "0";
    for (let i=0; i<m.ss.length;i++){
        if(m.ss[i].checked ==1) {
            sns = 1;
        }
    }
    if(sns==0) {
        alert("회원님의 성별을 선택해주시기 바랍니다.");
        return false;
    }
}