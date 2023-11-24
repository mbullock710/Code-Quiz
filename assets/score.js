let scores = JSON.parse(localStorage.getItem("highScores")) ||[]
const tbody= document.getElementById("tbody")
const clearBtn= document.getElementById("clear")

for (let i = 0; i < scores.length; i++) {
    
    const initTd= document.createElement("td")
    const scoreTd=document.createElement("td")
    const tr= document.createElement("tr")

  initTd.append(scores[i].initials)
  scoreTd.append(scores[i].score)
  tr.append(initTd,scoreTd)
  tbody.append(tr)
}


clearBtn.addEventListener("click", ()=>{
    localStorage.clear()
    window.location.reload()
})