let closeBtn = Array.from(document.querySelectorAll('.close-btn span')).slice(0, 4)
  let bigImg = Array.from(document.querySelectorAll('.img-text'))
  let headBtns = Array.from(document.querySelectorAll('.navImg')).slice(0, 4)
  headBtns.forEach(x => x.addEventListener('click', show)) 
  function show(e){
    let i = headBtns.indexOf(e.target)
    if(i !== -1){
      bigImg[i].style.display = 'block'
      onBlur()
    }
  }
  closeBtn.forEach(x => x.addEventListener('click', hide)) 
  function hide(e){
    let i = closeBtn.indexOf(e.target)
    if(i !== -1){
      bigImg[i].style.display = 'none'
      offBlur()
    }
  }

  let closeBtnInfo = Array.from(document.querySelectorAll('.close-btn1')).slice(0, 4)
  let menuSpans = Array.from(document.querySelectorAll('.menu span')).slice(0, 4)
  let infoSpans = Array.from(document.querySelectorAll('.info div')).slice(0, 4)
  menuSpans.forEach(x => x.addEventListener('click', openInfo)) 
  function openInfo(e){
    let i = menuSpans.indexOf(e.target)
    if(i !== -1){
      infoSpans[i].style.display = 'block'
      closeBtnInfo[i].style.display = 'block'
      onBlur()
    }
  }

  closeBtnInfo.forEach(x => x.addEventListener('click', hideInfo)) 
  function hideInfo(e){
    let i = closeBtnInfo.indexOf(e.target)
    if(i !== -1){
    infoSpans[i].style.display = 'none'
     closeBtnInfo[i].style.display = 'none'
      offBlur()
    }
  }

  function onBlur(){
    document.querySelector('.expl').style.display = 'none'
    document.querySelector('h3').classList.add('blurred')
    document.querySelector('.bg-images').classList.add('blurred')
    document.querySelector('.menu').classList.add('blurred')
    document.querySelector('.playNav').classList.add('blurred')
  }

  function offBlur(){
    document.querySelector('.expl').style.display = 'block'
    document.querySelector('h3').classList.remove('blurred')
    document.querySelector('.bg-images').classList.remove('blurred')
      document.querySelector('.menu').classList.remove('blurred')
      document.querySelector('.playNav').classList.remove('blurred')
  }
