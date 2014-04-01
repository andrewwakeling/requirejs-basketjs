<?php

function getJSmodulesMD5($baseDir='js'){
    $modules_md5 = array();
    try {
        $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($baseDir, RecursiveDirectoryIterator::SKIP_DOTS));
        foreach ($iterator as $file) {         
            $module_key = str_replace('\\','/',$file->getPathName());    
            $modules_md5[$module_key] = md5_file($file->getPathName());       
        }   
    } catch (Exception $e) {
        //TODO show an error
    }
    return $modules_md5;
}

?>

<!DOCTYPE html>
<html>
    <head>
        <title>My Sample Project</title>        
        <script type="text/javascript" src="js/basket.full.min.js"></script>         
         <script>
            //php array to js array
            var modules_md5 = <?php echo json_encode(getJSmodulesMD5('js')); ?>;
            //add unique to point to the md5 of the file
            basket.require({ url: 'js/require.js', unique:modules_md5['js/require.js'] })
            .then(function(){
                //NOTICE: the key is with _ (underscore) beacuse basket.js don't want clear it from localStorage when basket.clear()
                basket.require({ url: 'js/basket-loader.js', key: 'basket_loader', unique:modules_md5['js/basket-loader.js'] })
                .then(function(){                    
                    basket.require({ url: 'js/require_conf.js',unique:modules_md5['js/require_conf.js'] })
                })
            })          
            // try:
            // 1) js/modules/util.js ->  uncomment "foo: bar" row
            // 2) Refresh. That's all. Enjoy :)           
        </script>
    </head>
    <body>
        <h1>My Sample Project</h1>
    </body>
</html>