let images = [
    "./images/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg",
    "./images/hayley-kim-design-eot-ka5dM7Q-unsplash.jpg",
    "./images/john-fornander-TAZoUmDqzXk-unsplash.jpg",
    "./images/sushil-ghimire-5UbIqV58CW8-unsplash.jpg"
]

let displayTag = document.querySelector(".display");
let nextButton = document.querySelector("#next");
let previousButton = document.querySelector("#prev");
let imageTag = document.querySelector("img");
let originalImage = imageTag.src;

let count = -1;




const nextSlider = () => {
    // console.log("next",count);
    // if(count === images.length){
    //     imageTag.src = originalImage;
    //     count = 0;
    //     return;
    // }
    
    // imageTag.src = images[count];
    // count +=1;
    
    count +=1;
    if(count > images.length-1){
        imageTag.src = originalImage;
        count = -1;
        return;
    }
    imageTag.src = images[count];
}

const previousSlider = () => {
    count -=1;
    if(count < 0){
        imageTag.src = originalImage;
        count = images.length;
        return;
    
    }
    
    imageTag.src = images[count];
    console.log(count)
    

}


nextButton.addEventListener("click", nextSlider);
previousButton.addEventListener("click",previousSlider);
   


