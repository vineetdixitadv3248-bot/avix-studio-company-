// AVIX CREATIVE STUDIO

const WHATSAPP_NUMBER = "917014881875";

// CONTACT TO BUY

function buyProduct(productName, price) {

    let message = "";

    if (price > 0) {
        message =
            `Hello AVIX CREATIVE STUDIO! I want to order ${productName}. Price: ₹${price}. Please share the details.`;
    } else {
        message =
            `Hello AVIX CREATIVE STUDIO! I am interested in ${productName}. Please tell me the price.`;
    }

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}

// SEARCH PRODUCTS

function searchProducts() {

    let input = document
        .getElementById("search")
        .value.toLowerCase();

    let products = document
        .getElementsByClassName("product-card");

    for (let i = 0; i < products.length; i++) {

        let productName =
            products[i]
            .getElementsByTagName("h3")[0]
            .innerText.toLowerCase();

        if (productName.includes(input)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}

console.log("AVIX CREATIVE STUDIO website loaded!");
document.querySelectorAll(".product-image").forEach(image => {
    image.addEventListener("click", function () {
        document.getElementById("largeImage").src = this.src;
        document.getElementById("imageViewer").classList.add("show");
    });
});

function closeImage() {
    document.getElementById("imageViewer").classList.remove("show");
}