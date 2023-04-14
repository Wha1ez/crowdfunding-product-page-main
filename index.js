// nav 
const desktopBookmark = document.querySelector('.desktop.bookmark-btn');
const mobileBookmark = document.querySelector('.mobile.bookmark');



document.querySelector('nav div').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('visible');
    document.querySelector('.menu-btn').parentElement.classList.toggle('active')
})

desktopBookmark.addEventListener("click", () => {
    desktopBookmark.style.display ='none';
    document.querySelector('.desktop.bookmarked').classList.add('flex');
})

mobileBookmark.addEventListener('click', () => {
    mobileBookmark.style.display ='none';
    document.querySelector('.mobile.bookmarked').classList.add('display');
})

// project modal 
const projectBtn = document.querySelector('.project-btn');
const closeModal = document.querySelector('.BTP-close-btn')
const projects = document.querySelector('.back-this-project-div');
const modal = document.querySelector('.modal');

// back this project button functionality

// function

function toggleDisplay(display) {
    modal.style.display = `${display}`;
    projects.style.display = `${display}`;
}

// event listener to display projects

projectBtn.addEventListener('click', () => {
    toggleDisplay('flex');
})

// event listener to hide projects

closeModal.addEventListener('click', () => {
    toggleDisplay('none');
    resetProject();
})

modal.addEventListener('click', () => {
    toggleDisplay('none')
    resetProject();
})

// display pledge function 
function displayPledge(e) {
    removePledge(e);
    let project = e.currentTarget.parentElement.parentElement.parentElement;
    project.classList.add('active-pledge');
}

// display pledge input using labels
const projectLabels = document.querySelectorAll('.project label');
const projectList = document.querySelectorAll('.project')

function removePledge() {
    projectList.forEach(project => {
        project.classList.remove('active-pledge');
    })
}

projectLabels.forEach(projectLabel => {
    projectLabel.addEventListener('click', (e) => {
        displayPledge(e);
    })
})

// display pledge input using radio input
const radioInputs = document.querySelectorAll('.radio-input');

radioInputs.forEach(radioInput => {
    radioInput.addEventListener('click', (e) => {
       displayPledge(e);
    })
})

// reset project 
function resetProject() {
    removePledge();
    radioInputs.forEach(radioInput => {
        radioInput.checked = false
    })
}

// success modal
const continueBtns = document.querySelectorAll('.continue-btn');
const successModal = document.querySelector('.success-modal');


// open success modal 
continueBtns.forEach(continueBtn => {
   continueBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // reset project
    resetProject();

    // remove pledge page 
    toggleDisplay('none');

    // display success modal 
    successModal.style.display = 'flex';
   })
})

// close success modal 
document.querySelector('.success-modal button').addEventListener('click', () => {
    successModal.style.display = 'none';
})