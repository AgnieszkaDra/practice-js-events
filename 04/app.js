
const elDivs = document.querySelectorAll('div')
const body = document.querySelector('body')


function addClassName(e) {

    const getTime = this.dataset.time
    setTimeout(()=>{
        console.log(e.target)
       return e.target.classList.add('clicked') 
    }, getTime)
}

function removeClassName(el) {

    return el.classList.remove('clicked')
}

elDivs.forEach(function (div) {
    div.addEventListener('click', addClassName)

})


body.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        elDivs.forEach(removeClassName
        )
    }
}
)

