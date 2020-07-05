import axios from 'axios';

const url = 'https://corona.lmao.ninja/v2';

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