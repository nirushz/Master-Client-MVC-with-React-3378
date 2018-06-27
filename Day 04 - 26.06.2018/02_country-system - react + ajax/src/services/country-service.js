import countryInfo from "../components/CountryInfo/ComponentInfo";

export class ContryService {

    setUrl(actionType, param) {
        switch (actionType) {
            case "ALL":
                this.url = `https://restcountries.eu/rest/v2/all?fields=name`;
                break;

            case "SINGLE_COUNTRY":
                this.url = `https://restcountries.eu/rest/v2/name/${param}?fullText=true&fields=borders;alpha3Code;flag;name`;
                break;

            default:
                this.url = `https://restcountries.eu/rest/v2/all?fields=name`;
                break;
        }

        this.getCountry
    }


    /** 
     *@function getCountry - this function exec a http req
     *@returns response.json - the result that we got from the http req
    */
    async getCountry() {
        try {
            let response = await fetch(this.url, { method: "GET" });
            let body = await response.json();
            return body;
        }
        catch (e) {
            console.log(e);
        }
    }
}


/*
function : fetch
parameters:
1) url (server address) - string;
2) request options - {
    body
    headers
    method
}

returns:
Promise<Response>
*/