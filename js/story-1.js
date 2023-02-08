const content = "1. 태어나다.```나는 그분들만 안다면 아시는 참으로 얄궂은 날에`어느 한 산부인과에서 태어났다.`들은 바로는 어머니라는 사람도` 나도 참 고생하면서 태어났다고 한다.``그래서 그런것일까.``어릴때 고생하면 말년에 잘된다는 얘기를 `그리 썩 좋아하지 않는다.``어릴 적 기억을 떠올려 보려 해도 `도무지 기억이 나질 않는다.``해맑았던 나의 모습은 온데간데 없고`어릴적 앨범을 지긋이 쳐다봐도 저 때의 나는`전혀 생각이 나질 않는다.``기억에 새겨진 시기는 7살부터이다.`그 전은 아무리 생각해도 기억이 나질 않는다.``애초부터 존재하지 않았던 듯이.``"

const text = document.getElementById('text');
const text1 = document.getElementById('text1');
const button = document.querySelector('.button');

let i = 0;

function typing() {

  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt === "`" ? "<br/>" : txt;
    i++;
  }

}
setInterval(typing, 35);//35

text.addEventListener('click', function () {
  let page = '../html/story-2.html';
  location.href = page;
});
text1.addEventListener('click', function () {
  let page = '../html/story-2.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});