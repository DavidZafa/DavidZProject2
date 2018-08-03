function showDetails(e) {
  console.log(e.target)
  e.target.classList.add('showdetails')
}

const basketball = document.querySelectorAll('.headshots')
for(let i = 0; i < basketball.length; i++) {
  basketball[i].addEventListener('mouseover', showDetails)
}
