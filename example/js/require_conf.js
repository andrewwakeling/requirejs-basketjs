require.config({
    baseUrl: 'js/modules',
    paths: {       
        general: '../general',        
    },
    basket: {
        excludes: ['general'],
        unique:{
            //util: 1 //change the number after edit util.js file (it will reload and recache it)
        }
    }
});

// Load the main app module to start the app
requirejs(["general"]);