import React from 'react';

const countryInfo = (props) => {

    let formatArray = (props.country.borders) ? props.country.borders.join(" | ") : "";
    return (
        <div>
            <h1>{props.country.name}</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <td>flag</td>
                        <td><img src={props.country.flag} /></td>
                    </tr>
                    <tr>
                        <td>alpha3Code</td>
                        <td>{props.country.alpha3Code}</td>
                    </tr>
                    <tr>
                        <td>borders</td>
                        <td>{formatArray}</td>
                    </tr>
                </tbody>
            </table>

    
        </div>

    )
}
export default countryInfo;
