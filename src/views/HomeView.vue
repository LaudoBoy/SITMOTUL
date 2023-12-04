<script setup>

import { createApp, onBeforeMount, onMounted } from 'vue';
import { ref } from 'vue';
import Chart from 'chart.js/auto';


const ing = ref('');
const info = ref('');
var IEMLis = 0;
var IELis = 0;
var IILis = 0;
var IERLis = 0;
var ISCLis = 0;
var TOT = 0;
var AL = 0;
var por = 0;


async function fetchData() {
  try {
    const response = await fetch('https://sitmotul.com.mx/api/statusEvalIng')
    const data = await response.json();
    ing.value = data
    IEMLis = ing.value['IEM']['listas'];
    ISCLis = ing.value['ISC']['listas'];
    IELis = ing.value['IE']['listas'];
    IERLis = ing.value['IER']['listas'];
    IILis = ing.value['II']['listas'];
    document.getElementById('IEML').value = IEMLis;
    document.getElementById('IEL').value = IELis;
    document.getElementById('ISCL').value = ISCLis;
    document.getElementById('IERL').value = IERLis;
    document.getElementById('IIL').value = IILis;
    // isLoading.value = false
    console.log(IELis);


    const responsed = await fetch('https://sitmotul.com.mx/api/statusEval')
    const datad = await responsed.json();
    info.value = datad
    TOT = info.value.alEvaluados;
    AL = info.value.alTotal;
    por = Math.round((TOT * 100) / AL);
    console.log(TOT, AL, por);
    document.getElementById('ALLEV').value = TOT;
    document.getElementById('ALL').value = AL;
    document.getElementById('PERI').value = por;
    document.getElementById('PER').textContent = "Hay un avance del " + por + "%" + " en las evaluaciones";

  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

onMounted(() => {
  fetchData();
  percent();
  const ctx = document.getElementById('myChart');
  var IEMlis = document.getElementById('IEML').value;
  var IElis = document.getElementById('IEL').value;
  var IERlis = document.getElementById('IERL').value;
  var ISClis = document.getElementById('ISCL').value;
  var IIlis = document.getElementById('IIL').value;

  console.log(IEMLis);
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Sistemas', 'Industrial', 'Energías Renovables', 'Electromecánica', 'Electrónica'],
      datasets: [{
        label: 'Reporte de evaluaciones',
        data: [ISClis, IIlis, IERlis, IEMlis, IElis],
        borderWidth: 1,
        backgroundColor: ['#164e63', '#881337', '#164e44', '#164e56', '#164e78'],
        hoverOffset: 4

      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'white',
            size: 14
          }
        },
        title: {
          display: true,
          text: 'Reporte de todas las ingenierias',
          color: '#ffff',

          font: {
            size: 18
          }
        }
      },
      responsive: true
    }
  });
})

function percent() {
  var allEv = document.getElementById('ALLEV').value;
  var al = document.getElementById('ALL').value;
  var pori = document.getElementById('PERI').value;

  var v0 = "<div id='PER' class='font-bold text-2xl text-center' style='font-family: WW;'>" + "</div>" +
    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/Do4.png' alt='1/4 de imagen'>" +
    "<img src='src/components/icons/DONE/Do1.png' alt='1/4 de imagen'>" +
    "</div>" +

    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/Do3.png' alt=''>" +
    "<img src='src/components/icons/DONE/Do2.png' alt='''>" +
    "</div>";

  var v1 = "<div id='PER' class='font-bold text-2xl text-center' style='font-family: WW;'>" + "</div>" +
    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/Do4.png' alt='1/4 de imagen'>" +
    "<img src='src/components/icons/DONE/D1.png' alt='1/4 de imagen'>" +
    "</div>" +

    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/Do3.png' alt=''>" +
    "<img src='src/components/icons/DONE/Do2.png' alt='''>" +
    "</div>";

  var v2 = "<div id='PER' class='font-bold text-2xl text-center' style='font-family: WW;'>" + "</div>" +
    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/Do4.png' alt='1/4 de imagen'>" +
    "<img src='src/components/icons/DONE/D1.png' alt='1/4 de imagen'>" +
    "</div>" +

    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/Do3.png' alt=''>" +
    "<img src='src/components/icons/DONE/D2.png' alt='''>" +
    "</div>";

  var v3 = "<div id='PER' class='font-bold text-2xl text-center' style='font-family: WW;'>" + "</div>" +
    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/Do4.png' alt='1/4 de imagen'>" +
    "<img src='src/components/icons/DONE/D1.png' alt='1/4 de imagen'>" +
    "</div>" +

    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/D3.png' alt=''>" +
    "<img src='src/components/icons/DONE/D2.png' alt='''>" +
    "</div>";

  var v4 = "<div id='PER' class='font-bold text-2xl text-center' style='font-family: WW;'>" + "</div>" +
    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/D4.png' alt='1/4 de imagen'>" +
    "<img src='src/components/icons/DONE/D1.png' alt='1/4 de imagen'>" +
    "</div>" +

    "<div class='w-full flex flex-col gap-y-0'>" +
    "<img src='src/components/icons/DONE/D3.png' alt=''>" +
    "<img src='src/components/icons/DONE/D2.png' alt='''>" +
    "</div>";



  if (pori > 25 && pori <= 50) {
    document.getElementById('progress').innerHTML = v1;

  } else if (pori > 50 && pori <= 75) {

    document.getElementById('progress').innerHTML = v2;

  } else if (pori > 75 && pori < 100) {

    document.getElementById('progress').innerHTML = v3;

  } else if (pori == 100) {

    document.getElementById('progress').innerHTML = v4;

  } else {

    document.getElementById('progress').innerHTML = v0;
  }


};
</script>

<style>
@font-face {
  font-family: WW;
  src: url("../fonts/wwDigital.ttf");
}
</style>

<template>
  <main class="bg-[#5e8271] text-white">
    <input type="text" class="hidden" id="IEML">
    <input type="text" class="hidden" id="ISCL">
    <input type="text" class="hidden" id="IIL">
    <input type="text" class="hidden" id="IEL">
    <input type="text" class="hidden" id="IERL">
    <input type="text" class="hidden" id="ALLEV">
    <input type="text" class="hidden" id="ALL">
    <input type="text" class="hidden" id="PERI">
    <div class="w-full flex flex-col gap-y-5 px-5 xl:flex-row xl:gap-x-5 xl:px-60">
      <div id="progress" class="w-full flex flex-row gap-x-0 px-10 py-10 items-center xl:w-1/2">

      </div>

      <div class="w-full xl:w-1/2">
        <canvas id="myChart"></canvas>
      </div>
    </div>

  </main>
</template>
