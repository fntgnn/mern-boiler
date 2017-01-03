import React, { Component } from 'react';
import { APIManager } from '../../utils/';


import { CreateZone, Zone } from '../presentation';


export default class Zones extends Component{
    constructor(){
        super();
        this.state={
            list: []
        }
    }
    
    componentDidMount(){
        console.log('componentDidMount');
        APIManager.get('/api/zone', null, (err, response)=>{  //cosa si fa alla fine (funzione di callback)
            if(err){
                console.log("Error "+err);
            }

            this.setState({
                list: response.results
            });
        });

    }
    
    
    addZone(zone){
        event.preventDefault();

        let updatedZone=Object.assign({},zone);
 
        console.log("ADD ZONE: "+JSON.stringify(updatedZone));


        APIManager.post('/api/zone', updatedZone, (err, response)=>{
            if(err){
                console.log("Error: "+err);
                return;
            }
            console.log('ZONE CREATED: '+JSON.stringify(response));

            let updatedList=Object.assign([],this.state.list);
            updatedList.push(response.result);  //potevamo fare updatedZone, ma è meglio l'altra perchè è quello che ritorna dal server...
            this.setState({list: updatedList});

        });

        //let updatedList=Object.assign([],this.state.list);
        //updatedList.push(this.state.zone);
        //this.setState({
        //    list: updatedList
        //});
    }
    
    render(){
        
        
        /* stessa cosa di sotto 
        const listItems= this.state.list.map(function(){
            
        });
        */
        
        //scritta in es6
        const listItems= this.state.list.map((zone /*elemento*/, i/*index*/)=>{
            return (
                <li key={i}><Zone currentZone={zone}/></li>
            );
        });
        
        return(
            <div>
                <ol>
                    {listItems}
                </ol>
                
                
                <CreateZone onCreate={this.addZone.bind(this)}/>

            </div>
            
        );
    }
}