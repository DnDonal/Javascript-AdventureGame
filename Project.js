let content = [
    {
        pageC:  "Start, This is only here so I can think around the page numbers and the int easier",
        pageN: 0,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Opening",
        pageN: 1,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Adventure?",
        pageN: 2,
        img: "Images/Test_Image.jpg",
        type: "choice"
    },
    {
        pageC:  "Farming Description",
        pageN: 3,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Ending: It an honest living",
        pageN: 4,
        img: "Images/Test_Image.jpg",
        type: "ending"
    },
    {
        pageC:  "Travel",
        pageN: 5,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Describe road",
        pageN: 6,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Merchant?",
        pageN: 7,
        img: "Images/Test_Image.jpg",
        type: "choice"
    },
    {
        pageC:  "Own cow",
        pageN: 8,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Ending: Have a cow, man",
        pageN: 9,
        img: "Images/Test_Image.jpg",
        type: "ending"
    },
    {
        pageC:  "Continue",
        pageN: 10,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Something on side of road",
        pageN: 11,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Investigate?",
        pageN: 12,
        img: "Images/Test_Image.jpg",
        type: "choice"
    },
    {
        pageC:  "Corpse",
        pageN: 13,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Note",
        pageN: 14,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Follow note?",
        pageN: 15,
        img: "Images/Test_Image.jpg",
        type: "choice"
    },
    {
        pageC:  "Go to town",
        pageN: 16,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Mugging",
        pageN: 17,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Ending: Small town hero",
        pageN: 18,
        img: "Images/Test_Image.jpg",
        type: "ending"
    },
    {
        pageC:  "adventure",
        pageN: 19,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "woods",
        pageN: 20,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "overgrown path or clear path?",
        pageN: 21,
        img: "Images/Test_Image.jpg",
        type: "choice"
    },
    {
        pageC:  "Lost",
        pageN: 22,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Witch",
        pageN: 23,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Roomate?",
        pageN: 24,
        img: "Images/Test_Image.jpg",
        type: "choice"
    },
    {
        pageC:  "New roomate",
        pageN: 25,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Ending: A new life",
        pageN: 26,
        img: "Images/Test_Image.jpg",
        type: "ending"
    },
    {
        pageC:  "go back to woods",
        pageN: 27,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "go home",
        pageN: 28,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Ending: That is enough adventuring for me",
        pageN: 29,
        img: "Images/Test_Image.jpg",
        type: "ending"
    },
    {
        pageC:  "Safe Path",
        pageN: 30,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Castle",
        pageN: 31,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Enter",
        pageN: 32,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Demon!",
        pageN: 33,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Take his deal?",
        pageN: 34,
        img: "Images/Test_Image.jpg",
        type: "choice"
    },
    {
        pageC:  "Demon gives power",
        pageN: 35,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Ending: Shrouded in evil",
        pageN: 36,
        img: "Images/Test_Image.jpg",
        type: "ending"
    },
    {
        pageC:  "Demon sealed",
        pageN: 37,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Treasure room",
        pageN: 38,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "go home",
        pageN: 39,
        img: "Images/Test_Image.jpg"
    },
    {
        pageC:  "Ending: True hero",
        pageN: 40,
        img: "Images/Test_Image.jpg",
        type: "ending"
    }
    
]
let page = 0

let output = document.getElementById('output')   

let audioFile = "Music/2020-02-22_-_Relaxing_Green_Nature_-_David_Fesliyan.mp3"
let isPlaying = false
let audio = new Audio(audioFile)
audio.volume = 0.3
audioSetting = 0.3

