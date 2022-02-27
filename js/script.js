
//Get principal body
var body=document.getElementById("js_body")

//Get cards container
var parent_cards=document.getElementById("js_parent_cards")
        // console.log("Parent cards: ",parent_cards)


// Get card template
var info_card_container=document.getElementById("js_info_card_container")
//      console.log("info_card_container: ", info_card_container, info_card_container.childNodes[1])


var image=document.getElementById("js_image")
var title=document.getElementById("js_title")
var extra_info=document.getElementById("js_extra_info")


var new_card
var model_information={
    "Dalton": {
        "title": "Dalton",
        "image": "Dalton.png",
        "properties": [
            "<b>Toda la materia está hecha de átomos.</b><br>Absolutamente todo lo que conocemos está hecho de átomos tanto en la tierra como en el universo conocido. Cada uno de los elementos está hecho de átomos.",
            "<b>Los átomos son indivisibles e indestructibles.</b><br>Dalton pensaba que los átomos eran las partículas más pequeñas de la materia y eran químicamente indestructibles.",
            "<b>Todos los átomos de un elemento dado son idénticos.</b><br>Para un elemento determinado, todos sus átomos tienen la misma masa y las mismas características.",
            "<b>Los átomos de diferentes elementos varían en masa y propiedades.</b><br>Cada elemento tiene átomos de características y masa diferentes.",
            "<b>Los compuestos están formados por una combinación de dos o más tipos diferentes de átomos.</b>\
            <br>\Un compuesto determinado siempre tiene los mismos tipos de átomos combinados y en las mismas proporciones.\
            ",
            "<b>Una reacción química es una reorganización de átomos.</b>\
            <br>\
            Las reacciones químicas son el resultado de una separación, unión o reorganización de átomos. Sin embargo, los átomos de un elemento nunca cambian a átomos de otro elemento como resultado de una reacción química.\
            ",
        ],
        "extra": "Según la teoría atómica de Dalton, la materia está formada por partículas indivisibles llamadas átomos. Los átomos de diferentes elementos químicos son diferentes entre sí. Según esta teoría atómica, los compuestos se forman como resultado de la combinación de dos o más elementos en una proporción simple.",
    },
    "Thomson": {
        "title": "Thomson",
        "image": "Thomson.png",
        "properties": [
            '\
            Según el modelo atómico de Thomson, el átomo consiste en electrones colocados en una "sopa" cargada positivamente, que compensa las cargas eléctricamente negativas de los electrones.\
            ',
            "\
            Los electrones podrían girar libremente en una gota o nube de una sustancia tan cargada positivamente.\
            ",
            "\
            Las órbitas de los electrones se estabilizaron dentro del átomo por el hecho de que cuando un electrón se aleja del centro de una nube cargada positivamente, experimenta un aumento en la fuerza de atracción hacia el centro de la nube.\
            ",
            "\
            La fuerza de atracción al centro de una nube esférica cargada uniformemente es directamente proporcional a la distancia a su centro.\
            ",
            "\
            El átomo es neutro de manera que las cargas negativas de los electrones se compensan con la carga positiva.\
            ",
        ],
        "extra": 'El modelo de Thomson se ha comparado (pero no él mismo) con un postre británico: el pudín de pasas, de ahí el nombre de este modelo.El modelo del pudín de pasas tiene electrones rodeados por un volumen de carga positiva, muy parecido a "pasas" cargadas negativamente incrustadas en un "pudin" cargado positivamente.',
    },
    "Rutherford": {
        "title": "Rutherford",
        "image": "Rutherford.png",
        "properties": [
            "<b>El átomo es en su mayoría un espacio vacío.</b>\
            <br>\
            Rutherford negó el modelo atómico de Thomson al confirmar la existencia del núcleo atómico, el cual es muy pequeño en comparación con el propio átomo.\
            ",
            "<b>En el núcleo del átomo se concentraba la masa y la carga positiva del átomo.</b>\
            <br>\
            Esta característica equilibra la carga eléctrica de los electrones haciéndolo eléctricamente neutro. \
            ",
            "\
            Alrededor del núcleo existe un espacio vacío donde los electrones giran en diferentes órbitas.\
            ",
            "\
            Rutherford introdujo el concepto de peso atómico, que anteriormente se había omitido. \
            ",
            "<b>La carga nuclear se identificó como responsable de la dispersión de partículas alfa.</b>\
            <br>\
            Los electrones con carga negativa presentes alrededor del átomo no afectan la dispersión de las partículas alfa.\
            ",
            "Su experimento consitió en hacer pasar una partícula α de alta velocidad a través de un átomo de una lámina de oro tomando en cuenta consideraciones energéticas.",
            "Así dedujo que el radio de la carga central de los átomos de una lámina delgada de oro debió ser menor a 3,4 x 10-14 m. Y como el radio atómico del oro es del orden de 10−10 m concluyó que la carga se concentra en un volumen mínimo en relación con el tamaño atómico."
        ],
        "extra": "\
            <h4>¿Qué errores tenía?</h4>\
            - No infiere en la estabilidad del átomo, pues si los electrones giraran libremente alrededor del nucleo, tendrían que caer en cierto momento y colapsar el átomo.\
            - Ignora la distribución de los electrones alrededor del núcleo.\
            - No explica la discontinuidad del espectro atómico.\
            - No explica la línea espectral de los átomos.\
        "
    },
    "Bohr": {
        "title": "Bohr",
        "image": "Bohr.png",
        "properties": [
            "\
            Los electrones de un átomo se mueven en órbitas a cierta distancia del núcleo.\
            ",
            "\
            Cada estado estable tiene una energía constante.\
            ",
            "<b>A cualquier nivel energético estable, el electrón se mueve en una órbita circular. </b>\
            <br>\
            Estas órbitas se denominan niveles de energía o capas.\
            ",
            "<b>Mientras el electrón está en uno de sus estados estacionarios, el átomo no emite luz ( radiación).</b>\
            <br>\
            Sin embargo, cuando pasa de un nivel de energía alto a un nivel de energía más bajo, emite un cuanto de luz igual a la diferencia de energía entre los niveles.\
            ",
            "\
            Los niveles estables en los que es posible el movimiento de electrones se designan con letras de la K a la Q.\
            ",
            "\
            Cada órbita tiene electrones con distintos niveles de energía obtenida que después se tiene que liberar y por esa razón el electrón va saltando de una órbita a otra hasta llegar a una que tenga el espacio y nivel adecuado.\
            ",
            "\
            Si se le da suficiente energía al electrón, el electrón saltará a un nivel de energía más alto que el nivel de energía en el que se encuentra.\
            ",
        ],
        "extra": '\
            <h4>¿Qué errores tenía?</h4>\
            - Dado que los electrones son muy rápidos, deben considerarse no solo en la física clásica sino también en la teoría de la relatividad.<br>\
            - El modelo atómico de Bohr sólo puede explicar los espectros de átomos de un solo electrón (hidrógeno).<br>\
            - No puede explicar los espectros de átomos de varios electrones.<br>\
            - La dualidad onda-partícula (hipótesis de De Broglie) no se tuvo en cuenta en el modelo atómico de Bohr.<br>\
            - Según el principio de incertidumbre de Werner Heisenberg, la ubicación y la velocidad del electrón en el átomo no se pueden determinar simultáneamente con absoluta certeza. Por tanto, el concepto de "órbita" es erróneo.<br>\
            - No menciona los neutrones.<br>\
        ',
    },
    "Schrodinger": {
        "title": "Schrödinger",
        "image": "Schrodinger.png",
        "properties": [
            "\
            Inicialmente, el modelo de Schrödinger consideraba que los electrones actuaban como ondas de materia.\
            ",
            "\
            La ecuación que presentó Schrödinger indica la evolución de esta onda material en el espacio y el tiempo.\
            ",
            "\
            Más adelante, Max Born realizó una interpretación probabilística de la función de onda de los electrones. \
            ",
            "\
            Por el principio de incertidumbre de Heisenberg no se podían conocer la cantidad de movimiento y la posición a la vez.\
            ",
            "\
            El modelo se puede representar como una nube de puntos alrededor del núcleo, donde la probabilidad de encontrar el electrón aumenta con la densidad de puntos. \
            ",
            "\
            Schrödinger introdujo por primera vez el concepto de niveles de subenergía.\
            ",
            "\
            Predice la variación de los niveles energéticos de los electrones cuando existe un campo eléctrico o un campo magnético.\
            ",
            "\
            Describe las líneas de emisión espectrales, tanto de átomos ionizados como neutros.\
            ",
        ],
        "extra": '\
            <h4>¿Qué errores tenía?</h4>\
            - Carece de los efectos relativistas de los electrones rápidos.<br>\
            - No toma en cuenta el espín electrónico.<br>\
            - No puede explicar por qué un electrón en estado cuántico excitado puede decaer hacia un nivel energético inferior libre.<br>\
        ',
    }
}

