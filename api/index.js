import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:3000/',
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

export{ fetchproductById, fetchProductByKeyword, resetProductList }