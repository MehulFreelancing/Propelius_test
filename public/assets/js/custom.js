$( document ).ready(function() {
    
    //Menu Toggle Js
    $('.menu_toggle_btn').click(function(){
        $('.header-wrapper').toggleClass('menu_open');
        $('body').toggleClass('cm-overflow');
    });

    //Dropdownbox Js
    $(".drop_down_arrow").click(function(){
        $(this).parents('.common_drop_down').find('.common_drop_down_list').slideToggle();
        $(this).toggleClass("showMenu");
        $('.drop_down_title').toggleClass("addborder");


        $(this).parents('.common_drop_down').siblings().find('.common_drop_down_list').slideUp();
        $(this).parents('.common_drop_down').siblings().find('.drop_down_arrow').removeClass("showMenu");

        $(".common_drop_down_list li").click(function(){
            $(this).parents('.common_drop_down').find('.drop_down_arrow span').text($(this).text());
            $(this).parents('.common_drop_down').find('.common_drop_down_list').slideUp();
            $(this).parents('.common_drop_down').find('.drop_down_arrow').removeClass("showMenu");
            $('.drop_down_title').removeClass("addborder");

        });
    });
});