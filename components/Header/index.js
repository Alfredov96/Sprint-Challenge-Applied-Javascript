// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function component(){
    const
    head = document.createElement('div'),  // header class
    SpanOne = document.createElement('span'), // class date
    h1 = document.createElement('h1'), //lambda times
    SpanTwo = document.createElement('span'); //class temp

    head.appendChild(SpanOne);  // begin appending
    head.appendChild(h1);  
    head.appendChild(SpanTwo);


    head.classList.add('header');  // adding class names
    SpanOne.classList.add('date');  
    SpanTwo.classList.add('temp');


function Header() {}
h1.textContent = "Lambda Times";  // add text content
SpanOne.textContent = "SMARCH 28, 2019"
SpanTwo.textContent = "98°";

    return head; 
}