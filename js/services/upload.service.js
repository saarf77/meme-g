'use strict'
var gId = 18

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-image.jpg'
}

// function onImgInput(ev) {
//     loadImageFromInput(ev)
//     // hideGallery()
// }

// function loadImageFromInput(ev) {
//     document.querySelector('.edit-meme-canvas').innerHTML = ''
//     var reader = new FileReader()
//     reader.onload = (event) => {
//         var img = new Image()
//         img.src = event.target.result
//         img = {id: gId, url: img.src , keywords: ['funny'], myMeme: true}
//         gImgs.push(img)
//         gId++
//         renderGallery()
//     }
//     reader.readAsDataURL(ev.target.files[0])
// }

function setMyUploadImg(imgId) {
    gMeme = createMeme({ selectedImgId: imgId })
    renderMyMeme()
}

function renderMyMeme() {
    gCurrMeme = getgMeme()
    const img = new Image()
    img.src = gCurrMeme['url'].url
  
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  
      gCurrMeme.lines.forEach((line) => {
        renderLine(line)
      })
    }
  }
  

  function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)

  }

  function renderImg(img) {
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  }
  
  // CallBack func will run on success load of the img
  function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = function (event) {
      let img = new Image() // Create a new html img element
      img.src = event.target.result // Set the img src to the img file we read
      // Run the callBack func, To render the img on the canvas
      img.onload = onImageReady.bind(null, img)
      // Can also do it this way:
      // img.onload = () => onImageReady(img)
    }
    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
  }



  const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://google.com'
  }
  
  const btn = document.querySelector('button');
  const resultPara = document.querySelector('.result');
  
  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'MDN shared successfully'
    } catch (err) {
      resultPara.textContent = `Error: ${err}`
    }
  });