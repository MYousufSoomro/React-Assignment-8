import React, { Component } from 'react';
import '../App.css';
import { category } from '../config/api'
import { forces } from '../config/api'
import { crimes } from '../config/api'
import loading from '../assets/images/loading.gif'

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            crimeCategories: [],
            force: [],
            selectedForce: '',
            selectedCategory: '',
            filterData: [],
            limit: 15
        }
        this.submitButton = this.submitButton.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    selectedCategory(e) {
        this.setState({ selectedCategory: e.target.value })
    }

    selectedForce(e) {
        this.setState({ selectedForce: e.target.value })
    }

    async submitButton() {
        const { selectedForce, selectedCategory } = this.state;
        console.log('selectedForce===>>>>', selectedForce)
        console.log('selectedCategory===>>>>', selectedCategory)

        try {
            const filterData = await crimes(selectedCategory, selectedForce);
            this.setState({ filterData });
        } catch (error) {
            console.error(error);
        }
    }

    async categoryData() {
        try {
            const crimeCategories = await category();
            this.setState({ crimeCategories });
        } catch (error) {
            console.error(error);
        }
    }

    async forceData() {
        try {
            const force = await forces();
            this.setState({ force, isLoading: false });
        } catch (error) {
            console.error(error);
        }
    }


    
    componentDidMount() {
        this.categoryData();
        this.forceData();
    }

    loadMore() {
        this.setState({ limit: this.state.limit + 15 })
      }

    onScroll(e) {
        const scrollHeight = e.target.scrollHeight;
        const scrollTop = e.target.scrollTop;
        const clientHeight = e.target.clientHeight;
    
        if (scrollHeight - scrollTop === clientHeight) {
          this.loadMore();
        }
      }

    render() {
        const { isLoading, crimeCategories, force, filterData, limit } = this.state;
        console.log('filterData====>>>>', filterData);
        const temp = [...filterData];
    temp.length = limit

        return (
            <div>
                {isLoading && <img src={loading} />}
                <div className="select-div">
                    <select name="pagination" onChange={(e) => { this.selectedCategory(e) }}>
                        <option value={null} selected="selected">Select Category</option>
                        {crimeCategories.map((item) => {
                            return (
                                <option value={item.url} >{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <br />
                <div className="select-div">
                    <select name="pagination" onChange={(e) => { this.selectedForce(e) }}>
                        <option value={null} selected="selected">Select Force</option>
                        {force.map((item) => {
                            return (
                                <option value={item.id} >{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <br />
                <button onClick={this.submitButton}>Submit</button>
                <hr />
                {filterData.length != 0 && <div style={{ height: "300px", overflow: 'scroll' }} onScroll={this.onScroll.bind(this)}>
                    <table border="1px">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Category</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {temp.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.outcome_status.category}</td>
                                        <td>{item.outcome_status.date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>}
            </div>

        )
    }
}

export default Dashboard;