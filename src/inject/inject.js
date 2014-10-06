/**
 * Github Diff Collapse
 * Adds a 'hide' button to each file in a Github diff
 * So you can collapse them individually.
 *
 * Great for huge diffs full of files you don't want to read. :)
 * github.com/markreid
 */

(function(){

    var actionBars = Array.prototype.slice.call(document.querySelectorAll('#diff #files .meta .actions'));
    if(!actionBars.length) return false;


    var buttonNode = document.createElement('button');
    buttonNode.className = 'btn-hide minibutton tooltipped tooltipped-n';
    buttonNode.setAttribute('aria-label', 'Hide this file');
    buttonNode.textContent = 'Hide';

    var hideButtons = [];
    actionBars.forEach(function(actionBar){
        var hideButton = buttonNode.cloneNode(true);
        actionBar.appendChild(hideButton);
        hideButtons.push(hideButton);
    });

    hideButtons.forEach(function(hideButton){
        hideButton.addEventListener('click', function(evt){
            var button = evt.currentTarget;
            button.classList.toggle('selected');
            var fileContainer = lookUp('.file', button);
            fileContainer.querySelector('.data').classList.toggle('hidden');
        });
    });


    function lookUp(selector, node){
        if(node.matches(selector)) return node;
        if(node.matches('body')) return false;
        return lookUp(selector, node.parentNode);
    }

    console.log('Github Diff Collapse activated :)');

})();