const content ="3. 나는 미치지 않았어요.```그것을 본 이후 나의 인생은 이상한 방향으로 흘러 가기 시작했다는 생각이 들었다.`나한테만 참 야박하다 생각이 들 정도로 인생이 꼬일대로 꼬이기 시작했다.``내가 뭘 잘 못했나? 나는 아무것도 한 것이 없는데? 라는 생각이 점점 `정말 내 문제인건가? 라는 생각으로 바뀌어 가기 시작했다.``그리고 그 날 이후 무려 20년을 여러 귀신 장난에 놀아났고 `할 말이 정말 많지만 그 중에 정말 섬뜩 했을 때가 있었다.``이제 머리가 커진만큼 세상을 알만한 나이라고 생각했었던 무지했던 시기였다.`나는 일도 사람도 그 어떤 무엇도 전부 부정 당하던 시기였다.``나는 무엇을 잘못한걸까. 인생이 참 덧없다 생각했을때.`그 순간 무엇인가가 내 몸을 쳤다.``“뭐지?”``나는 집에서 가만히 앉아 생각하고 있었을뿐인데?`그러나 나는 이런일을 겪는 것이 몇번이고 있었기 때문에 눈치를 챘다.``“아..또 시작이구나..”``하지만 그 날은 너무 화가 많이 났다.``“날 좀 내버려둬!”``나는 소리를 쳤다.`그것이 화근이였을까."
    
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
  let page = '../html/story-4.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});