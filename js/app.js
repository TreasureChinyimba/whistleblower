const dropDown = document.querySelector('.drop');
const fraud = document.getElementById('fraud')



fraud.addEventListener('mouseover', ()=>{
    dropDown.style= 'visibility: visible;';
    
})

dropDown.addEventListener('mouseover', ()=>{
    dropDown.style= 'visibility: visible;';
    
})

dropDown.addEventListener('mouseleave', ()=>{
    dropDown.style= 'visibility: hidden;';
    
})

fraud.addEventListener('mouseleave', ()=>{
    dropDown.style= 'visibility: hidden;';
    
})
