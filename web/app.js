var name1 = document.getElementById('name1');
var username1 = document.getElementById('username1');
var phoneno1 = document.getElementById('phoneno1');
var password1 = document.getElementById('password1');
var shopid1 = document.getElementById('shopid1');


function store() {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('username1', username1.value);
    localStorage.setItem('phoneno1', phoneno1.value);
    localStorage.setItem('password1', password1.value);
    localStorage.setItem('shopid1', shopid1.value);
}
function check() {

    var storedusername1 = localStorage.getItem('username1');
    var storedpassword1 = localStorage.getItem('password1');

    var userName = document.getElementById('loginusername');
    var userPw = document.getElementById('loginpassword');


    if(userName.value == storedusername1 && userPw.value == storedpassword1) {
        alert('You are loged in.');
        window.open('menu.html');
    }
    else{
        alert('Please check your Username and Password');
    }
}
