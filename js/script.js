
//Get cards container
var parent_cards=document.getElementById("js_parent_cards")
        // console.log("Parent cards: ",parent_cards)


// Get card template
var info_card=document.getElementById("js_info_card_container")
        // console.log("info_card: ", info_card, info_card.childNodes[1])

var new_card
var model_information={
    "Dalton": {
        "properties": [
            "<b>Toda la materia está hecha de átomos.</b><br>Absolutamente todo lo que conocemos está hecho de átomos tanto en la tierra como en el universo conocido. Cada uno de los elementos está hecho de átomos.",
            "<b>Los átomos son indivisibles e indestructibles.</b><br>Dalton pensaba que los átomos eran las partículas más pequeñas de la materia y eran químicamente indestructibles.",
            "<b>Todos los átomos de un elemento dado son idénticos.</b><br>Para un elemento determinado, todos sus átomos tienen la misma masa y las mismas características.",
            "<b>Los átomos de diferentes elementos varían en masa y propiedades.</b><br>Cada elemento tiene átomos de características y masa diferentes.",
        ],
        "extra": "Según la teoría atómica de Dalton, la materia está formada por partículas indivisibles llamadas átomos. Los átomos de diferentes elementos químicos son diferentes entre sí. Según esta teoría atómica, los compuestos se forman como resultado de la combinación de dos o más elementos en una proporción simple.",
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
    parent_cards.innerHTML="";
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