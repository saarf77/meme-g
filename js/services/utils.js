'use strict'

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeId(length = 4) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var txt = ''
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}


function getRandomFont() {
  const index = getRandomIntInclusive(0, 2)
  var fonts = ['Arial', 'Impact', 'David']

  return fonts[index]
}



function getRandomStr() {
  var index = getRandomIntInclusive(0, 14)
  var stringsList = [
    'Are you kidding me?',
    `Let's talk tomorrow`,
    'What the hell?!',
    'Im out',
    'Yes, please',
    'I did it!',
    'please tell me more',
    'what did you do?!',
    'Im not sure about that',
    'That is awesome',
    'All this yours, enjoy',
    'HAHAHA',
    'Im tireddd',
    'Get over it now',
    'I wonnn',
  ]

  return stringsList[index]
}


function renderLine(line) {
  gCtx.beginPath()
  gCtx.textAlign = line.align
  gCtx.lineWidth = 1
  gCtx.font = `${line.size}px ${line.font}` 
  gCtx.fillStyle = line.color
  gCtx.fillText(line.txt, line.pos.x, line.pos.y)
  gCtx.strokeStyle = line.strokeStyle
  gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
  gCtx.closePath()
}

// main controller
function resizeCanvas() {
  const elContainer = document.querySelector('.edit-meme-canvas')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}


var gImgs = [
  { id: 0, url: 'img/meme-imgs/1.jpg', keywords: ['men', 'funny', 'president'], myMeme: false },
  { id: 1, url: 'img/meme-imgs/2.jpg', keywords: ['animal', 'cute', 'dog'], myMeme: false },
  { id: 2, url: 'img/meme-imgs/3.jpg', keywords: ['cute', 'animal', 'baby', 'dog'], myMeme: false },
  { id: 3, url: 'img/meme-imgs/4.jpg', keywords: ['animal', 'cute', 'cat'], myMeme: false },
  { id: 4, url: 'img/meme-imgs/5.jpg', keywords: ['baby', 'funny'], myMeme: false },
  { id: 5, url: 'img/meme-imgs/6.jpg', keywords: ['funny', 'men'], myMeme: false },
  { id: 6, url: 'img/meme-imgs/7.jpg', keywords: ['funny', 'cute', 'baby'], myMeme: false },
  { id: 7, url: 'img/meme-imgs/8.jpg', keywords: ['funny', 'men', 'actor'], myMeme: false },
  { id: 8, url: 'img/meme-imgs/9.jpg', keywords: ['cute', 'baby'], myMeme: false },
  { id: 9, url: 'img/meme-imgs/10.jpg', keywords: ['funny', 'men', 'president'], myMeme: false },
  { id: 10, url: 'img/meme-imgs/11.jpg', keywords: ['men', 'catroon'], myMeme: false },
  { id: 11, url: 'img/meme-imgs/12.jpg', keywords: ['men'], myMeme: false },
  { id: 12, url: 'img/meme-imgs/13.jpg', keywords: ['actor'], myMeme: false },
  { id: 13, url: 'img/meme-imgs/14.jpg', keywords: ['animal', 'dog', 'funny'], myMeme: false },
  { id: 14, url: 'img/meme-imgs/15.jpg', keywords: ['cartoon'], myMeme: false },
  { id: 15, url: 'img/meme-imgs/16.jpg', keywords: ['actor'], myMeme: false },
  { id: 16, url: 'img/meme-imgs/17.jpg', keywords: ['presidnt', 'men'], myMeme: false },
  { id: 17, url: 'img/meme-imgs/18.jpg', keywords: ['funny', 'cartoon'], myMeme: false },
]