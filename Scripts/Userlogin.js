$(document).ready(function(){
  $("#submit").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();

    if(username=="" || password==""){
      alert("All feilds required");
    }else{
      $.ajax(
        {
            url:"https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/MPLogin.php",
            data:{
              login:1,
              username:username,
              password:password
            },
            success:function(response){
              if(response=="!exists"){
                console.log("I dont exists");
              }
              else{
                console.log("I do");
              }
            },
            dataType: 'text'

        }
      );

    }

  });
});
