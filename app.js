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
        resetModalContent();
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

    // Función para restablecer el contenido al cerrar el modal
    const resetModalContent = () => {
        // Restablecer misión
        const misionTitle = document.getElementById('mision-title');
        const misionParagraph = document.getElementById('mision-text');
        const translateMisionButton = document.getElementById('translate-mision');

        misionTitle.textContent = "Misión del Ejército";
        misionParagraph.textContent = "El Ejército Nacional conduce operaciones militares orientadas a defender la soberanía, la independencia y la integridad territorial y proteger a la población civil y los recursos privados y estatales para contribuir a generar un ambiente de paz, seguridad y desarrollo, que garantice el orden constitucional de la nación.";
        translateMisionButton.textContent = "Ver en inglés";

        // Restablecer visión
        const visionTitle = document.getElementById('vision-title');
        const visionParagraph = document.getElementById('vision-text');
        const translateVisionButton = document.getElementById('translate-vision');

        visionTitle.textContent = "Visión del Ejército";
        visionParagraph.textContent = "En el año 2030, el Ejército Nacional continuará siendo la fuerza de acción decisiva de la Nación, con capacidad de conducir operaciones autónomas, conjuntas, coordinadas y combinadas, en forma simultánea en dos teatros de operaciones, uno externo y/o uno interno.";
        translateVisionButton.textContent = "Ver en inglés";
    };

    // Función para traducir la misión al inglés y revertirla al español
    const translateMision = () => {
        const misionTitle = document.getElementById('mision-title');
        const misionParagraph = document.getElementById('mision-text');
        const translateMisionButton = document.getElementById('translate-mision');

        if (translateMisionButton.textContent === "Ver en inglés") {
            misionTitle.textContent = "Mission of the Army";
            misionParagraph.textContent = "The National Army conducts military operations aimed at defending sovereignty, independence, and territorial integrity and protecting the civilian population and private and state resources to contribute to generating an environment of peace, security, and development, ensuring the constitutional order of the nation.";
            translateMisionButton.textContent = "Ver en español";
        } else {
            misionTitle.textContent = "Misión del Ejército";
            misionParagraph.textContent = "El Ejército Nacional conduce operaciones militares orientadas a defender la soberanía, la independencia y la integridad territorial y proteger a la población civil y los recursos privados y estatales para contribuir a generar un ambiente de paz, seguridad y desarrollo, que garantice el orden constitucional de la nación.";
            translateMisionButton.textContent = "Ver en inglés";
        }
    };

    // Función para traducir la visión al inglés y revertirla al español
    const translateVision = () => {
        const visionTitle = document.getElementById('vision-title');
        const visionParagraph = document.getElementById('vision-text');
        const translateVisionButton = document.getElementById('translate-vision');

        if (translateVisionButton.textContent === "Ver en inglés") {
            visionTitle.textContent = "Vision of the Army";
            visionParagraph.textContent = "By the year 2030, the National Army will continue to be the decisive force of the Nation, with the capacity to conduct autonomous, joint, coordinated, and combined operations simultaneously in two theaters of operations, one external and/or one internal.";
            translateVisionButton.textContent = "Ver en español";
        } else {
            visionTitle.textContent = "Visión del Ejército";
            visionParagraph.textContent = "En el año 2030, el Ejército Nacional continuará siendo la fuerza de acción decisiva de la Nación, con capacidad de conducir operaciones autónomas, conjuntas, coordinadas y combinadas, en forma simultánea en dos teatros de operaciones, uno externo y/o uno interno.";
            translateVisionButton.textContent = "Ver en inglés";
        }
    };

    // Agregar eventos de clic a los botones de traducción
    document.getElementById('translate-mision').addEventListener('click', translateMision);
    document.getElementById('translate-vision').addEventListener('click', translateVision);

    // Submenú de Armas
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








