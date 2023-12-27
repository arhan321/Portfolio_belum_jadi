function adjustLayout() {
    var screenWidth = window.innerWidth;

    
    if (screenWidth < 768) {
        document.querySelector('nav ul').style.display = 'none';
    } else {
        document.querySelector('nav ul').style.display = 'block';
    }
}

adjustLayout();

window.addEventListener('resize', adjustLayout);