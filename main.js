const subscribe = document.getElementById('subscribe-input');
const submitBtn = document.querySelector('.submit-btn');
const subscribeMsg = document.querySelector('span.subscribe-msg');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!regEx.test(subscribe.value)) {
    subscribeMsg.style.visibility = 'visible';
    subscribeMsg.classList.add('error-check');
    subscribe.classList.add('error-check');
    subscribeMsg.innerText = 'That email is invalid.'
    
  } else {
    subscribe.value = '';
    subscribeMsg.style.visibility = 'visible';
    subscribeMsg.classList.add('success');
    subscribe.classList.add('success');
    subscribeMsg.innerText = 'Your email has been added.'
  }
})

subscribe.addEventListener('keydown', (e) => {
  subscribe.classList.remove('error-check');
  subscribe.classList.remove('success');
  subscribeMsg.classList.remove('error-check');
  subscribeMsg.classList.remove('success');
  subscribeMsg.style.visibility = 'hidden';
})
