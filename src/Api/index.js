import axios from 'axios';

// This is Link get Data Covid19 in All The World By JSON
const url = 'https://corona.lmao.ninja/v2';

// Fetch Data to All World but without dtails information
export const fetchData = async (country) => {
    let changeUrl;

    if(country) {
        changeUrl = `${url}/countries/${country}`;
    }else {
        changeUrl = `${url}/all`;
    }

    console.log(changeUrl);
    try {
        const {data : {cases, recovered, deaths, todayCases, todayDeaths, affectedCountries, updated}} = await axios.get(changeUrl);
        return {cases, recovered, deaths, todayCases, todayDeaths, affectedCountries, updated};
        /* 
            or you can write this way
            const modifiedData = {confirmed : confirmed, ....}
        */
    } catch (error) {
        console.log(error, 'Error in fetch Data Static Cases All Worlds')
    }
}


// Fetch Data All Country with All Details
export const fetchAllCountry = async (country) => {
    let changeUrl;
    if(country) {
        changeUrl = `${url}/${country}`;
    }
    try {
        const {data} = await axios.get(changeUrl);
        return {data};
        /* 
            or you can write this way
            const modifiedData = {confirmed : confirmed, ....}
        */
    } catch (error) {
        console.log(error, 'Error in Fetch All Country')
    }
}

// Fetch Data Blog
export const fetchDataBlog = async () => {
    const url = process.env.PUBLIC_URL + '/JSON/data.json';

    if(url) {
        try {
            const blog = await axios.get(url);            
            return blog.data.blog;
        } catch (error) {
            console.log(error, 'Error in Fetch Data Blog News');
        }
    }else {
        console.log('Error in URL Get Data Blog');
    }
    
}

// Fetch Data All Questions About Coronavirus
export const fetchDataQuetions = async () => {
    const url = process.env.PUBLIC_URL + '/JSON/data.json';

    if(url) {
        try {
            const faq = await axios.get(url);
            return faq.data.faq;
        } catch (error) {
            console.log(error, 'Error in Fetch Data Faq"s Questions');
        }
    }else {
        console.log('Error in URL Get Data Reponse Questions');
    }
}

// Fetch Data Contact
export const fetchDataContact = async () => {
    const url = process.env.PUBLIC_URL + '/JSON/data.json';

    if(url) {
        try {
            const contact = await axios.get(url);
            return contact.data.setting;
        } catch (error) {
            console.log(error, 'Error in Fetch Data Contact');
        }
    }else {
        console.log('Error in URL Get Data Contact');
    }
}

// Fetch Data Link Several Source About Corona and Any Disease
export const fetchDataLinkWebsite = async () => {
    const url = process.env.PUBLIC_URL + '/JSON/data.json';

    if(url) {
        try {
            const websiteInfo = await axios.get(url);
            return websiteInfo.data.WebsiteInfo;
        } catch (error) {
            console.log(error, 'Error in Fetch Data Contact');
        }
    }else {
        console.log('Error in URL Get Data Contact');
    }
}

// Fetch Total Numbers Cases, Condirmed and Deaths About Coronavirus
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`https://covid19.mathdro.id/api/daily`);
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;

    }catch(error) {
        console.log(error, 'Error in Get Data Daily');
        
    }
}