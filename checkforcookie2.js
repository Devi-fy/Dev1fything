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

if (getCookie("Checkforpass")==false) {
    document.location.href = "/index"
}

function start() {
    var p = prompt("Please get the/a Owner/Admin to input the password...")
    if (p=="schoolistheworstthingevertoexist") {
        console.log("Correct Password")
        document.cookie = "Checkforpass=false;";
        document.location.href = "/index"
    }
    else {
        alert("WRONG KEY!")
        start()
    }
};

start()