
const content = "정말 없다고 생각해?"
const text = document.querySelector('.text');

let i = 0;

function sleep(delay){
const start = new Date().getTime();
while (new Date().getTime() < start + delay);
}

function typing() {
  
  text.textContent += content[i++]
  if( i > content.length){
    text.textContent = ""
    i = 0;
    sleep(2000);
  }
  
}
setInterval(typing, 355);

const root = document.getElementById('root');
    root.addEventListener('click', function(){
      let page = '../html/noise-2.html';
      location.href = page;
    });
