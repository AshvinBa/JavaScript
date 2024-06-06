const slides = document.querySelectorAll(".slide");

var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.top= `${index * 100}%`
    }
)

const slideImage = () =>
    {
        slides.forEach(
            (slide) => {
                slide.style.transform = `translateY(-${counter * 100}%)`
            }
        )
    }

const goNext = () =>{
    counter++;
    if(counter > 3)
    {
        goPrev();
    }
    else
    {
        slideImage();
    }
} 

const goPrev = () =>{
    counter--;
    if(counter<0)
    {
        goNext();
    }
    else
    {
        slideImage();
    }
}