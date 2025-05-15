import React from 'react';
import { Link } from 'react-router';

const BrandCard = ({ brand }) => {

    return (
            <Link to={`/brand/${brand}`} className='px-4 py-2 border-2 border-gray-300 '>
                <h2 className="card-title text-xl">{brand}</h2>
            </Link>
    );
};

export default BrandCard;