const content ="세상은 아직 살만하다." 
    
    const text = document.getElementById('text');
    
    let i = 0;
    
    function typing() {
      
      if( i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt === "`"?"<br/>" : txt; i++;
      }
    }
    setInterval(typing, 500);


text.addEventListener('click', function () {
  let page = 'https://seimin123.github.io/VER-1/';
  location.href = page;
});