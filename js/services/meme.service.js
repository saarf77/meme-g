function renderSavedMemes() {
    var savedMems = gSavedMemes
  
    const savedHTML = savedMems.map(mem =>
      `<div class="img-container" onClick="onImageSelect(${mem['url'].id})">
      <img class="gallery-img" src="${mem['url'].url}">
      </div>`
    )
  
    showGallery()
    document.querySelector('.delete-btn').style.display = 'block'
    document.querySelector('.gallery-container').innerHTML = savedHTML.join('')
}
  


function markLine(line) {
  if (!line) return
  const lineWidth = gCtx.measureText(line.txt).width + line.size
  const lineHeight = line.size + 30
  gCtx.strokeStyle = 'yellow'
  gCtx.strokeRect(
    line.pos.x - lineWidth / 2 - 10,
    line.pos.y - lineHeight / 2,
    lineWidth + 20,
    lineHeight
  )
}


function createLine({ txt =  'Enter text...', size = 28, align = 'center', color = 'blue', strokeStyle = 'black', font = 'Impact' , pos = { x: 200, y: 50 } }) {
  return {
    txt,
    size,
    align,
    color,
    strokeStyle,
    font,
    pos,
  }
}