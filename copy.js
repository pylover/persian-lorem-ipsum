var clipboard = new Clipboard('.copy');
clipboard.on('success', function(e) {
    document.getElementById('default').style.display = "none";
    document.getElementById('done').style.display = "inline";
});
clipboard.on('error', function(e) {
    console.log(e);
});
document.getElementById('go').addEventListener('click', function() {
    document.getElementsByClassName('copy')[0].style.display = "block";
    document.getElementById('default').style.display = "inline";
    document.getElementById('done').style.display = "none";
});
