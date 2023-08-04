const product= [
    {
        id:0,
        image:'shoe1.jpg',
        title:'shoes',
        price:500,
    },
    {
        id:1,
        image:'shoe2.jpg',
        title:'shoes',
        price:500,
    },{
        id:2,
        image:'shoe4.jpg',
        title:'shoes',
        price:700,
    },
    {
        id:3,
        image:'shoe5.jpg',
        title:'shoes',
        price:800,
    }
];
const categories = [...new Set(product.map((item)=>{
    return(item)
}))]
let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>{
    var {image, title, price} =item;
    return(
        `<div class='box'>
         <div class="img-box">
            <img class='images' src=${image}>
        </div>
    <div class='bottom'>
    <p>${title}</P>
    <h2>Rs ${price}.00</h2>`+
    "<button onclick='addtocart("+(i++)+")' > Add To Cart </button>"+
    `</div>
    </div>`
    )
}).join('')
 
var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartitems').innerHTML= "Your cart is empty";
        document.getElementById('total').innerHTML="Rs"+ 0 +".00";

    }
    else{
        document.getElementById("cartitems").innerHTML = cart.map((items)=>{
            var { image,title,price} = items;
            total=total+price;
            document.getElementById('total').innerHTML="Rs"+ total +".00";
            return(
                `<div class="cart-item">
                    <div class="row-img" >
                        <img class="rowimg" src=${image}>
                    </div>
                    <p style="font-size:30pxpx;"> ${title}</p>
                    <h2 style=font-size: 15px;> Rs ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'> </i><div>"
            );

        }).join("");
    }
}
