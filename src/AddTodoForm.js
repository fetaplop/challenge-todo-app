import React, { Component } from 'react'

class addTodoForm extends Component {
    state = {
        title: "",
        body: "",
    }

    //we should get the function to add one as props!!! it's a function inside App.js unless it is moved to
    // a service.js later

    handleSubmit = (e) => { // prevent refresh on submit and call addNewTodo
        e.preventDefault()
        const newTodo = this.state
        console.log('newTodo in handleSubmit before passing it to function: addnewTodo(newTodo)', newTodo)

        //use the function passed as props!
        this.props.addNewTodo(newTodo)

        // reset the form
    }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
                    <br/>
                    <label>Body</label>
                    <input type="text" name="body" value={this.state.body} onChange={this.handleInput} />
                    <br/>

                    <button type="submit">Add new todo</button>
                </form>
                
            </div>
        )
    }
}
export default addTodoForm