var submitButton = document.getElementById('submit_text');
var textIn = document.getElementById('text_in').value;

// Chat Bot - Bot replies with something based on what is being input - If statements

submitButton.onclick = function () {
    var textIn = document.getElementById('text_in').value.toLowerCase();
    var message = document.getElementById('user_message');

    if (textIn === '') {
        message.innerHTML = 'Theres No Text There!!!'
    } else if (textIn === 'bradley') {
        message.innerHTML = 'Nice Name Bro!!'
    } else if (textIn === 'zach') {
        message.innerHTML = 'Zach is not as cool a name as Bradley. I guess it\'s okay.'
    } else if (textIn === 'pizza') {
        message.innerHTML = 'I love PIZZA!!!'
    } else if (textIn === 'burgers') {
        message.innerHTML = 'I also love BURGERS!!!'
    } else if (textIn.toLowerCase() === 'kale') {
        message.innerHTML = 'Get out...'
    } else if (textIn === 'hello') {
        message.innerHTML = '...Is it me you\'re looking for?';
    } else if (textIn === 'how are you?') {
        message.innerHTML = 'Awesome. So So Awesome';
    } else if (textIn.charAt(0) === 'b') {
        message.innerHTML = 'Sup B-Dawg';
    } else {
        message.innerHTML = 'Whatever BRO!!!';
    }

}


// For loop exercise - How to display something using a for loop
