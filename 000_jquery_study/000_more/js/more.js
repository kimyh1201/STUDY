$(function(){
    function listMore(){
        $('#showLess').hide();
        let size_li = $('#bestseller_box li').size();
        win=$(window).width();
        if(win <= 640){
            let x=2;
            $('#bestseller_box li:lt('+x+')').show();
            $('#loadMore').click(function(){
                x=(x+2 <= size_li) ? x+2 : size_li;
                $('#bestseller_box li:lt('+x+')').show();
                if(x == size_li){
                    $('#loadMore').hide();
                    $('#showLess').show()
                }
            });
            $('#showLess').click(function(){
                x=(x-2<0) ? 2: x-10;
                $('#bestseller_box li').not(':lt('+x+')').hide();
                $('#loadMore').hide();
                $('showLess').show();
                if(x ==2) {
                    $('#showLess').hide();
                    $('#loadMore').show();
                }
            });
        }else if(win>640 && win <=768) {
            let x=3;
            $('#bestseller_box li:lt('+x+')').show();
            $('#loadMore').click(function(){
                x=(x+3 <= size_li) ? x+3 : size_li;
                $('#bestseller_box li:lt('+x+')').show();
                if(x == size_li){
                    $('#loadMore').hide();
                    $('#showLess').show()
                }
            });
            $('#showLess').click(function(){
                x=(x-3<0) ? 3: x-9;
                $('#bestseller_box li').not(':lt('+x+')').hide();
                $('#loadMore').hide();
                $('showLess').show();
                if(x ==3) {
                    $('#showLess').hide();
                    $('#loadMore').show();
                }
            });
        }else{
            let x=4;
            $('#bestseller_box li:lt('+x+')').show();
            $('#loadMore').click(function(){
                x=(x+4 <= size_li) ? x+4 : size_li;
                $('#bestseller_box li:lt('+x+')').show();
                if(x == size_li){
                    $('#loadMore').hide();
                    $('#showLess').show()
                }
            });
            $('#showLess').click(function(){
                x=(x-4<0) ? 4: x-8;
                $('#bestseller_box li').not(':lt('+x+')').hide();
                $('#loadMore').hide();
                $('showLess').show();
                if(x ==4) {
                    $('#showLess').hide();
                    $('#loadMore').show();
                }
            });
        }
    }
    listMore();

    $(window).on('resize',function(){
        listMore()
        location.reload();
    });
});


/*$('#showLess').hide();
const size_li = $('#myList li').size(); //length = size(잘 안씀;; gpt가 자제하라고함)
let x=3;
$('#myList li:lt('+x+')').show();
$('#loadMore').click(function(){
    x=(x+5 <= size_li) ? x+5 : size_li;
    $('#myList li:lt('+x+')').show();
    if(x == size_li){
        $('#loadMore').hide();
        $('#showLess').show()
    }
});

$('#showLess').click(function(){
    x=(x-5<0) ? 3: x-5;
    $('#myList li').not(':lt('+x+')').hide();
    $('#loadMore').hide();
    $('showLess').show();
    if(x ==3) {
        $('#showLess').hide();
        $('#loadMore').show();
    }
})*/