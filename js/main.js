document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const trickName = document.querySelector('input').value
    try{
        const response = await fetch(`https://healthklub-skate-tricks-api.herokuapp.com/api/${trickName}`)
        const data = await response.json()

        console.log(data)

        document.querySelector('#nameOutput').innerText = data.name
        document.querySelector('#infoOutput').innerText = data.info

    }catch(error){
        console.log(error)
    }
}




