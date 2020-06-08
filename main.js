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
        
        items += "<tr><td>"+val.id + "</td><td>"+val.userId + "</td><td>"+ val.title + "</td><td> <input type=checkbox name=checkbox></td></tr>";
       var tab= $("#tabcontent").html(items);  
    });

    $("#submit").css("visibility", "visible");

    
    $('td').click( function(){
        myFunction = function(){ 
        var val=0;
        $(':checkbox:checked').each(function(i){
          val++;
          
        });
       
        return (val);
    }
});
    
        $('#submit').click(function(value){
            var val=0;
             val=myFunction();
            

            var pro=new Promise(function(resolve,reject)

        {
        if(val>=5)
        {
            resolve(alert("Congrats!!!"+ val + " tasks have been successfully completed."));

        }
        else
        {
            reject(e);
        }
      });
      pro.catch(function(e){
        alert("Try to complete at least 5 tasks !!!")
      })
    });
    
}); 

});

$('#logout').click(function(){
window.location.replace("index.html");
});


});