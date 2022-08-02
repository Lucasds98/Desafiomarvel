import React, { useState } from 'react';
import api from '../../config/api'
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { connect } from 'react-redux';
var crypto = require('crypto');


function Home({ favorites, dispatch }) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCharacters = async (name) => {
        setLoading(true);
        let apikey = '0422e8534c39ac651cfbdb580f9c4c19';
        let value = "21265c4ced3f4adf6abc48ccd3489addc7dac33810422e8534c39ac651cfbdb580f9c4c19"
        var hash = crypto.createHash('md5').update(value).digest('hex');

        let url = '/v1/public/characters?ts=2&limit=100&apikey=' + apikey + '&hash=' + hash;
        if (name !== '') {
            url = url + '&nameStartsWith=' + name
        }
        const response = await api.get(url);
        setCharacters(response.data.data.results);
        setLoading(false);
    };


    function addFavorite(item) {
        return {
            type: "ADD_Favorite",
            item
        };
    }

    function removeFavorite(item) {
        return {
            type: "REMOVE_Favorite",
            item
        };
    }

    return (
        <>
            <div className="d-flex justify-content-start float">
                <Link to={'/my-favorites'} className='button1'>View my favorites</Link>
            </div>
            <div className="d-flex justify-content-start align-items-center flex-column overflow-x-none">
                <span>Wellcome !</span>
                <input placeholder="Enter character name" type="text" style={{ width: "30%" }} onChange={({ target }) => getCharacters(target.value)}/>
                <div className='row justify-content-center '>
                    {characters.map((item,index) => (
                        <Card
                            show={true}
                            Key={index}
                            img={item.thumbnail.path + "." + item.thumbnail.extension}
                            title={item.name}
                            SeeMoreButtonOnClick={`/view-more/${item.id}`}
                            onClickFavorites={() => dispatch(addFavorite(item))}
                            isFavorite={favorites.findIndex(element => element.id === item.id) !== -1}
                            onClickRemoveFavorites={() => dispatch(removeFavorite(item))}
                        />
                    ))}
                    {(loading === true) ?
                        <span>Loanding ....</span>
                        :
                        ""
                    }
                </div>
            </div>
        </>
    );
}

export default connect(state => ({ favorites: state }))(Home);