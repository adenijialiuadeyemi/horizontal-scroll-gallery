let scrollContainer = document.querySelector('.gallery')
let backBtn = document.querySelector('.back')
let frontBtn = document.querySelector('.front')

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault()
  scrollContainer.style.scrollBehavior = 'auto';
  scrollContainer.scrollLeft += e.deltaY
})

backBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft += 900;
  scrollContainer.style.scrollBehavior = "smooth"
})

frontBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft -= 900;
  scrollContainer.style.scrollBehavior = "smooth"
})
