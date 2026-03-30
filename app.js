 
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