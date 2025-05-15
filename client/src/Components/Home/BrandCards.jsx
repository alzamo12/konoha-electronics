import React from 'react';
import BrandCard from './BrandCard';

const BrandCards = () => {

    const brands = ["Samsung", "Apple", "Walton", "Pixel", "Xiaomi", "Vivo"];

    return (
        <div className='mt-12'>
            <h2 className="card-title text-5xl">Our Brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-8 mt-10'>
                {
                    brands.map(brand => <BrandCard brand={brand} key={brand} />)
                }
            </div>
        </div>
    );
};

export default BrandCards;