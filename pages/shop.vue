<script setup>
const shop = await GqlPageShop()


useSeoMeta({
    title: shop.page.seo.title,
    ogTitle: shop.page.seo.title,
    description: shop.page.seo.metaDesc,
    ogDescription: shop.page.seo.metaDesc,
    ogImage: shop.page.seo.opengraphImage ? shop.page.seo.opengraphImage.sourceUrl : false,
})
</script>
<template>
    <section class="section section__katalog">
        <div class="container">
            <div class="katalog">
                <!-- <div class="katalog__header">
                    <div class="katalog__header-item text active">Аксон</div>
                    <div class="katalog__header-item text">A-progress.ru</div>
                    <div class="katalog__header-item text">Дешево-Строй</div>
                    <div class="katalog__header-item text">ГдеМатериал</div>
                    <div class="katalog__header-item text">ГлавСнаб</div>
                    <div class="katalog__header-item text">Гермес Групп</div>
                    <div class="katalog__header-item text">Маркет-Строй</div>
                    <div class="katalog__header-item text">МосДоброСтрой</div>
                    <div class="katalog__header-item text">Сатурн </div>
                    <div class="katalog__header-item text">Ремонт 3000</div>
                    <div class="katalog__header-item text">Roof&Facade</div>
                    <div class="katalog__header-item text">Строительный двор</div>
                    <div class="katalog__header-item text">Skladom.ru</div>
                    <div class="katalog__header-item text">Smart Complect</div>
                    <div class="katalog__header-item text">Конструктор</div>
                    <div class="katalog__header-item text">RDS Строй</div>
                    <div class="katalog__header-item text">Строительный Онлайн</div>
                    <div class="katalog__header-item text">Стройкомплект</div>
                    <div class="katalog__header-item text">Строительный Мир</div>
                    <div class="katalog__header-item text">Stroimaterial Moskva</div>
                    <div class="katalog__header-item text">Стройландия</div>
                    <div class="katalog__header-item text">Stroy Shopper</div>
                </div> -->
                <div class="katalog__items">
                    <div class="katalog__item" v-for="category in shop.productCategories.nodes" :key="category.slug">
                        <h4 class="katalog__item-title text">
                            <NuxtLink class="katalog__item-title text" :to="`/product-category/${category.slug}`">
                                {{category.name}}
                            </NuxtLink>
                        </h4>
                        <div class="katalog__item-img">
                            <img :src="category.image.sourceUrl" :alt="category.name" :title="category.name">
                        </div>
                        <ul class="katalog__item-list">
                            <li v-for="subcategory in category.children.edges">
                                <img src="/img/hover-arrow.svg" alt="">
                                <NuxtLink class="katalog__item-text text-big bold" :to="`/product-category/${category.slug}/${subcategory.node.slug}`">{{ subcategory.node.name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>