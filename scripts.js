var i = 0;
let timer = 3000;
let imagenes = []
imagenes[0] = 'imagenes/image1.jpg';
imagenes[1] = 'imagenes/image2.jpg';
imagenes[2] = 'imagenes/image3.jpg';
imagenes[3] = 'imagenes/image4.jpg';

function cambiarImagenes() {
    document.getElementById("image").src = imagenes[i]
    if (i < imagenes.length - 1) {
        i++

    } else {
        i = 0;
    }
    setTimeout('cambiarImagenes()', 4000)
}
window.onload = cambiarImagenes();