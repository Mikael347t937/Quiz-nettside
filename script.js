const sporsmol =  ["Hva er en CPU","Hva er et motherboard","Hva er RAM","Hva er en GPU","hva er power suply","Hva er et cooling system",]


const svar1 = document.getElementById("svar1")
const svar2 = document.getElementById("svar2")
const svar3 = document.getElementById("svar3")
const svar4 = document.getElementById("svar4")
const poeng_display = document.getElementById("poeng")
const spor = document.getElementById("spor")

const svar_liste = [ 
    ["Riktig", "feil", "feil,", "feil"], 
    ["Riktig", "feil", "feil,", "feil"],
    ["Riktig", "feil", "feil,", "feil"],
    ["Riktig", "feil", "feil,", "feil"],
 ]
   

let poeng = 0
let spor_no = 0
let svar = ["1", "3", "3", "2"]

function update_questions(){
    spor.textContent = sporsmol[spor_no]
    svar1.textContent = svar_liste[spor_no][0]
   svar2.textContent = svar_liste[spor_no][1]
   svar3.textContent = svar_liste[spor_no][2]
   svar4.textContent = svar_liste[spor_no][3]
    poeng_display.textContent = points
}