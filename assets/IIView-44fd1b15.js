import{r as n,o as i,C as r,a as d,c as v,b as x}from"./index-691899b3.js";const h={class:"w-full flex flex-col gap-y-3 px-5 pt-5 bg-[#5e8271] xl:flex-row xl:gap-x-3 xl:px-40 xl:h-[500px] xl:items-center xl:pt-0"},u=x('<div class="w-full flex flex-col shadow-lg border-2 border-white bg-[#ade0db] rounded gap-y-3 place-items-center py-3 px-1 xl:w-2/3 xl:h-36"><h1 class="text-3xl font-bold text-center" style="font-family:WW;">Ingeniería Industrial</h1><div class="w-full flex flex-col gap-y-2 xl:flex-row xl:place-items-center"><div class="w-full flex flex-row gap-x-2 place-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g id="IconifyId18c18136db87b31623"><g id="IconifyId18c18136db87b31624"><path id="IconifyId18c18136db87b31625" fill="currentColor" d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15l-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33a1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41ZM10 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1"></path></g></g></svg><div class="w-full flex flex-row gap-x-1 place-items-center"><h2 class="text-2xl" style="font-family:WW;">Evaluaciones realizadas:</h2><h2 id="IIL" class="text-xl" style="font-family:WW;"></h2></div></div><div class="w-full flex flex-row gap-x-0.5 place-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64"><path fill="currentColor" d="M52.303 8.563C53.24 8.563 54 7.74 54 6.729V3.833C54 2.82 53.24 2 52.303 2H11.697C10.759 2 10 2.82 10 3.833v2.896c0 1.011.759 1.833 1.697 1.833h1.053v46.875h-1.053c-.938 0-1.697.82-1.697 1.833v2.895c0 1.013.759 1.835 1.697 1.835h40.605C53.24 62 54 61.178 54 60.165V57.27c0-1.013-.76-1.833-1.697-1.833H51.25V8.563h1.053m-37.72 46.875V8.563h1.725c-.446 0-.808.335-.808.749v2.25c0 .414.358.747.802.75v.001c0 8.289 1.327 16.344 10.931 19.12l.475.15c.416.132.912.288 1.166.417c-.254.127-.745.283-1.157.413l-.454.145c-9.633 2.786-10.96 10.841-10.96 19.13v.001c-.443.003-.802.336-.802.748v2.25c0 .414.361.751.808.751h-1.726m29.466-4.688C43.189 43.03 32 38.337 32 38.337S20.811 43.03 19.949 50.75h-1.807c.152-9.941 2.813-14.42 9.645-16.397l.469-.147c1.313-.414 2.553-.806 2.553-2.205c0-1.401-1.244-1.794-2.563-2.208l-.487-.155c-6.806-1.968-9.464-6.444-9.616-16.387h27.715c-.153 9.943-2.813 14.422-9.643 16.396l-.457.145c-1.32.414-2.568.807-2.568 2.209c0 1.399 1.242 1.791 2.557 2.205l.494.156c6.805 1.968 9.464 6.445 9.617 16.389h-1.809zm5.367 4.688h-1.723c.444 0 .807-.337.807-.751v-2.25c0-.413-.36-.746-.803-.748v-.001c0-8.29-1.327-16.346-10.932-19.122l-.48-.152c-.412-.13-.905-.286-1.158-.413c.254-.129.752-.285 1.168-.417l.444-.141c9.631-2.784 10.958-10.84 10.958-19.13v-.001c.442-.002.803-.335.803-.75v-2.25c0-.414-.362-.749-.807-.749h1.723v46.875"></path></svg><div class="w-full flex flex-row gap-x-1 place-items-center"><h2 class="text-2xl" style="font-family:WW;">Evaluaciones sin realizar:</h2><h2 id="IIF" class="text-xl" style="font-family:WW;"></h2></div></div></div><input type="text" class="hidden" id="LI"><input type="text" class="hidden" id="NLI"></div><div class="w-full xl:w-1/3"><canvas id="myChart"></canvas></div>',2),f=[u],m={name:"EvaPersonDoneFill",name:"EmojioneMonotoneHourglassDone"},I=Object.assign(m,{setup(p){const t=n("");var l=0,s=0;async function o(){try{const a=await(await fetch("https://sitmotul.com.mx/api/statusEvalIng")).json();return t.value=a,l=t.value.II.listas,s=t.value.II.faltantes,document.getElementById("IIL").textContent=l,document.getElementById("IIF").textContent=s,document.getElementById("LI").value=l,document.getElementById("NLI").setAttribute("value",s),console.log(l),t.value}catch(e){console.error("Error al obtener datos:",e)}}return i(()=>{o();const e=document.getElementById("myChart");var a=document.getElementById("LI").value,c=document.getElementById("NLI").getAttribute("value");console.log(c),new r(e,{type:"pie",data:{labels:["Evaluaciones realizadas","Evaluaciones sin realizar"],datasets:[{label:"Reporte de evaluaciones",data:[a,c],borderWidth:1,backgroundColor:["#164e63","#881337"],hoverOffset:4}]},options:{plugins:{legend:{labels:{color:"white",size:14}}},responsive:!0,maintainAspectRatio:!0}})}),(e,a)=>(d(),v("div",h,f))}});export{I as default};
