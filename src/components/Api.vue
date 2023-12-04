
<script setup>

import { onMounted } from 'vue';
import { ref } from 'vue';
import { computed } from 'vue';
import dayjs from 'dayjs';// ES 2015
import 'dayjs/locale/es'; // Importa el idioma español

dayjs.locale('es');

const info = ref('');

async function fetchData() {
    try {
        const response = await fetch('https://sitmotul.com.mx/api/statusEval')
        const data = await response.json();
        info.value = data
        // isLoading.value = false
        console.log(info.value);
        // document.getElementById('per').textContent = info.value['periodo'];
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}
onMounted(() => {
    fetchData();
})

const fIn = computed(() => {
    return dayjs(info.value.inicio).format('dddd, DD [de] MMMM [del] YYYY');
});

const fFi = computed(() => {
    return dayjs(info.value.fin).format('dddd, DD [de] MMMM [del] YYYY');
});
</script>

<style>
@font-face {
    font-family: WW;
    src: url("../fonts/wwDigital.ttf");
}
</style>




<template>
    <div class="flex flex-col gap-y-5 place-items-center bg-[#5e8271]">

        <div class="flex flex-col gap-y-2 w-full place-items-center">
            <img alt="Sit logo" class=" fill-white" src="./icons/logoSit.svg" width="125" height="125" />
            <div class="flex flex-col gap-y-1 w-full place-items-center">
                <h1 class="font-bolt text-2xl text-white" style="font-family: WW;">Período escolar actual:</h1>
                <h1 id="per" class="text-xl text-white" style="font-family: WW;">{{ info.periodo }}</h1>
            </div>

        </div>

        <div class="flex flex-col gap-y-3 xl:flex-row xl:gap-x-10">
            <div
                class="border-2 rounded shadow-md shadow-black border-white px-1 flex flex-col gap-y-1 bg-[#ade0db] text-black place-items-center">
                <h1 class="font-bolt text-2xl" style="font-family: WW;">Fecha de inicio</h1>
                <h1 id="Ini">{{ fIn }}</h1>
            </div>

            <div
                class="border-2 rounded shadow-md shadow-black border-white px-1 flex flex-col gap-y-1 bg-[#ade0db] text-black place-items-center">
                <h1 class="font-bolt text-2xl" style="font-family: WW;">Fecha de cierre</h1>
                <h1>{{ fFi }}</h1>
            </div>
        </div>

        <div
            class="flex flex-col gap-y-3 border-2 rounded shadow-md shadow-black border-white px-1 bg-[#ade0db] text-black">
            <div>
                <h1 class="w-full text-center font-bolt xl:text-2xl" style="font-family: WW;">Información de las
                    evaluaciones
                </h1>
            </div>
            <div class="w-full flex flex-col gap-y-3 xl:flex-row xl:gap-x-16 xl:place-items-center">
                <div class="flex flex-col gap-y-1 place-items-center">
                    <h1 class="xl:text-xl" style="font-family: WW;">Alumnos totales:</h1>
                    <h1 class="xl:text-xl" style="font-family: WW;">{{ info.alTotal }}</h1>
                </div>
                <div class="flex flex-col gap-y-1 place-items-center">
                    <h1 class="xl:text-xl" style="font-family: WW;">Evaluaciones realizadas:</h1>
                    <h1 class="xl:text-xl" style="font-family: WW;">{{ info.alEvaluados }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>


