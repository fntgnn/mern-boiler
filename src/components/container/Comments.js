import React, {Component} from 'react';
import { APIManager } from '../../utils';

import { CreateComment, Comment } from '../presentation';
import styles from './styles';

export default class Comments extends Component{
    constructor(){
        super();
        this.state={
            // comment:{
            //     body: '',
            //     username: ''
            // },
            list: []
        }
    }
    
    componentDidMount(){
        APIManager.get('/api/comment', null, (err, response)=>{  //cosa si fa alla fine (funzione di callback)
            if(err){
                console.log("Error "+err);
            }

                this.setState({
                    list: response.results
                });
        });            //cosa si fa alla fine (funzione di callback)
    }
    
    submitComment(comment){
         event.preventDefault();
        // console.log('submitComment: '+JSON.stringify(this.state.comment));
        // /*let updatedList=Object.assign([], this.state.list);
        // updatedList.push(this.state.comment);
        // this.setState({
        //     list: updatedList
        // });
        // */
        let updatedComment=Object.assign({}, comment);
        APIManager.post('/api/comment', updatedComment, (err, response)=>{
            if(err){
                console.log("Error: "+err);
                return;
            }

            console.log(JSON.stringify(response));
            let updatedList=Object.assign([], this.state.list);
            updatedList.push(response.result);
            this.setState({
                list: updatedList
            });
        });

        //sopra se non si usa il presentation layer
        console.log("submitComment Container: "+JSON.stringify(comment));
        /*
        Così funzionaaaa! ma seguiamo il video...
        event.preventDefault();     //perchè fa il reload altrimenti, mah...
        let username=document.forms[0].username.value;
        let body=document.forms[0].comment.value;
        let time = Date.now();
        let comment={
            username: username,
            body: body,
            timestamp: time
        };
        let lista=this.state.list;
        lista.push(comment);
        //console.log(lista);
        this.setState({
            list: lista
        });
        console.log(this.state);*/
    }
    
    
    render(){

        
        //scritta in es6
        const commentItems= this.state.list.map((comment /*elemento*/, i/*index*/)=>{
            return (
                <li key={i}><Comment comment={comment}/></li>
            );
        });
        
        return(
            <div>
                
                <h1>Comments: Zone 1</h1>
                <div style={styles.comment.commentsBox}>
                    <ul style={styles.comment.commentsList}>
                        {commentItems}
                    </ul>
                </div>
            
                <div>

                    <CreateComment onCreate={this.submitComment.bind(this)}/>
                </div>
            </div>
        );
    }
}