import React, { Component } from 'react';
import '../App.css';

class Crimes extends Component {
    constructor() {
        super();

        this.state = {
            crimes: [],
            search: [],
            text: '',
        }

        this.searchHere = this.searchHere.bind(this);
    }

    crimesData() {
        fetch("https://data.police.uk/api/crime-categories")
            .then(data => {
                data.json()
                    .then(data => {
                        this.setState({ crimes: data })
                    })
            })
    }

    searchHere(e) {
        const { crimes } = this.state;
        const text = e.target.value;

        const search = crimes.filter((elem) => {
            return (elem.name).substring(0, text.length).toLowerCase().indexOf(text.toLowerCase()) !== -1
        })

        this.setState({ search, text })
    }


    componentDidMount() {
        this.crimesData();
    }

    render() {
        const { crimes, search, text } = this.state;
        const arr = !text.length ? crimes : search;

        return (
            <div>
                <input type="text" placeholder="Seatch here..." onChange={this.searchHere} />
                {arr.map((e, i) => {
                    return <p className="items" key={e.url}>{i + 1}) {e.name}</p>
                })}
            </div>
        )
    }
}

export default Crimes;