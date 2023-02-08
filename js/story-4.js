const content ="공포영화에서만 볼 법한 것이 정말 선명하게 내 눈에 비춰졌다.``아무것도 없는 단칸방의 불을 껐을때 사람의 형체의 실루엣이 내 눈앞에 선명하게 있었고 `다시 불을 켜니 아무것도 없었다.```나는 이상한 느낌이 들었다.`이런 경우는 처음이였기에 어리둥절했다.```다시 불을 끄니 그 실루엣은 바닥에서 양반다리를 하고 앉아 있었고 ```순간 두려워지는 나를 알 수 있었다.`이내 용기를 가지고 마주앉아 누구냐고 물었지만 대답이 없었다.`할 말이 없다면 내 집에서 나가달라고 했지만 아무런 미동도 없이 그 자리에 가만히 앉아 있었고```평범한 사람들이라면 겪어보지 못한 미지의 공포감에 밖으로 뛰쳐나갔어도 이상하지 않았을 상황에` 나는 그저 멍하니 있을 수 밖에 없었다.```그러나 이내 그 실루엣은 점점 나에게 다가와 한마디를 건넸고```그 한마디는 당시 나에게 닥쳐있던 현실을 날려버릴 정도로 무서운 말이였다."
    
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
  let page = '../html/story-5.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});