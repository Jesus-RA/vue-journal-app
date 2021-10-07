<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, jueves</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <li class="fa fa-trash-alt"></li>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <li class="fa fa-upload"></li>
            </button>
        </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="¿Qué sucedió hoy?"
        ></textarea>
    </div>

    <Fab
        icon="fa-save"
        color="warning"
    />

    <img
        src="https://mir-s3-cdn-cf.behance.net/projects/original/53b78645140447.Y3JvcCwxOTI3LDE1MDgsNTQyLDE4NQ.jpg"
        alt="entry-picture"
        class="img-thumbnail"
    >

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2)
}
</style>