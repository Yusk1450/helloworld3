let lastScrollY = 0;
let totalDown = 0;

let nowImgNum = 0;
let allowAnim = true;

$('.prevImg').addClass('newImg');

if (window.matchMedia("(max-width: 768px)").matches)
    {
        $(".HelloWorldLogo").attr("src", "image/Group_26.png");
    }

$(window).on("wheel", function(e)
{
    if (window.matchMedia("(max-width: 768px)").matches)
    {
        let opacity = $('.yourClass').css('opacity');
        if($('.prevImg').css('opacity') == 0){return;}
        $("body").css("overflow", "hidden");
        $('.prevImg').addClass('mobileFadeOut');
        $('.nextImg').addClass('mobileFadeIn');

        setTimeout(() => {
            $("body").css("overflow", "auto");
            }, 1000);

        return;
    }
    if(allowAnim == false){return;}
    e.preventDefault();

    totalDown += e.originalEvent.deltaY

    if(nowImgNum < 3){$("body").css("overflow", "hidden");}
    else{$("body").css("overflow", "auto");}
    // $("body").css("overflow", "auto");

    if (totalDown >= 300)
    {
        if(nowImgNum == 0 && allowAnim)
        {
            $('.prevImg').addClass('fadeOut');
            $('.secondImg').addClass('fadeIn');
            allowAnim = false;

            setTimeout(() => {
            nowImgNum += 1;
            // alert(nowImgNum);
            allowAnim = true;
            }, 500);

            // $('.secondImg').addClass('newImg');

            // if ($(".secondImg").css("opacity") < 1){}
        }else if(nowImgNum == 1 && allowAnim)
        {
            $('.secondImg').addClass('fadeOut');
            $('.thirdImg').addClass('fadeIn');
            allowAnim = false;

            setTimeout(() => {
            nowImgNum += 1;
            // alert(nowImgNum);
            allowAnim = true;
            }, 500);

            // $('.thirdImg').addClass('newImg');

            // if ($(".thirdImg").css("opacity") < 1){nowImgNum += 1;}
            // nowImgNum += 1;
        }else if(nowImgNum == 2 && allowAnim)
        {
            $('.thirdImg').addClass('fadeOut');
            $('.nextImg').addClass('fadeIn');
            allowAnim = false;

            setTimeout(() => {
            nowImgNum += 1;
            // alert(nowImgNum);
            allowAnim = true;
            $("body").css("overflow", "auto");
            }, 500);

            // $('.nextImg').addClass('newImg');

            // nowImgNum += 1;
        }

        // alert("画像を切り替える");
        totalDown = 0;
    }

    // setTimeout(function()
    // {
        
    //     setTimeout(function()
    //     {
    //         $('.secondImg').addClass('fadeOut');
    //         $('.thirdImg').addClass('fadeIn');
    //         setTimeout(function()
    //         {
                
    //         }, 2000);
    //     }, 2000);
    // }, 2000);
});