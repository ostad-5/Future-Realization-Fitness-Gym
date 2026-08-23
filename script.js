// ==========================================
// FUTURE REALIZATION FITNESS GYM
// SCRIPT.JS
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "82px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "25px";
        nav.style.background = "#080909";
        nav.style.borderBottom = "1px solid #272a27";
        nav.style.alignItems = "flex-start";

    }

}


// ==========================================
// MEMBERSHIP MODAL
// ==========================================

function openJoin(plan = "") {

    const modal = document.getElementById("joinModal");

    const selectedPlan = document.getElementById("selectedPlan");

    modal.classList.add("show");

    selectedPlan.value = plan;

}


// ==========================================
// CLOSE MEMBERSHIP MODAL
// ==========================================

function closeJoin() {

    const modal = document.getElementById("joinModal");

    modal.classList.remove("show");

}


// ==========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================

window.addEventListener("click", function(event) {

    const modal = document.getElementById("joinModal");

    if (event.target === modal) {

        closeJoin();

    }

});


// ==========================================
// ESC KEY CLOSE MODAL
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeJoin();

    }

});


// ==========================================
// MEMBERSHIP APPLICATION
// ==========================================

function submitJoin(event) {

    event.preventDefault();

    const selectedPlan =
        document.getElementById("selectedPlan").value;

    closeJoin();

    showToast(
        "Application submitted successfully! We will contact you soon."
    );

    console.log(
        "Membership Applied:",
        selectedPlan
    );

}


// ==========================================
// SHOP CART
// ==========================================

let cart = [];


// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addCart(productName, price) {

    const product = {

        name: productName,

        price: price

    };


    cart.push(product);


    updateCartCount();


    showToast(
        productName + " added to cart!"
    );


    console.log(
        "Current Cart:",
        cart
    );

}


// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");


    cartCount.textContent =
        cart.length;

}


// ==========================================
// SHOW CART
// ==========================================

function showCart() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty."
        );

        return;

    }


    let total = 0;

    let cartMessage =
        "YOUR CART\n\n";


    cart.forEach(function(item, index) {

        cartMessage +=
            (index + 1) +
            ". " +
            item.name +
            " - ৳" +
            item.price.toLocaleString() +
            "\n";


        total += item.price;

    });


    cartMessage +=
        "\nTOTAL: ৳" +
        total.toLocaleString();


    alert(cartMessage);


}


// ==========================================
// CLEAR CART
// ==========================================

function clearCart() {

    cart = [];

    updateCartCount();

    showToast(
        "Cart cleared."
    );

}


// ==========================================
// TOAST NOTIFICATION
// ==========================================

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(window.toastTimer);


    window.toastTimer =
        setTimeout(function() {

            toast.classList.remove("show");

        }, 3000);

}


// ==========================================
// CONTACT FORM
// ==========================================

function submitContact(event) {

    event.preventDefault();


    showToast(
        "Thank you! Your message has been received."
    );


    event.target.reset();

}


// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });


                // Close mobile menu

                const nav =
                    document.getElementById("mainNav");


                if (window.innerWidth <= 950) {

                    nav.style.display = "none";

                }

            }

        }
    );

});


// ==========================================
// NAVBAR SHADOW ON SCROLL
// ==========================================

window.addEventListener(
    "scroll",
    function() {

        const nav =
            document.querySelector(".nav");


        if (window.scrollY > 50) {

            nav.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.35)";

        } else {

            nav.style.boxShadow =
                "none";

        }

    }
);


// ==========================================
// SIMPLE SCROLL REVEAL ANIMATION
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".plan, .equip, .product, .feature, .trainer-card, .contact-card"
    );


const observer =
    new IntersectionObserver(
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


revealElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCartCount();

        console.log(
            "Future Realization Fitness Gym loaded successfully."
        );

    }
);