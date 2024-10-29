// Expand list
const navExpand = document.getElementById('nav-expand'),
      navExpandList = document.getElementById('nav-expand-list'),
      navExpandIcon = document.getElementById('nav-expand-icon')

navExpand.addEventListener('click', () => {
    // Expand list
    navExpandList.classList.toggle('show-list')

    // Rotate icon
    navExpandIcon.classList.toggle('rotate-icon')
})

// Scroll section for active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)