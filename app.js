const shareButton = document.querySelector('#share-image');
const shareBox = document.querySelector('#share-box');

shareButton.addEventListener('click',()=>{
    shareBox.classList.toggle('hidden');
})