window.onload=function(){
    let audioButton = document.getElementById("audioButton")
    let volume = document.getElementById("volume")
    let nextButton = document.getElementById("nextButton")
    let optionOneButton = document.getElementById("optionOneButton")
    let optionTwoButton = document.getElementById("optionTwoButton")
    
    nextButton.style.display = "block"
    optionOneButton.style.display = "none"
    optionTwoButton.style.display = "none"
    
    audioButton.addEventListener('click', function () {
        if(isPlaying == false)
        {
            audio = new Audio(audioFile)
            audio.volume = audioSetting
            audio.play();
            isPlaying = true
        }
        else
        {
            audio.pause();
            isPlaying = false
        }
    })
    
    volume.addEventListener('input', function() {
        audioSetting = this.value
        audio.volume = audioSetting
    })
    
    optionOneButton.addEventListener('click', function() {
        
        if(content[page].pageN == 2){
            page = 5
            optionOneButton.innerHTML = "Buy Cow"
            optionTwoButton.innerHTML = "Don't Buy"
        }
        if(content[page].pageN == 7){
            page = 8
        }
        if(content[page].pageN == 12){
            page = 13
            optionOneButton.innerHTML = "Stop the Demon"
            optionTwoButton.innerHTML = "Go To Town"
        }
        if(content[page].pageN == 15){
            page = 19
            optionOneButton.innerHTML = "Overgrown Path"
            optionTwoButton.innerHTML = "Safe Path"
        }
        if(content[page].pageN == 21){
            page = 22
            optionOneButton.innerHTML = "Live With Witch"
            optionTwoButton.innerHTML = "Leave"
            if(isPlaying == true) {
                audio.pause()
            }
            audioFile = "Music/2019-06-14_-_Warm_Light_-_David_Fesliyan.mp3"
            audio = new Audio(audioFile)
            audio.volume = audioSetting
            if(isPlaying == true) {
                audio.play()
            }
        }
        if(content[page].pageN == 24){
            page = 25
        }
        if(content[page].pageN == 34){
            let htmlDoc = document.querySelector('html')
            htmlDoc.style.backgroundColor = 'black'
            output.style.backgroundColor = "black"
            output.style.color = "red"
            nextButton.style.color = "red"
            nextButton.style.borderColor = "red"
            page = 35
        }
        
        nextButton.style.display = "block"
        optionOneButton.style.display = "none"
        optionTwoButton.style.display = "none"
        output.innerHTML = output.innerHTML + 
        "<br> ------------------------------------------------------------------------------------------------------------------------------------------------------ <br>" 
        + content[page].pageC + "<br> <img src='"+content[page].img+"'>"
        window.scrollTo(0,document.body.scrollHeight);
    })
    
    optionTwoButton.addEventListener('click', function() {
        if(content[page].pageN == 2){
            page = 3
        }
        if(content[page].pageN == 7){
            page = 10
            optionOneButton.innerHTML = "Investigate"
            optionTwoButton.innerHTML = "Go To Town"
        }
        if(content[page].pageN == 12){
            page = 16
            if(isPlaying == true) {
                audio.pause()
            }
            audioFile = "Music/2018-04-02_-_Beautiful_Village_-_David_Fesliyan.mp3"
            audio = new Audio(audioFile)
            audio.volume = audioSetting
            if(isPlaying == true) {
                audio.play()
            }
        }
        if(content[page].pageN == 15){
            page = 16
            if(isPlaying == true) {
                audio.pause()
            }
            audioFile = "Music/2018-04-02_-_Beautiful_Village_-_David_Fesliyan.mp3"
            audio = new Audio(audioFile)
            audio.volume = audioSetting
            if(isPlaying == true) {
                audio.play()
            }
        }
        if(content[page].pageN == 21){
            page = 30
            optionOneButton.innerHTML = "Take Deal"
            optionTwoButton.innerHTML = "Reject Deal"
        }
        if(content[page].pageN == 24){
            page = 27
        }
        if(content[page].pageN == 34){
            page = 37
        }
        nextButton.style.display = "block"
        optionOneButton.style.display = "none"
        optionTwoButton.style.display = "none"
        output.innerHTML = output.innerHTML + 
        "<br> ------------------------------------------------------------------------------------------------------------------------------------------------------ <br>" 
        + content[page].pageC + "<br> <img src='"+content[page].img+"'>"
        window.scrollTo(0,document.body.scrollHeight);
    })
    
    nextButton.addEventListener('click', function() {
        
        nextButton.innerHTML = "Next"
        page++
                if(content[page].pageN == 31){
            if(isPlaying == true) {
                audio.pause()
            }
            audioFile = "Music/2019-11-30_-_No_More_Good_-_David_Fesliyan.mp3"
            audio = new Audio(audioFile)
            audio.volume = audioSetting
            if(isPlaying == true) {
                audio.play()
            }
        }
        if(content[page].pageN == 39){
            if(isPlaying == true) {
                audio.pause()
            }
            audioFile = "Music/2019-07-29_-_Elven_Forest_-_FesliyanStudios.com_-_David_Renda.mp3"
            audio = new Audio(audioFile)
            audio.volume = audioSetting
            if(isPlaying == true) {
                audio.play()
            }
        }
        output.innerHTML = output.innerHTML + 
        "<br> ------------------------------------------------------------------------------------------------------------------------------------------------------ <br>" 
        + content[page].pageC + "<br> <img src='"+content[page].img+"'>"
        window.scrollTo(0,document.body.scrollHeight);
        
        if(content[page].type == "choice") {
            nextButton.style.display = "none"
            optionOneButton.style.display = "block"
            optionTwoButton.style.display = "block"
        }
        if(content[page].type == "ending") {
            nextButton.style.display = "none"
            optionOneButton.style.display = "none"
            optionTwoButton.style.display = "none"
        }
    })
}