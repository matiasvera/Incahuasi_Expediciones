const workItems = document.querySelectorAll('.work .item');
        const workItemsCount = workItems.length;
        let currentIndex = 0;
        const closeButton = document.querySelector('#close-button');
        const prevButton = document.querySelector('#prev-button');
        const nextButton = document.querySelector('#next-button');
        const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
        const menuMobileItems = document.querySelector('#menu-mobile-items');

        openCloseButton.addEventListener('click', e =>{
            menuMobileItems.classList.toggle('menu-mobile-closed')
        })

        workItems.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                currentIndex = parseInt(item.getAttribute('data-id'));
                const contentArr = document.querySelectorAll('#details-container .item');
                
                document.querySelectorAll('#details-container .item').forEach(item => { item.classList.add('item-hide');})
                document.querySelectorAll('#details-container .item')[currentIndex].classList.toggle('item-hide');
                document.querySelector('#screen').style['animation-name'] = 'fade-in';
                document.querySelector('body').style['overflow'] = 'hidden';
                setTimeout(() => {
                    document.querySelector('#details-container').style.display = 'block';
                }, 1000);
                setTimeout(() => {
                    document.querySelector('#screen').style = '';
                }, 2000);
            })
        });


        closeButton.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('#screen').style['animation-name'] = 'fade-in';
            document.querySelector('body').style['overflow'] = 'auto';
            setTimeout(() => {
                document.querySelector('#details-container').style.display = 'none';
            }, 1000);
            setTimeout(() => {
                document.querySelector('#screen').style = '';
            }, 2000);
        });

        prevButton.addEventListener('click', e =>{
            if(currentIndex - 1 < 0){
                return;
            }     
            currentIndex--;
            loadGalleryItem(currentIndex);
        });
        nextButton.addEventListener('click', e =>{
            if(currentIndex + 1 == workItemsCount){
                return;
            }     
            currentIndex++;
            loadGalleryItem(currentIndex);
        });

        function loadGalleryItem(index){
            document.querySelectorAll('#details-container .item').forEach(item => { item.classList.add('item-hide');})
            document.querySelectorAll('#details-container .item')[index].classList.toggle('item-hide');     
        }

const grande = document.querySelector(".grande")
const punto = document.querySelectorAll(".punto")

punto.forEach( (cadaPunto, i) => {
    punto[i].addEventListener("click",()=>{

        let posicion = i
        let operacion = posicion * -25

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) =>{
            punto[i].classList.remove("activo")
        })
        punto[i].classList.add("activo")
    })
})

const grande1 = document.querySelector(".grande1")
const punto1 = document.querySelectorAll(".punto1")

punto1.forEach( (cadaPunto, i) => {
    punto1[i].addEventListener("click",()=>{

        let posicion = i
        let operacion = posicion * -25

        grande1.style.transform = `translateX(${operacion}%)`

        punto1.forEach((cadaPunto, i) =>{
            punto1[i].classList.remove("activo")
        })
        punto1[i].classList.add("activo")
    })
})

const grande2 = document.querySelector(".grande2")
const punto2 = document.querySelectorAll(".punto2")

punto2.forEach( (cadaPunto, i) => {
    punto2[i].addEventListener("click",()=>{

        let posicion = i
        let operacion = posicion * -25

        grande2.style.transform = `translateX(${operacion}%)`

        punto2.forEach((cadaPunto, i) =>{
            punto2[i].classList.remove("activo")
        })
        punto2[i].classList.add("activo")
    })
})

const grande3 = document.querySelector(".grande3")
const punto3 = document.querySelectorAll(".punto3")

punto3.forEach( (cadaPunto, i) => {
    punto3[i].addEventListener("click",()=>{

        let posicion = i
        let operacion = posicion * -25

        grande3.style.transform = `translateX(${operacion}%)`

        punto3.forEach((cadaPunto, i) =>{
            punto3[i].classList.remove("activo")
        })
        punto3[i].classList.add("activo")
    })
})

const grande4 = document.querySelector(".grande4")
const punto4 = document.querySelectorAll(".punto4")

punto4.forEach( (cadaPunto, i) => {
    punto4[i].addEventListener("click",()=>{

        let posicion = i
        let operacion = posicion * -25

        grande4.style.transform = `translateX(${operacion}%)`

        punto4.forEach((cadaPunto, i) =>{
            punto4[i].classList.remove("activo")
        })
        punto4[i].classList.add("activo")
    })
})

const grande5 = document.querySelector(".grande5")
const punto5 = document.querySelectorAll(".punto5")

punto5.forEach( (cadaPunto, i) => {
    punto5[i].addEventListener("click",()=>{

        let posicion = i
        let operacion = posicion * -25

        grande5.style.transform = `translateX(${operacion}%)`

        punto5.forEach((cadaPunto, i) =>{
            punto5[i].classList.remove("activo")
        })
        punto5[i].classList.add("activo")
    })
})