function getCartItems() {
    db.collection("cart-items").onSnapshot((snapShot) => {
        let totalcount=0;
        snapShot.docs.forEach(doc => {
            totalcount+=doc.data().quantity;
        });
        setCartCounter(totalcount);
    })
}

 function setCartCounter(totalcount){
     document.querySelector(".cart-item-number").innerText = totalcount;
 }

getCartItems();