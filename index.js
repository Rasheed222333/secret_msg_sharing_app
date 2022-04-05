const { hash } = window.location ;
const msg = atob(hash.replace('#',''));

if(msg)
{
    document.querySelector('#sec-msg').classList.add('hide');
    document.querySelector('#link').classList.add('hide');
    document.querySelector('#msg-link').classList.remove('hide');

    document.querySelector('h2').innerHTML= msg;
}


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#msg-input');
    const encrypt=btoa(input.value);

    const input1 = document.querySelector('#link-input');
    input1.value = `${window.location}#${encrypt}`;
    input1.select();
});

document.querySelector('#copy').addEventListener('click', event => {

    document.execCommand("copy");
    alert("copied Successfully")
});