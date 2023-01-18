console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1")
node1.textContent = "I used the getElementById(`node1`) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");
node2[0].textContent = "I used the getElementByClassName(`node2`) method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3Tags = document.getElementsByTagName("h3");
for (let ele of h3Tags) {
    ele.textContent = "I used the getElementByTagName(`h3`) method to access all of these";
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let myNewParagraph = document.createElement("p");
myNewParagraph.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let ex2Parent = document.querySelector("#parent");
ex2Parent.appendChild(myNewParagraph);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let link = document.createElement("a");
link.textContent = "I am a <a> tag";
link.href = "https://facebook.com";

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
ex2Parent.insertBefore(link, myNewParagraph);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3 = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");

let newChildNode = document.createElement("p");
newChildNode.textContent = "New Child Node";

exercise3.replaceChild(newChildNode, oldChild);
// TODO: Remove the "New Child Node"
setTimeout(()=>{
    exercise3.removeChild(newChildNode);
}, 3000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
let ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    // TODO: Append the new list items to the unordered list element
    ul.append(li);
});


// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelector("#container").append(ul);
/*----------- Exercise #5: DOM EVENTS --------------*/
// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(){
    const modalDiv = document.createElement("div");
    const modalCard = document.createElement("div");
    //Append to DOM and style somehow
    modalCard.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    
    modalDiv.id = "modal";
    modalCard.classList.add("modal-card");
    
    modalDiv.appendChild(modalCard);
    document.querySelector(".exercise5").appendChild(modalDiv);

    //create close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "\327";
    closeButton.style.fontSize = "2rem";

    modalCard.appendChild(closeButton);
    closeButton.addEventListener("click", () =>{
        modalDiv.remove();
    });
    modalDiv.addEventListener("click", (event) =>{
        if (event.target == modalDiv){
            modalDiv.remove();
        }
        
    });
}
//Adding event listener

const displayModalButton = document.querySelector("#btn");
//time to add event listener

displayModalButton.addEventListener("click", show);
