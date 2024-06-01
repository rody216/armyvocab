// Contador para seguir el índice del archivo JSON
let currentIndex = 0;
let dictionaryData = null;

// Función para cargar las palabras del archivo JSON
function loadWords() {
    fetch('dictionary.json')
        .then(response => response.json())
        .then(data => {
            dictionaryData = data;
            displayCurrentWord();
            // Ocultar la palabra en inglés al cargar la página
            document.getElementById('word-ingles').style.display = 'none';
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Obtener los botones
const translateButton = document.getElementById('translate-button');
const audioButton = document.getElementById('audio-button');

// Agregar eventos de clic a los botones
translateButton.addEventListener('click', translate);
audioButton.addEventListener('click', playAudio);

// Función para reproducir el audio de la palabra actual
function playAudio() {
    const currentWord = dictionaryData[currentIndex];
    const audio = new Audio(`sounds/${currentWord.english}.mp3`); // Ruta actualizada
    audio.play();
}

// Función para mostrar la palabra actual
function displayCurrentWord() {
    const currentWord = dictionaryData[currentIndex];
    document.getElementById('word-espanol').textContent = currentWord.spanish;
    document.getElementById('word-ingles').textContent = currentWord.english;
}

// Función para traducir la palabra mostrando la traducción
function translate() {
    const spanishWord = document.getElementById('word-espanol');
    const englishWord = document.getElementById('word-ingles');

    // Alternar la visibilidad de las palabras sin necesidad de verificar su estado actual
    spanishWord.style.display = (spanishWord.style.display === 'none') ? 'block' : 'none';
    englishWord.style.display = (englishWord.style.display === 'none') ? 'block' : 'none';
}

// Función para mostrar la palabra anterior
function previous() {
    currentIndex = (currentIndex - 1 + dictionaryData.length) % dictionaryData.length;
    displayCurrentWord();
}

// Función para mostrar la siguiente palabra
function next() {
    currentIndex = (currentIndex + 1) % dictionaryData.length;
    displayCurrentWord();
}

// Cargar las palabras al cargar la página
document.addEventListener('DOMContentLoaded', loadWords);


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Obtener los modales y los botones de cierre
    const modalMision = document.getElementById('modal-mision');
    const modalVision = document.getElementById('modal-vision');
    const closeButtonMision = modalMision.querySelector('.close');
    const closeButtonVision = modalVision.querySelector('.close');

    // Función para abrir el modal de Misión
    const openModalMision = () => {
        modalMision.style.display = 'block';
    };

    // Función para abrir el modal de Visión
    const openModalVision = () => {
        modalVision.style.display = 'block';
    };

    // Función para cerrar los modales cuando se hace clic en el botón de cierre
    const closeModal = () => {
        modalMision.style.display = 'none';
        modalVision.style.display = 'none';
    };

    // Agregar eventos de clic a los botones para abrir y cerrar los modales
    document.getElementById('mision-button').addEventListener('click', openModalMision);
    document.getElementById('vision-button').addEventListener('click', openModalVision);
    closeButtonMision.addEventListener('click', closeModal);
    closeButtonVision.addEventListener('click', closeModal);

    // Cerrar el modal si el usuario hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target == modalMision || event.target == modalVision) {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el enlace de traducción de la misión y el párrafo de la misión
    const translateMisionButton = document.getElementById('translate-mision');
    const misionParagraph = document.querySelector('#modal-mision p');
    
    // Función para traducir la misión al inglés
    const translateMision = () => {
        const misionContentEnglish = "The National Army conducts military operations aimed at defending sovereignty, independence, and territorial integrity and protecting the civilian population and private and state resources to contribute to generating an environment of peace, security, and development, ensuring the constitutional order of the nation.";
        
        // Cambiar el contenido del párrafo al texto en inglés
        misionParagraph.textContent = misionContentEnglish;
    };

    // Agregar evento de clic al botón de traducción de la misión
    translateMisionButton.addEventListener('click', translateMision);
});

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el enlace de traducción de la visión y el párrafo de la visión
    const translateVisionButton = document.getElementById('translate-vision');
    const visionParagraph = document.querySelector('#modal-vision p');
    
    // Función para traducir la visión al inglés
    const translateVision = () => {
        const visionContentEnglish = "By the year 2030, the National Army will continue to be the decisive force of the Nation, with the capacity to conduct autonomous, joint, coordinated, and combined operations simultaneously in two theaters of operations, one external and/or one internal.";
        
        // Cambiar el contenido del párrafo al texto en inglés
        visionParagraph.textContent = visionContentEnglish;
    };

    // Agregar evento de clic al botón de traducción de la visión
    translateVisionButton.addEventListener('click', translateVision);
});

document.addEventListener('DOMContentLoaded', function () {
    const armasButton = document.getElementById('armas-button');
    const subMenuArmas = document.getElementById('sub-menu-armas');

    armasButton.addEventListener('click', function (e) {
        e.preventDefault();
        subMenuArmas.style.display = subMenuArmas.style.display === 'block' ? 'none' : 'block';
    });

    // Ocultar el submenú si se hace clic en cualquier otro lugar de la página
    document.addEventListener('click', function (e) {
        if (!armasButton.contains(e.target) && !subMenuArmas.contains(e.target)) {
            subMenuArmas.style.display = 'none';
        }
    });
});







