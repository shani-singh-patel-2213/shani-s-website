// 🔥 Firebase Config (Yaha apna Firebase config dalna hoga)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Register
function register(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email,password)
  .then(()=>alert("Registered Successfully"))
  .catch(err=>alert(err.message));
}

// Login
function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email,password)
  .then(()=>alert("Login Successful"))
  .catch(err=>alert(err.message));
}

// Logout
function logout(){
  auth.signOut();
}

// Add Product
function addProduct(){
  const name = document.getElementById("pname").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  db.collection("products").add({
    name, price, image
  });
}

// Show Products
db.collection("products").onSnapshot((snapshot)=>{
  const productDiv = document.getElementById("products");
  productDiv.innerHTML="";
  snapshot.forEach(doc=>{
    const data = doc.data();
    productDiv.innerHTML += `
      <div class="card">
        <img src="${data.image}">
        <h4>${data.name}</h4>
        <p>₹ ${data.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
});
