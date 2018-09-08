function showDetails(e) {
  e.target.classList.add('showinfo')
}

const basketball = document.querySelectorAll('headshot')
for(let i = 0; i < basketball.length; i++) {
  basketball[i].addEventListener('mouseover', showDetails)
}
