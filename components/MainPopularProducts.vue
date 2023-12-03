<script>
export default {
    props: ['products'],
}
</script>
<template>
    <section class="section section__goods">
        <div class="container">
            <div class="goods">
                <h2 class="goods__title title-big">Популярные товары</h2>
                <div class="goods__items">
                    <div class="goods__item katalog__item" v-for="product in products"
                        :key="product.databaseId">
                        <NuxtLink :to="`/product/${product.slug}`" class="goods__item-img">
                            <img loading="lazy" decoding="async" :src="product.image.sourceUrl" :alt="product.name" :title="product.name">
                        </NuxtLink>
                        <div class="goods__item-content">
                            <NuxtLink :to="`/product/${product.slug}`" class="goods__item-text text-big">{{ product.name }}</NuxtLink>
                            <div class="discount__item-price" v-if="product.salePrice">
                                <p class="discount__item-title subtitle-big bold" v-html="product.salePrice"></p>
                                <p class="discount__item-title text-big bold" v-html="product.regularPrice"></p>
                            </div>
                            <p class="goods__item-price subtitle-big bold" v-html="product.regularPrice" v-else></p>
                            <div class="goods__item-btn  btn-shop btn text">В корзину</div>
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