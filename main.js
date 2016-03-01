var submitButton = document.getElementById('submit_text');
var textIn = document.getElementById('text_in').value;

// Chat Bot - User replies with something based on what is being input

submitButton.onclick = function () {
    var textIn = document.getElementById('text_in').value;
    var message = document.getElementById('user_message');

    if (textIn === '') {
        message.innerHTML = 'Theres No Text There!!!'
    } else if (textIn === 'Bradley') {
        message.innerHTML = 'Nice Name Bro!!'
    } else if (textIn === 'Zach') {
        message.innerHTML = 'Zach is not as cool a name'
    }

    textIn = '';

}
