$(document).ready(() => {
    /**
     * SLICK
     */
    $('.cases__ser').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        nextArrow: '<button type="button" class="slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="35" transform="matrix(-1 0 0 1 35 35)" fill="#F7F2EC"/><path d="M38 40.7485L36.8566 42L30.4615 35L36.8566 28L38 29.2515L32.7483 35L38 40.7485V40.7485Z" fill="black" fill-opacity="0.54"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="35" transform="matrix(-1 0 0 1 35 35)" fill="#F7F2EC"/><path d="M38 40.7485L36.8566 42L30.4615 35L36.8566 28L38 29.2515L32.7483 35L38 40.7485V40.7485Z" fill="black" fill-opacity="0.54"/></svg></button>',
        autoplay: true,
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
    // $('.menu-toggle-inner').on('click', () => {
    //     $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
    //     $('.headerNav_adaptive').toggleClass('header_opened');
    // });
    let menuContainer = document.getElementById('nav');

    document.getElementById('burger_button').addEventListener('click', () => {
        menuContainer.style.display = 'block';
        setTimeout(function() {
            menuContainer.classList.add('active')
        }, 10)
    });
    document.getElementById('burger_close').addEventListener('click', () => {
        menuContainer.classList.remove('active');
        setTimeout(function() { menuContainer.style.display = '' }, 600)
    });

    // $('[class^="YMapsID"]').find('[class$="YMaps-layer-container"]').css('filter', 'grayscale(100%)');

    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });

    /**
     * FILE INPUT
     */
    $('input[type=file] ~ label').on('click', (e) => {
        console.log('test')
        $(e.target).siblings('input').trigger('click');
    });

    $('input[type="file"]').on('change', (e) => {
        let input = $(e.target);
        let container = input.parents('form');
        let name = e.currentTarget.files[0].name;

        if (!name) {
            return;
        }

        container.find(('.form__file-name')).text(name);
        container.find('.btn__delete-file').css('display', 'inline-block');
    });

    $('.btn__delete-file').on('click', (e) => {
        let parent = $(e.target).parents('form');

        parent.find('input[type="file"]').val(null);
        parent.find('.form__file-name').text('');
        parent.find('.btn__delete-file').css('display', 'none');
    });

    /**
     * YANDEX.MAPS API
     */
    if(document.getElementById('YMapsID')) {
        YMaps.jQuery(function () {
            // Создает экземпляр карты и привязывает его к созданному контейнеру
            let map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

            // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
            map.setCenter(new YMaps.GeoPoint(30.308026, 59.955466), 17);
            let myPlacemark = new YMaps.Placemark(new YMaps.GeoPoint(30.308026, 59.955466), {
                draggable: 1,
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
    }
    if(document.getElementById('YMapsID2')) {
        YMaps.jQuery(function () {
            // Создает экземпляр карты и привязывает его к созданному контейнеру
            let map2 = new YMaps.Map(YMaps.jQuery("#YMapsID2")[0]);

            // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
            map2.setCenter(new YMaps.GeoPoint(61.411528, 55.166390), 17);
            let myPlacemark = new YMaps.Placemark(new YMaps.GeoPoint(61.411528, 55.166390), {
                draggable: 1,
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

            map2.addOverlay(myPlacemark);

        })
    }

    /**
     * Accordion
     */
    let accordion = document.getElementById('freakingGoodAccordion');
    if (accordion) {
        let accordionItems = accordion.querySelectorAll('.accordion__item');
        accordionItems.forEach(item => item.addEventListener('click', () => {
            if (item.classList.contains('active')) {
                item.classList.toggle('active')
            } else {
                accordionItems.forEach(item => item.classList.remove('active'));
                item.classList.add('active')
            }
        }))
        // function setDataHeight(element) {
        //     let height = element.offsetHeight;
        //     element.dataset.height = height
        // }
    }
});
