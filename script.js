const products=[
 {id:1,name:"Premium Shoes",price:1200,img:"https://picsum.photos/200?1"},
 {id:2,name:"Smart Watch",price:2500,img:"https://picsum.photos/200?2"},
 {id:3,name:"Wireless Headphones",price:1800,img:"https://picsum.photos/200?3"},
 {id:4,name:"Stylish Jacket",price:3000,img:"https://picsum.photos/200?4"},
 {id:5,name:"Gaming Mouse",price:900,img:"https://picsum.photos/200?5"}
];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function login(){
 const user=document.getElementById("username").value;
 if(user){
   localStorage.setItem("user",user);
   document.getElementById("loginPage").classList.add("hidden");
   document.getElementById("app").classList.remove("hidden");
   loadProducts(products);
   updateCart();
 }
}

function logout(){
 localStorage.clear();
 location.reload();
}

function loadProducts(list){
 const container=document.getElementById("productList");
 container.innerHTML="";
 list.forEach(p=>{
   container.innerHTML+=`
     <div class="product">
       <img src="${p.img}">
       <h4>${p.name}</h4>
       <p>₹ ${p.price}</p>
       <button onclick="addToCart(${p.id})">Add to Cart</button>
     </div>
   `;
 });
}

function searchProducts(text){
 const filtered=products.filter(p=>p.name.toLowerCase().includes(text.toLowerCase()));
 loadProducts(filtered);
}

function addToCart(id){
 const item=products.find(p=>p.id===id);
 cart.push(item);
 localStorage.setItem("cart",JSON.stringify(cart));
 updateCart();
}

function updateCart(){
 document.getElementById("cartCount").innerText=cart.length;
 const cartItems=document.getElementById("cartItems");
 cartItems.innerHTML="";
 let total=0;
 cart.forEach((item,index)=>{
   total+=item.price;
   cartItems.innerHTML+=`
     <div style="margin:10px 0;">
       ${item.name} - ₹${item.price}
       <button onclick="removeItem(${index})">❌</button>
     </div>
   `;
 });
 document.getElementById("totalPrice").innerText=total;
}

function removeItem(index){
 cart.splice(index,1);
 localStorage.setItem("cart",JSON.stringify(cart));
 updateCart();
}

function openCart(){
 document.getElementById("cartSidebar").classList.remove("hidden");
}

function closeCart(){
 document.getElementById("cartSidebar").classList.add("hidden");
}

function checkout(){
 alert("Order Placed Successfully 🎉");
 cart=[];
 localStorage.setItem("cart",JSON.stringify(cart));
 updateCart();
}
