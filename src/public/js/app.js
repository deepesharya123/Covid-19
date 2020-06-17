const formOfCountry = document.querySelector('#formC')
const country = document.querySelector('#country')

formOfCountry.addEventListener('submit',(e)=>{
    e.preventDefault()

        const Country = country.value
        
    window.location.href = 'http://localhost:3000/showCountry?country='+Country;
    // fetch('http://localhost:3000/showCountry?country='+Country)
    // .then((response)=>{

    //     response.json().then(()=>{

            
    //     })
    // })
})

