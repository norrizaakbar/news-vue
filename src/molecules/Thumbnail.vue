<template>
    <div class='thumbnail'>
                <img :src="image ? image : 'https://www.shutterstock.com/image-vector/word-news-vector-banner-text-260nw-345648962.jpg'">
                <div class='date'>
                  <div>{{ formatDate(date).date }}</div>
                  <div>{{ formatDate(date).month }}</div>
                </div>
              </div>
</template>

<script>
export default {
    name: 'ThumbnailCard',
    props: ['image', 'date'],
    methods:{
         formatDate(dateString) {
            const date = new Date(dateString);
            const monthNames = [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct',
                'Nov', 'Dec'
            ];

            const day = date.getDate();
            const monthIndex = date.getMonth();
            const monthName = monthNames[monthIndex];

            return {
                date: day,
                month: monthName
            };
        }
    }
}
</script>