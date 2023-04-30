function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function getCookie(name){
    var pattern = RegExp(name + "=.[^;]*")
    var matched = document.cookie.match(pattern)
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
};

var key = "false"
function start() {
    var p = prompt("Please get the/a Owner/Admin to input the password... \nif you have a key please input it!")
    if (p=="schoolistheworstthingevertoexist") {
        console.log("Correct Password")
        var key = makeid(30)
        document.cookie = "Checkforpass=true; key=" + key;
        alert("NEW KEY: " + key)
        document.location.href = "index"
    }
    else if (getCookie("key")==key) {
        alert("Correct")
        alert("Current Key = " + getCookie("key"))
    }
    else {
        alert("WRONG KEY!")
        start()
    }
};

start()