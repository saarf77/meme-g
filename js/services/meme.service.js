let gFilterBy = ''

let gKeywordSearchCountMap = {
  funny: 11,
  cute: 6,
  celebrity: 11,
  animal: 7,
  men: 14,
  kids: 4,
  women: 2,
}
let gImgs = [
  {
    id: 1,
    url: `images/1.jpg`,
    keywords: ['funny', 'celebrity'],
  },
  {
    id: 2,
    url: `images/2.jpg`,
    keywords: ['animal', 'cute'],
  },
  {
    id: 3,
    url: `images/3.jpg`,
    keywords: ['cute', 'animal', 'kids'],
  },
  {
    id: 4,
    url: `images/4.jpg`,
    keywords: ['cat', 'cute', 'animal'],
  },
  {
    id: 5,
    url: `images/5.jpg`,
    keywords: ['kids', 'cute', 'funny'],
  },
  {
    id: 6,
    url: `images/6.jpg`,
    keywords: ['funny', 'men', 'celebrity'],
  },
  {
    id: 7,
    url: `images/7.jpg`,
    keywords: ['funny', 'kids', 'cute'],
  },
  {
    id: 8,
    url: `images/8.jpg`,
    keywords: ['funny', 'men', 'celebrity'],
  },
  {
    id: 9,
    url: `images/9.jpg`,
    keywords: ['funny', 'kids', 'cute'],
  },
  {
    id: 10,
    url: `images/10.jpg`,
    keywords: ['funny', 'men', 'celebrity'],
  },
  {
    id: 11,
    url: `images/11.jpg`,
    keywords: ['men', 'animal'],
  },
  {
    id: 12,
    url: `images/12.jpg`,
    keywords: ['funny', 'men', 'celebrity'],
  },
  {
    id: 13,
    url: `images/13.jpg`,
    keywords: ['men', 'animal'],
  },
  {
    id: 14,
    url: `images/14.jpg`,
    keywords: ['men', 'animal'],
  },
  {
    id: 15,
    url: `images/15.jpg`,
    keywords: ['men', 'celebrity', 'stark'],
  },
  {
    id: 16,
    url: `images/16.jpg`,
    keywords: ['funny', 'men', 'celebrity'],
  },
  {
    id: 17,
    url: `images/17.jpg`,
    keywords: ['men', 'celebrity'],
  },
  {
    id: 18,
    url: `images/18.jpg`,
    keywords: ['funny', 'men'],
  },
  {
    id: 19,
    url: `images/19.jpg`,
    keywords: ['funny', 'women'],
  },
  {
    id: 20,
    url: `images/20.jpg`,
    keywords: ['celebrity', 'women'],
  },
  {
    id: 21,
    url: `images/21.jpg`,
    keywords: ['celebrity'],
  },
  {
    id: 22,
    url: `images/22.jpg`,
    keywords: ['celebrity','men'],
  },
]

    // function renderSavedMemes() {
    //     var savedMems = gSavedMemes
    
    //     const savedHTML = savedMems.map(mem =>
    //       `<div class="img-container" onClick="onImageSelect(${mem['url'].id})">
    //       <img class="gallery-img" src="${mem['url'].url}">
    //       </div>`
    //     )
    
    //     showGallery()
    //     document.querySelector('.delete-btn').style.display = 'block'
    //     document.querySelector('.gallery-container').innerHTML = savedHTML.join('')
    // }
    
    // function markLine(line) {
    //   if (!line) return
    //   const lineWidth = gCtx.measureText(line.txt).width + line.size
    //   const lineHeight = line.size + 20
    //   gCtx.strokeStyle = 'yellow'
    //   gCtx.strokeRect(
    //     line.pos.x - lineWidth / 2 - 10,
    //     line.pos.y - lineHeight / 2,
    //     lineWidth + 20,
    //     lineHeight
    //   )
    // }

    

