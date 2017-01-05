function select(query) {
    return Array.from(document.querySelectorAll(query));
}

function hide(elem) {
    elem.style.display = 'none';
}

function show(elem) {
    elem.style.display = 'block';
}

function hideAll() {
    select('.section').forEach(hide);
}

function showPage(pageName) {
    hideAll();
    window.location.hash = '#' + pageName;
    select('.' + pageName + '-section').forEach(show);
}

window.onload = function() {
    var pageName = (window.location.hash || "#supplier").substr(1);
    showPage(pageName);

    select('.menu-item a').forEach(function(item) {
        item.onclick = function(e) {
            var pageName = this.href.split('#')[1];
            showPage(pageName);
            return false;
        };
    });
};
