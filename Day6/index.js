//close the locations section

const exitBtn = document.querySelector('.icon-tabler-x');

exitBtn.addEventListener('click', () => {
  document.querySelector('.location-container').style.display = 'none';
})

//select a location
const locations = [... document.querySelectorAll('.location')];

locations.forEach(l =>{
  l.addEventListener('click', () =>{
    locations.forEach(lo =>{
      lo.classList.remove('selected');
    })
    l.classList.add('selected');
  })
})