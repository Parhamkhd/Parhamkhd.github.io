function hamIcon(x) {
    x.classList.toggle("change");
    let y = document.getElementsByClassName('main-menu-items')[0].style.display;
    if(y == ''){
    document.getElementsByClassName('main-menu-items')[0].style.display = 'block';
    }
    else if(y == 'block'){
      document.getElementsByClassName('main-menu-items')[0].style.display = 'none';
    }
    else if(y== 'none'){
      document.getElementsByClassName('main-menu-items')[0].style.display = 'block';
    }
  }