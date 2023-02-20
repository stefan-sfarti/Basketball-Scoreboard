let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let whoLeads = document.getElementById("leading")
let scoreHome = 0
let scoreGuest = 0
function addOneHome(){
    scoreHome += 1
    homeScore.textContent = scoreHome
    console.log('Added 1 to home')
    checkLead()
}

function addTwoHome(){
    scoreHome += 2
    homeScore.textContent = scoreHome
    console.log('Added 2 to home')
    checkLead()
}

function addThreeHome(){
    scoreHome += 3
    homeScore.textContent = scoreHome
    console.log('Added 3 to home')
    checkLead()
}

function addOneGuest(){
    scoreGuest += 1
    guestScore.textContent = scoreGuest
    console.log('Added 1 to guest')
    checkLead()
}

function addTwoGuest(){
    scoreGuest += 2
    guestScore.textContent = scoreGuest
    console.log('Added 2 to guest')
    checkLead()
}

function addThreeGuest(){
    scoreGuest += 3
    guestScore.textContent = scoreGuest
    console.log('Added 3 to guest')
    checkLead()
}

function checkLead(){
    if (scoreHome > scoreGuest){
        console.log("Home is leading")
        whoLeads.textContent = "Home is in the lead"
    }else if (scoreHome < scoreGuest){
        console.log("Guest is leading")
        whoLeads.textContent = "Guest is in the lead"
    }else {
        console.log("Score is equal")
        whoLeads.textContent = "Score is equal"
    }
}

function newGame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    scoreHome = 0
    scoreGuest = 0
    whoLeads.textContent = "A new game has started"
    console.log(scoreHome)
    console.log(scoreGuest)
}