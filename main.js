//btn
const btn = document.querySelector('.btn')
//close-icon
const closeIcon = document.querySelector('.close-icon')
//trailer-container
const trailerContainer = document.querySelector('.trailer-container')
//video
const video = document.querySelector('video')


btn.addEventListener('click', () =>{
    trailerContainer.classList.toggle('active')
})

closeIcon.addEventListener('click', () => {
    trailerContainer.classList.add("active")
    video.pause()
    video.currentTime = 0
})
