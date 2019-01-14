import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        const { item } = this.props;
        return (
            <ul className="pokeType">
                {item.types.map((typeItem, index) => {
                    return (
                        <li className="poketype_item" key={index}>{typeItem}</li>
                    );
                })}
            </ul>
        );
    }
}

export default Pokemon;