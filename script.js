const sporsmol =  ["Hva er en CPU","Hva er et motherboard","Hva er RAM","Hva er en GPU","hva er power suply","Hva er et cooling system",]
const svar = ["a", "a", "c", "d"]

const svar1 = document.getElementById("svar1")
const svar2 = document.getElementById("svar2")
const svar3 = document.getElementById("svar3")
const svar4 = document.getElementById("svar4")

const spor = document.getElementById("spor")
svar1.addEventListener("click", () => {
    spor.textContent = sporsmol[1]
    
})