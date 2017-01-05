var LINK_SELECTOR = '.menu-item a';
var SECTION_SELECTOR = '.section';
var DEFAULT_PAGE = '#supplier'

function select(query) {
    return Array.from(document.querySelectorAll(query));
}

function hide(elem) {
    elem.style.display = 'none';
}

function show(elem) {
    elem.style.display = 'block';
}

function setClass(className) {
    return function(elem) {
        elem.className = className;
    }
}

function showPage(pageName) {
    window.location.hash = '#' + pageName;
    select(SECTION_SELECTOR).forEach(hide);
    select(LINK_SELECTOR).forEach(setClass(''));
    select('.' + pageName + '-section').forEach(show)
    select('*[href="#' + pageName + '"]').forEach(setClass('active'));

}

window.onload = function() {
    window.scrollTo(0, 0);

    var pageName = (window.location.hash || DEFAULT_PAGE).substr(1);
    showPage(pageName);

    select(LINK_SELECTOR).forEach(function(item) {
        item.onclick = function(e) {
            var pageName = this.href.split('#')[1];
            showPage(pageName);
            return false;
        };
    });
};
