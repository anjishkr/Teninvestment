// Image Scrolling
window.addEventListener('scroll', function () {
    const image = document.getElementById('parallaxImage-2');
    const scrollY = window.scrollY;
    const translateY = scrollY * -0.6;
    image.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
});

const navbar_resp = document.getElementById('navbar-resp');
menu_toggle.addEventListener('click', () => {
    navbar_resp.style.display = navbar_resp.style.display === 'none' ? 'flex' : 'none';
})
const navbar_resps = document.getElementById('navbar-resp');
menu_toggle_cross.addEventListener('click', () => {
    navbar_resps.style.display = navbar_resps.style.display === 'none' ? 'flex' : 'none';
})

// Closing the navbar
function navigate() {
    navbar_resp.style.display = 'none';
}


// Form 
// const form = document.getElementById('form-data');
// const submitMsg = document.getElementById('submit-popup');

// function formSubmit(event) {
//     event.preventDefault();
//     form.reset();
// }

// function handleSubmit() {
//     let isValid = true;
//     const requiredFields = form.querySelectorAll('[required]');

//     requiredFields.forEach((field) => {
//         if (field.value.trim() === '') {
//             field.style.border = '1px solid red';
//             isValid = false;
//         } else {
//             field.style.border = '';
//         }
//     });
//     if (isValid) {
//         submitMsg.style.display = 'flex';
//         setTimeout(() => {
//             submitMsg.style.display = 'none';
//         }, 2000)
//     } else {
//         submitMsg.style.display = 'none';
//     }
// }

const form = document.getElementById('form-data');
const submitMsg = document.getElementById('submit-popup');

function formSubmit(event) {
    event.preventDefault(); 

    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach((field) => {
        console.log(field);
        if (field.value.trim() === '') {
            field.style.border = '1px solid red !important';
            isValid = false;
        } else {
            field.style.border = ''; 
        }
    });
    if (isValid) {
        submitMsg.style.display = 'flex';
        setTimeout(() => {
            form.submit(); 
            form.reset();
            submitMsg.style.display = 'none';
        }, 2000);
    } else {
        submitMsg.style.display = 'none';
    }
}

document.getElementById('header').addEventListener('click', function () {
    document.getElementById('h1').scrollIntoView({ behavior: 'smooth' });
});


