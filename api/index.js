import axios from 'axios';

const instance = axios.create({
    baseURL : process.env.baseURL,
})

function fetchproductById(id){
    return instance.get(`/products/${id}`)
}

function fetchProductByKeyword(keyword){
    return instance.get(`/products`,{
        params : {
            title_like : keyword,
        }
    })
}

function resetProductList(keyword){
    return instance.get(`/products`)
}

function fetchCartItems(){
    return instance.get('/carts')
}

function createCartItem(cartItem){
    return instance.post('/carts', cartItem)
}

function deleteCartItem(cartItem){
    return instance.delete('/carts', cartItem)
}

export{ fetchproductById, fetchProductByKeyword, resetProductList,createCartItem,fetchCartItems,deleteCartItem }