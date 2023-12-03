<script setup>
const error = useError();
</script>
<template>
    <Header />
    <main class="main">
        <section class="section section__notfound">
            <div class="container">
                <div class="notfound">
                    <h2 class="notfound__title title">{{error.statusCode}}</h2>
                    <h3 class="notfound__subtitle title-big">{{ error.message }}</h3>
                    <p class="notfound__text text">Неправильно набран адрес или такая страница больше не существует</p>
                    <NuxtLink to="/" class="notfound__btn btn text bold">Перейти на главную</NuxtLink>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>
