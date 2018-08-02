function showDetails (e) {
  console.log(e.target)
  e.target.classList.add('showdetails')
}

const basketball = document.body.querySelectorAll('.myteam')
console.log(basketball)
for (let i = 0; i < basketball.length; i++) {
  basketball[i].addEventListener('click', showDetails)
}
