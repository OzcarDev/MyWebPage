import { Theme } from "./DarkTheme.js";
import { obtenerReloj } from "./Reloj.js";


Theme();


let $btnActive = document.querySelector("#btn-01");
let myInterval;
$btnActive.addEventListener("click",(e)=>{
   myInterval = setInterval(function() {
        obtenerReloj();
    },1000)  
    e.target.disabled = true;
})

let $btnDesactive = document.querySelector("#btn-02");

$btnDesactive.addEventListener("click",(e)=>{
    clearInterval(myInterval);
    $btnActive.disabled = false;
})

