<script setup>

    const mainPage = await GqlMainPage().then(data => {
        return data
    })
    useSeoMeta({
        title: mainPage.page.seo.title.replace('по Владимиру', 'по Москве'),
        ogTitle: mainPage.page.seo.title.replace('по Владимиру', 'по Москве'),
        description: mainPage.page.seo.metaDesc.replace('во Владимире', 'в Москве'),
        ogDescription: mainPage.page.seo.metaDesc.replace('во Владимире', 'в Москве'),
        // ogImage: mainPage.page.seo.opengraphImage.sourceUrl,
    })


</script>

<template lang="">
    <MainBanner :slides="mainPage.page.mainPage.glavnyjBanner"/>
    <MainSaleProducts :products="mainPage.products.nodes.slice(0, 4)" />
    <MainCategories :categories="mainPage.productCategories.nodes"/>
    <MainPopularProducts :products="mainPage.products.nodes.slice(4)"/>
    <MainBrands />
    <MainReviews />
    <section class="section section__about">
        <div class="container">
            <div class="about">
                <h2 class="about__title title-big">О компании IndaParts: Ваш Надежный Партнер в Мире Автозапчастей</h2>
                <p class="about__text text-big">Добро пожаловать в мир качественных автотоваров и надежных запчастей – добро пожаловать в IndaParts! Наша компания с гордостью предоставляет широкий ассортимент автомобильных запчастей, аксессуаров и товаров для вашего авто прямо в Москве.</p>
                <h3 class="about__text text-big"><b>Почему IndaParts – Ваш Лучший Выбор:</b></h3>
                <ol class="about__text text-big">
                    <li><b>1. Огромный Ассортимент</b><br> <p>Мы предлагаем огромный выбор запчастей для автомобилей различных марок и моделей. Независимо от того, нужна ли вам замена изношенных деталей или вы хотите улучшить внешний вид своего авто, у нас есть все необходимое.</p></li>
                    <li><b>2. Качество Гарантировано</b><br> <p>Мы сотрудничаем только с надежными поставщиками, что обеспечивает высший стандарт качества наших товаров. Уверенность в надежности приобретаемых у нас запчастей – это наш вклад в безопасность и долговечность вашего автомобиля.</p></li>
                    <li><b>3. Удобство Онлайн-Шопинга</b><br> <p>С IndaParts вы можете легко и удобно заказать нужные товары, не выходя из дома. Наш удобный интернет-магазин предоставляет подробные описания и фотографии товаров, чтобы вы могли сделать правильный выбор.</p></li>
                    <li><b>4. Быстрая Доставка в Москве</b><br> <p>Мы ценим ваше время, поэтому предлагаем оперативную доставку заказов по Москве. Вам не придется ждать долго – мы делаем все возможное, чтобы ваши запчасти были у вас как можно скорее.</p></li>
                </ol>
                <h4 class="about__text text-big"><b>Присоединяйтесь к сотням довольных клиентов IndaParts и обеспечьте своему авто лучший уход! Надежные запчасти и аксессуары – это IndaParts!</b></h4>
            </div>
        </div>
    </section>
</template>
<style lang="">

</style>