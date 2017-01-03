var Zone = require('../models/Zone');


module.exports={
    
    find: function(params, callback){
        Zone.find(params, function(err, zones){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, zones);  //dati desiderati
        });
    },
    
    findById: function(id, callback){
        Zone.findById(id, function(err, zone){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, zone);  //dati desiderati
        });
    },
    
    update: function(id, prams, callback){
        Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, zone);  //dati desiderati
        });
    },
    
    
    create: function(params, callback){
        
        /*var zips=params['zipCodes'];
        var zip=zips.split(',');        
        var newZips = [];
        zip.forEach(function(zipCode){
            newZips.push(zipCode.trim());
        });
        
        params['zipCodes']=newZips;*/
        
        Zone.create(params, function(err, zone){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, zone);  //la crea
        }); 
            
    },
    
    delete: function(id, callback){
        Zone.findByIdAndRemove(id, params, function(err){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, null);  //dati desiderati
        });
    },
}