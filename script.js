// Mobile Responsive Menu Toggle Behavior
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Media Hub Filter Content Database
const mediaData = {
    photo: [
        { title: 'State Level Asana Opening Stretch', info: 'Palwal Stadium' },
        { title: 'Elite Balance Holding Configuration', info: 'Gurugram Complex' }
    ],
    video: [
        { title: 'Live Stream Recording: Junior Bracket', info: 'Gurugram Arena' },
        { title: 'Top 10 High-Score Matrix Loop', info: 'Panchkula Stage' }
    ],
    press: [
        { title: 'Dainik Coverage: Yogasana Digital Shift', info: 'Press Release' },
        { title: 'Official Core Championship Release Note', info: 'Official Circular' }
    ]
};

const galleryGrid = document.getElementById('galleryGrid');
const tabBtns = document.querySelectorAll('.tab-btn');

function renderGallery(type) {
    galleryGrid.innerHTML = '';
    const items = mediaData[type];
    
    items.forEach(item => {
        const box = document.createElement('div');
        box.className = 'gallery-unit ' + (type === 'video' ? 'video-item' : type === 'press' ? 'press-item' : '');
        
        let iconClass = type === 'video' ? 'fa-play' : type === 'press' ? 'fa-newspaper' : 'fa-camera';
        
        box.innerHTML = '<i class="fa-solid ' + iconClass + '"></i>' +
                        '<div>' + item.title + '</div>' +
                        '<div style="font-size:12px; color:var(--orange); margin-top:5px; font-weight:600;">' + item.info + '</div>';
        
        galleryGrid.appendChild(box);
    });
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        tabBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderGallery(e.target.getAttribute('data-type'));
    });
});

renderGallery('photo');
