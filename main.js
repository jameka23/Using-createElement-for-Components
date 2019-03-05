/*
createElement()
JavaScript provides the document.createElement() method which creates a virtual DOM element that doesn't exist in the DOM until you add it.

appendChild()
The document.appendChild() method will take a virtual DOM element you created and attach it as a child element of another one.
*/


// 2. In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
const articleMessages = document.querySelector(".messages") // article tag

// 3. Create five (5) section components, each with a class of message, and with the content of your choosing.
// const msg = ["Hi, Tay", "What's going on tonight?", "We're all rewatching Game of Thrones at my place.", "Sweet! I'll bring some drinks. Ya'll need anything else?", "Nah, we're pretty straight on the food game. THNX."]

const sectComp1 = () => {
    let section = document.createElement("section")
    section.classList.add("message")
    const msg = "Hi, Tay"
    section.textContent = msg
    
    // 4. Using appendChild(), attach each message as a child \
    articleMessages.appendChild(section)
    // console.log('hi', section)

    return section
}

const sectComp2 = () => {
    let section = document.createElement("section")
    section.classList.add("message")
    const msg = "What's going on tonight?"
    section.textContent = msg
    
    // 4. Using appendChild(), attach each message as a child \
    articleMessages.appendChild(section)
    // console.log('hi', section)

    return section
}

const sectComp3 = () => {
    let section = document.createElement("section")
    section.classList.add("message")
    const msg = "We're all rewatching Game of Thrones at my place."
    section.textContent = msg
    
    // 4. Using appendChild(), attach each message as a child \
    articleMessages.appendChild(section)
    // console.log('hi', section)

    return section
}

const sectComp4 = () => {
    let section = document.createElement("section")
    section.classList.add("message")
    const msg = "Sweet! I'll bring some drinks. Ya'll need anything else?"
    section.textContent = msg
    
    // 4. Using appendChild(), attach each message as a child \
    articleMessages.appendChild(section)
    // console.log('hi', section)

    return section
}

const sectComp5 = () => {
    let section = document.createElement("section")
    section.classList.add("message")
    const msg = "Nah, we're pretty straight on the food game. THNX."
    section.textContent = msg
    
    // 4. Using appendChild(), attach each message as a child \
    articleMessages.appendChild(section)
    // console.log('hi', section)

    return section
}
console.log(sectComp1())
console.log(sectComp2())
console.log(sectComp3())
console.log(sectComp4())
console.log(sectComp5())