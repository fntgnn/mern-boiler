var Comment = require('../models/Comment');


module.exports={
    
    find: function(params, callback){
        Comment.find(params, function(err, comments){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, comments);  //dati desiderati
        });
    },
    
    findById: function(id, callback){
        Comment.findById(id, function(err, comment){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, comment);  //dati desiderati
        });
    },
    
    update: function(id, prams, callback){
        Comment.findByIdAndUpdate(id, params, {new:true}, function(err, comment){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, comment);  //dati desiderati
        });
    },
    
    
    create: function(params, callback){
 
        Comment.create(params, function(err, comment){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, comment);  //la crea
        });
            
    },
    
    delete: function(id, callback){
        Comment.findByIdAndRemove(id, params, function(err){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, null);  //dati desiderati
        });
    },
}