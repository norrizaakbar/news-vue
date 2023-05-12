<script>
    import Content from '@/molecules/Content.vue';
import Thumbnail from '@/molecules/Thumbnail.vue';
    
    export default{
        name: 'CardOrg',
        props: ['article', 'indeks'],
        components: {
            Thumbnail,
            Content
        },
        methods: {
            timeAgo(isoTime) {
                const now = new Date();
                const date = new Date(isoTime);
                const diffMs = now - date;
                const diffSec = Math.round(diffMs / 1000);
                const diffMin = Math.round(diffSec / 60);
                const diffHr = Math.round(diffMin / 60);
                const diffDay = Math.round(diffHr / 24);

                if (diffSec < 60) {
                    return `${diffSec} sec ago`;
                } else if (diffMin < 60) {
                    return `${diffMin} min ago`;
                } else if (diffHr < 24) {
                    return `${diffHr} hr ago`;
                } else {
                    return `${diffDay} days ago`;
                }
            },
       
        goToDetail() {
            // console.log(this.indeks);
            this.$router.push({name: 'Detail', params: { id: this.article.description}})
        }
        }
        
    }
</script>

<template>
    <div class='module' @click="goToDetail()">
             
              <Thumbnail :image="article.urlToImage" :date="article.publishedAt"/>
              <Content :article="article" />
             
            </div>
</template>