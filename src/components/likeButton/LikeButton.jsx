import "./LikeButton.css"
import React, {Component} from 'react'
import axios from 'axios';

class LikeButton extends Component {

        state = {
            articleId: this.props.articleId,
            countLikes: 0
        }
      
        componentDidMount() {
            axios
              .get("https://127.0.0.1:5001/v1/like?articleId="+ this.state.articleId)
              .then(response => this.setState({ countLikes: response.data.count }));
        }

        inc = () => {
            this.setState({
                countLikes: this.state.countLikes + 1
            });
            axios
              .post("https://127.0.0.1:5001/v1/like?articleId=" + this.state.articleId)
              .then(response => this.setState({ countLikes: response.data.count }));
        }
        
        render() {
            return (
                <div className="LikeButton">                   
                    <button onClick={this.inc}>Like</button>
                    <label>{this.state.countLikes} Likes</label>
                </div>
            )
        }
      }

export default LikeButton