import React from 'react'
import { Link } from 'react-router-dom';
import "./HeroCard.css"

export const HeroCard = ({ id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {

        

        return (
            <Link to={`/hero/${id}`} className="my-card">
                <img src={`./assets/${id}.jpg`} className="img img-responsive" alt={superhero}/>
                <div className="profile-name">{superhero}</div>
                <div className="profile-position">{alter_ego}</div>
                <div className="profile-overview">
                    <div className="profile-overview">
                        <div className="row">
                            <div className="col-ms-4">
                                <h3>{publisher}</h3>
                                <p>Primera aparición: <br />{first_appearance}</p>
                                {
                                    (alter_ego !== characters)
                                    && <p>{characters}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    };
  /* return (
    <div className='col'>
        <div className="card">

            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ heroImageUrl } className='card-img' alt={superhero}/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='cad-text'>{alter_ego}</p>

                        <p>{characters}</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
} */
