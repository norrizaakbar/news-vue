<template>
    <div class="input__text">
        <label >{{ label }}</label>
        <input  :type="type"  :value="value" :placeholder="placeholder" :required="isRequired"
            :autofocus="isAutofocus" @input="handleInput" />
    </div>
</template>

<script>
// import Input from '@/atoms/Input.vue';

export default {
    name: 'TextInput',
    components: {
        // Input
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value);
        }
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        isRequired: {
            type: Boolean,
            default: false
        },
        isAutofocus: {
            type: Boolean,
            default: false
        }
    }
}
</script>


