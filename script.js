// PROJECT 2 VERTICAL SLIDER
// source: Build 5 Projects With HTML, CSS & JavaScript 15:30
// https://www.youtube.com/watch?v=JkeyKeK3V24

// two arrows one goes up one down and it/displayed shifts image and bring in different texts from <p> elemnts

// bringing in elements

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
// get the length of the slides- how many slides do we have?- selecting all divs in slide-right
const slidesLength = slideRight.querySelectorAll('div').length


console.log(slidesLength) // outputs all background images

// variable for which index is in view
let activeSlideIndex = 0

//negative since the slides will go up, expression syntax
/* slide length subbtract by 1 because the length is going to be 4, however the index is 0 base
so the index will be 0, 1, 2, 3 even though it's 4 total it starts at 0, so we want the last index(3 the forth slide) with -1
multplied with 100, because it takes up a 100% or 100vh heights*/
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh` // images moved to the right position.

// add functionality to flip the sides up and down. one up(right) and one down(left)
//brings correct slide into place

// for a click on buttons, when click , run changeSlide(), passed in with argument 'up'
//? what dioes the open paranthesis mean after 'click'?
// both calling the same function but have passed in different arguments
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))


// says; change slide equals, take in direction-parameter =>
/* get the skider height,= slider container+ property(clientHeight) which
   which will give us just that(?)*/

const changeSlide = (direction) => {

    const sliderHeight = sliderContainer.clientHeight
    console.log(sliderHeight) // press bottom up gives whatever the viewport is atm.
    //if directionis equal to up, take the active index active slide index and increment
    // taht one with one so ++,
    if (direction === 'up') {
        activeSlideIndex++
        /*if we hit the end, if the active slide index is greater than the last index
         in the slide which we get with slide length , subtracted with -1, if true than set
         the active slide index to 0 to back to the beginning.*/
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        //if the direction is in the beginning
        if (activeSlideIndex < 0) {
            //set to the last index
            activeSlideIndex = slidesLength - 1
        }
    }
    /*slide right, set with style and transform on y-axis, pass in negative because we want
    the right side to go up. Then with the expression syntax, the active slide index to
    be multiplied whatever the slider height is;(sliderheight is variable in vh). add pixels */

    // need to add transform and translate it on the y axis, move up and down
    // need to move both slide left and slide right. negative on right ,since goes up, positive on left since it 
    // goes the other way
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

    //smoother transitions
}