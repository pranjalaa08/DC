const characterObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("showcharacter")
        }
        else{
            entry.target.classList.remove("showcharacter")
        }
    })
})

const introOberver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("showintro")
        }
        else{
            entry.target.classList.remove("showintro")
        }
    })
})

const hiddenIntro = document.querySelectorAll('.hiddenintro')
const hiddenCharacter = document.querySelectorAll('.hiddencharacter')
hiddenIntro.forEach((intro)=>{
    console.log(intro)
    introOberver.observe(intro)
})
hiddenCharacter.forEach((character)=>{
    characterObserver.observe(character)
})

