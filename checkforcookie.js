function getCookie(name){
    var pattern = RegExp(name + "=.[^;]*")
    var matched = document.cookie.match(pattern)
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
};

var cookie = getCookie("Checkforpass");

if (cookie=="false") {
    console.log("Allowed in")
}
else {
    document.location.href="/waitforpass.html";
};