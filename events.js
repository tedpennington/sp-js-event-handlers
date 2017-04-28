/*
INSTRUCTIONS:

1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"
2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
4. When you type characters into the input field, the output element should mirror the text in the input field.
5. When you click the "Add color" button, the `guinea-pig` element's text color should change to blue.
6. When you click the "Hulkify" button, the `guinea-pig` element's font size should become much larger.
7. When you click the "Capture it" button, the `guinea-pig` element should have a border added to it.
8. When you click the "Rounded" button, the `guinea-pig` element's border should become rounded.
9. The first section's text should be bold.
10. The last section's text should be bold and italicized.
11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.*/





// Doing: 1. When any section is clicked the output target text should be "You clicked on the {text of the section} section"

// Setting output element in DOM
var outputEl =document.getElementById("output-target");

// Get article sections by class name.  These become an HTML collection, which can be treated similarly to an array in js.
var articleSections = document.getElementsByClassName("article-section");
// console.log(articleSections);

// Function to handle the section clicks which takes what's handed to it and changes its innerHTML.
function handleSectionClick(tacoEvent){
    var elementText = tacoEvent.target.innerHTML;
    outputEl.innerHTML = `You clicked on the ${elementText} section`;
}

// Looping through the HTML Collection of section elements, adding event listeners that listen for clicks and running the function above
for (var i = 0; i < articleSections.length; i++) {
    articleSections[i].addEventListener("click", handleSectionClick);
}


// ------------------


// Doing 2. When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

// Get the header id
var headerId = document.getElementById("page-header");
// What to do when mouse is over it:
function handleMouseOverHeader(){
    outputEl.innerHTML = `You moved your mouse over the header`;
};
// Event listener for header
headerId.addEventListener("mouseover", handleMouseOverHeader);


// ------------------


// Doing next part as inline anonymous function: 3. When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

// In one motion, adding event listener to header using ID to get it, and upon mouseout running anonymous function which sets the header's innerHTML to "You left me!"
headerId.addEventListener("mouseout", function(){
    outputEl.innerHTML = `You left me!`;
    console.log("mouse went out");
});


// ------------------


// Writing next step completely in one line (getting element, event listener, and fuction to do when it happens).
// 4. When you type characters into the input field, the output element should mirror the text in the input field.

document.getElementById("keypress-input").addEventListener("keyup",function(event){
    outputEl.innerHTML = event.target.value;
    console.log(event);
})


// ------------------


// 5. When you click the "Add color" button, the `guinea-pig` element's text color should change to blue.

// Get pig element set as var
var guineaPigEl = document.getElementById("guinea-pig");
// get color button element
var addColorBtn = document.getElementById("add-color");

// Change it to blue function
function changeToblue(){
    console.log("change!");
    guineaPigEl.style.color = "blue";
}

// Listen for click on element
addColorBtn.addEventListener("click", changeToblue);


// ------------------


// 6. When you click the "Hulkify" button, the `guinea-pig` element's font size should become much larger.

// get the element set as var
var hulkifyBtn = document.getElementById("make-large");

// function to change it
function hulkifyIt(){
    console.log("making bigger the pig");
    guineaPigEl.style.fontSize = "5em";
}

// Event listener for click
hulkifyBtn.addEventListener("click", hulkifyIt);


// ------------------


// 7. When you click the "Capture it" button, the `guinea-pig` element should have a border added to it.

// getting button element
var CaputureItBtn = document.getElementById("add-border");

// function to add border
function addBorder(){
    console.log("adding border");
    guineaPigEl.style.border = "dashed 10px red";
}

// listen for click
CaputureItBtn.addEventListener("click", addBorder);


// ------------------


// 8. When you click the "Rounded" button, the `guinea-pig` element's border should become rounded.

// getting button element
var roundedBtn = document.getElementById("add-rounding");

// function to round it
function roundTheBorder(){
    console.log("round the border of the pig, man");
    guineaPigEl.style.borderRadius = "15%";
}

// listen for button
roundedBtn.addEventListener("click", roundTheBorder);


// ------------------



// 9. The first section's text should be bold.
// 10. The last section's text should be bold and italicized.

// Directly setting specific elements of the HTML collection to styles specified by referencing them like array elements
articleSections[0].style.fontWeight = "bold";
articleSections[5].style.fontWeight = "bold";
articleSections[5].style.fontStyle = "italic";


// ------------------


// 11. Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

// Getting buttons by tag name (collection), then wrote for loop to set style of each button to block.
var allButtons = document.getElementsByTagName("button");
console.log("allButtons",allButtons);
for (i = 0; i < allButtons.length; i++){
    console.log("I''m looping");
    allButtons[i].style.display = "block";
};



// EXERCISE COMPLETE























