const subjectsData = {
    'subject-1': {
        title: 'مراجعة العلوم المتكاملة',
        folder: 'عينة  من ملزمة مراجعة العلوم المتكاملة',
        images: ['1.png', '2.png', '3.png', '4.png', '9.png', '13.png', '22.png', '25.png'],
        details: `العلوم المتكاملة
الملزمة عبارة عن 29 صفحة 
مع غلاف هدية 
يتم تسليمها للمعلم باسمه ورقمه واسم ملزمته pdf 
التسليم في نفس اليوم 
السعر 200 جنيه
رقم التحويل انستا باي او فودافون كاش 
01020634409
صفحة الفيس بوك 
https://www.facebook.com/thementorahmed

مع امكانية وضع الاطار الخاص بالمدرس او تصميم اطار جديد بسعر رمزي`
    },
    'subject-2': {
        title: 'كيمياء الصف الثالث الثانوي',
        folder: 'عينة من بوسترات الصف الثالث الثانوي في الكيمياء',
        images: ['1.png', '2.png', '3.png', '6.png', '9.png', '15.png', '20.png', '22.png', '25.png', '27.png'],
        details: `الكيمياء الصف الثالث الثانوي
الملزمة عبارة عن 30 بوستر
مع غلاف هدية 
يتم تسليمها للمعلم باسمه ورقمه واسم ملزمته pdf 
التسليم في نفس اليوم 
السعر 300جنيه
رقم التحويل انستا باي او فودافون كاش 
01020634409
صفحة الفيس بوك 
https://www.facebook.com/thementorahmed

مع امكانية وضع الاطار الخاص بالمدرس او تصميم اطار جديد بسعر رمزي`
    },
    'subject-3': {
        title: 'بوسترات العلوم المتكاملة الصف الاول الثانوي',
        folder: 'عينة من بوسترات العلوم المتكاملة الصف الاول الثانوي',
        images: ['1.png', '2.png', '3.png', '8.png', '9.png', '12.png', '14.png'],
        details: `العلوم المتكاملة الصف الاول الثانوي
الملزمة عبارة عن 15 بوستر
مع غلاف هدية 
يتم تسليمها للمعلم باسمه ورقمه واسم ملزمته pdf 
التسليم في نفس اليوم 
السعر 200 جنيه
رقم التحويل انستا باي او فودافون كاش 
01020634409
صفحة الفيس بوك 
https://www.facebook.com/thementorahmed

مع امكانية وضع الاطار الخاص بالمدرس او تصميم اطار جديد بسعر رمزي`
    },
    'subject-4': {
        title: 'مراجعة الصف الثاني الاعدادي علوم الترم التاني',
        folder: 'عينة من مراجعة الصف الثاني الاعدادي علوم الترم التاني',
        images: ['1.png', '2.png', '3.png', '4.png', '5.png', '7.png', '16.png', '18.png'],
        details: `الملزمة عبارة عن 23صفحة
العلوم الصف الثاني الاعدادي 

مع غلاف هدية 
يتم تسليمها للمعلم باسمه ورقمه واسم ملزمته pdf 
التسليم في نفس اليوم 
السعر 100جنيه
رقم التحويل انستا باي او فودافون كاش 
01020634409
صفحة الفيس بوك 
https://www.facebook.com/thementorahmed

مع امكانية وضع الاطار الخاص بالمدرس او تصميم اطار جديد بسعر رمزي`
    }
};

let currentSlideIndex = 0;
let currentImages = [];

const modal = document.getElementById('demo-modal');
const modalSlider = document.getElementById('modal-slider');
const modalDetails = document.getElementById('modal-details');

function openDemo(subjectId) {
    const data = subjectsData[subjectId];
    if (!data) return;

    // Populate Details
    modalDetails.innerHTML = `
        <h3>${data.title}</h3>
        <div class="modal-desc">${escapeHTML(data.details)}</div>
    `;

    // Populate Images
    currentImages = data.images.map(img => `${data.folder}/${img}`);
    currentSlideIndex = 0;
    
    modalSlider.innerHTML = '';
    currentImages.forEach((src, index) => {
        const imgEl = document.createElement('img');
        imgEl.src = src;
        imgEl.alt = `${data.title} - Image ${index + 1}`;
        if (index === 0) imgEl.classList.add('active');
        modalSlider.appendChild(imgEl);
    });

    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeDemo() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function moveSlide(step) {
    if (currentImages.length === 0) return;
    
    const imgs = modalSlider.querySelectorAll('img');
    imgs[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex += step;
    
    if (currentSlideIndex >= currentImages.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = currentImages.length - 1;
    }
    
    imgs[currentSlideIndex].classList.add('active');
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        closeDemo();
    }
}

// Keyboard navigation for slider
window.addEventListener('keydown', function(e) {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        // Since it's RTL, right arrow should go previous logically in Arabic context, 
        // but standard is right=next. We'll map Right to Next, Left to Prev.
        if (e.key === 'ArrowRight') moveSlide(-1); // Next in RTL is often left visually, but let's keep arrow keys intuitive. Right = moveSlide(-1) for RTL visual flow
        if (e.key === 'ArrowLeft') moveSlide(1);
    }
    if (e.key === 'Escape') {
        closeDemo();
    }
});

// Helper to escape HTML to prevent XSS and format text
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag])
    );
}
