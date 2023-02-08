const content ="그 후로 힘든 나날을 보내오다 지인의 소개로 어떤 한 사람을 만나게 된다.`나를 보더니 아무말 없이 손을 꼭 붙잡고 자신의 선생님을 소개해주겠다.``걱정말라는 얘기를 들었다.``그 후 그 사람의 손에 이끌려 선생님이라는 사람을 만나게 된다.``선생님이라는 분을 만났고 그 분을 처음 본 느낌은 생전 처음 겪어보는 느낌이 들었다.`대체 이게 뭔지 아리송 했다.``그 선생님은 나를 보자마자 이런 상태로 어떻게 버티고 살았냐며`어찌 버티고 살았냐며 불쌍하다 우셨다.` 나는 그 말을 듣자마자 눈물을 뚝뚝 흘렸다.``처음으로 들었다.``너는 미치지 않았다.`그 존재들은 너를 괴롭히려 한 것이 아닌 보호하고 있었던 것이다.``우리네들은 그것을 안다.``그러니 걱정하지말고 내 어떻게든 도와주겠다 라고 하셨다.```다시 한번 나는 눈물을 뚝뚝 흘렸다." 
    
const text = document.getElementById('text');
const button = document.querySelector('.button');

let i = 0;

function typing() {
  
  if( i < content.length) {
  let txt = content.charAt(i);
  text.innerHTML += txt === "`"?"<br/>" : txt; i++;
  }
  
}
setInterval(typing, 35);//35

text.addEventListener('click', function () {
  let page = '../html/story-9.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});