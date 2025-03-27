/* JavaScript for Image Slider */
const images = [
    "assets/project-img/ColorJourney/1.png",
    "assets/project-img/ColorJourney/2.png",
    "assets/project-img/ColorJourney/3.png",
    "assets/project-img/ColorJourney/4.png"
];
let index = 0;
function changeImage() {
    document.getElementById("slider").src = images[index];
    index = (index + 1) % images.length;
}
setInterval(changeImage, 1000); // เปลี่ยนรูปทุก 3 วินาที