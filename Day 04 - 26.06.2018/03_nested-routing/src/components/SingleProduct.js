import React from 'react';
import { Route, Link } from 'react-router-dom';
import products from './../models/products';

function singleProduct({ location, match }) {
    console.log(match);
    const product = products.find(({ id }) => id === match.params.x)

    return (
        <div className="container-fluid bg-3 text-center">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link type="button" className="col-sm-4 btn btn-default btn-lg" to={`${match.url}/test`}>test</Link>


            <Route path={`${match.url}/test`}
                component={singleProductChild} />
        </div>
    )
}


function singleProductChild() {
    return <p>singleProductChild Worked</p>;
}

export default singleProduct;