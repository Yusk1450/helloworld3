let totalDown = 0;

let nowImgNum = 0;
let allowAnim = true;

const FIRST_VIEW_STEPS = 3;

if ('scrollRestoration' in history)
{
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

$('.prevImg').addClass('newImg');

if (window.matchMedia("(max-width: 768px)").matches)
    {
        $(".HelloWorldLogo").attr("src", "image/Group_26.png");
    }

function showLastImage()
{
    $('.prevImg, .secondImg, .thirdImg').css('opacity', 0);
    $('.nextImg').css('opacity', 1);
    nowImgNum = FIRST_VIEW_STEPS;
    allowAnim = false;
    $("body").css("overflow", "auto");
}

if (window.scrollY !== 0)
{
    showLastImage();
}

window.addEventListener("wheel", function(e)
{
    if (nowImgNum >= FIRST_VIEW_STEPS)
    {
        return;
    }

    if (window.scrollY !== 0)
    {
        return;
    }

    if (window.matchMedia("(max-width: 768px)").matches)
    {
        if($('.prevImg').css('opacity') == 0){return;}
        e.preventDefault();
        $("body").css("overflow", "hidden");
        $('.prevImg').addClass('mobileFadeOut');
        $('.nextImg').addClass('mobileFadeIn');

        setTimeout(() => {
            nowImgNum = FIRST_VIEW_STEPS;
            $("body").css("overflow", "auto");
            }, 1000);

        return;
    }

    e.preventDefault();
    $("body").css("overflow", "hidden");

    if(allowAnim == false)
    {
        return;
    }

    totalDown += e.deltaY;

    if (totalDown >= 300)
    {
        if(nowImgNum == 0)
        {
            $('.prevImg').addClass('fadeOut');
            $('.secondImg').addClass('fadeIn');
            allowAnim = false;

            setTimeout(() => {
            nowImgNum += 1;
            allowAnim = true;
            }, 500);
        }else if(nowImgNum == 1)
        {
            $('.secondImg').addClass('fadeOut');
            $('.thirdImg').addClass('fadeIn');
            allowAnim = false;

            setTimeout(() => {
            nowImgNum += 1;
            allowAnim = true;
            }, 500);
        }else if(nowImgNum == 2)
        {
            $('.thirdImg').addClass('fadeOut');
            $('.nextImg').addClass('fadeIn');
            allowAnim = false;

            setTimeout(() => {
            nowImgNum += 1;
            allowAnim = true;
            $("body").css("overflow", "auto");
            }, 500);
        }

        totalDown = 0;
    }
}, { passive: false });

$(function()
{
    const $lightbox = $('#lightbox');

    function openLightbox(id)
    {
        const work = window.worksData[id];

        $('#lbImg').attr('src', 'image/works/' + work.img).attr('alt', work.name);
        $('#lbName').text(work.name);
        $('#lbAuthor').text(work.author);

        if (work.tech)
        {
            $('#lbTech').text('使用技術：' + work.tech).show();
        }
        else
        {
            $('#lbTech').hide();
        }

        $('#lbAbout').html(work.description);

        $lightbox.addClass('open');
        $('body').css('overflow', 'hidden');
    }

    function closeLightbox()
    {
        $lightbox.removeClass('open');
        $('body').css('overflow', 'auto');
    }

    $('.galleryImgs').on('click', function()
    {
        openLightbox($(this).data('id'));
    });

    $lightbox.on('click', '[data-close]', closeLightbox);

    $(document).on('keydown', function(e)
    {
        if (e.key === 'Escape') { closeLightbox(); }
    });
});
