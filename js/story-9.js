const content ="5. 신의 제자가 되다.```나는 자연스레 그 길로 들어서게 되었다.``기대감과 두려움이 섞인 복잡한 감정이 밀려 들어왔다.`그렇게 떨고 있던 나에게 어디서 들려오는지 모르는 목소리가 들려왔다.```“아가.너는 혼자가 아니다.무서워마라.이끌어주마.걱정하지마라.” 라고.```그 목소리를 듣고 놀랐던 나는 여지까지 수없이 당해왔던 그런 느낌보다 포근하고 따뜻한 느낌을 받았다.`그리고 거짓말 같이 몸의 떨림은 멈추었고 모든 것을 다 헤쳐나갈 수 있을 것 같은 기분이 들었다.```나는 이제 괜찮아 질 것 같은 기분이 들었다.`나는 이제 안전하다는 느낌이 들었다." 
    
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
  let page = '../html/story-10.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});