document.querySelector('button').addEventListener('click', apiRequest)

const blankDiv = document.querySelector('#div-blank')

let imgTest = document.querySelector('#img-test')
let vidTest = document.querySelector('#vid-test')

async function apiRequest(){

    //Input form of User
    const trickName = document.querySelector('input').value

    //resets whats inside of img and video elements to EMPTY
     imgTest.src = ''
     vidTest.src = ''
   
    try{
        const response = await fetch(`https://web-production-91f8.up.railway.app/api/${trickName}`)
        // const response = await fetch(`https://healthklub-skate-tricks-api.herokuapp.com/api/${trickName}`)
        const data = await response.json()

        console.log(data)

        blankDiv.classList.remove('hidden')

        //Displays the Media Content
        showMedia()

        document.querySelector('#nameOutput').innerText = data.name
        document.querySelector('#infoOutput').innerText = data.info
        
     function showMedia () {
           //if data.media ends with .gif create an img element & put data.media in it
           if(data.media != undefined && data.media.endsWith('gif') ){
            console.log('ends with gif') 
           
            //removes video element when media is a gif
            vidTest.classList.add('hidden')

            //adds img element when media is a gif
            imgTest.classList.remove('hidden')
            imgTest.src = data.media 

        } 
        //if data.media end with .mp4 create a video element & put data.media in it
        else if ( data.media != undefined && data.media.endsWith('mp4')){
            console.log('ends with mp4')

            //REMOVES img element when media is a mp4
            imgTest.classList.add('hidden')

            //ADDS video element when media is an mp4
            vidTest.classList.remove('hidden')
            vidTest.src = data.media 
        }
     }
    }catch(error){
        console.log(error)
    }
}




