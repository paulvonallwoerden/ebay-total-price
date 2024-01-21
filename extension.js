const priceElements = document.querySelectorAll('.srp-results div > div.s-item__info.clearfix > div.s-item__details.clearfix > div:nth-child(1) > span')
priceElements.forEach((priceElement) => {
    const item = priceElement.parentElement.parentElement
    const price = priceElement.textContent

    const shipping = item.querySelector('span.s-item__logisticsCost')
    if (shipping === null) return;

    const free = !shipping.textContent.startsWith('+EUR')
    if (free) return;

    console.log(price, shipping.textContent)

    const priceNumber = Number.parseFloat(price.slice('EUR '.length).replace(',', '.'))
    const shippingCostText = shipping.textContent.slice('+EUR '.length, shipping.textContent.lastIndexOf(' '))
    const shippingCost = Number.parseFloat(shippingCostText.replace(',', '.'))
    
    const total = priceNumber + shippingCost
    const totalText = `EUR ${total.toFixed(2).replace('.', ',')}`

    priceElement.textContent += ` (${totalText})`
});
