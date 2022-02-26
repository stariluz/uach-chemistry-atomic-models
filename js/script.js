
//Get cards container
var parent_cards=document.getElementById("js_parent_cards")
        // console.log("Parent cards: ",parent_cards)


// Get card template
var info_card=document.getElementById("js_info_card_container")
// console.log("info_card: ", info_card, info_card.childNodes[1])


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
            "<b>La carga nuclear se identificó como responsable de la dispersión de partículas alfa.</b>\
            <br>\
            Los electrones con carga negativa presentes alrededor del átomo no afectan la dispersión de las partículas alfa.\
            ",
            "\
            Rutherford introdujo el concepto de peso atómico, que anteriormente se había omitido. \
            ",
        ],
        "extra": 'Rutherford propuso hacer pasar una partícula α de alta velocidad a través de un átomo de una lámina de oro, donde a partir de consideraciones energéticas, Rutherford dedujo que el radio de la carga central de los átomos de un serie de láminas delgadas de oro debió ser menor que 3,4 x 10-14 m. Y ya que el radio atómico del oro era del orden de 10 −10 m Rutherford concluyó que la carga debe concentrarse en un volumen muy pequeño en relación con el tamaño atómico.',
    },
    "Bohr": {
        "title": "Bohr",
        "image": "Bohr.png",
        "properties": [
            "<b></b>\
            <br>\
            \
            ",
            "<b></b>\
            <br>\
            \
            ",
            "<b></b>\
            <br>\
            \
            ",
            "<b></b>\
            <br>\
            \
            ",
        ],
        "extra": '',
    },
    "Schrodinger": {
        "title": "Schrödinger",
        "image": "Schrodinger.png",
        "properties": [
            "<b></b>\
            <br>\
            \
            ",
            "<b></b>\
            <br>\
            \
            ",
            "<b></b>\
            <br>\
            \
            ",
            "<b></b>\
            <br>\
            \
            ",
        ],
        "extra": '',
    }
}
// var properties=[
//     "Toda la materia está hecha de átomos.<br>Absolutamente todo lo que conocemos está hecho de átomos tanto en la tierra como en el universo conocido. Cada uno de los elementos está hecho de átomos.",
//     "Los átomos son indivisibles e indestructibles.<br>Dalton pensaba que los átomos eran las partículas más pequeñas de la materia y eran químicamente indestructibles.",
//     "Todos los átomos de un elemento dado son idénticos.<br>Para un elemento determinado, todos sus átomos tienen la misma masa y las mismas características.",
//     "Todos los átomos de un elemento dado son idénticos.<br>Para un elemento determinado, todos sus átomos tienen la misma masa y las mismas características.",
//     "Los átomos de diferentes elementos varían en masa y propiedades.<br>Cada elemento tiene átomos de características y masa diferentes.",
// ];


// properties.forEach(property => {
//             // console.log("Card: ", new_card)
//             // console.log("new card child: ", new_card.childNodes[1])
//     new_card=info_card.cloneNode(true)
//     new_card.childNodes[1].innerHTML=property;
    
//     parent_cards.appendChild(new_card);
// });

parent_cards.innerHTML=""
var content
function changeModel(model_name) {
    image.setAttribute("src", "./images/"+model_information[model_name]["image"])
    title.innerHTML="Modelo atómico de "+model_information[model_name]["title"]
    extra_info.innerHTML=model_information[model_name]["extra"]
    parent_cards.innerHTML=""
    model_information[model_name]["properties"].forEach(property => {
                // console.log("Card: ", new_card)
                // console.log("new card child: ", new_card.childNodes[1])
        new_card=info_card.cloneNode(true)
        content=document.createElement("p")
        content.innerHTML=property
        console.log(content)
        new_card.childNodes[1].appendChild(content)

        parent_cards.appendChild(new_card);
    });
}