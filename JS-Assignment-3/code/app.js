// This is the toggle for the boxes to move up and down


const boxMenu2 = document.querySelector('#box')



const dropDown2 = document.querySelector('#box')



boxMenu2.addEventListener('click', function () {
    dropDown2.classList.toggle('toggle')

})
//------------------------------------------------------


// Text and the white boxes for the text to be fetched

function pickJarJar() {
    let url = "https://swapi.co/api/people/36/"
    getData(url)
}

function pickAnakin() {
    let url = "https://swapi.co/api/people/11/"
    getData(url)
}

function pickNute() {
    let url = "https://swapi.co/api/people/33/"
    getData(url)
}


// function loading() {

// }


function getData(url) {

    // loading()

    fetch(url)
        .then(x => x.json())
        .then(data => {
            // removeLoading()
            getName(data.name)
            getHeight(data.height)
            getMass(data.mass)
            console.log(data.name)

        })

    function getName(text) {
        document.getElementById("name").innerHTML = text
    }

    function getHeight(text) {
        document.getElementById("height").innerHTML = text + ' Centimeters'
    }

    function getMass(text) {
        document.getElementById("mass").innerHTML = text + ' Kg'
    }
}
//  ---------------------------------------------------------------------
// This is for the planets that will be fetched into the next box

// function pickAlderaan() {
//     let url = "https://swapi.co/api/planets/2"
//     getData(url)
// }

// function pickMustafar() {
//     let url = "https://swapi.co/api/planets/13"
//     getData(url)
// }

// function pickCoruscant() {
//     let url = "https://swapi.co/api/planets/9"
//     getData(url)
// }


// // function loading() {

// // }


// function getData(url) {

//     // loading()

//     fetch(url)
//         .then(x => x.json())
//         .then(data => {
//             // removeLoading()
//             getName(data.name)
//             getHeight(data.climate)
//             getMass(data.gravity)
 
//         })

//     function getName(text) {
//         document.getElementById("name").innerHTML = text
//     }

//     function getHeight(text) {
//         document.getElementById("climate").innerHTML = text
//     }

//     function getMass(text) {
//         document.getElementById("gravity").innerHTML = text
//     }
// }