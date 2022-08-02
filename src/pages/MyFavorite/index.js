import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from '../../components/Card';
import { useSelector } from 'react-redux';

function MyFavorite() {
    const favorites = useSelector(state => state);
    return (
        <div className='overflow-x-none'>
            <div className="d-flex justify-content-start  p-4">
                <Link to={'/'} className='button1'>Back</Link>
            </div>
            <span className='p-4'><b>My favorites:</b></span>
            <div className='p-4 row'>
                {favorites.map((item) => (
                    <Card 
                        show={false}
                        img={item.thumbnail.path + "." + item.thumbnail.extension}
                        title={item.name}
                    />
                ))}
                {(favorites.length === 0)?
                    <span><b>No record found</b></span>
                    :
                    <></>
                }
            </div>
        </div>
    );
}

export default MyFavorite;