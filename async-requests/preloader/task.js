const img = document.querySelector('#loader');
const items = document.querySelector('#items');
const url = "https://netology-slow-rest.herokuapp.com";

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.onloadstart = () => img.classList.add("loader_active");
xhr.onloadend = () => img.classList.remove("loader_active");

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText)
        const valute = response.response.Valute;
        console.log(valute);
        for (item in valute) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add("item");
            const itemCode = document.createElement('div');
            itemCode.classList.add("item__code");
            const itemValue = document.createElement('div');
            itemValue.classList.add("item__value");
            const itemCurrency = document.createElement('div');
            itemCurrency.classList.add("item__currency");
            itemCode.textContent = valute[item].CharCode;
            itemValue.textContent = valute[item].Value;
            itemCurrency.textContent = "руб.";
            itemDiv.append(itemCode);
            itemDiv.append(itemValue);
            itemDiv.append(itemCurrency);
            items.append(itemDiv);
        }
    }
};
xhr.send();