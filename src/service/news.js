// news.js is used for fetching news articles

import  { articles_url ,_api_key,category, country_code } from '../config/rest_consfig'


// Using async simply implies that a promise will be returned,
//  and if a promise is not returned, JavaScript automatically wraps it in a resolved promise with its value

// getArticles() function for fetching the articles

export async function getArticles(category='general'){
    try {

        // Back quotes (``) or Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
        // They were called "template strings" in prior editions of the ES2015 specification.
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${category}`,
        { headers: { 'X-API-KEY': _api_key}
    }
        );

        let result= await articles.json();
        
        articles=null;
        
        return result.articles;

    }
    catch(error){
        throw error;

    }
}