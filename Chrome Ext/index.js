let inputBtn = document.getElementById("input-btn") 

let myLeads = []

const inputEl = document.getElementById('input-el')

 
inputBtn .addEventListener('click', () => {
     myLeads.push(inputEl.value)
})

console.log(myLeads)

for (let i = 0 ; i < myLeads.length;i++) {
    console.log(myLeads[i])
}



11 12 51 