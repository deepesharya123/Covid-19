const nobelcovid = require('novelcovid')
const api = require('novelcovid');
 
// you can choose which URL to use, this will not change the behaviour of the API!!
api.settings({
    baseUrl: 'https://disease.sh' | 'https://api.caw.sh' | 'https://corona.lmao.ninja'
})
// this prints a summary of global data
const data  = async ()=>{ 
    return await api.all().then()
}
const AllCountryData = async (c)=>{
    const Country = c;

    // return await api.gov(Country).then()!!!
    return await api.countries({country:Country }).then() 
    // return await api.countries({country:Country}).then((data)=> data) 
}
module.exports = {
    data,
    AllCountryData
}
 
//end
