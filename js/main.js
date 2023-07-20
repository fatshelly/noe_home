$(function () {
    $(".left").on("inview", function () {
        $(this).addClass("slideInL");
    });

    $(".right").on("inview", function () {
        $(this).addClass("slideInR");
    });


    // ハンバーガーメニューのクリックイベント
    $(".menu_bar").on("click", function () {
        $('.header').toggleClass('open');
    });
    
    // メニューが表示されている時に画面をクリックした場合
    $('#nav a').on('click', function () {
        // openクラスを削除して、メニューを閉じる
        $('.header').toggleClass('open');
    });

    // function Color(sample) {
    //     if (sample.value == 0) {
    //         sample.style.color = '';
    //     } else {
    //         sample.style.color = 'red';
    //     }
    // }


    if(window.matchMedia("(max-width: 480px)").matches) {
        var lastLi = $('.header .nav_flex li:last');
        $(lastLi).text('お問合わせ');

        var listStyle = {
            background:"#6764bd",
            borderRadius:"24px",
            textAlign:"center",
            color:"#fff",
            width:"180px",
            padding:"10px 0",
            margin:"60px auto",
        }
        $(lastLi).css(listStyle);
    }

});