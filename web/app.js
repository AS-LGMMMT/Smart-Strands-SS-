
const API_URL = 'http://localhost:5000/api';
const API_URL2 = 'http://localhost:3100/api';

$.get(`${API_URL2}/user`)
  .then(response => {
    response.forEach(user => {
      $('#app tbody').append(`
      <tr>
        <td>${user.name2}</td>
        <td>${user.phoneno2}</td>
        <td>${user.email2}</td>
        <td>${user.service}</td>
      </tr>`
      );
    });
})

$('#submit').on('click', () => {
  const name2 = $('#name2').val();
  const phoneno2 = $('#phoneno2').val();
  const email2 = $('#email2').val();
  const service = $('#service').val();

  const body = {
    name2,
    phoneno2,
    email2,
    service
  };
  
  if (name2 =="" || email2 ==""|| phoneno2 == "" || service =="")
  {
    alert ("Please fill all the details")
  }
  else{
    $.post(`${API_URL2}/user`, body)
  .then(response => {
    location.href = '/menu';
  })
  }

});

$('#store').on('click', () => {
  const name1 = $('#name1').val();
  const username1 = $('#username1').val();
  const phoneno1 = $('#phoneno1').val();
  const password1 = $('#password1').val();
  const shopid = $('#shopid').val();

  const body = {
    name1,
    username1,
    phoneno1,
    password1,
    shopid
  };

  var a=0;
  $.get(`${API_URL}/users`).then(
    response => {
      response.forEach(users => {
        if(name1 =="" || username1 ==""|| phoneno1 == "" || password1 =="" )
        {
          a=2;
          alert("Please fill all the details");
        }
        if (users.username1 == username1 && a==0) {
          a=1;
          alert('username already exists');
          location.href = '/signup';
        }
        
      })
      if(a==0)
        {
          $.post(`${API_URL}/user`, body)
          .then(response => {
          location.href = '/';
          })
          .catch(error => {
          console.error(`Error: ${error}`);
          });
        }
    })
});

function check() {
  const username = $('#loginusername').val();
  const password = $('#loginpassword').val();
  var a=0;
  $.get(`${API_URL}/users`).then(
    response => {
      response.forEach(users => {
        if (users.username1 == username && users.password1 == password && users.shopid == null) {
          a=1;
          location.href = '/menu';
        }
        if (users.username1 == username && users.password1 == password && users.shopid != null) {
          a=1;
          location.href = '/menu2';
        }
      })
      if(a== 0)
      {
        alert('Please check your Username and Password');
      }
    })
  }
