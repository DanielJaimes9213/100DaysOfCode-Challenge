// Close the section

const closeBtn = document.querySelector('.icon-tabler-x');
const mainContainer = document.querySelector('.main-container');

closeBtn.addEventListener('click', () =>{
  mainContainer.style.transform = "scale(0)";
});


//Add checkmark when collection is clicked

const collections = [ ... document.querySelectorAll('.collection')];

collections.forEach( collection => {
  collection.addEventListener('click', (e) =>{

    [... document.querySelectorAll('.check')].forEach(check => check.remove());

    const checkmark = document.createElement('div');
    checkmark.setAttribute("class","check");
    checkmark.innerHTML = ` <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  stroke-width="2.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>`;

    collection.appendChild(checkmark);
  })
});

//Remove checkmarks when it's clicked outside of the collection item

document.body.addEventListener('click', (e) => {
  if(!e.target.closest('.collection')){
    [... document.querySelectorAll('.check')].forEach(check => check.remove());
  }
});
