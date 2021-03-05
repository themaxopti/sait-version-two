$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

$('.item-img').hover(
    function(){
        this.animate({
            'background-size':'550px',
            'filter':'blur(1px)'
        },4000)
    }
)




const form = document.querySelectorAll('.form')[0]

form.addEventListener('submit',function(event){
    event.preventDefault()

    const formMustName = document.querySelector('.form-must')
    const formMustPassword = document.querySelector('.form-must-two') 
    const formMustCheckbox = document.querySelector('.form-must-three')
    const formMustRadioBtn =  document.querySelector('.form-must-four')

    const checkbox =  document.querySelector('#check-box')
    const radioBtnReal =  document.querySelector('.radio')

    const name = form.name.value
    const password = form.password.value
    

    let fail = ''
    
    if(name == '') formMustName.innerHTML = 'Придумайте имя'
    if (password == ''){formMustPassword.innerHTML = 'Придумайте пароль'} 
    
    if (!checkbox.checked)formMustCheckbox.innerHTML = 'Потвердите условия'    


   // if(fail)alert(fail)
    
})







const cond = document.querySelector('.condition')
const modal = document.querySelector('.modal')

const arrov = document.querySelector('.modal-arrow-svg')
const arrov2 = document.querySelector('.modal-arrow-svg-two')

const modalContent = document.querySelector('.modal-cont')
const modalContent2 = document.querySelector('.modal-cont-two')


cond.addEventListener('click',()=>{
    modal.style.display = 'flex'
})

arrov.addEventListener('click',()=>{
    modalContent2.style.zIndex = 1007
})

arrov2.addEventListener('click',()=>{
    modalContent.style.zIndex = 4000
})



modal.addEventListener('click',(event)=>{
    if (event.target.className == 'modal') {
        modal.style.display = 'none'
    }
    //modal.style.display = 'none'
})