const sportsDB = (search)=>{
    //const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck`;
    //const url = `https://www.thesportsdb.com/api/v1/json/2/all_countries.php`;
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${search}`;
    fetch(url)
    .then(res => res.json())
    //.then(data => sportsDbData(data.countries))
    .then(data => countryLeague(data.countries))
}

const countryLeague = leagues =>{
    const mainContainer = document.getElementById('sports-data');
    leagues.forEach(league=>{
        console.log(league);
        const newDiv = document.createElement('div');
        newDiv.innerHTML= `
           <h2>Country: ${league.strCountry}</h2>
           <img src="${league.strBanner}" alt="">
           <img src="${league.strBadge}" alt="">
           <img src="${league.strFanart1}" alt="">
           <img src="${league.strFanart2}" alt="">
           <img src="${league.strFanart3}" alt="">
           <img src="${league.strFanart4}" alt="">
           <img src="${league.strLogo}" alt="">
           <img src="${league.strPoster}" alt="">
           <img src="${league.strTrophy}" alt="">
         `;
        mainContainer.appendChild(newDiv);
    })
}

const countryField = ()=>{
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    sportsDB(searchText);
}

// const countryButton = document.getElementById('btn-country').addEventListener('click',function(){
//     const searchField = document.getElementById('input-field');
//     const searchText = searchField.value;
//     sportsDB(searchText);
// })

// sportsDB('');





