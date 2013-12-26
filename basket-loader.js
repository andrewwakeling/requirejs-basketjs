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
requirejs.load = function (context, moduleName, url) {
    basket.require({ url: url }).then(function () {
        context.completeLoad(moduleName);
    }, function (error) {
        // TODO: Support path fallback.
        context.onError(error);
    });
};