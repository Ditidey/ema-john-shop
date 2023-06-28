import { getShoppingCart } from "../utilities/fakedb";

const loadProducts = async() =>{
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
   //  console.log(ids)
    const savedCart = [];
    
 const productsLoading = await fetch('https://ema-john-server-one.vercel.app/productsByIds', {
    method:'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(ids)
 });
 const products = await productsLoading.json();

 
 for(const id in storedCart){
   console.log(id)
    const addedCart = products.find(pro => pro._id == id);
    if(addedCart){
        const quantity = storedCart[id];
        addedCart.quantity = quantity;
        savedCart.push(addedCart);
    }
 }
 return savedCart;
}
export default loadProducts;