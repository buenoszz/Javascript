const ConvertButton = document.querySelector(".convert-button")
const CurrencySelect= document.querySelector(".currency-select")


function ConvertValue(){

    const InputCurrency=document.querySelector(".input-currency").value
    const currencyValueToConverted=document.querySelector(".currency-value-to-converted")
    const currencyValueConverted=document.querySelector(".currency-value-converted")

    const dolarToday = 5.4
    const EuroToday = 6.4

    console.log(CurrencySelect.value)


    if (CurrencySelect.value == "Dollar") {

        currencyValueConverted.innerHTML= new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(InputCurrency/dolarToday)

    }

    if (CurrencySelect.value == "Euro") {

         currencyValueConverted.innerHTML= new Intl.NumberFormat("de-DE",{

            style:"currency",
            currency: "EUR"
         }
         ) .format(InputCurrency/EuroToday)
    }


   currencyValueToConverted.innerHTML= new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(InputCurrency)   

}

function ChangeName(){

     const CurrencyName = document.querySelector(".Dollar-americano")

     if(CurrencySelect == "Dollar"){
        CurrencyName.innerHTML = "Dollar americano"
     }

     if(CurrencySelect == "Euro"){
        CurrencyName.innerHTML = "euro"
     }
     
}




CurrencySelect.addEventListener("change", ChangeName)
ConvertButton.addEventListener("click", ConvertValue )