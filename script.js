let createproduct = document.querySelector(".allInput");
let createBtn = document.querySelector("#createBtn");
let allInput = document.querySelector(".allInput");
let allProduct = document.querySelector(".allProduct");
let allINputsofForm = document.querySelectorAll("input")
let allProductBtn = document.querySelector("#allProductBtn");
let submit = document.querySelector("#submit");
let optionMenu = document.querySelector(".optionMenu");
let deletee = document.querySelector("#delete");
let edit = document.querySelector("#edit")

let products = [
    {
        id: 1,
        name: "Niacinamide 6% & Mandelic 2% Acid Face Serum",
        description: "A power-packed daily serum with 6% Niacinamide and 2% Mandelic Acid to control sebum and reduce acne marks.",
        price: 300,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0266-1.jpg"
    },
    {
        id: 2,
        name: "Vitamin C 15% Brightening Face Serum",
        description: "A glow-boosting serum with 15% Vitamin C to brighten dull skin and reduce dark spots.",
        price: 349,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0227-d.jpg"
    },
    {
        id: 3,
        name: "Hyaluronic Acid 2% Hydration Serum",
        description: "An ultra-hydrating serum with 2% Hyaluronic Acid to deeply moisturize and plump the skin.",
        price: 299,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0266-1.jpg"
    },
    {
        id: 4,
        name: "Salicylic Acid 2% Acne Control Serum",
        description: "A clarifying serum with 2% Salicylic Acid to fight acne and unclog pores effectively.",
        price: 320,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0266.jpg"
    },
    {
        id: 5,
        name: "Retinol 0.3% Anti-Aging Serum",
        description: "A gentle retinol formula that reduces fine lines and improves skin texture.",
        price: 399,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0285.jpg"
    },
    {
        id: 6,
        name: "Alpha Arbutin 2% Pigmentation Serum",
        description: "A targeted serum with Alpha Arbutin to reduce pigmentation and even skin tone.",
        price: 350,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0272.jpg"
    },
    {
        id: 7,
        name: "Green Tea & Tea Tree Oil Face Serum",
        description: "A soothing serum enriched with Green Tea and Tea Tree to calm irritated and acne-prone skin.",
        price: 280,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0258.jpg"
    },
    {
        id: 8,
        name: "Kojic Acid & Vitamin B3 Glow Serum",
        description: "A skin-brightening serum that helps reduce dark spots and boost natural radiance.",
        price: 340,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0262.jpg"
    },
    {
        id: 9,
        name: "Caffeine 5% Under Eye Serum",
        description: "A refreshing under-eye serum with caffeine to reduce puffiness and dark circles.",
        price: 310,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0258.jpg"
    },
    {
        id: 10,
        name: "Ceramide & Peptide Repair Serum",
        description: "A barrier-repair serum enriched with ceramides and peptides for healthy, strong skin.",
        price: 370,
        image: "https://cemveda.com/wp-content/uploads/2025/07/IMG_0262.jpg"
    }
];



function renderProduct() {

    allProduct.innerHTML = "";

    products.forEach((elem) => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="product" data-id="${elem.id}">
                <img src="${elem.image}" alt="img loading">
                <div class="product-text">
                    <h2>${elem.name}</h2>
                    <h4>${elem.description}</h4>
                    <div class="btnDiv">
                        <button>Shop Now</button>
                        <button>${elem.price}rs</button>
                    </div>
                </div>
            </div>`

        allProduct.append(div)
    })
}

renderProduct()





let inputShow = false;
createBtn.addEventListener("click", () => {

    if (inputShow === false) {
        allInput.style.display = "flex";
        allProduct.style.display = "none";
        inputShow = true;
    } else {

        inputShow = false;
    }
});

allProductBtn.addEventListener("click", () => {
    allInput.style.display = "none";
    allProduct.style.display = "grid"
})








submit.addEventListener("click", (e) => {

    e.preventDefault()

    let input = allInput.querySelectorAll("input");

    let newProduct = {
        id: products.length + 1,
        name: input[1].value,
        description: input[2].value,
        image: input[0].value,
        price: input[3].value
    }
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products))
    renderProduct()
})

let isShow = false;
let selectedIdProduct = null;

allProduct.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    let productCard = e.target.closest(".product");
    if (!productCard) return;
    selectedIdProduct = Number(productCard.dataset.id);


    if (isShow === false) {
        optionMenu.style.display = "flex";
        optionMenu.style.left = e.pageX + "px";
        optionMenu.style.top = e.pageY + "px";
        isShow = true;
    } else {
        optionMenu.style.display = "none";
        isShow = false;
    }


})



deletee.addEventListener("click", () => {
    if (!selectedIdProduct) return;
    products = products.filter(p => p.id !== selectedIdProduct);

    localStorage.setItem("products", JSON.stringify(products));

    renderProduct();

    optionMenu.style.display = "none";

})


edit.addEventListener("click", () => {
    let idx = selectedIdProduct;
    let productElement = document.querySelector(`.product[data-id="${idx}"]`);
    let title = prompt("enter a title");
    let description = prompt("enter your description")
    productElement.children[1].children[0].textContent = title;
    productElement.children[1].children[1].textContent = description;
})





