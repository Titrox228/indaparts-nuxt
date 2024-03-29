<script setup>
const route = useRoute()


const query = gql`
query Product($slug: ID!) {
  product(
    id: $slug
    idType: SLUG
  ) {
    description
    featured
    image {
      sourceUrl
    }
    name
    seo {
      metaDesc
      breadcrumbs {
        text
        url
      }
      opengraphImage {
        sourceUrl
      }
      title
      schema {
        raw
      }
    }
    sku
    title(format: RENDERED)
    ... on VariableProduct {
      id
      name
      price(format: FORMATTED)
      regularPrice(format: FORMATTED)
      salePrice(format: FORMATTED)
    }
    ... on SimpleProduct {
      id
      name
      price(format: FORMATTED)
      regularPrice(format: FORMATTED)
      salePrice(format: FORMATTED)
    }
    galleryImages(first: 100) {
      nodes {
        sourceUrl
      }
    }
    databaseId
  }
}
`
const variables = { slug: route.params.slug }
const { data: product } = await useAsyncQuery(query, variables)


const product_fetched = product.value.product

async function getProductAttributes(productId) {
    try {
        const { data: response } = await useFetch(`https://indaparts.ru/wp-json/custom/v1/product-attributes/${productId}`);
        return response.value;
    } catch (error) {
        console.error('Error fetching product attributes:', error);
        throw error;
    }
}
const productId = product_fetched.databaseId;

const attributes = await getProductAttributes(productId)

const getTitle = (title, option) => {
    const meta_titles = {
        spec: `Характеристики ${title}.`,
        faq: `Вопрос-ответ о ${title}.`,
        reviews: `Отзывы ${title}.`
    }

    return meta_titles[option]
}

const getDescription = (title, option) => {
    const meta_desc = {
        spec: `Смотреть характеристики товара "${title}".`,
        faq: `Смотреть вопрос-ответ о товаре "${title}".`,
        reviews: `Читать отзывы о товаре "${title}".`
    }

    return meta_desc[option]
}

useSeoMeta({
    title: route.params.option == undefined ? product_fetched.seo.title.replace('indaparts.ru', 'indaparts.ru в Москве') : getTitle(product_fetched.title, route.params.option),
    ogTitle: route.params.option == undefined ? product_fetched.seo.title.replace('indaparts.ru', 'indaparts.ru в Москве') : getTitle(product_fetched.title, route.params.option),
    description: route.params.option == undefined ? product_fetched.seo.metaDesc.replace('indaparts.ru', 'indaparts.ru в Москве') : getDescription(product_fetched.title, route.params.option),
    ogDescription: route.params.option == undefined ? product_fetched.seo.metaDesc.replace('indaparts.ru', 'indaparts.ru в Москве') : getDescription(product_fetched.title, route.params.option),
    ogImage: product_fetched.seo.opengraphImage ? product_fetched.seo.opengraphImage.sourceUrl : '',
})
useHead({
    link: [
        {
            rel: 'canonical',
            href: 'https://msk.indaparts.ru/product/' + route.params.slug,
        },
    ],
})
const images = []
images.push(product_fetched.image ? product_fetched.image.sourceUrl : 'https://indaparts.ru/wp-content/uploads/woocommerce-placeholder.png')
let price = ''
product_fetched.galleryImages.nodes.forEach(image => images.push(image.sourceUrl))
if (product_fetched.salePrice || product_fetched.regularPrice) {
    price = product_fetched.salePrice ? product_fetched.salePrice.split(',')[0] : product_fetched.regularPrice.split(',')[0]
} else {
    price = false
}
if (route.params.option) {
    const allowedParams = ['spec', 'reviews', 'faq']
    if (!allowedParams.includes(route.params.option)) {
        throw createError({
            statusCode: 404,
            message: 'Товар не найден'
        })
    }
}

</script>
<script>
export default {
    data() {
        return {
            route_client: this.$route
        }
    },
}


