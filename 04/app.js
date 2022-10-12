
const elDivs = document.querySelectorAll('div')
const body = document.querySelector('body')

function addClassName(e) {

    return e.currentTarget.classList.add('clicked')

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

