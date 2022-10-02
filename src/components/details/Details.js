import React from 'react';

export const Details =  ({pokedata}) => {
    const pokemon = pokedata.pokeData


    const abilities = pokemon.abilities && pokemon.abilities.reduce((acc,elem,) => {
        return acc += acc ? ', ' +elem.ability.name : elem.ability.name 
    },'')

    const stats = pokemon.stats && pokemon.stats.map((elem) => {
        return <p className='pokemon-details' key={elem.stat.name} ><span className='details-label'>{elem.stat.name}: </span> <span><input type="range" value={elem.base_stat} class="slider" id="myRange"/>{elem.base_stat}</span></p>
    })

    const heldItems = pokemon.held_items && pokemon.held_items.reduce((acc,elem,) => {
        return acc += acc ? ', ' +elem.item.name : elem.item.name 
    },'')

    const detailsContainer = pokemon && Object.keys(pokemon).length > 0 && <>
        <img src={pokemon.sprites.front_default} alt="No Image"/>
        <div>
            <p className='pokemon-details'><span className='details-label'>Abilities: </span> <span>{abilities}</span></p>
            {stats}
            <p className='pokemon-details'><span className='details-label'>Held Items: </span> <span>{heldItems}</span></p>
        </div>
    </>

    return (
        <div className='pokemon-details-container'>
        {pokedata.errorState  ? 
            <div className='error-container'>No pokemon exists with provided name!!!</div> : 
            <div className='pokemon-pokedex'>
                {detailsContainer}
            </div>
            }
        </div>
    )
}