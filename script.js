
function validate(main)
{
    
let user =document.getElementById("username");
let pass=document.getElementById("passwordinput");
     
     
     if(user.value!=="admin")
     {
         alert("Enter valid username.")
         
         return false;
     }
    
     if(pass.value!== "12345" )
     {
        alert("Invalid password");
        
        return false;
     }
     
     else{

        return true;
     }

main();
}
function main(){
   window.location.replace("main.html");
}