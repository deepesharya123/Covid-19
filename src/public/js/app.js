const formOfCountry = document.querySelector('#formC')
const country = document.querySelector('#country')

formOfCountry.addEventListener('submit',(e)=>{
    e.preventDefault()

        const Country = country.value
        
    window.location.href = 'https://indiafightscovid-19.herokuapp.com/showCountry?country='+Country;
    // fetch('/showCountry?country='+Country)
    // .then((response)=>{

    //     response.json().then(()=>{

            
    //     })
    // })
})

