// Header Scroll Logic
let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-120%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll Reveal Observer
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Modal Logic
function toggleModal(modalID) {
    const modal = document.getElementById(modalID);
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
        }, 10);
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('privacy-modal');
    if (event.target === modal) {
        toggleModal('privacy-modal');
    }
}

const locations = [
    {   // Loja 01 - Itapetinga (Matriz)
        city: "Itapetinga (Matriz)",
        address: "R. João Pessoa, 39 - Centro",
        cep: "CEP: 45.700-000",
        phone: "(77) 3025-0910",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1360.9661940673382!2d-40.24636313469089!3d-15.24631108415666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7480b979e43af47%3A0x5d10f94d9d6b7970!2sSuper%20Farma%20Popular%20-%20Itapetinga!5e0!3m2!1spt-BR!2sbr!4v1770656109785!5m2!1spt-BR!2sbr" 
    },
    {   // Loja 02 - Poções
        city: "Poções",
        address: "Tv. Monsenhor Honorato Nascimento, 334 - Centro",
        cep: "CEP: 45.260-000",
        phone: "(77) 3025-0910",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7724.481048442235!2d-40.366953!3d-14.52823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7470bb2a21cfcb7%3A0xd31dc15a1055cc50!2zRmFybcOhY2lhIE1lZCBNYWlzIC0gUG_Dp8O1ZXM!5e0!3m2!1sen!2sus!4v1770655963302!5m2!1sen!2sus"
    },
    {   // Loja 03 - Brumado
        city: "Brumado",
        address: "Av. Dr. Antônio Mourão Guimarães, 186 - Centro",
        cep: "CEP: 46.100-097",
        phone: "(62) 3095-7014",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1149.893861585547!2d-41.668167316828786!3d-14.208445746863031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7444b273d0267d9%3A0x530e6a25682fc368!2sFarm%C3%A1cia%20Med%20Mais%20-%20Brumado!5e0!3m2!1sen!2sus!4v1770656140713!5m2!1sen!2sus"
    },
    {   // Loja 04 - Vitória da Conquista (Patagônia)
        city: "Vitória da Conquista (Patagônia)",
        address: "Av. Frei Benjamim, 405 - Patagônia",
        cep: "CEP: 45.065-000",
        phone: "(62) 8237-2102",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3242.6082502356358!2d-40.85680488043057!3d-14.87385067825102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463b149e947031%3A0x226f6d8cb368963a!2sAv.%20Frei%20Benjamin%2C%20405%20-%20Bairro%20Brasil%2C%20Vit%C3%B3ria%20da%20Conquista%20-%20BA%2C%2045065-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1770656266131!5m2!1sen!2sus"
    },
    {   // Loja 05 - Vitória da Conquista (Urbis V)
        city: "Vitória da Conquista (Urbis V)",
        address: "Av. Sergio Vieira de Mello, 4 - Urbis V",
        cep: "CEP: 45.078-300",
        phone: "(62) 8237-2102",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1231.461947431579!2d-40.87382194736464!3d-14.84247141487533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7463b899015204b%3A0x3fe1623816d20184!2sAv.%20S%C3%A9rgio%20Vieira%20de%20Melo%2C%2004%20-%20Urbis%20V%2C%20Vit%C3%B3ria%20da%20Conquista%20-%20BA%2C%2045078-300%2C%20Brazil!5e0!3m2!1sen!2sus!4v1770656370069!5m2!1sen!2sus"
    }
];

function updateLocation(index) {
    document.querySelectorAll('.unit-btn').forEach(btn => {
        btn.classList.remove('active-unit');
    });
    document.getElementById(`btn-unit-${index}`).classList.add('active-unit');

    const location = locations[index];

    const cityEl = document.getElementById('contact-city');
    const addressEl = document.getElementById('contact-address');
    const cepEl = document.getElementById('contact-cep');
    const phoneEl = document.getElementById('contact-phone');
    const mapEl = document.getElementById('contact-map');

    cityEl.style.opacity = 0;
    addressEl.style.opacity = 0;
    cepEl.style.opacity = 0;
    phoneEl.style.opacity = 0;
    
    setTimeout(() => {
        cityEl.innerText = location.city;
        addressEl.innerText = location.address;
        cepEl.innerText = location.cep;
        phoneEl.innerText = location.phone;
        
        mapEl.src = location.mapSrc;

        cityEl.style.opacity = 1;
        addressEl.style.opacity = 1;
        cepEl.style.opacity = 1;
        phoneEl.style.opacity = 1;
    }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
    const textElements = ['contact-city', 'contact-address', 'contact-cep', 'contact-phone'];
    textElements.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.transition = "opacity 0.2s ease-in-out";
    });
});