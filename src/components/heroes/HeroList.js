


import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

/* publisher del heroes */
export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ] ) 
    // const heroes = getHeroesByPublisher( publisher );

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
            {
                heroes.map ( hero => ( 
                    // Mandar las propos cada una de las popiedades del heroe por separado
                    // para ellos usamos ...hero
                    <HeroCard key={ hero.id } {...hero} />
                ))
            }
        </div>
    )
}
