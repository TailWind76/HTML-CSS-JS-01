



function openFood(evt, foodName) {
    
    let i, tabcontent, tablinks;
  
   
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
   
    document.getElementById(foodName).style.display = "block";
    evt.currentTarget.className += " active";
  }
 




  function ShowMenu(){
    document.querySelector('header').classList.toggle("activated")
  }

  

  function ShowMenuReserv() {

    document.querySelector('.ReservNavigation').classList.toggle("activated")
    


  }








const animatedElements = document.querySelectorAll('.animated');

const options = {
  threshold: 0.05
};

const observer = new IntersectionObserver(
  function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, options);

animatedElements.forEach(element => {
  observer.observe(element);
});







function OpenSide() {
  document.querySelector(".SideMenu").classList.toggle('MenuOpen')
}




function CloseSide() {
  document.querySelector(".SideMenu").classList.toggle('MenuOpen')
}




