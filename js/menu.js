$(".menu_item").click(function(){
    $(".menu_item").not($(this)).removeClass("menu_item_focus"),
    $(this).toggleClass("menu_item_focus"),
    $(".m_nav_switch").removeClass("op-nav"),
    $(".header").removeClass("op-nav")
}),
$("#homebtn,#homebtn_footer").click(function(){
    $("html,body").animate({
            scrollTop:0
    },"medium");
}),
$("#aboutbtn,#aboutbtn_footer").click(function(){
    if($(window).width()<480){
        $("html,body").animate({
            scrollTop:$("#about").offset().top-100
        },"medium");
    }else{    
        $("html,body").animate({
            scrollTop:$("#about").offset().top-120
        },"medium");
    }
}),
$("#skillbtn,#skillbtn_footer").click(function(){
    if($(window).width()<480){
        $("html,body").animate({
            scrollTop:$("#skill").offset().top-100
        },"medium");
    }else{    
        $("html,body").animate({
            scrollTop:$("#skill").offset().top-120
        },"medium");
    }
}),
$("#projectbtn,#projectbtn_footer").click(function(){
    if($(window).width()<480){
        $("html,body").animate({
            scrollTop:$("#project").offset().top-100
        },"medium");
    }else{    
        $("html,body").animate({
            scrollTop:$("#project").offset().top-120
        },"medium");
    }
}),

$("#appProjectbtn,#appbtn_footer").click(function(){
    if($(window).width()<480){
        $("html,body").animate({
            scrollTop:$("#appProject").offset().top-100
        },"medium");
    }else{    
        $("html,body").animate({
            scrollTop:$("#appProject").offset().top-120
        },"medium");
    }
}),
$("#designbtn,#designbtn_footer").click(function(){
    if($(window).width()<480){
        $("html,body").animate({
            scrollTop:$("#design").offset().top-100
        },"medium");
    }else{    
        $("html,body").animate({
            scrollTop:$("#design").offset().top-120
        },"medium");
    }
}),
$("#contactbtn,#contactbtn_footer").click(function(){
    if($(window).width()<480){
        $("html,body").animate({
            scrollTop:$("#colophon").offset().top-100
        },"medium");
    }else{    
        $("html,body").animate({
            scrollTop:$("#colophon").offset().top-120
        },"medium");
    }
}),
$(".m_nav_switch").click(function(){
    $(this).hasClass("op-nav")?
    ($(this).removeClass("op-nav"),
    $(".header").removeClass("op-nav")):
    ($(this).addClass("op-nav"),
    $(".header").addClass("op-nav"))
});