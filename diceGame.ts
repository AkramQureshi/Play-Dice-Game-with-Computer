let computerGeneratingNumber1 = Math.random() * 6 + 1
let roundnumber1 = Math.floor(computerGeneratingNumber1)

let computerGeneratingNumber2 = Math.random() * 6 + 1
let roundnumber2 = Math.floor(computerGeneratingNumber2)

let computerGeneratingNumber3 = Math.random() * 6 + 1
let roundnumber3 = Math.floor(computerGeneratingNumber3)

let computerGeneratingNumber4 = Math.random() * 6 + 1
let roundnumber4 = Math.floor(computerGeneratingNumber4)

let computerGeneratingNumber5 = Math.random() * 6 + 1
let roundnumber5 = Math.floor(computerGeneratingNumber5)


console.log("\t")
console.log("\t")
console.log("\t")

console.log("                        ******************************")
console.log("                        PLAY A DICE GAME WITH COMPUTER")
console.log("                        ******************************");
console.log("                            Made by: Akram Qureshi")


console.log("\t")
console.log("\t")
console.log("\t")

console.log("                          *************************")
console.log("                          Winning Target is > = 18")
console.log("                          *************************");

console.log("\t")

console.log("                            1st Turn on Dice: ", roundnumber1)
console.log("                            2nd Turn on Dice: ", roundnumber2)
console.log("                            3rd Turn on Dice: ", roundnumber3)
console.log("                            4th Turn on Dice: ", roundnumber4)
console.log("                            5th Turn on Dice: ", roundnumber5)

let totalComputerGeneratingNumber = roundnumber1 + roundnumber2 + roundnumber3 + roundnumber4 + roundnumber5 

console.log("\t")

console.log("                       ********************************")
console.log("                         Total Numbers on Dice : ", totalComputerGeneratingNumber)
console.log("                       ********************************")

if(totalComputerGeneratingNumber >= 18)
    {
        console.log("\t")
        console.log("                  *****************************************")
        console.log("                  Congratulations.... You Won from Computer")
        console.log("                  *****************************************")
        

        console.log("\t")
        console.log("\t")
        console.log("\t")
    }
    else
    {
        console.log("\t")
        console.log("                           **********************")
        console.log("                           You Lose from Computer")
        console.log("                           **********************")

        console.log("\t")
        console.log("\t")
        console.log("\t")

        console.log("\t")
        console.log("                           ***********************")
        console.log("                           G A M E  IS  O V E R !!")
        console.log("                           ***********************")
        

        console.log("\t")
        console.log("\t")
    }