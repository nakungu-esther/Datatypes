 /*let allHeadings = document.getElementsByTagName('h1')
 console.log(allHeadings)
 console.log(allHeadings.length)

 for(let a = 0; a < allHeadings.length;a++){
 console.log(allHeadings[a]);
 }*/
// by class names
 /*let allHeadings = document.getElementsByClassName('Head')
 console.log(allHeadings)
 console.log(allHeadings.length)*/

 /*let firstHeading = document.getElementById('word')
 console.log(firstHeading)*/

/*let firstHeading = document . querySelector('h1')
headings[4].className = 'head'
headings[4].id ='word4'
let secondHeading =  document.querySelector('.head')
let thirdHeadings =  document.querySelector('#word2')
console.log(headings)
console.log(secondHeading)
console.log(thirdHeadings)*/
/*let lists = ``
 let ul = document.querySelector('ul')
 ul.innerHTML = lists

 let allHeadings = document.getElementsByTagName('li')*/

//  let biggestHeading = document.createElement('h1')
 
//  biggestHeading. className = 'title'
//  biggestHeading . style.fontSize ='500px'
//  biggestHeading. textContent = 'this is the biggest title made in javascript'
//  console.log(biggestHeading)

//  let container = document.querySelector('.container')
//  container.appendChild(biggestHeading)



// create the element
// createElement goes hand in hand with append or appendChild. and its better to use it with a container.
let container = document.getElementById("container")
let addButton = document.getElementById("add-product")
let addBranch = document.getElementById("add-branch")
let updateTitle = document.getElementById("update-title")
let title = document.getElementById("title")
let removeButton = document.getElementById("remove-product")


// addEventListener() - inbuilt, helps us to capture user signals / input(click, scroll etc)
addButton.addEventListener("click", function () {
  let newProduct = document.createElement("p");
  newProduct.textContent = "Beans";

  container.appendChild(newProduct);
});

addBranch.addEventListener("click", function () {
    let newBranch = document.createElement("p");
    newBranch.textContent = "Matuga";
    
    newBranch.textContent = "Maganjo";
  
    container.appendChild(newBranch);
  });

// update title
updateTitle.addEventListener("click", function () {
    title.textContent = "Happy Hoe Updated";
    });

// remove product
removeButton.addEventListener("click", function () {
    let product = document.querySelector("#g-nuts")
    if(product) {
        product.remove()
    } else {
        
    }

    });


// get / read the element
// let one = document.getElementById("title");
let subTitleElement = document.getElementsByClassName("sub-title");
let updateButton = document.querySelector("#update");

console.log(document.getElementById("title"));
console.log(subTitleElement);
console.log(updateButton);



// add the element (appendChild to the containe / div) (element.innerHTML or element.textContent)
//textContent - no tags, push inside an existing tag
//innerHtml - create new tags.

// delete the element (removeChild of the container / div)