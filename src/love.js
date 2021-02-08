import React from 'react'
import books from './books.json'
//import RenderBooks from "./RenderComponent";

class RenderLove extends React.Component {
    constructor(props) {
        super(props);
        //Object.assign(oldState, newState)

        this.state = {
            loading: true,
            books: []
        };
    }

    componentDidMount() {

        books.map(book => {
            if (book.title === 'love') {
                this.setState({
                    books: [].push(book),
                    name: book.author,
                    text: book.text,
                    title: book.title,
                    loading: false
                })
            }
            return null;
        }
        )
    }

    render() {
        if (this.state.loading) {
            return <h1>loading</h1>
        }

        const { text, name, title } = this.state

        return (
            <div>
                <div>
                    <h1>{name}</h1>
                    <h2>{text}</h2>
                    <h2>{title}</h2>
                </div>

            </div>
        );

    }

}

export default RenderLove;