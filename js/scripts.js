$(document).ready(() => {
    /**
     * SLICK
     */
    // $('.cases__slider').slick({
    //     infinite: false,
    //     arrows: true,
    //     dots: false,
    //     slidesToShow: 1,
    //     autoplay: false,
    //     responsive: [
    //         {
    //             breakpoint: 1000,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //     ]
    // });

    $('.cases__ser').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="35" transform="matrix(-1 0 0 1 35 35)" fill="#F7F2EC"/><path d="M38 40.7485L36.8566 42L30.4615 35L36.8566 28L38 29.2515L32.7483 35L38 40.7485V40.7485Z" fill="black" fill-opacity="0.54"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="35" transform="matrix(-1 0 0 1 35 35)" fill="#F7F2EC"/><path d="M38 40.7485L36.8566 42L30.4615 35L36.8566 28L38 29.2515L32.7483 35L38 40.7485V40.7485Z" fill="black" fill-opacity="0.54"/></svg></button>',
        autoplay: true,
        // responsive: [
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 640,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     },
        // ]
    });

    $('.cases__slider').slick({
        infinite: false,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        nextArrow: '<button type="button" class="slick-next">слудующий<br>кейс</button>',
        prevArrow: '<button type="button" class="slick-prev">предыдущий<br>кейс</button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
        ]

    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });


    $('[class^="YMapsID"]').find('[class$="YMaps-layer-container"]').css('filter', 'grayscale(100%)');

    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });

    /**
     * YANDEX.MAPS API
     */
    // Создает обработчик события window.onLoad
    YMaps.jQuery(function () {
        // Создает экземпляр карты и привязывает его к созданному контейнеру
        let map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(30.308026, 59.955466), 17);
        var myPlacemark = new YMaps.Placemark(new YMaps.GeoPoint(30.308026, 59.955466), {draggable: 1,
            hintOptions: {
                maxWidth: 100,
                showTimeout: 200,
                offset: new YMaps.Point(5, 5)
            },
            balloonOptions: {
                maxWidth: 70,
                hasCloseButton: false,
                mapAutoPan: 0
            }
        });
        myPlacemark.name = "Advokat";

        map.addOverlay(myPlacemark);

    })
});
