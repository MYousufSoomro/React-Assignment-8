import React, { Component } from 'react';
import '../App.css';

class Forces extends Component {
    constructor() {
        super();

        this.state = {
            forces: [],
            search: [],
            text: '',
        }

        this.searchHere = this.searchHere.bind(this);
    }

    forcesData() {
        fetch("https://data.police.uk/api/forces")
            .then(data => {
                data.json()
                    .then(data => {
                        this.setState({ forces: data })
                    })
            })
    }

    searchHere(e) {
        const { forces } = this.state;
        const text = e.target.value;

        const search = forces.filter((elem) => {
            return (elem.name).substring(0, text.length).toLowerCase().indexOf(text.toLowerCase()) !== -1
        })

        this.setState({ search, text })
    }


    componentDidMount() {
        this.forcesData();
    }

    render() {
        const { forces, search, text } = this.state;
        const arr = !text.length ? forces : search;

        return (
            <div>
                <input type="text" placeholder="Seatch here..." onChange={this.searchHere} />
                {arr.map((e, i) => {
                    return <p className="items" key={e.id}>{i + 1}) {e.name}</p>
                })}
            </div>
        )
    }
}

export default Forces;