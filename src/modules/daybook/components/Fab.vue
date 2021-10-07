<template>
    <button class="btn" :class="buttonColor">
        <li class="fa fa-2x" :class="icon"></li>
    </button>
</template>

<script>
export default{
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        },
        color: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        buttonColor(){
            return `btn-${ this.color }`
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    bottom: 20px;
    height: 60px;
    position: fixed;
    right: 20px;
    width: 60px;
}
</style>