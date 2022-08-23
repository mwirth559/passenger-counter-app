// document.getElementById("count-el").innerText = 5

// initialize count as 0
// listen for clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el element in the html to reflect the new count after the button is clicked


 let saveEl = document.getElementById("save-el")


 let countEl = document.getElementById("count-el") //Pass in arguments - grab the count-el element and store it in countEl variable


 console.log(countEl)
 let count = 0

 function increment() {
    count += + 1
    countEl.innerText  = count //set countEl's innerText to the incremented count
 }

//  increment()
//  console.log(count)

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
