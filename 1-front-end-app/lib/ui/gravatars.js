import generateGravatarURL from '../gravatar-url'


const IMAGE_SIZE = 64
const EXTRA_ROWS = 5
const email = new Map()

export function createImages (window, numberOfImages) {
  return Array.apply(null, Array(numberOfImages)).map(() => gravatarImage(window))
}

export function gravatarImage (window) {
  const img = new window.Image()
  img.src = generateGravatarURL(IMAGE_SIZE)[0]

  email.set(img.src, generateGravatarURL()[1])

  img.addEventListener('click', (e) => {
    e.target.classList.toggle('is-highlighted')
  })

  return img
}

export function calculateNumberOfImages (window, root) {
  const currentImages = window.document.querySelectorAll('img').length

  const width = root.offsetWidth + window.scrollX
  const height = window.innerHeight + window.scrollY

  const imagesPerRow = Math.floor(width / IMAGE_SIZE)
  const imageRows = Math.floor(height / IMAGE_SIZE) + EXTRA_ROWS

  return imagesPerRow * imageRows - currentImages
}

export default function (window, root) {
  const imagesToCreate = calculateNumberOfImages(window, root)

  if (imagesToCreate <= 0) {
    return
  }

  createImages(window, imagesToCreate).forEach((image) => {
    root.appendChild(image)
  })

  modal()

}

export function modal() {

  const modalLayer = window.document.getElementById('modal')
  const span = window.document.getElementsByClassName("close")[0]
  let img = window.document.querySelectorAll('img')
  
  span.onclick = () => {
    modalLayer.style.display = 'none'
  }

  window.onclick = () => {
    if (event.target == modalLayer) {
      modalLayer.style.display = 'none'
    }
  }

  img.forEach(img => {
    let captionText = window.document.getElementById('caption')

    img.addEventListener('click', function() {
      modalLayer.style.display = 'block'
      captionText.innerHTML = email.get(this.src)
    })
  })

}
