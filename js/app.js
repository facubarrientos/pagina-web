const hamburguesa = document.querySelector('.hamburguesa');

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarMenu();
})

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        console.log('clickando....');
    })
}