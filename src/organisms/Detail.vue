<script>
export default {
    name : 'DetailOrg',
    created(){
        this.fetchNews()
    },
    computed: {
        news() {
            const id = this.$route.params.id;
            return this.$store.getters.news.filter(item => item.description === id);
        },
        description() {
            return this.news[0]?.description || "";
        }
        },
    methods: {
    fetchNews() {
            this.$store.dispatch('fetchNews')
        },
        
    },
    mounted() {
        console.log(this.$route.params.id);
        console.log(this.news[0]?.author);
    },
}

</script>

<template>
    <section class="ban_sec">
        <div class="container__detail">
            <div class="ban_img">
                <img :src="news[0].urlToImage ? news[0].urlToImage : 'https://www.shutterstock.com/image-vector/word-news-vector-banner-text-260nw-345648962.jpg'" alt="banner">
                <div class="ban_text">
                    <strong>
                        <span>Top News!</span><br>{{news[0].source.name}}
                    </strong>
                    <p>{{ news[0].title }} </p>
                        <router-link :to="{ name: 'EditNews', params: { id: news[0].description }, state: { news: news[0] } }">Edit News</router-link>

                       
                </div>
            </div>
        </div>
        <div class="detail__section">
            <h1 class="title">{{news[0].title}}</h1>
            <h2 class="source">By: {{news[0].author ? news[0].author :'Admin'}}</h2>
            <article class="article">{{ news[0].content ? news[0].content.replace(/\s*\[\+\d+\s*chars\]/, "") : "No content" }} <a class="link" :href="news[0].url">Read more...</a></article>
        </div>
    </section>
</template>
