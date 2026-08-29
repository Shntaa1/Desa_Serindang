// =================================
// MENU MOBILE
// =================================

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("show");

}


// =================================
// TOMBOL KEMBALI KE ATAS
// =================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


function scrollTopPage() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =================================
// FORM KONTAK
// =================================

function sendMessage(event) {

    event.preventDefault();

    const nama =
        document.getElementById("nama").value;

    alert(
        "Terima kasih, " +
        nama +
        "! Pesan berhasil diterima."
    );

    event.target.reset();

}


// =================================
// ANIMASI SCROLL
// =================================

const cards = document.querySelectorAll(
    ".feature-card, .potential-card, .news-card, .gallery-card, .info-item, .person-card, .service-card, .timeline-item"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.12
    }

);


cards.forEach(function(card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "all .6s ease";

    observer.observe(card);

});
