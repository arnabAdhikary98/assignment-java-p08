function salesTotal(arr){
    let updatedProducts = []

    arr.forEach(function(ele){

        //returns the discounted price with discount value provided
        let salesPrice = ele.original * (1-(ele.discount || 0));

        //returns the discounted price with adding the stock value provided
        let totalPrice = ele.stock * (ele.original * (1-(ele.discount || 0)));  

        let updatedItems = {
            discount : ele.discount || 0,
            item : ele.item,
            original : ele.original,
            sale : parseFloat(salesPrice.toFixed(3)),
            stock : ele.stock,
            total : parseFloat(totalPrice.toFixed(3))
        };

        updatedProducts.push(updatedItems);
    })
    return updatedProducts;
}

let sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];

 console.log(salesTotal(sales)); 