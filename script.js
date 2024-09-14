


const cartIcon =document.querySelector(".cart .cart-icon");
const cartBox = document.querySelector(".cart-box");

// hide and displaythe cart_box
cartIcon.addEventListener('click',()=>{
    cartBox.classList.toggle('display');
})


// quantity 
const quantity = document.querySelector('.q-number');

let qty = 0;

const increament = document.querySelector('.increament');
const decreament = document.querySelector('.decreament');
const quantityspan = document.querySelector('.cart .quantity');
const times = document.querySelector('.times');
const totalPrice = document.querySelector('.price .total');

const pricePerItem = 125.00;

increament.addEventListener('click',()=>{
    qty++;
    quantity.textContent=qty;
    quantityspan.textContent = qty;
    times.textContent = qty;
})

decreament.addEventListener('click',()=>{
    if(qty>0){
        qty--;
        quantity.textContent=qty;
        quantityspan.textContent=qty;
        times.textContent=qty;
    }
   
})

//add to cart
const addToCart = document.querySelector('.quantity-section .add-cart')
const product = document.querySelector('.cart-box .product');
const empty = document.querySelector('.cart-box .empty');
const checkout = document.querySelector('.cart-box .checkout button');
addToCart.addEventListener('click',()=>{
    if(qty > 0){
        empty.style.display = 'none';
        // Show the product in the cart
        product.style.display = 'flex';
        checkout.style.display = 'block';
        quantityspan.style.display='block';
        times.textContent = qty;
        totalPrice.innerText = `$${(pricePerItem * qty).toFixed(2)}`; 
    }
    else{
        empty.style.display = 'flex';
        // hide the product in the cart
        product.style.display = 'none';
        checkout.style.display = 'none';
        quantityspan.style.display='none';

    }
})


//delete 
const deleteIcon = document.querySelector('.delete img')

deleteIcon.addEventListener('click',()=>{
    empty.style.display = 'flex';
    // hide the product in the cart
    product.style.display = 'none';
    checkout.style.display = 'none';
    quantityspan.style.display='none';
})


// show model
const productImg = document.querySelector('.product-img>img');
const modelImg = document.querySelector('.product-img-model>img');

const images = 
[
    'images/image-product-1-thumbnail.jpg',
    'images/image-product-2-thumbnail.jpg',
    'images/image-product-3-thumbnail.jpg',
    'images/image-product-4-thumbnail.jpg',
  
]




const closeIcon = document.querySelector('.close-icon');
const model = document.querySelector('.model');

closeIcon.addEventListener('click',()=>{
    model.style.display = 'none';
})

const thumbnails = document.querySelectorAll('.small-img img');
const modalThumbnails = document.querySelectorAll('.product-img-model .small-img img');


thumbnails.forEach((t,index)=>{
    t.addEventListener('click',()=>{

        thumbnails.forEach(th=>th.classList.remove('active'))
        modalThumbnails.forEach(mt => mt.classList.remove('active'));

        t.classList.add('active');
        modalThumbnails[index].classList.add('active')

        productImg.src = t.src.replace('-thumbnail', '');
        modelImg.src = t.src.replace('-thumbnail', '');

    
        
    })
})

modalThumbnails.forEach((mt,index)=>{
    mt.addEventListener('click',()=>{
        thumbnails.forEach(th=>th.classList.remove('active'))
        modalThumbnails.forEach(mt => mt.classList.remove('active'));

        mt.classList.add('active');
        thumbnails[index].classList.add('active');

        productImg.src = mt.src.replace('-thumbnail', '');
        modelImg.src = mt.src.replace('-thumbnail', '');
    })
})

productImg.addEventListener('click',()=>{
    
    model.style.display = 'block';
    modelImg.src = productImg.src;

    thumbnails.forEach((t, index) => {
        if (t.src.replace('-thumbnail', '') === productImg.src) {
            t.classList.add('active');
            modalThumbnails[index].classList.add('active');
        } else {
            t.classList.remove('active');
            modalThumbnails[index].classList.remove('active');
        }
    });
})

//using next and prev   
const Bimages = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg',
];

let currentIndex = 0;

function updateImage()
{
    const currentImgSrc = Bimages[currentIndex];

    productImg.src = currentImgSrc;
    modelImg.src = currentImgSrc;


    thumbnails.forEach(t=>t.classList.remove('active'))
    modalThumbnails.forEach(mt=>mt.classList.remove('active'))

    thumbnails[currentIndex].classList.add('active');
    modalThumbnails[currentIndex].classList.add('active');

}
const next = document.querySelector('.model .next');
const prev = document.querySelector('.model .prev');

next.addEventListener('click',()=>{
    currentIndex = (currentIndex + 1 ) % Bimages.length;
    updateImage();
})

prev.addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + Bimages.length) % Bimages.length;
    updateImage();
})


// small screen

const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items')
const close = document.querySelector('.menu-items .close');

menuIcon.addEventListener('click',()=>{
    menuItems.style.display  = 'flex';
})

close.addEventListener('click',()=>{
    menuItems.style.display  = 'none';

})

// next and prev
const nextB = document.querySelector('.product-wrapper .next')
const prevB = document.querySelector('.product-wrapper .prev')
nextB.addEventListener('click',()=>{
    currentIndex = (currentIndex + 1 ) % Bimages.length;
    updateImage();
})

prevB.addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + Bimages.length) % Bimages.length;
    updateImage();
})





