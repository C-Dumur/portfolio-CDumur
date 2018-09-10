var i = 0;
var txt = 'Clément DUMUR';
var txtdev = 'Développeur Web';
var speed = 150;

function typeWriterDev() {
    if (i < txtdev.length) {
        document.getElementById("dev").innerHTML += txtdev.charAt(i);
        i++;
    }
    setTimeout(typeWriterDev, speed);
}

typeWriterDev();
