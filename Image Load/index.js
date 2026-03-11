function getImagePromise (url) {
    return new Promise ((resolve,reject) => {
            setTimeout(() => {
                const img = new Image()
                img.src = url 
                img.alt = 'scenic image'
                img.addEventListener('load' , () => resolve(img))
                img,addEventListener('load', () => reject (new Error (`Failed to load imgae: ${url}`)))
            }, 500);
    })
}


const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
    ]


async function preLoadImages(imageUrlsarr) {
    const imgContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('uplaod-container')
}

try {

} catch (err) {
    console.log(err)
}
