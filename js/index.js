window.onload=function(){
    var swiper1 = new Swiper('.swiper1', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletActiveClass: 'my-bullet-active',
        },autoplay:{
            delay:2000,
            disableOnInteraction:false
            },
            loop:true,
      });
      var swiper2 = new Swiper('.swiper2', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },autoplay:{
            delay:2000,
            disableOnInteraction:false
            },
            loop:true,
            direction : 'vertical',

      });
      var swiper3 = new Swiper('.swiper3', {
        slidesPerView: 4.5,
        spaceBetween: 0,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
          snapOnRelease: false,
        },
      });
    
}

//jq入口
$(function(){
    $('.footer').load('footer.html');

    $(window).scroll(function(){
      if($('body,html').scrollTop()>183){
        $('.fix').css('background','red')
      }else{
        $('.fix').css('background','')
      }
    })
  //   $(window).scroll(function(){
  //     if($("body,html").scrollTop()>=183){
  //         $(".fix").addClass("colo")
  //     }else{
  //         $(".fix").removeClass("colo")
  //     }
  // })
    $(".biao").click(function(){
      var articleId = $(this).attr("articleId");
      window.location.replace("xiangqin.html?lb=zuishai"+articleId);
    })
//   $(".biao").delegate("li","click",function(){
//     var articleId = $(this).attr("articleId");
//     console.log(articleId)
//     window.location.replace("details.html?lb=zuishai"+articleId);
// }) 
})