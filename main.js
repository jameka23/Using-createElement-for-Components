console.log('hey, you')
/*
createElement()
JavaScript provides the document.createElement() method which creates a virtual DOM element that doesn't exist in the DOM until you add it.

appendChild()
The document.appendChild() method will take a virtual DOM element you created and attach it as a child element of another one.
*/


// Create an unordered list element
const list = document.createElement('ul')

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)

console.log(list)

// 2. In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
const messages = document.querySelector(".messages") // article tag

// 3. Create five (5) section components, each with a class of message, and with the content of your choosing.
const messageComp1 = () => {
    const text = {

    }
}
