window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });


      var news = ger("lb")
    var zhao = lu[news]
    $(".large_size").html(zhao.jq)
    $(".ii").attr("src",zhao.img)
    function ger(name){
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
        var r = window.location.search.substr(1).match(reg);
        if(r!=null){
            return r[2]
        }else{
            return "";
        }
    }
}