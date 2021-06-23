function mostrarPalabras(texto, cantPalabras, callback, interval) {
    var arrayText = texto.split(' ');
    var index = 0;
    var timer = setInterval(() => {
        console.log(arrayText[index++]);
        if(index >= arrayText.length) {
            clearInterval(timer);
            callback(arrayText.length+cantPalabras);
        }

    },interval?interval:500)
}

let text1 = 'Bienvenidos!';
let text2 = 'Este es el desafío tres';
let text3 = 'de la clase de Programación asincrónica en Javascript'; 

mostrarPalabras(text1, 0, cantPalabrasText => {
    mostrarPalabras(text2, cantPalabrasText, cantPalabrasText => {
        mostrarPalabras(text3, cantPalabrasText, cantPalabrasText => {
            console.log('Proceso terminado, la cantidad de palabras es:',cantPalabrasText)
        },500)
    },500)
},500);