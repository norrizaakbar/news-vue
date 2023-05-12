<template>
    <div>
    <input :type="type" :value="value" :placeholder="placeholder" :required="isRequired" :autofocus="isAutofocus"
        @input="handleInput"/>
        

        </div>
</template>

<script>
export default {
    name: 'InputAtom',
    props: {
        type: {
            type: String,
            default: "text",
        },
        value: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        isRequired: {
            type: Boolean,
            default: false,
        },
        isAutofocus: {
            type: Boolean,
            default: false,
        },
    },
     methods: {
        handleInput(event) {
            this.$emit('input', event.target.value);
        },
    },
}
</script>


