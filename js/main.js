let button__no = document.querySelector('.no'),
    button__yes = document.querySelector('.yes'),
    close = document.querySelector('.close'),
    body = document.querySelector('body'),
    form = document.querySelector('form');

let increment = 0;

button__no.addEventListener('mouseover', () => {

    if (increment == 0) {
        increment = 1;
        button__no.style.transform = 'translate(100px, 100px)'
    } else if (increment == 1) {
        increment = 2;
        button__no.style.transform = 'translate(-220px, -120px)'
    } else if (increment == 2) {
        increment = 3;
        button__no.style.transform = 'translate(-100px, 90px)'
    } else if (increment == 3) {
        increment = 4
        button__no.style.transform = 'translate(20px, -20px)'
    } else if (increment == 4) {
        increment = 5;
        button__no.style.transform = 'translate(70px, -450px)'
    } else if (increment == 5) {
        increment = 6;
        button__no.style.transform = 'translate(620px, -50px)'
    } else if (increment == 6) {
        increment = 7;
        button__no.style.transform = 'translate(300px, 200px)'
    } else if (increment == 7) {
        increment = 8;
        button__no.style.transform = 'translate(-130px, 0px)'
    } else if (increment == 8) {
        increment = 0;
        button__no.style.transform = 'translate(60px, 0px)'
    }
})


button__yes.addEventListener('click', () => {
    document.querySelector('.modalBlock').classList.add('is-active');
    body.style = 'overflow: hidden';
});

close.addEventListener('click', () => {
    document.querySelector('.modalBlock').classList.remove('is-active');
    body.style = 'overflow: hidden';
});

let obj = {
    access_token: '5586141812:AAHMK3sCs82UdI_EH8XFklTYNygC_6la_4E',
    chatId: '-798605599',
    text: 'Она сказала да!',
}

function otpravka(token, chatid, text) {
    let z = $.ajax({
        type: "POST",
        url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatid,
        data: "parse_mode=HTML&text=" + encodeURIComponent(text),
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    otpravka(obj.access_token, obj.chatId, obj.text);
    increment = 0;
    button__no.style.transform = 'translate(0px, 0px)';
});




