<script>
export default {
    props: ['categories'],
}
</script>
<template>
    <section class="section section__kategory">
        <div class="container">
            <div class="kategory">
                <div class="kategory__header header">
                    <h2 class="kategory__title title-big">Популярные категории</h2>
                    <a href="katalog.html" class="kategory__btn text header__btn">Все категории<svg width="24" height="24"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="#454950" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="kategory__items">
                    <NuxtLink :to="`/product-category/${category.slug}`" class="kategory__item" v-for="category in categories">
                        <p class="kategory__item-text text">{{ category.name }}</p>
                        <div class="kategory__item-img">
                            <img loading="lazy" decoding="async" :src="category.image.sourceUrl" :alt="category.name">
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>