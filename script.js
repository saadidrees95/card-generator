function generate() {
    let text = document.getElementById('name').value;
    let email = document.getElementById('email').value
    let date = document.getElementById('date').value
    let location = document.getElementById('location').value;
    let textarea = document.getElementById('textarea').value;
    const imageFile = document.getElementById('image').files[0];

    document.getElementById('cardName').innerHTML = text
    document.getElementById('cardEmail').innerHTML = email
    document.getElementById('CardDate').innerHTML = date
    document.getElementById('locationtag').innerHTML = location
    document.getElementById('CardText').innerHTML = textarea
    // document.getElementById('cardImage').innerHTML = imageFile;


    const imgElement = document.getElementById('cardImage');
    imgElement.src = URL.createObjectURL(imageFile);
    imgElement.onload = function() {
        URL.revokeObjectURL(imgElement.src);
    }
    let card = document.getElementById('card');
    card.style.display = 'block';
}





// slider

const slide = document.querySelectorAll('.slide')
var count = 0;
slide.forEach((slide, index)=>{
    slide.style.left =`${index * 100}%`
})


function slideImage (){
    slide.forEach((slide)=>{
        slide.style.transform = `translateX(-${count * 100}%)`
    })
}

function goPrev(){
    count = (count + 1) % slide.length; 
    slideImage ()
}
function goNext(){
    count = (count - 1 + slide.length) % slide.length; 
    slideImage ()
}