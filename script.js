const insert = document.getElementById('insert')

window.addEventListener('keydown' ,(e) =>{
    insert.innerHTML = `
    <div class="key">
     ${event.key === ' ' ? 'space' : e.key}
    <small>event.key</small>
   </div>

   <div class="key">
    ${event.keyCode}
   <small>event.keycode</small>
   </div>

   <div class="key">
   ${event.code}
   <small>event.code</small>
   </div>
    
    `
})