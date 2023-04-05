import { getShoppingCart } from "../utilities/fakedb";

const loadProducts = async() =>{
 const productsLoading = await fetch('products.json');
 const products = await productsLoading.json();

 const storedCart = getShoppingCart();
 const savedCart = [];
 for(const id in storedCart){
    const addedCart = products.find(pro => pro.id === id);
    if(addedCart){
        const quantity = storedCart[id];
        addedCart.quantity = quantity;
        savedCart.push(addedCart);
    }
 }
 return savedCart;
}
export default loadProducts;