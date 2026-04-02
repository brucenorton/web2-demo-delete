//console.log('gallery.js loaded');

// create an array / list of all the thumbnails
const thumbnails = document.querySelectorAll("#gallery figure");

// select the <dialog> element
const modal = document.querySelector('dialog');

//loop through the array of thumbnails, and create 'click' event listeners for each
thumbnails.forEach(thumb => {
  // console.log(thumb);
  thumb.addEventListener('click', loadModal);
})

function loadModal(event){

  //console.log(event.target.closest('figure').innerHTML);

  modal.querySelector('figure').innerHTML = event.target.closest('figure').innerHTML;

  let modalImg = event.target.closest('figure').querySelector('img').getAttribute('src');
  
  console.log(modalImg.substring(modalImg.lastIndexOf('/')));
  modal.querySelector('img').src = "images" + modalImg.substring(modalImg.lastIndexOf('/'))

  modal.showModal();

}


