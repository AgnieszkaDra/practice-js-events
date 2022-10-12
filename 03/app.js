
const buttons = document.querySelectorAll('button')
console.log(buttons)

let myArray = Array.from(buttons)

console.log(myArray)



function showText(el) {
    for (var i=0, l=el.length; i<l; i++) {
        
        function Click(e){
            e.currentTarget.innerText = 'clicked'
            console.log('clicked')
            e.currentTarget.removeEventListener('click', Click)
        }

        el[i].addEventListener('click', Click)
        
    } 
}

showText(myArray) 




