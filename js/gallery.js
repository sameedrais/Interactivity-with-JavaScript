window.onload = function() {
    var previewImages = document.getElementsByClassName('preview');
    for(var i = 0; i < previewImages.length; i++) {
        previewImages[i].setAttribute('tabindex', '0');
    }
}

function upDate(previewPic){
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
    console.log("Mouse is on the image:", previewPic.alt);
}

function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    console.log("Mouse outed from image");
}

function active(previewPic){
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
    console.log("Image focused:", previewPic.alt);
}

function normal(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    console.log("Image blurred");
}