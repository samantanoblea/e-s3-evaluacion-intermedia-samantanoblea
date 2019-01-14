import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div className="container_pokemonList">
                <ul className="pokemonList">
                    {pokemon.map((item, index) => {
                        return (
                            <li className="pokemon" key={index}>
                                <img className="pokeimg" alt="" src={item.url}></img>
                                <h2 className="pokeName">{item.name}</h2>
                                <Pokemon item={item} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default PokeList;
