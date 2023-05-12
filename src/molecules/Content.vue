<template>
    <div class='content'>
                    <div class="category">Photos</div>
                    <h1 class='title'>{{ article.title.split(" - ")[0] }}</h1>
                    <h2 class='sub-title'> Source: {{ article.source.name }}</h2>
                    <div class="description">{{ article.content ? article.content.substring(0, 150) : "" }} <span class="more">more...</span></div>
                    <div class="meta">
                      <span class="timestamp">
                        <i class='fa fa-clock-o'></i> {{ timeAgo(article.publishedAt) }}
                      </span>
               
                    </div>
                  </div>
</template>

<script>
export default{
    name: 'ContentCard',
    props: ['article'],
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
    }
}

</script>