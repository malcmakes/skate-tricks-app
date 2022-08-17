document.querySelector('button').addEventListener('click', apiRequest)

const blankDiv = document.querySelector('#div-blank')


let imgTest = document.querySelector('#img-test')
let vidTest = document.querySelector('#vid-test')

async function apiRequest(){

    const trickName = document.querySelector('input').value

     imgTest.src = ''
     vidTest.src = ''

    try{
        const response = await fetch(`https://healthklub-skate-tricks-api.herokuapp.com/api/${trickName}`)
        const data = await response.json()

        console.log(data)

        blankDiv.classList.remove('hidden')

        showMedia()

        document.querySelector('#nameOutput').innerText = data.name
        document.querySelector('#infoOutput').innerText = data.info
        

     function showMedia () {
           //if data.media ends with .gif create an img element & put data.media in it
           if(data.media != undefined && data.media.endsWith('gif') ){
            console.log('ends with gif') 
            
            // vidTest.classList.add('hidden')
            imgTest.classList.remove('hidden')
            imgTest.src = data.media 

        } 
        //if data.media end with .mp4 create a video element & put data.media in it
        else if ( data.media != undefined && data.media.endsWith('mp4')){
            console.log('ends with mp4')

            vidTest.classList.remove('hidden')
            vidTest.src = data.media 
        }

     }
    }catch(error){
        console.log(error)
    }

}




