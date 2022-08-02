import React from 'react';
import outlineBlz from '../../assets/img/icon_blz.png';
import outlineBlzBlack from '../../assets/img/blz_icon_black.png';
import { Link } from 'react-router-dom';

export function Card(props) {

    return (

        <div key={props.Key} className={`card d-flex col-10 col-lg-2 p-3 m-2 border-radius-10`}>
            <div className="">
                <img src={props.img} style={{ maxHeight: "230px" }} className='w-100 img-fluid border-radius-10' alt="" />
            </div>
            <div className="my-2">
                <span>{props.title}</span>
            </div>
            {(props.show === true) ?
                <div className='d-flex text-align-center align-items-end h-100 mt-3'>
                    <Link to={props.SeeMoreButtonOnClick} className='w-100'>View more</Link>
                    {(props.isFavorite === true) ?
                        <img onClick={props.onClickRemoveFavorites} className='c-pointer' src={outlineBlzBlack} alt='' width={20} height={20} />
                        :
                        <img onClick={props.onClickFavorites} className='c-pointer' src={outlineBlz} alt='' width={20} height={20} />
                    }
                </div>
                :
                <></>
            }
        </div>
    );
}

