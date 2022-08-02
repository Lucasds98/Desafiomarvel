import React, { useState, useEffect } from 'react';
import api from '../../config/api'
import { Link } from 'react-router-dom';
var crypto = require('crypto');

function CharacterDescription(props) {
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(false);

    const getInfo = async () => {
        setLoading(true);
        let value = "21265c4ced3f4adf6abc48ccd3489addc7dac33810422e8534c39ac651cfbdb580f9c4c19"
        var hash = crypto.createHash('md5').update(value).digest('hex');
        const response = await api.get(`/v1/public/characters/${props.match.params.id}?ts=2&limit=100&apikey=${'0422e8534c39ac651cfbdb580f9c4c19'}&hash=${hash}`);
        setInfo(response.data.data.results[0])
        setLoading(false);
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-start p-3">
                <Link to={'/'} className='button1'>Back</Link>
            </div>
            {(loading === true) ?
                <div className="d-flex justify-content-start align-items-center h-100 w-100 flex-column mt-5">
                    <span>Loanding ....</span>
                </div>
                :
                <></>
            }
            <div className='px-5'>
                <div className='row'>
                    {(info.thumbnail !== undefined) ?
                        <>
                            <div className='col-12 col-lg-2'>
                                <img src={info.thumbnail.path + "." + info.thumbnail.extension} className='img-fluid w-100' alt='' />
                            </div>
                            <div className='col-10 mt-2 mt-lg-0'>
                                <span className='d-block'><strong>Name:</strong> {info.name}</span>
                                <span className='d-block'><strong>Description:</strong> {(info.description !== "" & info.description !== undefined & info.description !== null) ? info.description : "Uninformed"}</span>
                                <span className='fw-bold'>Comics:</span>
                                {info.comics.items.map((item, index) => (
                                    <li className='' key={index}>{item.name}</li>
                                ))}
                                {(info.comics.items.length === 0) ?
                                    <>
                                        <span>Uninformed</span>
                                    </>
                                    :
                                    <></>
                                }
                            </div>
                        </>
                        : <></>
                    }
                </div>
            </div>

        </>
    );
}

export default CharacterDescription; 
