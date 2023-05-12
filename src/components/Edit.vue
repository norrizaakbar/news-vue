<!-- <template>
    <div class="edit__container">
        <form  id="contact" action="" method="post" @submit.prevent="handleSubmit">
        <h3>Edit Form</h3>
        
        <fieldset>
            <label>News Title:</label>
          <input placeholder="title" v-model="news[0].title" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
            <label>News Source:</label>
          <input placeholder="source" v-model="news[0].source.name" type="text" tabindex="1" >

          
        </fieldset>
        <fieldset>
            <label>News Link:</label>

          <input placeholder="url" type="text" v-model="news[0].url" tabindex="3" >
        </fieldset>
        <fieldset>
            <label>News Image Link:</label>

          <input placeholder="News Image Link" v-model="news[0].urlToImage" type="text" tabindex="4" >
        </fieldset>
        <fieldset>
            <label>News Content:</label>
          
          <ckeditor :editor="editor" v-model="news[0].content" />
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
        <fieldset>
            
                <button name="cancel" type="cancel" id="contact-cancel" @click="handleCancel">
                    Cancel
                </button>

            
        </fieldset>

       
      </form>
       
    </div>
    
</template> -->
<template>
    <div class="edit__container">
        <form @submit.prevent="handleSubmit" id="contact">
            <h3>Edit Form</h3>
            <fieldset>
                <TextInput label="News Title:" placeholder="title" v-model="news[0].title" required autofocus />
            </fieldset>
            <fieldset>
                <TextInput label="News Source:"  placeholder="source" v-model="news[0].source.name" />
            </fieldset>
            <fieldset>
                <TextInput label="News Link:"  placeholder="url" v-model="news[0].url" />
            </fieldset>
            <fieldset>
                <TextInput label="News Image Link:" placeholder="urlToImage" v-model="news[0].urlToImage" />
            </fieldset>
            <fieldset>
                <label>News Content:</label>
                <ckeditor :editor="editor" v-model="news[0].content" />
            </fieldset>
            <fieldset>
               
                <Button type="submit" label="Submit" />
                <Button type="cancel" label="Cancel" @click="handleCancel"/>

            </fieldset>
        </form>
    </div>
</template>

<script>

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditorComponent from '@ckeditor/ckeditor5-vue2';
import TextInput from '@/molecules/TextInput.vue';
import Button from '@/atoms/Button.vue';

export default {
    name: 'EditPage',
    components: {
    ckeditor: CKEditorComponent.component,
    TextInput,
    Button
    
},
    data() {
        return {
            content: '',
            editor: ClassicEditor,
            
        }
    },
    created() {
        this.fetchNews()
    },
    computed: {
         news() {
            // const id = this.$route.params.id;
            // return this.$store.getters.news.filter(item => item.description === id);
             if (this.$store.getters.news.length) {
                const id = this.$route.params.id;
                return this.$store.getters.news.filter(item => item.description === id);
            }
            return []
        },
    },
    methods:{
        handleCancel(){
            this.$router.push({ name: 'Detail' })
        },
        fetchNews() {
            this.$store.dispatch('fetchNews')
        },
        handleSubmit(){
            console.log('klik')
            console.log(this.news[0]?.title);
            let data = {
               
                title: this.news[0] && this.news[0].title,
                name: this.news[0] && this.news[0].source.name,
                url: this.news[0] && this.news[0].url,
                urlToImage: this.news[0] && this.news[0].urlToImage,
                content: this.news[0] && this.news[0].content,

            }
            console.log(data)
                        this.$router.push({ name: 'Detail' })

            //  this.$store.dispatch('updateNews', data);
           
        }
    },
     mounted() {
        // this.fetchNews()

        console.log(this.$route.params.id);
                console.log(this.news[0]?.author);

    },
}
</script>
