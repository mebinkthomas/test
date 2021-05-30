const images = document.querySelectorAll('.view');
images.forEach((image,index)=>{
  image.addEventListener('click', ()=>{
    const item = image.parentElement.parentElement;
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML=`<span class="close">&times;</span>
                  <img class="modal-content">`;
    item.appendChild(modal);

    const modalImg = modal.querySelector('.modal-content');
    modal.style.display = "block";
    modalImg.src = image.parentElement.previousElementSibling.src;

    const span = modal.querySelector('.close');
    span.addEventListener('click', ()=>{
    modal.style.display = "none";
    console.log("123456")
    });
  
  });

});
