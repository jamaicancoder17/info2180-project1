/* Add your JavaScript to this file */
var main = function() {
    var buttons = document.querySelectorAll("button");
    console.log(buttons);
    button = buttons[0];
    
    var form = document.forms;
    console.log(form);
    f = form[0];
    f.addEventListener("submit",function(e){
        e.preventDefault();
    });
    
    button.addEventListener("click",function(event){
        console.log("Button clicked");
        var temp = document.querySelector("input[type=email]").value;
        console.log(temp);
        var msg = document.querySelector(".message");
        var regex = /([0-9]|[A-Z]|[a-z]|.|_|"+"|-)+@(|.|_|"+"|-[0-9]|[A-Z]|[a-z])*.com/;
        console.log(regex.test(temp));
        if(regex.test(temp)){
            
            msg.innerHTML = "Thank you! Your email address has been added to our mailing list!";
        }
        else{
            msg.innerHTML = "Please enter a valid email address";
        }
        
    });
}

window.onload = function() {
    console.log("Here");
    
    main();    
}