const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const displayedImage = document.getElementById('displayed-img');

const images = (function() {
    const imageFiles = [];
    const addImage = (image) => {
        imageFiles.push(image);
    }
    const removeImage = (image) => {
        const index =imageFiles.indexOf(image);
       imageFiles.splice(index, 1);
    }

    const displayImage = () => {
        displayedImage.src = imageFiles[currentIndex];
    }

    let currentIndex = 0;

    const nextImage = () => {
        adjust(1);
    }
    
    const lastImage = () => {
        adjust(-1);
    }

    const adjust = (adjustment) => {
        const newIndex = currentIndex + adjustment;
        const checkIndex = () => {
            if (newIndex < 0) {
                return (imageFiles.length - 1)
            } else if (newIndex === imageFiles.length) {
                return 0
            } else {
                return newIndex
            }
        }
        currentIndex = checkIndex();
        displayImage();
    }

    return {
        addImage,
        removeImage,
        nextImage,
        lastImage,
    }
})();


//      Samples     \\
let sampleImages = [
    'bear.jpg',
    'mountain.jpg',
    'pixar.jpeg',
    'spongebob.jpg',
    'tropical.jpg'
]
sampleImages.map(image => images.addImage('static/images/' + image));


//      Event Listeners     \\
const toggle = () => {

}

nextBtn.addEventListener('click', function() {
    images.nextImage();
})
backBtn.addEventListener('click', function() {
    images.lastImage();
}) 


setInterval(function() {
    images.nextImage();
}, 5000);
