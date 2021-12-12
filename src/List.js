import React from 'react'

class List extends React.Component {
    render() {
        return (
            <div className="list">
                <h1> This List belongs to {this.props.name} </h1>
                <ul>
                    <li>Buying Whatsapp</li>
                    <li>Buying Facebook</li>
                    <li>Buying The Metaverse</li>
                </ul>
            </div>
        );
    }
}
//////////////// Demonstrating simple usage of Components in React
export default List;