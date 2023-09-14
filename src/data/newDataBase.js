import { allImages } from "../images/allImages";
import { dataArticles, dataArticlesRent, dataVideo } from "./data";

export const newDataBase = {
    eng: {
        allArticlesData: dataArticles,
        allVideosData: {},
        components: {
            headerCompData: {
                content: {
                    navigationTop: [
                        {
                            id: 0,
                            title: "About us",
                            class: "about",
                        },
                        {
                            id: 1,
                            title: "Contacts",
                            class: "contacts",
                        },
                        {
                            id: 2,
                            title: "Become a partner",
                            class: "become",
                        },
                        {
                            id: 3,
                            title: "Investigation",
                            class: "investigation",
                        },
                    ],
                    navigationBottom: [
                        {
                            id: 0,
                            title: "Collection",
                            class: "collection",
                        },
                        {
                            id: 1,
                            title: "News",
                            class: "news",
                        },
                        {
                            id: 2,
                            title: "Club",
                            class: "club",
                        },
                        {
                            id: 3,
                            title: "Best iAgent",
                            class: "best",
                        },
                        {
                            id: 4,
                            title: "Design",
                            class: "design",
                        },
                        {
                            id: 5,
                            title: "Made in Spain",
                            class: "madeInSpain",
                        },
                        {
                            id: 6,
                            title: "Forum",
                            class: "forum",
                        },
                        {
                            id: 7,
                            title: "Blog",
                            class: "blog",
                        },
                    ],
                },
            },
            footerCompData: {
                content: {
                    buttons: [
                        {
                            id: 0,
                            title: "iAgent",
                            content: [
                                {
                                    id: 0,
                                    title: "About us",
                                    link: "",
                                },
                                {
                                    id: 1,
                                    title: "Contacts",
                                    link: "",
                                },
                                {
                                    id: 2,
                                    title: "Investigation",
                                    link: "",
                                },
                                {
                                    id: 3,
                                    title: "Blog",
                                    link: "",
                                },
                                {
                                    id: 4,
                                    title: "Forum",
                                    link: "",
                                },
                            ],
                        },
                        {
                            id: 1,
                            title: "Categories",
                            content: [
                                {
                                    id: 0,
                                    title: "Collection",
                                    link: "",
                                },
                                {
                                    id: 1,
                                    title: "News",
                                    link: "",
                                },
                                {
                                    id: 2,
                                    title: "Club",
                                    link: "",
                                },
                                {
                                    id: 3,
                                    title: "Best iAgent",
                                    link: "",
                                },
                                {
                                    id: 4,
                                    title: "Design",
                                    link: "",
                                },
                                {
                                    id: 5,
                                    title: "Made in Spain",
                                    link: "",
                                },
                            ],
                        },
                        {
                            id: 2,
                            title: "FOR BUSINESS",
                            content: [
                                {
                                    id: 0,
                                    title: "Become a partner",
                                    link: "",
                                },
                            ],
                        },
                    ],
                    contact: {
                        id: 0,
                        title: "Contact",
                        content: [
                            {
                                id: 0,
                                title: "098 500 52 52",
                                link: "tel:+380985005252",
                            },
                            {
                                id: 1,
                                title: "098 500 52 52",
                                link: "tel:+380985005252",
                            },
                            {
                                id: 2,
                                title: "adress 23 street 234",
                                link: "https://www.google.com/maps/place/%D0%9A%D0%B8%D1%97%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+02000/@50.4020075,30.2030542,10z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234!16zL20vMDJzbjM0?entry=ttu",
                            },
                        ],
                    },
                },
            },
            shareItCompData: {
                title: "Got ideas for our investigation?",
                button: "Share it!",
            },
            subscribeCompData: {
                title: "Subscribe to the newsletter",
                button: "subscribe",
            },
            searchCompData: {
                placeholder: "Search...",
                filters: [
                    {
                        id: 0,
                        iconActive:
                            allImages.newsPageImg.searchImg.hotSearchActive,
                        iconDisable:
                            allImages.newsPageImg.searchImg.hotSearchDisable,
                        text: "hot",
                    },
                    {
                        id: 1,
                        iconActive:
                            allImages.newsPageImg.searchImg.newSearchActive,
                        iconDisable:
                            allImages.newsPageImg.searchImg.newSearchDisable,
                        text: "new",
                    },
                    {
                        id: 2,
                        iconActive:
                            allImages.newsPageImg.searchImg.mostSearchActive,
                        iconDisable:
                            allImages.newsPageImg.searchImg.mostSearchDisable,
                        text: "most comment",
                    },
                ],
            },
            videoCompData: {
                title: "Other videos",
            },
            bestofCompData: {
                buttons: [
                    {
                        id: 0,
                        title: "Week",
                        name: "week",
                    },
                    {
                        id: 1,
                        title: "Month",
                        name: "month",
                    },
                    {
                        id: 2,
                        title: "Year",
                        name: "year",
                    },
                ],
            },
        },
        pages: {
            homePageData: {
                content: {
                    focus: {
                        text: {
                            title: "Focus",
                        },
                        content: {
                            articles: dataArticles,
                        },
                        options: {
                            styles: {
                                background: "#E5E6F4",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: false,
                            },
                            forShareIt: {
                                background: "#FFDFD4",
                            },
                        },
                    },
                    news: {
                        text: {
                            title: "News",
                        },
                        content: {
                            articles: dataArticles,
                            blog: {
                                title: "Recent blog posts",
                                content: dataArticles,
                            },
                        },
                        options: {
                            styles: {
                                background: "#ECF4E5",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: false,
                            },
                            forSubscribe: {
                                background: "#ECF4E5",
                            },
                            forBlog: {
                                background: "#E5E6F4",
                            },
                        },
                    },
                    slider: {
                        content: [
                            {
                                id: 0,
                                image: allImages.sliderImages.imgSlider1,
                                title: "Become an iAgent Partner",
                                desc: "Let's make the world of real estate better together",
                                background: "#E5E6F4",
                            },
                            {
                                id: 1,
                                image: allImages.sliderImages.imgSlider2,
                                title: "Hot deals",
                                desc: "Wow really the best deals",
                                background: "#F4F2E5",
                            },
                        ],
                    },
                    collection: {
                        text: {
                            title: "Collection",
                            carousel: {
                                button: [
                                    {
                                        id: 0,
                                        name: "Compra",
                                        text: "Buy",
                                    },
                                    {
                                        id: 1,
                                        name: "Alquiler",
                                        text: "Rent",
                                    },
                                ],
                            },
                        },
                        content: {
                            buy: {
                                content: dataArticles,
                            },
                            rent: {
                                content: dataArticlesRent,
                            },
                        },
                        options: {
                            styles: {
                                background: "#F4F2E5",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: false,
                            },
                        },
                    },
                    best: {
                        text: {
                            title: "Best",
                            subTitle: "Top 5 real estate agencies of the month",
                        },
                        content: dataArticles,
                        options: {
                            styles: {
                                background: "#E5E6F4",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: true,
                            },
                        },
                    },
                },
            },
            newsPageData: {
                content: {
                    news: {
                        text: {
                            title: "News",
                        },
                        content: dataArticles,
                        options: {
                            styles: {
                                background: "#ECF4E5",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: false,
                            },
                            forSubscribe: {
                                background: "#ECF4E5",
                            },
                        },
                    },
                    videos: {
                        content: dataVideo,
                        options: {
                            styles: {
                                background: "#ECF4E5",
                            },
                        },
                    },
                    best: {
                        text: {
                            title: "Best",
                        },
                        content: dataArticles,
                        options: {
                            styles: {
                                background: "#ECF4E5",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: false,
                            },
                        },
                    },
                    comments: {
                        text: {
                            title: "aervq",
                        },
                        content: dataArticles,
                        options: {
                            styles: {
                                background: "#ECF4E5",
                            },
                            forCard: {
                                bottomButtons: false,
                                numbers: false,
                            },
                        },
                    },
                },
            },
        },
    },
    spa: {},
    rus: {
        allArticlesData: dataArticles,
        allVideosData: {},
        components: {
            headerCompData: {
                content: {
                    navigationTop: [
                        {
                            id: 0,
                            title: "О нас",
                            class: "about",
                        },
                        {
                            id: 1,
                            title: "Контакты",
                            class: "contacts",
                        },
                        {
                            id: 2,
                            title: "Стать партнером",
                            class: "become",
                        },
                        {
                            id: 3,
                            title: "Расследование",
                            class: "investigation",
                        },
                    ],
                    navigationBottom: [
                        {
                            id: 0,
                            title: "Колекции",
                            class: "collection",
                        },
                        {
                            id: 1,
                            title: "Новости",
                            class: "news",
                        },
                        {
                            id: 2,
                            title: "Клуб",
                            class: "club",
                        },
                        {
                            id: 3,
                            title: "Лучшие iAgent",
                            class: "best",
                        },
                        {
                            id: 4,
                            title: "Дизайн",
                            class: "design",
                        },
                        {
                            id: 5,
                            title: "Сделано в Испании",
                            class: "madeInSpain",
                        },
                        {
                            id: 6,
                            title: "Форум",
                            class: "forum",
                        },
                        {
                            id: 7,
                            title: "Блог",
                            class: "blog",
                        },
                    ],
                },
            },
            footerCompData: {
                content: {
                    buttons: [
                        {
                            id: 0,
                            title: "iAgent",
                            content: [
                                {
                                    id: 0,
                                    title: "О нас",
                                    link: "",
                                },
                                {
                                    id: 1,
                                    title: "Контакты",
                                    link: "",
                                },
                                {
                                    id: 2,
                                    title: "Расследование",
                                    link: "",
                                },
                                {
                                    id: 3,
                                    title: "Блог",
                                    link: "",
                                },
                                {
                                    id: 4,
                                    title: "Форум",
                                    link: "",
                                },
                            ],
                        },
                        {
                            id: 1,
                            title: "Категории",
                            content: [
                                {
                                    id: 0,
                                    title: "Колекции",
                                    link: "",
                                },
                                {
                                    id: 1,
                                    title: "Новости",
                                    link: "",
                                },
                                {
                                    id: 2,
                                    title: "Клуб",
                                    link: "",
                                },
                                {
                                    id: 3,
                                    title: "Лучшие iAgent",
                                    link: "",
                                },
                                {
                                    id: 4,
                                    title: "Дизайн",
                                    link: "",
                                },
                                {
                                    id: 5,
                                    title: "Сделано в Испании",
                                    link: "",
                                },
                            ],
                        },
                        {
                            id: 2,
                            title: "Для бизнеса",
                            content: [
                                {
                                    id: 0,
                                    title: "Стать партнером",
                                    link: "",
                                },
                            ],
                        },
                    ],
                    contact: {
                        id: 0,
                        title: "Контакты",
                        content: [
                            {
                                id: 0,
                                title: "098 500 52 52",
                                link: "tel:+380985005252",
                            },
                            {
                                id: 1,
                                title: "098 500 52 52",
                                link: "tel:+380985005252",
                            },
                            {
                                id: 2,
                                title: "Адрес 23 улица 234",
                                link: "https://www.google.com/maps/place/%D0%9A%D0%B8%D1%97%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+02000/@50.4020075,30.2030542,10z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234!16zL20vMDJzbjM0?entry=ttu",
                            },
                        ],
                    },
                },
            },
            shareItCompData: {
                title: "Есть идеи для нашего расследования?",
                button: "Поделись!",
            },
            subscribeCompData: {
                title: "Подписаться на рассылку",
                button: "Подписаться",
            },
            searchCompData: {
                placeholder: "найти...",
                filters: [
                    {
                        id: 0,
                        iconActive:
                            allImages.newsPageImg.searchImg.hotSearchActive,
                        iconDisable:
                            allImages.newsPageImg.searchImg.hotSearchDisable,
                        text: "hot",
                    },
                    {
                        id: 1,
                        iconActive:
                            allImages.newsPageImg.searchImg.newSearchActive,
                        iconDisable:
                            allImages.newsPageImg.searchImg.newSearchDisable,
                        text: "new",
                    },
                    {
                        id: 2,
                        iconActive:
                            allImages.newsPageImg.searchImg.mostSearchActive,
                        iconDisable:
                            allImages.newsPageImg.searchImg.mostSearchDisable,
                        text: "most comment",
                    },
                ],
            },
        },
        pages: {
            homePageData: {
                content: {
                    focus: {
                        text: {
                            title: "Фокус",
                        },
                        content: {
                            articles: dataArticles,
                        },
                        options: {
                            styles: {
                                background: "#E5E6F4",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: false,
                            },
                            forShareIt: {
                                background: "#FFDFD4",
                            },
                        },
                    },
                    news: {
                        text: {
                            title: "Новости",
                        },
                        content: {
                            articles: dataArticles,
                            blog: {
                                title: "Последние записи в блоге",
                                content: dataArticles,
                            },
                        },
                        options: {
                            styles: {
                                background: "#ECF4E5",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: false,
                            },
                            forSubscribe: {
                                background: "#ECF4E5",
                            },
                            forBlog: {
                                background: "#E5E6F4",
                            },
                        },
                    },
                    slider: {
                        content: [
                            {
                                id: 0,
                                image: allImages.sliderImages.imgSlider1,
                                title: "Станьте партнером iAgent",
                                desc: "Давайте вместе сделаем мир недвижимости лучше",
                                background: "#E5E6F4",
                            },
                            {
                                id: 1,
                                image: allImages.sliderImages.imgSlider2,
                                title: "Горячие предложения",
                                desc: "Вау, действительно лучшие предложения",
                                background: "#F4F2E5",
                            },
                        ],
                    },
                    collection: {
                        text: {
                            title: "Колекции",
                            carousel: {
                                button: [
                                    {
                                        id: 0,
                                        name: "Compra",
                                        text: "Покупка",
                                    },
                                    {
                                        id: 1,
                                        name: "Alquiler",
                                        text: "Аренда",
                                    },
                                ],
                            },
                        },
                        content: {
                            buy: {
                                content: dataArticles,
                            },
                            rent: {
                                content: dataArticlesRent,
                            },
                        },
                        options: {
                            styles: {
                                background: "#F4F2E5",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: false,
                            },
                        },
                    },
                    best: {
                        text: {
                            title: "Лучшие",
                            subTitle: "Топ-5 агентств недвижимости месяца",
                        },
                        content: dataArticles,
                        options: {
                            styles: {
                                background: "#E5E6F4",
                            },
                            forCard: {
                                bottomButtons: true,
                                numbers: true,
                            },
                        },
                    },
                },
            },
            newsPageData: {
                content: {
                    news: {},
                    videos: {},
                },
            },
        },
    },
};
