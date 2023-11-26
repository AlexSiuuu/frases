let boton = document.getElementById('btn-cambiar');
let fraseElemento = document.getElementById('frase');
let autorElemento = document.getElementById('autor');

const generarNumero = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const cambiarFrase = () => {
    let indice = generarNumero(0, fraces.length);
    fraseElemento.innerText = `"${fraces[indice].text}"`;
    autorElemento.innerText = fraces[indice].autor;
}

cambiarFrase();

boton.addEventListener('click', cambiarFrase);