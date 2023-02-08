const content ="2. 보이다.```어릴적 앨범을 보면 유독 한가지 사진에 눈길이 가는것이 있다.``어린 나는 상복을 입고 발개진 눈으로 `카메라를 응시하는 사진이 하나 있다.```그런데 그 사진을 보면 그렇게 위화감이 들 수가 없다.`그 아이의 눈을 지그시 보고 있으면 내가 아닌 것 같았다.```이때 당시의 기억은 어렴풋이 있다.```어른들에게 여쭤봤지만 대답을 해주지 않았다.`그로인해 나는 항상 의구심이 들고 항상 궁금 했었다."

const text = document.getElementById('text');
const text1= document.getElementById('text1');
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
  let page = '../html/story-3.html';
  location.href = page;
});

text1.addEventListener('click', function () {
  let page = '../html/story-3.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});