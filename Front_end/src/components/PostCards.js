import React, { Component } from 'react'
import axios from 'axios'

const Post = props => (
    <tr>
        <td>{props.post.name}</td>
        <td>{props.post.title}</td>
        <td>{props.post.subject}</td>
    </tr>
)

export class PostCards extends Component {
    constructor(props){
        super(props);
        this.state = 
        {posts:[]
        };
    }
    postList() {
        return this.state.posts.map(function(currentPost, i){
            return <Post post={currentPost} key={i} />;
        })
    }
    componentDidMount(){
        axios.get('http://localhost:5000/posts')
        .then(response =>{
            this.setState({posts:response.data});
            //console.log(response.data);            
        }).catch((err)=>{
            console.log(err);
            
        })
    }
    render() {
        return (
            <div>
        <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.postList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PostCards
