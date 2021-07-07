function fetchThemAll(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(data => renderImgs(data))
}

function renderImgs(dogs){
    console.log(dogs);
    dogs.message.forEach(data=>{

    let div =document.querySelector('#dog-image-container');
    //let li = document.createElement('li');
    let img = document.createElement('img');
    div.append(img)
    img.src = data
    });
}

document.addEventListener('DOMContentLoaded', () =>{
    fetchThemAll();
})