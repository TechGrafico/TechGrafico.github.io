const spans = document.querySelectorAll('h1 apan')
spans.forEach(span => span.addEventListeener('mouseover',function(e) {
  span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListeener('mouseout',function(e) {
  span.classList.remove('animated', 'rubberBand')
}))


const htmlBar = document.querySelectorAll('.bar-html')
const cssBar = document.querySelectorAll('.bar-css')
const jsBar = document.querySelectorAll('.bar-JavaScript')
const reactBar = document.querySelectorAll('.bar-react')

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: 'calc(0% -6px)'},{width: 'calc(90% -6px)', ease:Power4.easeOut})
.fromTo(cssBar, .75, {width: 'calc(0% -6px)'},{width: 'calc(90% -6px)', ease:Power4.easeOut})
.fromTo(JavaScriptBar, .75, {width: 'calc(0% -6px)'},{width: 'calc(90% -6px)', ease:Power4.easeOut})
.fromTo(reactBar, .75, {width: 'calc(0% -6px)'},{width: 'calc(90% -6px)', ease:Power4.easeOut})

const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
  triggerElement: '.skills',
  triggerHook: 0
})
.setTween(t1)
.addTo(contoller)


const showRequiredCategory = event => {
  const getId = event.id
  const link = document.querySelectorAll('.work-category button')
  for(i=0; i<liks.length; i++){
    if(links[i].hasAttribute('class')){
      links[i].classList.remove('active')
    }
  }

  event.classList.add('active')
  const getCategory = document.querySelector('.category-${getId}')
  const categories = document.querySelectorAll('div[class ^= "category-"]')
  for(i=0; i<categories.length; i++){
    if(categories[i].hasAttribute('class')){
      categories[i].classList.remove('showCategory')
      categories[i].classList.add('hideCategory')
    }
  }


getCategory.classList.remove('hideCategory')
getCategory.classList.add('showCategory')
}
