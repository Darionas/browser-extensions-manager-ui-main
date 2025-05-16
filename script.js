//use strict

/* Dark-Light mode */
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkMode-toggle')

console.log(darkMode);

//check if dark mode is enabled
//if it is enabled, turn it off
//if it is disabled. turn it on

const enableDarkMode = () => {
    //add the class darkMode to the body
    document.body.classList.add('darkMode');
    //update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    //add the class darkMode to the body
    document.body.classList.remove('darkMode');
    //update darkMode in the localStorage
    localStorage.setItem('darkMode', null)
}

/* Load mode kept in localStorage, even after page refresh or if you open
that page in a while*/
if(darkMode === 'enabled') {
    enableDarkMode();
}

/* Technically darkMode actually is switching, the problem is it's 
the localStorage that's switching and not my variable that I have
created here. This variable is set to whatever it was on page load
well that's a bit of a problem because we want it to be able to 
switch all the time, so that's why it's only when I refresh my page
that it seems to actually have a bit of an effect on there, so what
we need to do is we need to update this darkMode every time someone
clicks on it.*/
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = darkModeToggle.getAttribute('aria-pressed') === 'true';
    darkModeToggle.setAttribute('aria-pressed', !isDarkMode);
    darkModeToggle.setAttribute('aria-label', isDarkMode ? 'Enable dark mode' : 'Enable light mode');
    //update darkMode variable
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
})

/* Filter Tabs */
const filterTab = document.querySelector('.filterTab');

filterTab.addEventListener('click', (e) => {
    e.target.classList.add('defaultActiveTab');
})

