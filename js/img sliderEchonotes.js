/* JavaScript for Image Slider */
const images = [
    "assets/project-img/EchoNotes/ecnote1.PNG",
    "assets/project-img/EchoNotes/ecnote2.PNG",
    "assets/project-img/EchoNotes/ecnote3.PNG",
];
let index = 0;
function changeImage() {
    document.getElementById("slider").src = images[index];
    index = (index + 1) % images.length;
}
setInterval(changeImage, 1000); // เปลี่ยนรูปทุก 3 วินาที