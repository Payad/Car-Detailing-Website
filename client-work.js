var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

//client work drop-down functionality
const dropList = document.querySelector('.drop-down'); 
const closeBtn = document.querySelector('.close-btn');
// console.log(closeBtn);
const sidebar = document.querySelector('.sidebar');

dropList.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
    // if (!dropList.classList.contains('drop-down-rotate')) {
    dropList.classList.toggle('drop-down');
    dropList.classList.toggle('drop-down-rotate');
    // } else if (dropList.classList.contains('drop-down-rotate')) {
    //     // dropList.classList.toggle('drop-down-rotate');
    //     dropList.style.tranform = 'rotate(180deg)'
    // }
    // dropList.classList.toggle('drop-down');
});

 closeBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
    dropList.classList.toggle('drop-down-rotate');
 });

 /* select every other p element */
 const detail_p = document.querySelectorAll('.service');
// const service_details = detail_p.querySelectorAll('.service-details');
//  detail_p.forEach((p) => {
//     if (p % 2 == 0) {
//         p.style.backgroundColor = 'red';
//     }
//  })

// console.log(service_details)
// service_details.forEach((index, p) => {
//     console.log(index, p);
// })

detail_p.forEach((index, p) => {
    console.log(index, p)
    if (index % 2 == 0) {
        console.log(p);
    }
})