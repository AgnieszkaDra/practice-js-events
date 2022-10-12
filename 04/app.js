
const elDivs = document.querySelectorAll('div')

function addClassName(e){
    let classNameDiv = e.currentTarget.setAttribute('class', 'clicked')
    console.log(classNameDiv)
}

elDivs.forEach(function(div){
    div.addEventListener('click', addClassName)
})