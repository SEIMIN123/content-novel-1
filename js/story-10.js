const content ="그 후로 나는 굿을 하며 기도를 하며. 산으로. 바다로 다니며. 사람들을 도와주고 또한 여러곳을 거쳤다.`그리고 느낀 것이 인생사 누구하나 쉬운 사람이 없고, 누구하나 가슴 아픈 사연 없는 사람이 없으며.``인간은 고고하고 어리석으며 그만큼 가치가 있다는 것을 알게 된다.`나조차도 같은 인간인 것을 깨닳아야 하며. 같으면서도 다르다는 것을 인정 해야했다.`그럼에도 쉽지 않은 것을 알게 되기도 한다.``가끔은 나도 평범한 삶을 살았다면 어땠을까?라는 생각을 하지만 `이제는 그저 웃고 넘기는 그런 사람이 되었다.``무당이라는 말은 사실 직책이라고 한다.`지금으로 치면 청와대를 넘나들던 사람이라고 한다.`참 아이러니 할 수 없다.``아직 갈 길이 멀다. 언젠가는 알게 되지 않을까.`왜 이렇게 사람들을 도와주며 살아가야 하는 삶이였는지.``왜 나였는지.``하지만 그것은 먼 훗날의 이야기이기 때문에 지금만을 살아가려 한다." 
    
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
  let page = '../html/story-11.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});