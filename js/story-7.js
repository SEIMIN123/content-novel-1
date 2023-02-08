const content ="4. 그 길로 들어서다.```난 여지껏 보이면 안되는 존재들을 봐왔음에도 믿지 않았다.`내가 미쳐서 그런거다. 내가 심신이 힘들어서 그런거다.`이건 다 환상이다 라고.``안보인다. 안보인다. 잘못 보는거다. 이건 다 환상이다.``그런식으로 부정을 해왔다. 그러다가 어느 순간 정말 보이지 않게 되었다.``어느 곳을 가도 어디를 봐도 보이지 않았다.`좋아해야 할 순간에 나는 감정을 잃어버린 사람처럼 그저 멍하니 왜?라는 물음이 생겨났고 ``이렇게 계속 안보인다고 생각을 해야 없어지는거였나?`그러면 여지까지 겪어왔던 것들은 뭐지?라는 생각이 들었다. `정말 엄청난 허무함이 밀려왔었다.``진즉에 이렇게 할 걸. 다행으로 생각하자.`이제부터라도 다른사람들처럼 평범하게 지내면 된다. 라고.``하지만 그건 착각이였고``이제는 몸으로 더 느끼기 시작했고 산 사람들의 마음을 알게 되었고``저사람이 무슨 생각을 하는지 무슨일이 있었는지 알기 시작했다.`내가 원해서 알게 되는 것이 아닌 강제로 머리에 박아넣는 느낌이였다.``더 한것이 왔구나 싶었다." 
    
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
  let page = '../html/story-8.html';
  location.href = page;
});

button.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});