const images=['img1.jpeg','img2.jpeg','img3.jpeg'];
let currentIndex = 0;
function updateimage() {
    document.getElementById('slider').src=images[currentIndex];
}

function nextimage(){
    currentIndex=(currentIndex+1)%images.length;
    updateimage();
}
function previmage(){
    currentIndex=(currentIndex - 1 + images.length)% images.length;
    updateimage();
}