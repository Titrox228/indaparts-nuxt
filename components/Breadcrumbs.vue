<template>
    <div class="breadcrupms" itemscope itemtype="https://schema.org/BreadcrumbList">
        <p class="breadcrupms__text text-big">
            <span v-for="breadcrumb,i in breadcrumbs" :key="breadcrumb.url" itemprop="itemListElement" itemscope
                itemtype="https://schema.org/ListItem">
                <NuxtLink itemprop="item" :to="breadcrumb.url.split('indaparts.ru')[1]"><span itemprop="name"> {{
                    breadcrumb.text }}</span> <span v-if="breadcrumbs[breadcrumbs.length - 1].url != breadcrumb.url">→
                    </span>
                </NuxtLink>
                <meta itemprop="position" :content="i+1" />
            </span>
        </p>
    </div>
</template>
<script>
export default {
    props: ['breadcrumbs'],
}
</script>