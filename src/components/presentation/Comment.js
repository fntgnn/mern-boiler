import React, {Component} from 'react';

import styles from './styles';

export default class Comment extends Component{
   
    
    render(){
        //const style=styles.comment;
        
        return(
            <div style={{marginBottom: '16px'}}>
            
                <p style={{fontSize: '18px', fontWeight:'600'}}>{this.props.comment.body} </p>
            
                <span style={{fontWeight:'200'}}>{this.props.comment.username}</span>
                <span style={{marginLeft:'12px', marginRight: '12px'}}>| </span>
                <span style={{fontWeight:'200'}}>{this.props.comment.timestamp} </span>
                <hr />
            </div>
        );
    }   
}
