const ConvertButton = document.querySelector(".convert-button")
const CurrencySelect = document.querySelector(".currency-select")


function ConvertValue() {

    const InputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currency-value-to-converted")
    const currencyValueConverted = document.querySelector(".currency-value-converted")

    const dolarToday = 5.4
    const EuroToday = 6.4

    console.log(CurrencySelect.value)


    if (CurrencySelect.value == "Dollar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(InputCurrency / dolarToday)

    }

    if (CurrencySelect.value == "Euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }
        ).format(InputCurrency / EuroToday)
    }


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(InputCurrency)

}

function ChangeInformation() {

    const CurrencyName = document.querySelector(".Dollar-americano")
    const CurrencyImage = document.querySelector(".ImageCountry")

    if (CurrencySelect.value == "Dollar") {
        CurrencyName.innerHTML = "Dollar americano"
        CurrencyImage.src = ("./assets/estados-unidos (1) 1.png")

    }

    if (CurrencySelect.value == "Euro") {
        CurrencyName.innerHTML = "Euro"
        CurrencyImage.src = ("./assets/euro.png")

    }

}




CurrencySelect.addEventListener("change", ChangeInformation)
ConvertButton.addEventListener("click", ConvertValue)