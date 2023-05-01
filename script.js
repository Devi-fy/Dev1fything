var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

function signout() {
  if (confirm("Are you sure? \nif you do this you will have to login again!")) {
    alert("Signed Out!")
    document.cookie = "Checkforpass=true";
    window.location.href = "/waitforpass.html"
  } else {
    window.location.href = "/index"
  }
}

function clickbutton2() {
  window.location.href = "/suggestion";
}

function clickbutton1() {
  window.location.href = "/chat";
}

// Wait for the page to load
window.addEventListener('load', () => {
  // Add the "active" class to the body element
  document.body.classList.add('active');
});

// When a link with the "transition" class is clicked
document.querySelectorAll('.transition').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    
    // Add the "fade-out" class to the body element
    document.body.classList.add('fade-out');
    
    // Wait for the "fade-out" animation to complete
    setTimeout(() => {
      // Navigate to the new page
      window.location.href = href;
    }, 300); // Change this value to match the duration of the "fade-out" animation
  });
});

function aboutblank() {
  var url = prompt("Paste the link you want to be embedded into an about:blank page.", "https://example.com")
; var urlObj = new window.URL(window.location.href); win = window.open()
; win.document.body.style.margin = "0"; win.document.body.style.height = "100vh"; var iframe = win.document.createElement
("iframe"); iframe.style.border = "none"; iframe.style.width = "100%"; iframe.style.height = "100%"; iframe.style.margin = "0"; iframe.referrerpolicy
= "no-referrer"; iframe.allow = "fullscreen"; iframe.src = url.toString(); win.document.body.appendChild(iframe); var script = win.document.createElement
("script"); script.src = "https://3kh0.github.io/js/main.js"; win.document.body.appendChild(script); 
}