const express = require('express')
const router = new express.Router()
const {data,AllCountryData} = require('../../playground/1')


router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/world',async (req,res)=>{

    const info =await data()

    const TotalCases =info.cases
    const TodayCases = info.todayCases
    const TotalDeath = info.deaths
    const TodayDeath  =  info.todayDeaths
    const TotalRecovered =  info.recovered
    const Active = info.active
    

    res.render('world',{
        world:'World',
        TotalCases,
        TodayCases,
        TotalDeath,
        TodayDeath,
        TotalRecovered,
        Active
    })
 
})


router.get('/country',async(req,res)=>{
    res.render('country')
})

router.get('/showCountry',async (req,res)=>{

    const country  = req.query.country
    // console.log(req.query)
    // console.log(country)
  
    const info = await AllCountryData()
    const len = info.length

    var i = 0;
    var erm=0;
    for(reql=0;reql<len;reql++){
        const reqcountry = info[reql].country
        if(country === reqcountry){
            i=reql;
            erm=1;
        }

    }

    // console.log(reql)
    const TotalCases =info[i].cases
    const TodayCases = info[i].todayCases
    const TotalDeath =  info[i].deaths
    const todayDeaths =  info[i].todayDeaths
    const Recovered = info[i].recovered
    const TodayRecovered =  info[i].todayRecovered
    const active =  info[i].active
    const Totaltest =  info[i].tests

    console.log(country)
    if(erm===1){

        // console.log({       country,
        //     TotalCases,
        //     TodayCases,
        //     TotalDeath,
        //     todayDeaths,
        //     Recovered,
        //     TodayRecovered,
        //     active,
        //     Totaltest})
        
    res.render('showCountry',{
        countryasked:country,
        TotalCases,
        TodayCases,
        TotalDeath,
        todayDeaths,
        Recovered,
        TodayRecovered,
        active,
        Totaltest
    })

    }
    else{
        res.render('error',{country})
    }

})


module.exports =     router

// {
//     updated: 1592333274821,
//     country: 'Israel',
//     countryInfo: {
//       _id: 376,
//       iso2: 'IL',
//       iso3: 'ISR',
//       lat: 31.5,
//       long: 34.75,
//       flag: 'https://disease.sh/assets/img/flags/il.png'
//     },
//     cases: 19495,
//     todayCases: 258,
//     deaths: 302,
//     todayDeaths: 0,
//     recovered: 15449,
//     todayRecovered: 34,
//     active: 3744,
//     critical: 36,
//     casesPerOneMillion: 2120,
//     deathsPerOneMillion: 33,
//     tests: 772074,
//     testsPerOneMillion: 83943,
//     population: 9197590,
//     continent: 'Asia',
//     oneCasePerPeople: 472,
//     oneDeathPerPeople: 30456,
//     oneTestPerPeople: 12,
//     activePerOneMillion: 407.06,
//     recoveredPerOneMillion: 1679.68,
//     criticalPerOneMillion: 3.91
//   },


