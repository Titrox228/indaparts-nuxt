<script>
export default {
    data() {
        return {
            burgerActive: false
        }
    }
}

</script>
<template>
    <header class="header" :class="{active: burgerActive}">
        <div class="header__top hide_mobile">
            <div class="container">
                <button class="open-geo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.34421 3.29018 4.43655 4.6967 3.03003C6.10322 1.62351 8.01088 0.833333 10 0.833333C11.9891 0.833333 13.8968 1.62351 15.3033 3.03003C16.7098 4.43655 17.5 6.34421 17.5 8.33333Z"
                            stroke="#5D6066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z"
                            stroke="#5D6066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Владимир
                </button>
                <nav class="header__top-menu">
                    <ul>
                        <li><a href="#">Бренды</a></li>
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Возврат</a></li>
                        <li>
                            <NuxtLink to="/documentation">
                                Документация
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact">Контакты</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header__main">
            <div class="container">
                <div class="header__row">
                    <button title="Открыть меню" class="header__burger">
                        <img id="open-burger" @click="burgerActive = true" src="/img/burger-open-black.svg" alt="">
                        <img id="close-burger" @click="burgerActive = false" src="/img/close.svg" alt="">
                    </button>
                    <div class="header__logo">
                        <NuxtLink to="/">
                            <img src="/img/logo.svg" alt="Логотип">
                        </NuxtLink>
                    </div>
                    <button title="Открыть корзину товаров" class="header__cart-mobile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                stroke="#2F323A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                stroke="#2F323A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                stroke="#2F323A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

                <button class="btn btn-icon hide_mobile">
                    <img src="/img/catalog.svg" alt="">
                    Каталог
                </button>
                <search role="search" class="header__search">
                    <form>
                        <div class="input-iconed">
                            <input type="text" name="search" placeholder="Поиск">
                            <button type="submit" title="Искать">
                                <img src="/img/search.svg" alt="">
                            </button>
                        </div>
                    </form>
                </search>
                <div class="header__controlls hide_mobile">
                    <button class="header__controll">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                stroke="#5D6066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                stroke="#5D6066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Профиль
                    </button>
                    <button class="header__controll">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69752 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69752 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.5955 22 12 22C12.4045 22 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
                                stroke="#5D6066" stroke-width="2" stroke-miterlimit="16" stroke-linecap="round" />
                            <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="#5D6066" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Заказы
                    </button>
                    <button class="header__controll">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                stroke="#5D6066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                stroke="#5D6066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                stroke="#5D6066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Корзина
                    </button>
                </div>
            </div>
            <div class="container">
                <search role="search" class="header__search header__search-tablet">
                    <form>
                        <div class="input-iconed">
                            <input type="text" name="search" placeholder="Поиск">
                            <button type="submit" title="Искать">
                                <img src="/img/search.svg" alt="">
                            </button>
                        </div>
                    </form>
                </search>
            </div>
        </div>
        <div class="header__mobile-menu">
            <div class="container">
                <div class="header__mobile-menu-header">
                    <button class="btn btn-icon">
                        <img src="/img/catalog.svg" alt="">
                        Каталог
                    </button>
                    <button class="btn btn-icon btn-light">
                        <img src="/img/profile.svg" alt="">
                        Профиль
                    </button>
                    <button class="btn btn-icon btn-light">
                        <img src="/img/orders.svg" alt="">
                        Заказы
                    </button>
                    <button class="open-geo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.34421 3.29018 4.43655 4.6967 3.03003C6.10322 1.62351 8.01088 0.833333 10 0.833333C11.9891 0.833333 13.8968 1.62351 15.3033 3.03003C16.7098 4.43655 17.5 6.34421 17.5 8.33333Z"
                                stroke="#5D6066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z"
                                stroke="#5D6066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Владимир
                    </button>
                </div>
                <div class="header__mobile-menu-list">
                    <nav>
                        <ul>
                            <li><a href="#">Акции</a></li>
                            <li><a href="#">Строительные материалы</a></li>
                            <li><a href="#">Керамическая плитка</a></li>
                            <li><a href="#">Краски</a></li>
                            <li><a href="#">Сантехника</a></li>
                            <li><a href="#">Напольные покрытия</a></li>
                            <li><a href="#">Инструменты</a></li>
                            <li><a href="#">Обои</a></li>
                            <li><a href="#">Окна</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="header__mobile-menu-list">
                    <nav>
                        <ul>
                            <li><a href="#">Бренды</a></li>
                            <li><a href="#">Доставка</a></li>
                            <li><a href="#">Возврат</a></li>
                            <li>
                                <NuxtLink to="/documentation">
                                    Документация
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Контакты</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>