$(document).ready(function() {
    var temp = 20;
    

    function timer() {

        
        interval = setInterval(function () {

            temp -= 1;

            $('#chrono').text("il reste: " + temp + " s");

            if (secondesRestantes === 0 ) {
                clearInterval(interval);
            }
        }, 1000);

    }

    timer();
})