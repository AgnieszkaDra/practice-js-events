/* before show result */

// const div = document.querySelector('.div')
// const textEl = document.querySelector('.text')

// const onMove = function(e){
//   console.log(e)
// }

// const onLeave = function(){
//     textEl.textContent = 'leave...'
// }

// if(div && textEl){
//     div.addEventListener('click', onMove)
//     div.addEventListener('mouseleave', onLeave)
// }

/* after show result */

console.log('before')

document.addEventListener('DOMContentLoaded', init)


console.log('after')

function init() {
  console.log('DOM')

  const boxElement = document.querySelector('div')
  console.log(boxElement)

  if(boxElement){

    boxElement.addEventListener('mousemove', function(e){
      console.log('mousemove', e);
    });

    boxElement.addEventListener('mouseleave', function(e){
      console.log('mouseleave');
    });


  }

}

// mousemove - do pobrania współrzędnych elementu