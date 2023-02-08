const content ="그 말을 듣자마자 닫혀있던 모든 오감에 소름이 돋으면서 달려나갔다.`나는 패닉에 빠져 달리고 또 달렸다.``어디로 가는지도 모르고 사람들을 밀치며 달리고 또 달렸다.``“가자”``그 한마디가 너무 무서웠다.`여태껏 겪어봤던 것들 중 가장 두려웠던 순간이었다.``그것은 뭔가가 다른 존재였다.``그게 무엇인지는 몰라도 확실히 다른 존재였다.``그리고 나는 정신없이 달리던 와중 `어마어마하게 큰 나무앞에 다달았고 멍하니 서 있었다.``나는 내 모습에 무서움과 허탈함을 동시에 느꼈다.``그리곤 한없이 울었다.울고 또 울었다. 왜 이런일만 겪는 건지.`그것들의 장난 인건지. 아니면 내가 정말로 미친건지.``서럽고 서러워서 누구에게도 말하지 못하고 `그저 혼자 감내해야 한다는게 너무 힘들었고 다 포기하고 싶었다.``그렇게 또 한번 무너져 내렸다."

    
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
  let page = '../html/story-7.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});