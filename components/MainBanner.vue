<script>
export default {
    props: ['slides'],
}
</script>
<template>
    <section class="section section__hero">
        <Swiper class="hero__swiper" :modules="[SwiperNavigation, SwiperAutoplay]" :slides-per-view="1" :speed="1e3"
            :loop="true" :navigation="{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev'
            }" :autoplay="{
    delay: 8000,
    disableOnInteraction: true,
}">
            <SwiperSlide class="slide" v-for="slide in slides" :key="slide.zagolovok">
                <img :src="slide.izobrazhenie.sourceUrl" :alt="slide.zagolovok" :title="slide.zagolovok">
                <div class="container">
                    <div class="slide__content">
                        <h2 class="slide__title title" v-html="slide.zagolovok"></h2>
                        <p class="slide__text subtitle-big" v-html="slide.opisanie"></p>
                        <NuxtLink class="slide__btn btn text" :to="slide.ssylka" v-if="slide.ssylka">
                            Подробнее
                        </NuxtLink>
                    </div>
                </div>
            </SwiperSlide>
            <div class="container" v-if="slides.length > 1">
                <div class="swiper__buttons">
                    <div class="swiper__btn swiper-prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="swiper__btn swiper-next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </Swiper>
    </section>
</template>