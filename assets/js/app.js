function validateForm() {
  console.log('success prevent default submit')

  document.getElementById('name_error').style.display = 'none'
  document.getElementById('second_name_error').style.display = 'none'
  document.getElementById('email_error').style.display = 'none'
  document.getElementById('email_error2').style.display = 'none'
  document.getElementById('passwd_error').style.display = 'none'
  document.getElementById('gender_error').style.display = 'none'
  document.getElementById('passwd1').style.border = "1px solid rgb(35, 35, 35)";
  document.getElementById('passwd2').style.border = "1px solid rgb(35, 35, 35)";
  
  
      let name = document.forms['myForm']['name'].value
      let second_name = document.forms['myForm']['second_name'].value
      let email = document.forms['myForm']['email'].value
      let passwd1 = document.forms['myForm']['passwd1'].value
      let passwd2 = document.forms['myForm']['passwd2'].value
      let gender = document.forms['myForm']['gender'].value
      console.log(name)
      console.log(second_name)
      console.log(email)
      console.log(gender)
      
      let request = new XMLHttpRequest
      request.open('POST', './assets/server.php')
      request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
      let data = {
          name: name
      }
      request.send(JSON.stringify(data))
      request.onreadystatechange = function () {
          if (request.readyState === 4)
              if (request.status === 200) {
                  console.log(request.responseText)
              }
      }
      
      if (!name) {
         document.getElementById('name_error').style.display = 'block'
         document.getElementById('name').style.border = "2px solid rgb(146, 55, 55)"; 
      }

      if (name) {
        document.getElementById('name').style.border = "2px solid rgb(35, 35, 35)"; 
      }

      if (!second_name) {
        document.getElementById('second_name_error').style.display = 'block'
        document.getElementById('second_name').style.border = "2px solid rgb(146, 55, 55)"; 
      }

      if (second_name) {
          document.getElementById('second_name').style.border = "2px solid rgb(35, 35, 35)"; 
      } 

      if (!email) {
        document.getElementById('email_error').style.display = 'block'
        document.getElementById('email').style.border = "2px solid rgb(146, 55, 55)";
      }

      if (email !== ""){
        var reg= /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
        if (reg.test(email) == false) {
          document.getElementById('email_error2').style.display = 'block'
          document.getElementById('email').style.border = "2px solid rgb(146, 55, 55)"; 
        }
      }

      if (email !== ""){
        var reg= /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
        if (reg.test(email) == true) {
          document.getElementById('email').style.border = "2px solid rgb(35, 35, 35)"; 
        }
      }
      
      
      if (passwd1 != passwd2 && (passwd1 != '' || passwd1 != 'underfiend')) {
          alert('Пароли не совпадают')
          document.getElementById('passwd1').style.border = "2px solid rgb(146, 55, 55)";
          document.getElementById('passwd2').style.border = "2px solid rgb(146, 55, 55)";
      }
      if (passwd1 == passwd2 && (passwd1 == '' || passwd1 == 'underfiend')){
        document.getElementById('passwd_error').style.display = 'block'
        document.getElementById('passwd1').style.border = "2px solid rgb(146, 55, 55)";
        document.getElementById('passwd2').style.border = "2px solid rgb(146, 55, 55)";
      }



      if(!gender){
        document.getElementById('gender_error').style.display = 'block'
      }
      if(gender){
        document.getElementById('gender_error').style.display = 'none'
      }

      return false;
}


