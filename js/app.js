document.addEventListener('DOMContentLoaded', function () {

  function end2() {
    document.querySelector('#wheel2').classList.add('end2');
    console.log(document.querySelector('#wheel2'))
  }
  
  setTimeout(end2, 3600);
  
  
  function end3() {
    document.querySelector('#wheel3').classList.add('end3');
  }
  
  setTimeout(end3, 6400);
  
  
  function end4() {
    document.querySelector('#wheel4').classList.add('end4');
  }
  
  setTimeout(end4, 9600);
  
  
  function end5() {
    document.querySelector('#wheel5').classList.add('end5');
  }
  
  setTimeout(end5, 12800);  

})