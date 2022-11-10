
// const elDivs = document.querySelectorAll('div')
// const body = document.querySelector('body')


// function addClassName(e) {

//     const getTime = this.dataset.time
//     const self = this
//     setTimeout(()=>{
//         return self.classList.add('clicked') 
//     }, getTime)
// }

// function removeClassName(el) {

//     return el.classList.remove('clicked')
// }

// elDivs.forEach(function (div) {
//     div.addEventListener('click', addClassName)

// })


// body.addEventListener('click', function (e) {
//     if (e.target === e.currentTarget) {
//         elDivs.forEach(removeClassName)
//     }
// }
// )

// after check solution

document.addEventListener('DOMContentLoaded', init)

function init() {
    console.log('DOM')
    const divList = document.querySelectorAll('div')
    const body = document.querySelector('body')

    divList.forEach(function(el){
        el.addEventListener('click', function(){
            const time = this.dataset.time;
            console.log(time)
            console.log('click', this)

            const self = this
            setTimeout(function(){
                console.log(this, '??')
                self.classList.add('clicked')
            }, time)
            
        })
    })

    body.addEventListener('click', function(e){
        console.log('click on body', e.target, e.currentTarget)
        // target wskazuje na div-a, miejsce rozpoczęcia eventu,  a currentTarget wskazuje na body, miejsce podpięcia nasłuchiwania

        if(e.target === e.currentTarget){
            divList.forEach(function(el){
            el.classList.remove('clicked')
        })
        }
        
    })
}

