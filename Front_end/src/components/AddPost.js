import React, { Component } from 'react'
import axios from 'axios'

export class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            subject: '',
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }
    onChangeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeSubject(e){
        this.setState({
            subject:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log('Form Submitted');
        console.log(this.state.name);
        console.log(this.state.title);
        console.log(this.state.subject);
        

        const newPost = {
            name: this.state.name,
            title: this.state.title,
            subject: this.state.subject,
        }
        axios.post('http://localhost:5000/post', newPost)
        .then(res=>console.log(res.data));

        this.setState({
            name:'',
            title:'',
            subject:''
        })
    }
    render() {
        return (
            <div>
            <div className="col-md-8 col-md-offset-5">
                <form onSubmit ={this.onSubmit}>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text"  name="name" 
                        className="form-control" 
                        value={this.state.name} 
                        onChange={this.onChangeName}
                        placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" 
                        className="form-control" 
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text"  name="subject" 
                        className="form-control" 
                        value={this.state.subject}
                        onChange={this.onChangeSubject} 
                        placeholder="Enter Subject" />
                    </div>
                    <button className="btn btn-success">Add Post</button>
                </form>
                </div>
            </div>
        )
    }
}

export default AddPost
