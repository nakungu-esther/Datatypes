// let userName=document.getElementById("userName").value;
// let passWord=document.getElementById("passWord").value;
// let loginButton = document.getElementById("button")

// loginButton.addEventListener("submit",function(event){
//     event.preventDefault()  //preventing the default form submission
//     let userName=document.getElementById("userName").value;
//     let passWord=document.getElementById("passWord").value;  

//form validation
//form submission
//redirection
//regular expressions
//event object


//submission

  document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault() ;
    clearForm();
    // let form = document.getElementById("form2");
    // let formData = new FormData(form);
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    console.log("name:", name);
    console.log("email:", email);
    console.log("password:",password);
});
function clearForm(){
    document.getElementById("form2").reset();
 
    

}
