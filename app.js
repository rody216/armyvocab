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

        misionTitle.textContent = "Misión de La Escuela Militar de Suboficiales Sargento Inocencio Chincá.";
        misionParagraph.textContent = "Formar integralmente los futuros Suboficiales del Ejército Nacional, líderes con principios y valores institucionales, a partir de la docencia, la investigación y la extensión, generando competencias de nivel tecnológico, para comandar instruir, conducir y administrar una escuadra que garantice el orden constitucional de la nación.";
        translateMisionButton.textContent = "Ver en inglés";

        // Restablecer visión
        const visionTitle = document.getElementById('vision-title');
        const visionParagraph = document.getElementById('vision-text');
        const translateVisionButton = document.getElementById('translate-vision');

        visionTitle.textContent = "Visión de La Escuela Militar de Suboficiales Sargento Inocencio Chincá";
        visionParagraph.textContent = "La Escuela Militar de Suboficiales Sargento Inocencio Chincá, se proyecta al año 2030, como una institución de educación superior, con un desarrollo investigativo garante de procesos académicos robustos que le permiten ser reconocida en el ámbito nacional e internacional, gracias a sus altos estándares tecnológicos, culturales y éticos como fuente y gestión del conocimiento con un sentido humanístico y social.";
        translateVisionButton.textContent = "Ver en inglés";
    };

    // Función para traducir la misión al inglés y revertirla al español
    const translateMision = () => {
        const misionTitle = document.getElementById('mision-title');
        const misionParagraph = document.getElementById('mision-text');
        const translateMisionButton = document.getElementById('translate-mision');

        if (translateMisionButton.textContent === "Ver en inglés") {
            misionTitle.textContent = "Mission of the Military School of Non-Commissioned Officers, Sergeant Inocencio Chincá";
            misionParagraph.textContent = "Comprehensively train future Non-Commissioned Officers of the National Army, leaders with institutional principles and values, based on teaching, research and extension, generating technological level competencies, to command, instruct, lead and administer a squad that guarantees the constitutional order of the nation.";
            translateMisionButton.textContent = "Ver en español";
        } else {
            misionTitle.textContent = "Misión de La Escuela Militar de Suboficiales Sargento Inocencio Chincá";
            misionParagraph.textContent = "Formar integralmente los futuros Suboficiales del Ejército Nacional, líderes con principios y valores institucionales, a partir de la docencia, la investigación y la extensión, generando competencias de nivel tecnológico, para comandar instruir, conducir y administrar una escuadra que garantice el orden constitucional de la nación.";
            translateMisionButton.textContent = "Ver en inglés";
        }
    };

    // Función para traducir la visión al inglés y revertirla al español
    const translateVision = () => {
        const visionTitle = document.getElementById('vision-title');
        const visionParagraph = document.getElementById('vision-text');
        const translateVisionButton = document.getElementById('translate-vision');

        if (translateVisionButton.textContent === "Ver en inglés") {
            visionTitle.textContent = "Vision of the Military School of Non-Commissioned Officers Sergeant Inocencio Chincá";
            visionParagraph.textContent = "The Sergeant Inocencio Chincá Military School of Non-Commissioned Officers is projected to the year 2030, as a higher education institution, with research development that guarantees robust academic processes that allow it to be recognized nationally and internationally, thanks to its high technological standards. Cultural and ethical as a source and management of knowledge with a humanistic and social sense.";
            translateVisionButton.textContent = "Ver en español";
        } else {
            visionTitle.textContent = "Visión de La Escuela Militar de Suboficiales Sargento Inocencio Chincá.";
            visionParagraph.textContent = "La Escuela Militar de Suboficiales Sargento Inocencio Chincá, se proyecta al año 2030, como una institución de educación superior, con un desarrollo investigativo garante de procesos académicos robustos que le permiten ser reconocida en el ámbito nacional e internacional, gracias a sus altos estándares tecnológicos, culturales y éticos como fuente y gestión del conocimiento con un sentido humanístico y social.";
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








