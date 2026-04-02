//console.log('gallery.js is loaded');

const thumbnails = document.querySelectorAll('figure');
// console.info(thumbnails[1]);

const modal = document.querySelector('dialog');
//console.log(modal);

thumbnails.forEach(thumb => {
  //console.warn(thumb);
  thumb.addEventListener('click', showModal);
})

function showModal(event){
  //console.log(event.target.closest('figure'));
  modal.querySelector('figure').innerHTML = event.target.closest('figure').innerHTML;
  modal.showModal();
}