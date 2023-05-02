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
    document.location.href = "/index"
}

function start() {
    var p = prompt("Enter Password", "")
    if (p=="schoolistheworstthingevertoexist") {
        document.cookie = "Checkforpass=false;"
        document.location = "/index"
    } else {
        alert("INCORRECT")
        start()
    }
}

start()