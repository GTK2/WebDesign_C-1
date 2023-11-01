$(document).ready(function(){
    // 슬라이드 메뉴
    // 7 line : menu ul li에 마우스를 올리면
    // 8 line : 마우스를 올린 li 중 submenu를 찾아서 모든 동작을 멈추고 슬라이드다운 시킴
    // 9 line : menu ul li에서 마우스를 치우면
    // 10 line : 마우스를 치운 li 중 submenu를 찾아서 모든 동작을 멈추고 슬라이드업 시킴
    $(".menu ul li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(); 
    });


    //탭메뉴
    // 20 line : n-btn을 클릭하면
    // 21 line : n-btn에 on 클래스를 부여
    // 22 line : g-btn의 on 클래스를 제거
    // 23 line : notice를 보임
    // 24 line : gallery를 가림
    $(".n-btn").click(function(){
        $(this).addClass("on");
        $(".g-btn").removeClass("on");
        $(".notice").show();
        $(".gallery").hide();
    });
    $(".g-btn").click(function(){
        $(this).addClass("on");
        $(".n-btn").removeClass("on");
        $(".notice").hide();
        $(".gallery").show();
    });

    // 이미지 슬라이드(페이드 인아웃)
    // 39 line : 전체 이미지를 가리고
    // 40 line : 첫번째 이미지만 보이게 함
    // 42line : $(.img-list li:first-child).fadeOut() : img-list의 첫번째 li 요소를 페이드 아웃시킴
    // .next().fadeIn() : 현재 선택된(첫번쨰 li요소)의 다음 요소를 페이드 인시킴
    // .end().appanedTo(".img-list") : 현재 선택된(next에서 선택된 두번째 li 요소)의 이전 선택 요소(img-list의 첫번째 li요소)를 잘라서 img-list의 맨 뒤에 붙여넣음. (1번 이미지가 리스트의 맨 뒤로가서 전체 이미지의 순서가 2 - 3 - 1로 바뀜. 그래서 다음 실행시에는 2번 이미지가 img-list의 첫번째 li 요소가 됨.)
    $(".img-list li").hide(); 
    $(".img-list li:first-child").show(); 
    setInterval(function(){
        $(".img-list li:first-child").fadeOut(1500).next().fadeIn(1500).end().appendTo(".img-list");
    }, 3000);

    // 모달 레이어
    // 50 line : notice ul li의 첫번째 요소를 클릭하면
    // 51 line : 모달창을 보임
    // 53 line : popup input을 클릭하면
    // 54 line : 모달창을 가림
    $(".notice ul li:first-child").click(function(){
        $("#modal").show();
    });
    $(".popup input").click(function(){
        $("#modal").hide();
    });
    
});