$(document).ready(function(){

var list=[];
$('#todolist').click(function()
{
$('.text-center').hide();
$('h2').html("Select your Choice in the checkbox");

$.getJSON( "https://jsonplaceholder.typicode.com/todos", function( data ) {
    
    $("#t01").css("visibility", "visible");
    var items = [];
    $.each( data, function( key, val)  {
        
        items += "<tr><td>"+val.id + "</td><td>"+val.userId + "</td><td>"+ val.title+ "</td><td>";
        
        if (val.completed == true) {
       
          items +="<input type=checkbox name=checkbox disabled=disabled checked=disabled></td></tr>"
         } 
        else{
          items +="<input type=checkbox name=checkbox1 id=check></td></tr>"
        }
        
        $("#tabcontent").html(items);  
      
     

    });

    $("#submit").css("visibility", "visible");

    


        myFunction = function(){ 
        var val=0;
        $('#check:checked').each(function(i){
          val++;
          
        });
       
        return (val);
    }

    
        $('td:nth-child(4)').click(function(value){
            var val=myFunction();
            

            var pro=new Promise(function(resolve,reject)

        {
        if(val==5)
        {
            resolve(alert("Congrats!!!"+ val + " tasks have been successfully completed."));

        }
        
        else
        {
            reject(e);
             
        }
      });
      pro.catch(function(e){
        if(e>5){
        location.reload();
      }
      })
    });
    
}); 

});

$("#submit").click(function(){
alert("Thanks for submitting");
location.reload();
})
$('#logout').click(function(){
window.location.replace("index.html");
});


});