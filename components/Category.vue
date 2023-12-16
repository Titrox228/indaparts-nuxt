<script setup>
const route = useRoute()
const lastKey = Object.keys(route.params)[Object.keys(route.params).length - 1]
const uri = route.params[lastKey]
const product_id = route.path.split('?')[0]

let order_field
let order
switch (route.query.order) {
    case "alphabet":
        order_field = 'NAME'
        order = 'ASC'
        break;
    case "popular":
        order_field = 'TOTAL_SALES'
        order = 'ASC'
        break;
    case "cheap":
        order_field = 'PRICE'
        order = 'ASC'
        break;
    case "expensive":
        order_field = 'PRICE'
        order = 'DESC'
        break;
    default:
        order_field = 'DATE'
        order = 'ASC'
        break
}
const category = await GqlCategoryDetail(
    {
        categoryIn: uri,
        id: product_id,
        field: order_field,
        order: order
    }
).then(data => {
    if (data.gqlErrors || data.productCategory == null) {
        throw createError({
            statusCode: 404,
            message: 'Категория не найдена'
        })
    }
    return data
}).catch(data => {
    if (data.gqlErrors || data.productCategory == null) {
        throw createError({
            statusCode: 404,
            message: 'Категория не найдена'
        })
    }
})


useSeoMeta({
    title: category.productCategory.seo.title.replace('Владимиру', 'Москве'),
    ogTitle: category.productCategory.seo.title.replace('Владимиру', 'Москве'),
    description: category.productCategory.seo.metaDesc.replace('Владимиру', 'Москве'),
    ogDescription: category.productCategory.seo.metaDesc.replace('Владимиру', 'Москве'),
    // ogImage: category.productCategory.seo.opengraphImage.sourceUrl,
})
if (order_field != 'DATE' && order != 'ASC') {
    useHead({
        meta: [
            { name: 'robots', content: 'noindex, follow' }
        ],
    })
}

</script>


<script>

export default {
    data() {
        return {
            currentLink: ''
        }
    },
    methods: {
        async toggleSimpleFilter(value) {


            const currentOrder = new URL(window.location.href).searchParams.get('order')

            if (currentOrder != value) {
                await this.$router.replace({
                    path: window.location.pathname,
                    query: { order: value }
                })
            } else {
                await this.$router.replace({
                    path: window.location.pathname,
                    query: {}
                })
            }


            this.$router.go(this.$router.currentRoute)
        }
    },
    created() {
        const route = useRoute();
        this.currentLink = route.query;
    }
}

</script>

<template>
    <section class="section section__items">
        <div class="container">
            <div class="items">
                <Breadcrumbs :breadcrumbs="category.productCategory.seo.breadcrumbs" />
                <h2 class="items__title title">{{ category.productCategory.name }}</h2>
                <div class="items__body">
                    <aside class="items__aside">
                        <div class="items__aside-container">
                            <h4 class="items__aside-title text bold">Цена</h4>
                            <form action="#" class="items__aside-form">
                                <div class="range">
                                    <div class="range-price">
                                        <input type="number" name="min" value="300">
                                        <input type="number" name="max" value="700">
                                    </div>
                                    <div class="range-slider">
                                        <span class="range-selected"></span>
                                    </div>
                                    <div class="range-input">
                                        <input type="range" class="min" min="0" max="1000" value="300" step="10">
                                        <input type="range" class="max" min="0" max="1000" value="700" step="10">
                                    </div>
                                </div>
                            </form>
                            <h4 class="items__aside-title text bold">Бренд</h4>
                            <form action="#" class="items__aside-form">
                                <div class="items__aside-search">
                                    <input type="text" class="items__aside-input text" placeholder="Поиск">
                                    <button><img src="/img/search.svg" alt=""></button>
                                </div>
                                <div class="items__aside-items">
                                    <div class="checkbox">
                                        <label class="custom-checkbox">
                                            <input type="checkbox" name="1">
                                            <span class="items__aside-text text bold">Braer</span>
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label class="custom-checkbox">
                                            <input type="checkbox" name="2">
                                            <span class="items__aside-text text bold">Mstera</span>
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label class="custom-checkbox">
                                            <input type="checkbox" name="3">
                                            <span class="items__aside-text text bold">Euroblock</span>
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label class="custom-checkbox">
                                            <input type="checkbox" name="4">
                                            <span class="items__aside-text text bold">Гален</span>
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label class="custom-checkbox">
                                            <input type="checkbox" name="5">
                                            <span class="items__aside-text text bold">ЛСР</span>
                                        </label>
                                    </div>
                                    <div class="checkbox">
                                        <label class="custom-checkbox">
                                            <input type="checkbox" name="6">
                                            <span class="items__aside-text text bold">Decra</span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <h4 class="items__aside-title text bold">Поставщик</h4>
                            <div class='items__aside-select'>
                                <select>
                                    <option value='0'>Аксон</option>
                                    <option value='1'>Аксон</option>
                                    <option value='2'>Аксон</option>
                                </select>
                            </div>
                        </div>
                        <div class="items__aside-container">
                            <a href="#" class="items__aside-btn btn text">Применить</a>
                            <a href="#" class="items__aside-btn btn btn-white text">Сбросить</a>
                        </div>
                    </aside>
                    <div class="items__container">
                        <div class="items__sort">
                            <div href="#" class="items__burger text-big bold">Фильтр</div>
                            <div :class="{ active: currentLink.order == 'popular' }" @click="toggleSimpleFilter('popular')"
                                class="items__text text-big bold">Популярные
                            </div>
                            <div :class="{ active: currentLink.order == 'cheap' }" @click="toggleSimpleFilter('cheap')"
                                class="items__text text-big bold">Дешевле</div>
                            <div :class="{ active: currentLink.order == 'expensive' }"
                                @click="toggleSimpleFilter('expensive')" class="items__text text-big bold">Дороже</div>
                            <div :class="{ active: currentLink.order == 'alphabet' }"
                                @click="toggleSimpleFilter('alphabet')" class="items__text text-big bold">По алфавиту</div>
                        </div>
                        <div class="items__items">
                            <div v-for="product in category.products.edges" :key="product.node.slug"
                                class="items__item katalog__item">
                                <NuxtLink :to="`/product/${product.node.slug}`" class="items__item-img">
                                    <!-- <img :src="product.node.image ? product.node.image.sourceUrl : 'https://indaparts.ru/wp-content/uploads/woocommerce-placeholder.png'"
                                        :alt="product.node.name" :title="product.node.name"> -->
                                    <NuxtImg :src="product.node.image ? product.node.image.sourceUrl : 'https://indaparts.ru/wp-content/uploads/woocommerce-placeholder.png'" loading="lazy"  format="webp" />
                                </NuxtLink>
                                <div class="items__item-content">
                                    <NuxtLink :to="`/product/${product.node.slug}`" class="items__item-text text-big">{{
                                        product.node.name }}</NuxtLink>
                                    <div class="discount__item-price">
                                        <p class="discount__item-title subtitle-big bold" v-html="product.node.salePrice"
                                            v-if="product.node.salePrice"></p>
                                        <p class="discount__item-title text-big bold" v-html="product.node.regularPrice"
                                            v-if="product.node.regularPrice">
                                        </p>
                                    </div>
                                    <div class="items__item-btn  btn-shop btn text">В корзину</div>
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
            </div>
        </div>
    </section>
</template>