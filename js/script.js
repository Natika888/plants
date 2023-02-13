const headerBurger = document.querySelector('.header__burger');
const menuList = document.querySelector('.menu__list');
console.log(menuList);
const serviceBtns = document.querySelectorAll('.service-btns__item.btn');
const serviceCard = document.querySelectorAll('.service__card');
const pricesAccourdionBtns = document.querySelectorAll('.prices__type');
const pricesAccourdionArray = document.querySelectorAll('.prices__accourdion');
// этих двоих переделать
const contactsSelectBtns = document.querySelectorAll('.contacts__select');
let selectList = document.querySelector('.select');

const selectItems = document.querySelectorAll('.select__item');


if (headerBurger) {    
    headerBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        menuList.classList.toggle('active');
        headerBurger.classList.toggle('active');        
    })
}

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
})

serviceBtns.forEach(btn => {
    btn.addEventListener('click', onServiceBtnClick);
})

pricesAccourdionBtns.forEach(btn => {    
    btn.addEventListener('click', onPricesBtnClick);    
})

contactsSelectBtns.forEach(btn => {
    btn.addEventListener('click', onSelectBtnsClick); 
})

selectItems.forEach(item => {
    item.addEventListener('click', onSelectItemClick)
})

function onMenuLinkClick(e) {
    
    if (headerBurger.classList.contains('active')) {
        document.body.classList.remove('lock');
        menuList.classList.remove('active');
        headerBurger.classList.remove('active');
    }
    window.scrollTo( {
        behavior: 'smooth'
    });
}

function onPricesBtnClick(e) {    
    let typeName = e.target.getAttribute('data-PriceType');
    pricesAccourdionArray.forEach( el => {
        if (el.getAttribute('data-PriceType') !== typeName) {
            el.classList.remove('shown');
            el.closest('.prices__type').classList.remove('active_type');
        } else {
            el.classList.toggle('shown');
            el.closest('.prices__type').classList.toggle('active_type');
        }
    })
    
}

function onServiceBtnClick(e) {
    e.target.classList.toggle('pressed');

    if (e.target.classList.contains('garden')) {
        serviceCard.forEach(card => {
            card.classList.remove('unfocus');
            if (!card.classList.contains('garden')) {
                card.classList.add('unfocus');
            }
        })
    } else if (e.target.classList.contains('lawn')) {
        serviceCard.forEach(card => {
            card.classList.remove('unfocus');
            if (!card.classList.contains('lawn')) {
                card.classList.add('unfocus');
            }
        })
    } else {
        serviceCard.forEach(card => {
            card.classList.remove('unfocus');
            if (!card.classList.contains('planting')) {
                card.classList.add('unfocus');
            }
        })
    }
}

function onSelectBtnsClick(e) {    
    selectList.classList.toggle('select__active');
    const cities = document.querySelectorAll('.selected');    
    cities.forEach(city => {
        city.classList.remove('selected__active');
    })
}

function onSelectItemClick(e) {
    selectList.classList.remove('select__active');
    e.target.getAttribute('data-city');
    const cities = document.querySelectorAll('.selected');    
    cities.forEach(city => {
        if (city.getAttribute('data-city') == e.target.getAttribute('data-city')) {
            city.classList.add('selected__active');
        } else {city.classList.remove('selected__active');}
    })
}


// const WrapperElements = document.querySelectorAll('[data-Wrapper]');
// WrapperElements.forEach((Wrapper, ind) => {
//   let Limit = parseInt(Wrapper.getAttribute('data-WrapperLimit'));
//   const ItemsList = Wrapper.querySelectorAll('[data-toggleClass]');
//   const ButtonsList = Wrapper.querySelectorAll('[data-toggleBtnClass]');
//   let Selected = 0;
//   ButtonsList.forEach( (Btn,index) => {
//     let ToggleBtnClass = Btn.getAttribute('data-ToggleBtnClass');
//     console.log(ToggleBtnClass);
//     const ClassBtb = Btn.getAttribute('class');
//     console.log(ClassBtb);
//     console.log(ClassBtb.indexOf(ToggleBtnClass));
//     if( ClassBtb.indexOf(ToggleBtnClass) !== -1 ){
//       Selected++;
//       console.log(Selected);
//     }
//     Btn.addEventListener('click',(event) => {
//       let ElementAcivated = null;
//       const ElementClass = Btn.getAttribute('class');
//       console.log(ElementClass);
//       let ToggleBtnClass = Btn.getAttribute('data-ToggleBtnClass');
//       console.log(ToggleBtnClass);
//       let ToggleElement = Btn.getAttribute('data-ToggleElement');      
//       console.log(ToggleElement);
//       if( ElementClass.indexOf(ToggleBtnClass) !== -1 ){
//         Btn.classList.remove(ToggleBtnClass);
//         Selected--;
//         ElementAcivated = false;
//       }
//       if( ElementClass.indexOf(ToggleBtnClass) === -1 ){
//         if(Selected < Limit){
//           Btn.classList.add(ToggleBtnClass);
//           Selected++;
//           ElementAcivated = true;
//         }
//       }
//       if(ElementAcivated === true){
//         console.log(Wrapper.querySelectorAll(ToggleElement));
//         Wrapper.querySelectorAll(ToggleElement).forEach((el,ind) => {          


//           const ElementtoggleClass = el.getAttribute("data-toggleClass");
//           el.classList.add(ElementtoggleClass);
//         });
//       }
//       if(ElementAcivated === false){
//         Wrapper.querySelectorAll(ToggleElement).forEach((el,ind) => {
//           const ElementtoggleClass = el.getAttribute("data-toggleClass");
//           el.classList.remove(ElementtoggleClass);



          
//         });
//       }
//       return event.preventDefault();
//     });
//   })

// })
