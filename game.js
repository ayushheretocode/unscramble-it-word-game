const gameStartedSound=new Audio('audio/game-started.mp3')
gameStartedSound.play()

let scoreEl=document.getElementById('score')
const cashSound=new Audio('audio/cash.mp3')

let timeEl=document.getElementById('time')

let timer

function startTimer()
{
    let time=30

    timer=setInterval(()=>{
        if(time<0)
        {
            clearInterval(timer)
            gameOver()
            return
        }
        if(time<10)
        {
            timeEl.style.color='red'
            timeEl.innerText=`00:0${time}`
        }
        else{
            timeEl.style.color='white'
            timeEl.innerText=`00:${time}`
        }
        time--
    },1000)

}

startTimer()


let gameWords=['MDNA','TEAM','LEHLO','MNHUA','FECOFE','BORUTEL','CHERTUB','GALTRHI','LYRGHTPAWI','LGENTTNEIIL']
let hints=[
    'used to swear or curse',
    'used to refer to a friend',
    'used to greet informally',
    'this is what we all are',
    'people are addicted to this',
    'nobody likes to get into this',
    'one who slaughters animals',
    'satisfactory/agreeable',
    'someone who writes plays',
    'since you have reached this far, you are this'
]
let answers=['DAMN','MATE','HELLO','HUMAN','COFFEE','TROUBLE','BUTCHER','ALRIGHT','PLAYWRIGHT','INTELLIGENT']
let wordEl=document.getElementById('word')
wordEl.innerText=gameWords[0]

let hint=document.getElementById('hint')
hint.innerText=hints[0]


let userInputEl=document.getElementById('user-input')

let submitBtn=document.getElementById('submit-btn')


submitBtn.addEventListener('click',check)

userInputEl.addEventListener('keydown',function(event){
    if(event.key==='Enter')
        check()
})

let counter=0
let score=0

function check()
{
    if(userInputEl.value.trim().toUpperCase()===answers[counter])
    {
        score+=100
        console.log('score increase')
        scoreEl.innerText=`$${score}`
        cashSound.play()
        userInputEl.value=""
        counter++
        wordEl.innerText=gameWords[counter]
        hint.innerText=hints[counter]
        clearInterval(timer)
        startTimer()
    }
    if(counter===10)
    {
        console.log("you have won")
        youHaveWon()
    }
}

function gameOver()
{
    let container=document.querySelector('.container')
    container.innerHTML=""
    container.innerHTML="<h1 class='wasted'>Wasted</h1>"
    const sound = new Audio('audio/wasted.mp3');
    sound.play();
    
}


function youHaveWon()
{
    clearInterval(timer)
    let container=document.querySelector('.container')
    container.innerHTML=""
    container.innerHTML="<h1 class='mission'>Mission Passed! <br> <span class='respect'>Respect +</span></h1>"
    const winSound=new Audio('audio/mission-passed.mp3')
    winSound.play()
}








