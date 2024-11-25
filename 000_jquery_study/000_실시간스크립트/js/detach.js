$(function(){
    
    const ticker = function(){
        setTimeout(function(){
            //지연 시간 뒤에 실행될 코드를 설정
            //setTimeout() 함수는 지정한 일정 시간이 지난 후에 1회만 실행
            $('#ticker li:first').animate({marginTop:'-5vh'},400,function()
            {
                $(this).detach().appendTo('ul#ticker').removeAttr('style');
            });
            ticker();
        }, 3000); //setTimeout()종료
    };//ticker()종료
    ticker();
    
});