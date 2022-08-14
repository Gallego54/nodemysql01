module.exports = {
    getParams: function ( req, method ) {
        switch (method) {
            case 'POST': return JSON.parse(JSON.stringify(req.body));
         
            
            default: return -1;
        }
        
    }
} 