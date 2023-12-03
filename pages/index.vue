<script setup>

    const mainPage = await GqlMainPage().then(data => {

        return data
    })
    useSeoMeta({
        title: mainPage.page.seo.title,
        ogTitle: mainPage.page.seo.title,
        description: mainPage.page.seo.metaDesc,
        ogDescription: mainPage.page.seo.metaDesc,
        // ogImage: mainPage.page.seo.opengraphImage.sourceUrl,
    })


</script>

<template lang="">
    <MainBanner :slides="mainPage.page.mainPage.glavnyjBanner"/>
    <MainSaleProducts :products="mainPage.products.nodes.slice(0, 4)" />
    <MainCategories :categories="mainPage.productCategories.nodes"/>
    <MainPopularProducts :products="mainPage.products.nodes.slice(4)"/>
    <section class="section section__kategory section__kategory-brands">
        <div class="container">
            <div class="kategory">
                <div class="kategory__header header">
                    <h2 class="kategory__title title-big">Популярные бренды</h2>
                    <a href="brands.html" class="kategory__btn text header__btn">Все бренды<svg width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg></a>
                </div>
                <div class="kategory__items">
                    <div class="kategory__item">
                        <img src="/img/brands-img1.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img2.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img3.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img4.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img5.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img6.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img7.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img8.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img9.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img10.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img11.webp" alt="">
                    </div>
                    <div class="kategory__item">
                        <img src="/img/brands-img12.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section__reviews">
        <div class="container">
            <div class="reviews">
                <div class="reviews__header header">
                    <h2 class="reviews__title title-big">Отзывы</h2>
                    <div class="reviews__buttons">
                        <div class="reviews__btn swiper-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="reviews__btn swiper-next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="reviews__swiper swiper">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide slide">
                                <div class="slide__header">
                                    <div class="slide__contact">
                                        <div class="slide__img"><img src="/img/review-img1.svg" alt=""></div>
                                        <p class="slide__title text bold">Пётр</p>
                                    </div>
                                    <img src="/img/_.svg" alt="">
                                </div>
                                <p class="slide__text text-big">Сегодня 10.03.2022 года, брал перфоратор в аренду в
                                    магазине
                                    по
                                    улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в
                                    ящике
                                    перфоратора
                                    это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил
                                    телевизор,
                                    где
                                    надо было просверлить 4 отверстия, всего за 100 ₽</p>
                                <p class="slide__date subtext">21 марта 2022 г.</p>
                            </div>
                            <div class="swiper-slide slide">
                                <div class="slide__header">
                                    <div class="slide__contact">
                                        <div class="slide__img"><img src="/img/review-img2.svg" alt=""></div>
                                        <p class="slide__title text bold">Анна</p>
                                    </div>
                                    <img src="/img/_.svg" alt="">
                                </div>
                                <p class="slide__text text-big">Живу в п.Володарский МО, очень были рады открытию
                                    магазина
                                    СтройкаСтор. Хорошие сотрудники, но особенно хочется отметить работу Алексея за
                                    его помощь
                                    в
                                    решении проблем, очень квалифицированные рекомендации по подбору строительных
                                    материалов
                                    для
                                    ремонта. Хороший ассортимент
                                </p>
                                <p class="slide__date subtext">18 марта 2022 г.</p>
                            </div>
                            <div class="swiper-slide slide">
                                <div class="slide__header">
                                    <div class="slide__contact">
                                        <div class="slide__img"><img src="/img/review-img3.svg" alt=""></div>
                                        <p class="slide__title text bold">Виктор</p>
                                    </div>
                                    <img src="/img/_.svg" alt="">
                                </div>
                                <p class="slide__text text-big">Заказывал в данном магазине строй материалы.
                                    Привезли их
                                    вовремя и
                                    в прекрасном состоянии, претензий к доставке, персоналу и прочему меня нет.
                                    Строй
                                    материалы мне
                                    понравились, ремонт с ними я сделал отличный. Магазин мне безумно понравился,
                                    обязательно
                                    обращусь сюда снова, большое спасибо</p>
                                <p class="slide__date subtext">6 ноября 2021 г.</p>
                            </div>
                            <div class="swiper-slide slide">
                                <div class="slide__header">
                                    <div class="slide__contact">
                                        <div class="slide__img"><img src="/img/review-img4.svg" alt=""></div>
                                        <p class="slide__title text bold">Дмитрий</p>
                                    </div>
                                    <img src="/img/_.svg" alt="">
                                </div>
                                <p class="slide__text text-big">Данный магазин целиком и полностью оправдал все мои
                                    ожидания.
                                    Тут
                                    мне удалось найти апсалютно все нужные мне материалы для отделочных работ и в
                                    нужном
                                    количестве.
                                    С доставкой тоже получилось всё удобно. привезли всё в заказанном количестве и в
                                    отличном
                                    состоянии.
                                </p>
                                <p class="slide__date subtext">5 ноября 2021 г.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section__about">
        <div class="container">
            <div class="about">
                <h2 class="about__title title-big">О компании</h2>
                <p class="about__text text-big">В СтройкаСтор вы всегда можете купить все необходимые товары для
                    ремонта
                    дома и дачи. Хотите сделать ремонт в квартире? Строите загородный дом? Используйте строительные
                    и
                    отделочные материалы из нашего каталога.</p>
                <p class="about__text text-big">Быстрая доставка строительных товаров по низким ценам сделает ваши
                    покупки более приятными. Ремонт может стоить дешево, если делать его с нами. Для вас всегда в
                    наличии
                    более 30 000 товаров для строительства по низким ценам каждый день.
                    СтройкаСтор — это широкий ассортимент товаров для дома и ремонта недорого; Возможность заказать
                    строительные и отделочные материалы для дома и дачи.</p>
            </div>
        </div>
    </section>
</template>
<style lang="">

</style>