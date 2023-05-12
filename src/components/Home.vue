<template>
  <div class='container__post'>
    <header>
      <h1>Article News Card</h1>
     
    </header>
    <main >
      <Card class='normal' v-for="(article, i) in news" :key="i" :article="article" :indeks="i"/>
        
       
      
    </main>
   
  </div>
</template>

<script>
import Card from '@/organisms/Card.vue'
export default {
  name: 'HelloWorld',
  components: {
    Card
  },
  props: {
    msg: String
  },
  methods: {
    fetchNews(){
      this.$store.dispatch('fetchNews')
    }
  },
  computed:{
    news(){
      return this.$store.getters.news
    }
    // ...mapGetters(["news"]),
  },
  created(){
    this.$store.dispatch("fetchNews");
  },
  mounted(){
    this.$store.dispatch("fetchNews");
    
    console.log({ 'author' : this.news[0].author})
    console.log({ 'content' : this.news[0].content })
    console.log({ 'description' : this.news[0].description })
    console.log({ 'publishedAt' : this.news[0].publishedAt })
    console.log({ 'source' : this.news[0].source })
    console.log({ 'title' : this.news[0].title })
    console.log({ 'url' : this.news[0].url })
    console.log({ 'urlToImage' : this.news[0].urlToImage })
   
    
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
