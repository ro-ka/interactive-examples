module.exports = {
    /**
     * Find and return the `example-choice` parent of the provided element
     * @param {Object} element - The child element for which to find the
     * `example-choice` parent
     *
     * @return The parent `example-choice` element
     */
    findParentChoiceElem: function(element) {
        'use strict';
        var parent = element.parentElement;
        var parentClassList = parent.classList;
        while (parent && !parentClassList.contains('example-choice')) {
            // get the next parent
            parent = parent.parentElement;
            // get the new parent's `classList`
            parentClassList = parent.classList;
        }
        return parent;
    },
    /**
     * Creates a temporary element and tests whether the passed
     * property exists on the `style` property of the element.
     * @param {Object} dataset = The dataset from which to get the property
     */
    isPropertySupported: function(dataset) {
        'use strict';

        var property = dataset['property'];
        /* If there are no 'property' attributes,
           there is nothing to test, so return true. */
        if (property === undefined) {
            return true;
        }

        var tmpElem = document.createElement('div');

        return tmpElem.style[property] !== undefined;
    },
    /**
     * Posts a name to set as a mark to Kuma for
     * processing and beaconing to GA
     * @param {Object} perf - The performance object sent to Kuma
     */
    postToKuma: function(perf) {
        window.parent.postMessage(perf, 'https://developer.mozilla.org');
    },
    /**
     * Hides the default example and shows the custom block
     * @param {object} customBlock - The HTML section to show
     */
    showCustomExampleHTML: function(customBlock) {
        'use strict';
        var defaultExample = document.getElementById('default-example');
        defaultExample.classList.add('hidden');
        defaultExample.setAttribute('aria-hidden', true);

        customBlock.classList.remove('hidden');
        customBlock.setAttribute('aria-hidden', false);
    }
};
