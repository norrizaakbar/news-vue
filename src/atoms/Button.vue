<template>
     <button :type="type">{{label}}</button>
</template>

<script>
export default {
    name: 'ButtonAtom',
    props: {
        type: String,
        label: String
    }

}
</script>