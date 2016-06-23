<template>
<div class="hero">
    {{ message }}
</div>
</template>

<script>
export default {
    data () { /* ES2015 equivalent for: `data: function () {` */
        return {
            message: 'Hello World!'
        };
    }
};
</script>

<style>
.hero {
    background: #eee;
    padding: 1em;
}
</style>