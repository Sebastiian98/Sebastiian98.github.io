/* fecha 24 de oct */

// const fechaFinal = "12 Jul 2024";   

$(document).ready(function() {
    // function formatTime(time){
    //     return time < 10 ? (`0${time}`) : time;
    // }

    // function cuentaAtras(){
    //     const FechaParaElefantita = new Date(fechaFinal);
    //     const fechaActual = new Date();

    //     const totalSegundos = (FechaParaElefantita - fechaActual) / 1000;

    //     const dias = Math.floor(totalSegundos / 3600 / 24);
    //     const horas = Math.floor(totalSegundos / 3600) % 24;
    //     const minutos = Math.floor(totalSegundos / 60) % 60;
    //     const segundos = Math.floor(totalSegundos) % 60;

    //     $('#dias').text(dias);
    //     $('#horas').text(formatTime(horas));
    //     $('#minutos').text(formatTime(minutos));
    //     $('#segundos').text(formatTime(segundos));
    // }

    // cuentaAtras();
    // setInterval(cuentaAtras, 1000);


    const fechaFinal = new Date("2024-10-24T00:00:00"); 

    function updateCountdown() {
        const now = new Date();
        const difference = fechaFinal - now;

        if (difference <= 0) {
            
            $('.contenedorCronometro').html('<h1>Llegó el día</h1>');
            $('#fireworks').show(); 
            clearInterval(intervalId); 
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        $('#dias').text(days);
        $('#horas').text(hours);
        $('#minutos').text(minutes);
        $('#segundos').text(seconds);
    }

    var intervalId = setInterval(updateCountdown, 1000);





    // let images = ['src/img1.jpg', 'src/img2.jpg'];
    // let currentImage = 0;

    // function changeBackground() {
    //     currentImage = (currentImage + 1) % images.length;
    //     var newImage = images[currentImage];
    //     $('.body-background').fadeOut(1000, function() {
    //         $(this).css('background-image', 'url(' + newImage + ')').fadeIn(1000);
    //     });
    // }

    // $('.body-background').css('background-image', 'url(' + images[0] + ')');

    // setInterval(changeBackground, 30000); 
    let images = ['src/img1.jpg', 'src/img2.jpg', 'src/img3.jpg']; 
    let currentImage = 0;

    function changeBackground() {
        currentImage = (currentImage + 1) % images.length;
        $('#background').css('background-image', 'url(' + images[currentImage] + ')');
    }


    $('#background').css('background-image', 'url(' + images[0] + ')');

    setInterval(changeBackground, 30000);
    
});

