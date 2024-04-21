const SiteLocalStorageName = "performanceXpert"

export function addItemToLocalStorage(data) {
    const id = `${data.id}`
    const quantity = data.quantity
    const cartData = localStorage.getItem(SiteLocalStorageName);
    const cart = cartData ? JSON.parse(cartData) : [];
    let exist = false
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id ) {
            cart[i].quantity += quantity
            exist = true
        }
    }
    if (!exist) {
        cart.push(data);
    }
    localStorage.setItem(SiteLocalStorageName, JSON.stringify(cart));
}

export function getItemLocalStorage() {
    const cartRawData = localStorage.getItem(SiteLocalStorageName)
    const cartData = cartRawData ? JSON.parse(cartRawData) : []
    return cartData
}

export function deleteLocalStorage() {
    localStorage.removeItem(SiteLocalStorageName)
}

export function updateQuantityLocalStorage(itemID, newValue) {
    const id = `${itemID}`
    const cartData = localStorage.getItem(SiteLocalStorageName);
    const cart = cartData ? JSON.parse(cartData) : [];
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id ) {
            cart[i].quantity = newValue
        }
    }
    localStorage.setItem(SiteLocalStorageName, JSON.stringify(cart));
}

export function removeCertainLocalStorage(itemID) {
    const id = itemID
    const cartData = localStorage.getItem(SiteLocalStorageName);
    const cart = cartData ? JSON.parse(cartData) : [];
    let index = null
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id ) {
            index = i
            break
        }
    }
    cart.splice(index, 1)
    localStorage.setItem(SiteLocalStorageName, JSON.stringify(cart)); // 将数组转换为字符串
}