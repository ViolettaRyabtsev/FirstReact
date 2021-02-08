import React from 'react'
import books from './books.json'

class RenderBooks extends React.Component {
    constructor(props) {
        super(props);
        //Object.assign(oldState, newState)

        this.state = {
            loading: true

        };
    }
    componentDidMount() {
        books.map(book => this.setState({
            name: book.name,
            author: book.author
        })
        )


    }
    render() {
        return (
            <div>
                <h1> {book}</h1>
            </div>
        )

    }
}

export default RenderBooks;

