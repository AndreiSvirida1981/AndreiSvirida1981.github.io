var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/картинка-2.jpg') {
      myImage.setAttribute ('src','images/картинка-1.jpg');
    } else {
      myImage.setAttribute ('src','images/картинка-2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Ты хто?');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Гусь тебе не товарищ, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Гусь тебе не товарищ, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

