const resultado = document.querySelector(".result")

const pontosdohumano = document.querySelector(".human-score")
const pontosdamaquina = document.querySelector(".machine-score")

let humanscore = 0

let machinescore = 0





function playhuman(humanchoice) {

    playgame(humanchoice, playmachine())



}


function playmachine() {

    const choices = ["rock", "paper", "scissors"]

    const randomnumber = Math.floor(Math.random() * 3)

    return choices[randomnumber]

}

function playgame(human, machine) {



    console.log('Humano:' + human + 'Máquina:' + machine)


    if (human === machine) {
        resultado.innerHTML = "Deu empate !!!"


    } else if (human === "rock" && machine === "paper" ||
            human==="paper" && machine ==="rock"||
            human==="scissors" && machine ==="paper"

            
    ) {
        resultado.innerHTML="Você ganhou da máquina"
        humanscore++;
        pontosdohumano.innerHTML = humanscore;
  
    }
    else{
        resultado.innerHTML="Você perdeu !"
        machinescore++;
         pontosdamaquina.innerHTML = machinescore;
    }

     
}



    
    






