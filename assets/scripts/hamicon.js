function hamIcon(x) {


      x.classList.toggle("change");
      let y = document.getElementsByClassName('main-menu-items')[0].style.display;

      document.getElementsByClassName('main-menu-items')[0].style.display = 'inline-block';

      
      if(y == 'inline-block'){
        document.getElementsByClassName('main-menu-items')[0].style.display = '';
      }
      else if(y == ''){
        document.getElementsByClassName('main-menu-items')[0].style.display = 'inline-block';
      }
    
    
    }

  






