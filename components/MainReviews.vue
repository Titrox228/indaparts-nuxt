<template>
    <section class="section section__reviews">
        <div class="container">
            <div class="reviews">
                <div class="reviews__header header">
                    <h2 class="reviews__title title-big">Отзывы</h2>
                    <div class="reviews__buttons">
                        <div class="reviews__btn swiper-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div class="reviews__btn swiper-next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <Swiper :direction="'horizontal'" :loop="false" :initialSlide="0" :speed="1e3" :slidesPerView="3.3"
                    :spaceBetween="16" :breakpoints="swiperBreakpoints" :keyboard="{
                        enabled: !0,
                        onlyInViewport: !1
                    }" :navigation="{
    nextEl: '.section__reviews .swiper-next',
    prevEl: '.section__reviews .swiper-prev'
}" class="reviews__swiper">
                    <SwiperSlide class="slide">
                        <div class="slide__header">
                            <div class="slide__contact">
                                <div class="slide__img"><img src="/img/male-avatar.svg" alt=""></div>
                                <p class="slide__title text bold">Игорь</p>
                            </div>
                            <img src="/img/_.svg" alt="">
                        </div>
                        <p class="slide__text text-big">IndaParts - это настоящее спасение для моего автомобиля!
                            Заказывал запчасти через интернет впервые, и не пожалел. Огромный выбор, быстрая
                            доставка и, главное, качество на высоте. Теперь я точно знаю, где искать все для своего
                            железного друга. Спасибо!</p>
                        <p class="slide__date subtext">28 февраля 2023</p>
                    </SwiperSlide>
                    <SwiperSlide class="slide">
                        <div class="slide__header">
                            <div class="slide__contact">
                                <div class="slide__img"><img src="/img/male-avatar.svg" alt=""></div>
                                <p class="slide__title text bold">Владимир</p>
                            </div>
                            <img src="/img/_.svg" alt="">
                        </div>
                        <p class="slide__text text-big">IndaParts – это отличное решение для тех, кто ценит свою
                            машину. Заказывал запчасти. Весь процесс - от выбора на сайте до доставки - прошел
                            гладко. Качество товаров на высшем уровне, цены приятно удивили. Рекомендую IndaParts
                            всем автолюбителям!</p>
                        <p class="slide__date subtext">10 мая 2023</p>
                    </SwiperSlide>
                    <SwiperSlide class="slide">
                        <div class="slide__header">
                            <div class="slide__contact">
                                <div class="slide__img"><img src="/img/female-avatar.svg" alt=""></div>
                                <p class="slide__title text bold">Елена</p>
                            </div>
                            <img src="/img/_.svg" alt="">
                        </div>
                        <p class="slide__text text-big">Пользуюсь услугами IndaParts уже несколько раз, и каждый раз
                            остаюсь довольной! Огромный выбор запчастей, интуитивно понятный сайт, а главное –
                            оперативная поддержка клиентов. Спасибо за профессионализм и отличное обслуживание!</p>
                        <p class="slide__date subtext">7 ноября 2023</p>
                    </SwiperSlide>
                    <SwiperSlide class="slide">
                        <div class="slide__header">
                            <div class="slide__contact">
                                <div class="slide__img"><img src="/img/male-avatar.svg" alt=""></div>
                                <p class="slide__title text bold">Сергей</p>
                            </div>
                            <img src="/img/_.svg" alt="">
                        </div>
                        <p class="slide__text text-big">IndaParts - это не просто магазин автозапчастей, а настоящий
                            партнер в уходе за автомобилем. Заказывал здесь несколько разных деталей, всегда был
                            приятно удивлен оперативной доставкой и высоким качеством товаров. Теперь IndaParts -
                            мой первый выбор в мире автозапчастей!</p>
                        <p class="slide__date subtext">18 июля 2023</p>
                    </SwiperSlide>
                    <SwiperSlide class="slide">
                        <div class="slide__header">
                            <div class="slide__contact">
                                <div class="slide__img"><img src="/img/female-avatar.svg" alt=""></div>
                                <p class="slide__title text bold">Мария</p>
                            </div>
                            <img src="/img/_.svg" alt="">
                        </div>
                        <p class="slide__text text-big">IndaParts – это магазин, который заслуживает доверия.
                            Заказывала зимнюю резину и аксессуары. Качество товаров на уровне, цены приемлемые.
                            Приятно, что можно полагаться на быструю доставку. Теперь мой автомобиль готов к зиме,
                            благодаря IndaParts!</p>
                        <p class="slide__date subtext">3 декабря 2022</p>
                    </SwiperSlide>
                    <SwiperSlide class="slide">
                        <div class="slide__header">
                            <div class="slide__contact">
                                <div class="slide__img"><img src="/img/male-avatar.svg" alt=""></div>
                                <p class="slide__title text bold">Дмитрий</p>
                            </div>
                            <img src="/img/_.svg" alt="">
                        </div>
                        <p class="slide__text text-big">Экспериментировать с запчастями страшно, но IndaParts смог
                            доказать свою надежность. Заказывал тормозные диски и колодки. Качественные материалы и
                            точная совместимость. Быстрая доставка только подтвердила профессионализм компании.
                            Очень доволен результатом!</p>
                        <p class="slide__date subtext">22 августа 2023</p>
                    </SwiperSlide>
                    <SwiperSlide class="slide">
                        <div class="slide__header">
                            <div class="slide__contact">
                                <div class="slide__img"><img src="/img/female-avatar.svg" alt=""></div>
                                <p class="slide__title text bold">Наталья</p>
                            </div>
                            <img src="/img/_.svg" alt="">
                        </div>
                        <p class="slide__text text-big">Заказывала аксессуары в IndaParts – полное удовлетворение!
                            Интуитивно понятный сайт, разнообразие товаров, а главное, приятные скидки. Здесь я
                            нашла все, что нужно для стайлинга моего авто. Очень рада, что обратилась именно в этот
                            магазин!</p>
                        <p class="slide__date subtext">14 июня 2024</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            swiperBreakpoints: {
                1173: {
                    slidesPerView: 3.3
                },
                768: {
                    slidesPerView: 2.5
                },
                540: {
                    slidesPerView: 2
                },
                440: {
                    slidesPerView: 1.5
                },
                0: {
                    slidesPerView: 1
                }
            },
        }

    }
}
</script>