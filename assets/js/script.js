/* Alert */

Swal.fire({
    title: "Bienvenido!",
    text: "Este sitio web aun esta en proceso",
    icon: "info",
    iconColor: "#4169E1",
    confirmButtonColor: "#4169E1"
})

/* Header */

const btnToggle = document.querySelector('.btn__toggle'),
menu = document.querySelector('.menu')

btnToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
})

btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle("active");
})

window.onscroll = function() {
    scroll = document.documentElement.scrollTop;

    header = document.getElementById('header');

    if(scroll > 20) {
        header.classList.add('header_mod');
    } else {
        header.classList.remove('header_mod');
    }
}

/* Home */

const typed = new Typed('.typed', {
    strings: [
        'Web Designer',
        'Creative Developer',
        'UI/UX Designer'
    ],
    stringsElement: '#cadenas-texto',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	smartBackspace: true,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html',
});

const about = document.getElementById('about'),
profileImg = document.getElementById('profile-img')


about.addEventListener("click", () => {
    Swal.fire({
        title: "Sobre Mí",
        text: "¡Hola! Soy un programador de nivel intermedio, tengo 15 años de edad y comencé a programar cuando tenía 13 años. Me encanta la tecnología y me apasiona todo lo relacionado con el desarrollo web. Además de mi amor por la tecnología, también disfruto del deporte. Me gusta mantenerme activo y cuidar mi salud, por lo que siempre trato de hacer algo de ejercicio cada día. También tengo otro hobby: tocar la guitarra. Me encanta la música y encuentro que tocar la guitarra es una excelente manera de desconectar de la programación y relajarme. En general, siento que tengo una vida equilibrada y me gusta tener diferentes intereses y pasatiempos. Espero seguir mejorando en mis habilidades de programación y, al mismo tiempo, seguir disfrutando de mis otros intereses y hobbies. ¡Tengo muchas expectativas por ver lo que me depara el futuro!",
        padding: "20px 20px",
        width: "750px",
        confirmButtonText: "Entendido",
        icon: "",
        iconColor: "#4169E1",
        confirmButtonColor: "#4169E1"
    })
})

profileImg.addEventListener("click", () => {
    Swal.fire({
        title: "",
        text: "Hola!👋 Pasa algo?",
        padding: "20px 0",
        width: "300px",
        confirmButtonText: "No",
        icon: "",
        iconColor: "#4169E1",
        confirmButtonColor: "#4169E1"
    })
})
