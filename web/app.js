const { restart } = require("nodemon"); 
const API_URL = 'http://localhost:5000/api';
$.get(`${API_URL}/user`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(`Error: ${error}`);
  });
$.get(`${API_URL}/user`)
  .then(response => {
    response.forEach(user => {
      $('#users tbody').append(`
      <tr>
        <td>${user.name1}</td>
        <td>${user.username1}</td>
        <td>${user.phoneno1}</td>
        <td>${user.password1}</td>
      </tr>`
      );
    });
  })

  .catch(error => {
    console.error(`Error: ${error}`);
  });

$('#store').on('click', () => {
  const name1 = $('#name1').val();
  const username1 = $('#username1').val();
  const phoneno1 = $('#phoneno1').val();
  const password1 = $('#password1').val();

  const body = {
    name1,
    username1,
    phoneno1,
    password1
  };

  $.post(`${API_URL}/user`, body)
    .then(response => {
      location.href = '/menu';
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
});
// app.get("check"), async (req, res) => {
//   try {
//     const username = req.body.loginusername;
//     const password = req.body.loginpassword;

//     const a = await database.findOne({ username1: username })

//     if (a.password === password1) {
//       //res.status(201).render("menu");
//       alert('You are loged in.');
//       //window.open('menu.html');
//     }
//     else {
//       alert("invalid");
//       //alert('Please check your Username and Password');
//     }

//   } catch (error) {
//     res.status(400).send("invalid")

//   }
// }


// $('#check').on('click', () => {
//   alert("Hello");
//   try {
//     const username = $('#loginusername').val();
//     const password = $('#loginpassword').val();
//     const body = {
//       username,
//       password
//     };

//     const a = database.database.findOne({ username1: username })

//     alert(a);
//     if (a.password === password1 || a == username1) {
//       // res.status(201).render("menu");
//       alert('You are loged in.');
//       //window.open('menu.html');
//     }
//     else {
//       // res.send("invalid credentials");
//       alert('Please check your Username and Password');
//     }

//   } catch (error) {
//     res.status(400).send("invalid")
//   }
// });

function check() {
    const username = $('#loginusername').val();
    const password = $('#loginpassword').val();
    const body = {
      username,
      password
    };
    //window.open('menu.html');

    const a = database.findOne({ username1: username.val })

    if (a.password === password1 ) {
      // res.status(201).render("menu");
      alert('You are loged in.');
      //window.open('menu.html');
    }
    else {
      // res.send("invalid credentials");
      alert('Please check your Username and Password');
    }

    $.post(`${API_URL}/user`, body)
    .then(response => {
      location.href = '/menu';
    })
};
