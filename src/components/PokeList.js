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
                                <div className="container_pokeimg">
                                    <img className="pokeimg" alt="" src={item.url}></img>
                                </div>
                                <div className="container_pokename">
                                    <h2 className="pokename">{item.name}</h2>
                                </div>
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