parent_cards.innerHTML=""
var content

function disappearModels(){
    image.classList.remove("appear")
    title.classList.remove("appear")
    extra_info.classList.remove("appear")
    parent_cards.classList.remove("appear")
    /* parent_cards.childNodes.forEach(info_card_container => {
        info_card_container.classList.remove("info_card-container--normal")
    }) */
}
function appearModels(){
    image.classList.add("appear")
    title.classList.add("appear")
    extra_info.classList.add("appear")
    parent_cards.classList.add("appear")
    /* parent_cards.childNodes.forEach(info_card_container => {
        info_card_container.classList.add("info_card-container--normal")
    }) */
}
function updateInformation(model_name){
    return new Promise((resolve, reject)=>{
        // Change the image of the atomic model
        image.setAttribute("src", "./images/"+model_information[model_name]["image"])
                
        // Change the title of the atomic model
        title.innerHTML="Modelo atómico de "+model_information[model_name]["title"]

        // Change the extra information of the atomic model
        extra_info.innerHTML=model_information[model_name]["extra"]

        // Empty the card container
        parent_cards.innerHTML=""

        model_information[model_name]["properties"].forEach(property => {
            /* For all saved property, will render an card with it information */
            
            // Clone the card template for create a new card
            new_card=info_card_container.cloneNode(true)
            // console.log(new_card)

            // Add the propery to a p tag
            content=document.createElement("p")
            content.innerHTML=property
            
            // Add the content to the new card
            new_card.childNodes[1].appendChild(content)
            
            // Add the new card to the parent container
            parent_cards.appendChild(new_card);
        });
        /* console.log("Terminaste de actualizar") */
        resolve();
    });
}

function changeModel(model_name) {
    /* This function change the information of the atomic model rendered*/
    
    // Active the disappear transition
    disappearModels()
    
    setTimeout(async function(){
        /* console.log("Toca actualizar...") */
        try{
            // Update the cards information
            await updateInformation(model_name)
        }finally{
            // Active the appear transition
            appearModels()
        }
    },500)
    // If change the transition time on the css, you will need to change this
}

// Start of the program
function startJs(){
    updateInformation("Dalton")
    appearModels()
}
startJs();