</script>
<template>
    <section class="section section__card">
        <div class="container">
            <div class="card">
                <Breadcrumbs :breadcrumbs="product_fetched.seo.breadcrumbs" />
                <div class="card__body">
                    <div class="swiper-container">
                        <Swiper class="product__swiper" :modules="[SwiperNavigation, SwiperAutoplay]" :slides-per-view="1"
                            :loop="true" :navigation="{
                                nextEl: '.swiper-next',
                                prevEl: '.swiper-prev'
                            }" :autoplay="{
    delay: 8000,
    disableOnInteraction: true,
}">
                            <SwiperSlide class="slide card__img" v-for="slide in images" :key="slide">
                                <img :src="slide" :alt="product_fetched.title" :title="product_fetched.title">
                            </SwiperSlide>
                            <div class="swiper__buttons" v-if="images.length > 1">
                                <div class="swiper__btn swiper-prev">
                                </div>
                                <div class="swiper__btn swiper-next">
                                </div>
                            </div>
                        </Swiper>
                    </div>
                    <div class="card__content">
                        <h1 class="card__title title-big" v-html="product_fetched.title"></h1>
                        <div class="card__status">
                            <img src="/img/thank-check.svg" alt="">
                            <p class="card__status-text subtext">В наличии</p>
                        </div>
                        <div class="properties">
                            <ul>
                                <li v-for="attribute in attributes" :key="attribute.value">
                                    <div class="left">
                                        <span class="item__label">{{ attribute.label }}</span>
                                    </div>
                                    <span class="item__cor">{{ attribute.value }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="discount__item-price" itemscope itemtype="http://schema.org/Offer">
                            <p class="discount__item-title subtitle-big bold" v-html="product_fetched.salePrice"
                                v-if="product_fetched.salePrice"></p>
                            <p class="discount__item-title text-big bold" v-html="product_fetched.regularPrice"
                                v-if="product_fetched.regularPrice">
                            </p>
                        </div>
                        <div class="card__content-buy">
                            <a href="#" class="card__btn btn text">В корзину</a>
                            <form action="#" class="btn__form btn-form">
                                <div class="btn__form-count plus"></div>
                                <input type="number" class="btn__form-input text" min="1" value="1" max="100">
                                <div class="btn__form-count minus"></div>
                            </form>
                        </div>
                        <p class="card__text text-big">Артикул: {{ product_fetched.sku }}</p>
                        <div class="card__item">
                            <div class="product-delivery">
                                <img src="/img/truck.svg" alt="">
                                Доставим за 1 день
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card__container" ref="card">
                    <div class="tabs">
                        <input type="radio" id="tab1" name="tab-control" :checked="route.params.option ? false : true">
                        <input type="radio" id="tab2" name="tab-control"
                            :checked="route.params.option == 'spec' ? true : false">
                        <input type="radio" id="tab3" name="tab-control"
                            :checked="route.params.option == 'faq' ? true : false">
                        <input type="radio" id="tab4" name="tab-control"
                            :checked="route.params.option == 'reviews' ? true : false">
                        <ul>
                            <li title="Описание">
                                <NuxtLink :to="`/product/${route.params.slug}`">
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />
                                    </svg>
                                    <br><span>Описание</span>
                                </NuxtLink>
                            </li>
                            <li title="Характеристики" v-if="attributes.length">
                                <NuxtLink :to="`/product/${route.params.slug}/spec`">
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" />
                                    </svg>
                                    <br><span>Характеристики</span>
                                </NuxtLink>
                            </li>
                            <li title="Вопрос-ответ">
                                <NuxtLink :to="`/product/${route.params.slug}/faq`">
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z" />
                                    </svg>
                                    <br><span>Вопрос-ответ</span>
                                </NuxtLink>
                            </li>
                            <li title="Отзывы (0)">
                                <NuxtLink :to="`/product/${route.params.slug}/reviews`">
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                                    </svg>
                                    <br><span>Отзывы (0)</span>
                                </NuxtLink>
                            </li>
                        </ul>
                        <div class="slider">
                            <div class="indicator"></div>
                        </div>
                        <div class="content">
                            <section>
                                <pre>
                                    {{ $route.params.option }}
                                </pre>
                                <div v-if="$route.params.option == undefined">
                                    <h2 class="card__title title-big">Описание</h2>
                                    <div v-if="product_fetched.description" v-html="product_fetched.description"></div>
                                    <div v-else>
                                        <p>{{ product_fetched.title }} артикул <b>{{ product_fetched.sku }}</b> по цене
                                            <span v-html="product_fetched.price"> </span> в наличии.
                                        </p>
                                        <br>
                                        <p>Закажите этот товар у нас на сайте и воспользуйтесь нашей удобной <b>доставкой по
                                                всей России</b>. Также у вас есть возможность <b>самовывоза в Москве и
                                                области.</b>
                                        </p>
                                        <br>
                                        <p>Мы предлагаем широкий ассортимент товаров для автолюбителей и не только.
                                            Ознакомьтесь
                                            с нашим каталогом на сайте <a href="/shop/">indaparts.ru</a>,
                                            чтобы увидеть полный ассортимент.
                                        </p>
                                        <br>
                                        <p><b>Сделайте правильный выбор с Indaparts.ru!</b></p>
                                    </div>
                                </div>
                            </section>
                            <section class="properties" v-if="attributes.length">
                                <div v-if="$route.params.option == 'spec'">
                                    <h2 class="card__title title-big">Характеристики</h2>
                                    <ul>
                                        <li v-for="attribute in attributes" :key="attribute.value">
                                            <div class="left">
                                                <span class="item__label">{{ attribute.label }}</span>
                                            </div>
                                            <span class="item__cor">{{ attribute.value }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section>
                                <div v-if="$route.params.option == 'faq'">

                                    <h2 class="card__title title-big">Вопрос-ответ</h2>
                                    <div class="faq-block" itemscope="" itemtype="https://schema.org/FAQPage">
                                        <div class="tab" itemscope="" itemprop="mainEntity"
                                            itemtype="https://schema.org/Question">
                                            <input type="checkbox" name="accordion-1" id="cb1" checked="true">
                                            <label for="cb1" class="tab__label" itemprop="name">Каковы сроки бесплатной
                                                доставки в Москве?</label>
                                            <div class="tab__content" itemscope="" itemprop="acceptedAnswer"
                                                itemtype="https://schema.org/Answer">
                                                <p itemprop="text">Мы стремимся обеспечить наших клиентов быстрой и надежной
                                                    доставкой. Обычно, сроки бесплатной доставки в пределах Москвы и
                                                    Московской
                                                    области
                                                    составляют 1-3 рабочих дня. Наша команда всегда старается выполнить
                                                    заказ как можно быстрее. Мы также предоставляем информацию о доставке
                                                    при оформлении заказа, чтобы вы могли быть в курсе ожидаемой даты
                                                    доставки.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tab" itemscope="" itemprop="mainEntity"
                                            itemtype="https://schema.org/Question">
                                            <input type="checkbox" name="accordion-1" id="cb2">
                                            <label for="cb2" class="tab__label" itemprop="name">Какие виды автотоваров вы
                                                предлагаете?</label>
                                            <div class="tab__content" itemscope="" itemprop="acceptedAnswer"
                                                itemtype="https://schema.org/Answer">
                                                <p itemprop="text">Наш интернет-магазин предлагает широкий ассортимент
                                                    автотоваров, включая автохимию, аксессуары, запчасти, инструменты и
                                                    многое другое. Мы заботимся о том, чтобы наши клиенты могли найти всё,
                                                    что им нужно для своих автомобилей, чтобы обеспечить комфорт и
                                                    безопасность в пути.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tab" itemscope="" itemprop="mainEntity"
                                            itemtype="https://schema.org/Question">
                                            <input type="checkbox" name="accordion-1" id="cb3">
                                            <label for="cb3" class="tab__label" itemprop="name">Как узнать, подходит ли
                                                определенная запчасть для моего автомобиля?</label>
                                            <div class="tab__content" itemscope="" itemprop="acceptedAnswer"
                                                itemtype="https://schema.org/Answer">
                                                <p itemprop="text">Мы понимаем, что выбор правильных запчастей для вашего
                                                    автомобиля может быть сложным. Наши эксперты всегда готовы помочь вам с
                                                    этим. Пожалуйста, предоставьте нам информацию о марке, модели и годе
                                                    выпуска вашего автомобиля, и мы с удовольствием подскажем вам, какие
                                                    запчасти подходят для вашего конкретного автомобиля. Ваша безопасность и
                                                    удовлетворение - наш приоритет.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tab" itemscope="" itemprop="mainEntity"
                                            itemtype="https://schema.org/Question">
                                            <input type="checkbox" name="accordion-1" id="cb4">
                                            <label for="cb4" class="tab__label" itemprop="name">Могу ли я вернуть или
                                                обменять товар, если он не подошел или не устроил меня?</label>
                                            <div class="tab__content" itemscope="" itemprop="acceptedAnswer"
                                                itemtype="https://schema.org/Answer">
                                                <p itemprop="text">Да, ваше удовлетворение от покупки очень важно для нас.
                                                    Если вы обнаружите, что товар не соответствует вашим ожиданиям или не
                                                    подходит, вы можете вернуть или обменять его в течение 14 дней с момента
                                                    покупки, при условии, что товар не был использован и сохраняет свой
                                                    первоначальный вид. Просто свяжитесь с нашей службой поддержки, и мы
                                                    организуем возврат или обмен для вас.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="tab" itemscope="" itemprop="mainEntity"
                                            itemtype="https://schema.org/Question">
                                            <input type="checkbox" name="accordion-1" id="cb5">
                                            <label for="cb5" class="tab__label" itemprop="name">Какие способы оплаты вы
                                                принимаете?</label>
                                            <div class="tab__content" itemscope="" itemprop="acceptedAnswer"
                                                itemtype="https://schema.org/Answer">
                                                <p itemprop="text">Мы предоставляем разнообразные варианты оплаты, чтобы
                                                    сделать процесс покупки максимально удобным для вас. Вы можете оплатить
                                                    заказ наличными при получении, использовать банковскую карту или
                                                    воспользоваться платежными системами, такими как Яндекс.Деньги или
                                                    банковский перевод. Выберите удобный для вас способ оплаты при
                                                    оформлении заказа, и мы обеспечим безопасную и удобную оплату вашей
                                                    покупки.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            <section>
                                <div v-if="$route.params.option == 'reviews'">
                                    <h2 class="card__title title-big">Отзывы</h2>
                                    Отзывов пока нет
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div itemtype="https://schema.org/Product" itemscope>
            <meta itemprop="name" :content="product_fetched.title" />
            <link itemprop="image" v-for="slide in images" :key="slide" :href="slide" />

            <meta itemprop="description" :content="product_fetched.description" />
            <div itemprop="offers" itemtype="https://schema.org/Offer" itemscope>
                <link itemprop="url" :href="`https://msk.indaparts.ru/product/${route.params.slug}`" />
                <meta itemprop="availability" content="https://schema.org/InStock" />
                <meta itemprop="priceCurrency" content="RUB" />
                <meta itemprop="itemCondition" content="https://schema.org/NewCondition" />
                <meta itemprop="price" :content="price" />
            </div>
            <div itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating" itemscope>
                <meta itemprop="reviewCount" :content="product_fetched.title.length * 4" />
                <meta itemprop="ratingValue" content="5" />
            </div>
            <meta itemprop="sku" :content="product_fetched.sku" />
        </div>
    </section>
</template>