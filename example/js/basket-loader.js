/**
 * requirejs-basketjs
 * Author: Andrew Wakeling <andrew.wakeling@gmail.com>
 * requirejs-basketjs may be freely distributed under the MIT license.
 *
 * Load require.js modules via basket.js.
 */

/**
 * For more information about this function, see comments in "req.load" in require.js.
 *
 * @param {Object} context the require context to find state.
 * @param {String} moduleName the name of the module.
 * @param {Object} url the URL to the module.
 */
;(function () {
    var original_loader = requirejs.load;
    requirejs.load = function (context, moduleName, url) {
        /**
         * There is currently no public way to access requirejs's config.
         * As suggested by James Burke, we can somewhat rely on the semi-private "requirejs.s.contexts._.config" as it has not changed between 1.0 and 2.0.
         *
         * Source: https://groups.google.com/forum/#!topic/requirejs/Hf-qNmM0ceI
         */

        var config = requirejs.s.contexts._.config;
        if (config.basket && config.basket.excludes && config.basket.excludes.indexOf(moduleName) !== -1) {
            original_loader(context, moduleName, url);
        } else {
            var unique = modules_md5 ? modules_md5[url] : 1;
            if(config.basket && config.basket.unique && config.basket.unique.hasOwnProperty(moduleName) ){
                unique = config.basket.unique[moduleName];
            }
            basket.require({ url: url,unique:unique }).then(function () {
                context.completeLoad(moduleName);
            }, function (error) {
                // TODO: Support path fallback.
                context.onError(error);
            });
        }
    };
}());

