import superagent from 'superagent';

export default{

	get: (url, params, callback) =>{
		superagent
            .get(url)       //richiesta che facciamo
            .query(params)            //se ci sono parametri (tipo .../api/zone?city=newyork)
            .set('Accept', 'application/json')     //cosa accettiamo (perchè ci sono api che ritornano html per esempio, o altre robe)
            .end((err, response)=>{     //superagent prima mette l'err e poi il payload (risposta)
                if(err){
                    callback(err, null);
                    return;
                }

                const confirmation = response.body.confirmation;	//perchè noi abbiamo messo un campo confirmation (guarda un api/zone specifico che non esiste...c'è il campo confirmation=fail)
                if(confirmation!='success'){
                	callback({message: response.body.message}, null);
                	return;
                }


                callback(null, response.body);
            }); 
	},

	post: (url, body, callback) =>{
		superagent
			.post(url)
			.send(body)
			.set('Accept', 'application/json')
			.end((err, response)=>{     //superagent prima mette l'err e poi il payload (risposta)
                if(err){
                    callback(err, null);
                    return;
                }

                const confirmation = response.body.confirmation;	//perchè noi abbiamo messo un campo confirmation (guarda un api/zone specifico che non esiste...c'è il campo confirmation=fail)
                if(confirmation!='success'){
                	callback({message: response.body.message}, null);
                	return;
                }


                callback(null, response.body);
            }); 

	},


	put: () =>{

	},

	delete: () =>{

	},


}
