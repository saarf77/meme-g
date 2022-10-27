'use strict'
const memeNumber = 18
var gCurrImgMeme = null
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gElCanvas
var gElLeft
var gElTop 
var gCtx
var gPos
var gCanvasTop, gCanvasDown, gCanvasMiddle
var gStartPos
var gSavedMemes = []
var gCurrMeme
var gImgsAfterFilter
var isMemePage = false

function onInit() {
 

  gElCanvas = document.querySelector('.edit-meme-canvas')
  var memeBtn = document.querySelector("li[class='saved-meme-page']")
  gElCanvas.addEventListener('click', function(e) {
    getCursorPosition(gElCanvas, e)
}),
memeBtn.addEventListener('mousedown', function(e) {
  isMemePage = true
  onInit()
}),
  gCtx = gElCanvas.getContext('2d')
  initGMeme()
  if(isMemePage)
  {
    document.querySelector('section[class = "edit-container flex"]').style.display = 'none'
    document.querySelector(".gallery-container").style.display = 'compact'
    document.querySelector("input").style.display = 'compact';
    document.querySelector('section[class = "filters-container flex"]').style.display = 'compact';
    renderMemes()
  }
  else if(gCurrImgMeme !== null)
  {
    document.querySelector('section[class = "edit-container flex"]').style.display = 'flex'
    document.querySelector(".gallery-container").style.display = 'none'
    document.querySelector("input").style.display = 'none';
    document.querySelector('section[class = "filters-container flex"]').style.display = 'none';
    renderMeme(gCurrImgMeme)
  }
  else{
    document.querySelector('section[class = "edit-container flex"]').style.display = 'none'
    document.querySelector(".gallery-container").style.display = 'compact'
    document.querySelector("input").style.display = 'compact';
    document.querySelector('section[class = "filters-container flex"]').style.display = 'compact';
    // restartCanvasLocations()
    renderGallery() 
    // var memes = loadFromStorage(STORAGE_KEY)
    // if (memes) gSavedMemes = memes
    // addListeners()
    // resizeCanvas()
  }

}


function renderGallery()
{
  let elContainer = document.querySelector(".gallery-container")
  for (let i = 1; i <= memeNumber; i++) {
    var strName = `img/meme-imgs/${i}.jpg`
    var elCurrImg = document.createElement("img")
    elCurrImg.src = strName
    elCurrImg.id = `meme-imgs/${i}`
    elCurrImg.addEventListener('click', function () {
        gCurrImgMeme = this.id
        onInit()
    });
    elCurrImg.className = "meme-img-select"
    elContainer.appendChild(elCurrImg)

  }
}
function toggleMenu() {
  document.body.classList.toggle('menu-opened')
}

function resizeCanvas() {
  const elContainer = document.querySelector('.edit-meme-canvas')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}


function addListeners() {
  addMouseListeners()
  addTouchListeners()
  window.addEventListener('resize', () => {
    resizeCanvas()
    const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
    createCircle(center)
    renderCanvas()
  })
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
  // Getting the clicked position
  const pos = getEvPos(ev)
  // { x: 15, y : 15 }
  if (!isCircleClicked(pos)) return
  setCircleDrag(true)
  gStartPos = pos
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  const circle = getCircle();
  if (!circle.isDrag) return
  const pos = getEvPos(ev)
  const dx = pos.x - gStartPos.x
  const dy = pos.y - gStartPos.y
  moveCircle(dx, dy)
  gStartPos = pos
  renderCanvas()
}

function onUp() {
  setCircleDrag(false)
  document.body.style.cursor = 'grab'
}


function onReplaceSiteToLinkedin() {
  toggleMenu()
  window.open("https://www.linkedin.com/in/saar-fridman/",
    "_blank")
}

function onReplaceSiteToGithub() {
  window.open("https://github.com/saarf77",
    "_blank")
}
function onAddLine()
{
  addLine(gCurrImgMeme)
}
function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  // console.log("x: " + x + " y: " + y)
  isLineClicked({x:x,y:y})

}


function onDeleteLine() {
  deleteLine(gCurrImgMeme)
}


function onChangeColor(val) {

  onSelectFillColor(val, gCurrImgMeme)
}



function onSetLineText(event)
{
  setMemeText(event.value,gCurrImgMeme)
}


function onMoveText(direction) {
  moveText(direction, gCurrImgMeme)
}

function onChangeFontFamily(val) {
  changeFontFamily(val, gCurrImgMeme)
}

function onChangeFontSize(val) {
  changeFontSize(val, gCurrImgMeme)
}

function onGalleryShow() {
location.reload()
}

function onSaveMeme() {
  saveMemes()
}


function renderMemes()
{
  let elContainer = document.querySelector(".gallery-container")
  var allSaveImg = loadFromStorage(ALL_MEMES)
  if(allSaveImg !== null)
  {
  for(let currImg of allSaveImg)
  {
  
    var elCurrImg = document.createElement("img")
    elCurrImg.src = "data:image/png;base64," + currImg;
    elCurrImg.className = "meme-img-select"
    elContainer.appendChild(elCurrImg)
  }
}
}




