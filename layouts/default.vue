<template>
    <div>
        <Header />
        <main class="main">
            <slot />
        </main>
        <Footer/>

    </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'


export default {
    // components: {
    //     Header,
    //     Footer
    // }
}
</script>