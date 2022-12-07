const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

//$ creo una variabile legata all'elemento container dell'immagine principale
let imageParentElement = document.querySelector('div.carousel-image');

//$ creo un arrey vuoto dove inserire gli id degli elementi che andrò a creare
let idList = [];

//$ creo un ciclo per creare gli elementi
let imgesPusher = images.map((imageObject, index) => {
   //$ creo l'elemento myItemDiv
   //$ assegno la classe my_carousel-item
   //$ appendo myItemDiv al parent
   //$ setto l'attributo id all'elemento
   //$ pusho l'elemento nell'arrey creato in precedenza
   let myItemDiv = document.createElement(`div`);
   myItemDiv.classList.add('my_carousel-item');
   imageParentElement.append(myItemDiv);
   myItemDiv.setAttribute('id', `image${index}`);
   myItemDiv.setAttribute('activeIndex', `${index}`);
   idList.push(myItemDiv.id);
   
   
   //$ creo l'elemento img
   //$ imposto la sorgente dell'immagine con .setAttribute
   //$ appendo l'elemento creato al myItemDiv creato in precedenza
   let myImgElement = document.createElement(`img`);
   myImgElement.setAttribute('src', `./${imageObject.image}`);
   myItemDiv.append(myImgElement);

})

let buttonPrevious = document.querySelector('div.button.previous');
let buttonNext = document.querySelector('div.button.next');

let visibleImageIndex = 0;

document.getElementsByClassName('my_carousel-item')[visibleImageIndex].classList.add('active');

buttonNext.addEventListener('click', function() {
   // identifico l'indice nell'array dell'immagine attualmente visibile
   document.getElementsByClassName('my_carousel-item')[visibleImageIndex].classList.remove('active');

   if (visibleImageIndex >= 4 ) {
      visibleImageIndex = 0;
   } else {
      visibleImageIndex++;
   }

   document.getElementsByClassName('my_carousel-item')[visibleImageIndex].classList.add('active');
});


buttonPrevious.addEventListener('click', function() {
   // identifico l'indice nell'array dell'immagine attualmente visibile
   document.getElementsByClassName('my_carousel-item')[visibleImageIndex].classList.remove('active');

   if (visibleImageIndex <= 0 ) {
      visibleImageIndex = 4;
   } else {
      visibleImageIndex--;
   }

   document.getElementsByClassName('my_carousel-item')[visibleImageIndex].classList.add('active');
});


/*
   let visibleImage = images.filter((image) => image.visible === true);




let imageParentElement = document.querySelector('div.carousel-image');

let imgesPusher = images.map((image) => {

let myItemDiv = document.createElement(`div`);
myItemDiv.classList.add('my_carousel-item', 'active');
imageParentElement.append(myItemDiv);

})


let myImgElement = document.createElement(`img`);
myImgElement.setAttribute('src', './img/01.webp');
myItemDiv.append(myImgElement);
*/