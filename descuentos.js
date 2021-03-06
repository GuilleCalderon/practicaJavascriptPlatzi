function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100

    return precioConDescuento


}

const coupons =[
    {
        name: "5%",
        discount: 30
    },
    {
        name: "10%",
        discount: 15
    },
    {
        name: "30%",
        discount: 5
    }
]

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value

    const inputCoupon = document.getElementById("InputCoupon")
    const couponValue = inputCoupon.value
    
    
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue
    }
    
    const userCoupon = coupons.find(isCouponValueValid)
    
    if (!userCoupon) {
        alert("el cupon "+ couponValue + " no es valido")
    }else {
    
        const descuento = userCoupon.discount
        const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento)
    
        const resultP = document.getElementById("ResultP")
        resultP.innerText = `El precio con descuento es de: $${precioConDescuento}`
    
    
    }
    

}

