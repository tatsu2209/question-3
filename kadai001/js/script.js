$(function(){
  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    fade: true,
    spped: 500,
    autoplaySpeed: 3000,
    arrows: false,
  });
  // アニメーション
  $('a').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  $('a').on('mouseout', function(){
    $(this).animate({
      opacity: 1.0,
    },100);
  });
  // スクロールした時にTOPに戻るボタンを表示させる
  $(window).on('scroll',function(){
    if($(this).scrollTop() > 300){
      $('#back-btn').fadeIn();
    }
    else{
      $('#back-btn').fadeOut();
    }
  });
  // ページ内リンクのスクロールをなめらかにする
  $('a[href^="#"]').on('click',function(event){
    event.preventDefault();
    
    const href = $(this).attr('href');
    const target = href === '#' ? 'html' : href;
    const position = $(target).offset().top;

    $('html,body').animate({
      scrollTop: position,
    }, 800);
  });
  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function(){
    $('.scroll-fadeIn').each(function(){
      const elementTop = $(this).offset().top;
      const windowScroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if(windowScroll > elementTop - windowHeight +100){
        $(this).addClass("fadeIn");
      }
    });
  });
  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.img').on('click',function(){
    const newSrc = $(this).attr('src');
    $('modal-img').attr('src',newSrc);
    $('.modal').fadeIn();
  });
  $('.modal-close').on('click',function(){
    $('.modal').fadeOut();
  });
});
