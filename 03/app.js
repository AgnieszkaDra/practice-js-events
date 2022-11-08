
// const buttons = document.querySelectorAll('button')
// console.log(buttons)

// let myArray = Array.from(buttons)

// console.log(myArray)

// function showText(el) {
//     for (var i=0, l=el.length; i<l; i++) {
        
//         function Click(e){
//             e.currentTarget.innerText = 'clicked' 
//             console.log('clicked',this)
//             e.currentTarget.removeEventListener('click', Click)
//         }

//         el[i].addEventListener('click', Click)
        
//     } 
// }

// showText(myArray) 

// after check solution 

document.addEventListener('DOMContentLoaded', init)

function init() {

    console.log('DOM')

    const btnsList = document.querySelectorAll('button')
    btnsList.forEach(function(btn){
        //console.log('clicked', this, e.currentTarget)
        btn.addEventListener('click', handleClick)
    })
}

const TEXT = 'clicked'
function handleClick(e){
    //const element = this
    const element = e.currentTarget
    console.log(TEXT, this, element)
    element.innerText = 'clicked'
    element.removeEventListener('click', handleClick)
}



