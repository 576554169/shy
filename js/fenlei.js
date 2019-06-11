$(function(){
    $('.bade li').click(function(){
        $('.coobl').html(' ');
        var i=$(this).attr('name');
        $.get('./js/data.json',function(str){
            var arr=eval(str)
            $.each(arr,function(p){
               var ui = arr[p].name
               var img = arr[p].img
               var list = arr[p].list
               if(ui==i){
                    $.each(list,function(j){
                       $(`
                       <li>
                       
                       <img src=${list[j].covimg} alt="">
                       <span>${list[j].dete}</span>
                       
                        </li>
                       `).appendTo('.coobl')
                    })
               }
            })
        })
    })
})

