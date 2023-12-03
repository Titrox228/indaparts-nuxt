<script setup>
const normalizePrice = price => {
    try {
        return Number(price.split('&')[0].replace(",", "."))
    } catch {
        return price
    }
}


</script>
<script>
export default {
    props: ['products'],
}
</script>
<template>
    <section class="section section__discount">
        <div class="container">
            <div class="discount">
                <div class="discount__header header">
                    <h2 class="discount__title title-big">Акции</h2>
                    <a href="#" class="discount__btn header__btn text">Все акции<svg width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="discount__items">
                    <div v-for="product in products" :key="product.databaseId" class="discount__item katalog__item">
                        <NuxtLink class="discount__item-img" :to="`/product/${product.slug}`">

                            <img loading="lazy" decoding="async" :src="product.image.sourceUrl" :alt="product.name" :title="product.name">
                            <div class="discount__item-label subtext">

                                −{{ Math.round(((normalizePrice(product.regularPrice) -
                                    normalizePrice(product.salePrice)) / normalizePrice(product.salePrice)) * 100) }}%</div>
                        </NuxtLink>
                        <div class="discount__item-content">
                            <NuxtLink class="discount__item-text text-big bold" :to="`/product/${product.slug}`">
                                {{ product.name }}
                            </NuxtLink>
                            <div class="discount__item-price">
                                <p class="discount__item-title subtitle-big bold" v-html="product.salePrice"></p>
                                <p class="discount__item-title text-big bold" v-html="product.regularPrice"></p>
                            </div>
                            <div class="discount__item-btn btn btn-shop text">В корзину</div>
                            <form action="#" class="btn__form btn-form">
                                <div class="btn__form-count plus"></div>
                                <input type="number" class="btn__form-input text" min="1" value="1" max="100">
                                <div class="btn__form-count minus"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>