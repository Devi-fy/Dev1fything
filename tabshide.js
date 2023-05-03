// Get the value of the "tabiconhide" cookie
const tabIconHide = getCookie('tabiconhide');

if (tabIconHide === 'true') {
  // Do something if the "tabiconhide" cookie is set to "true"
  document.querySelector('link[rel="icon"]').href = 'https://www.google.com/favicon.ico';
  document.title = "Google";
} else {
  // Do something else if the "tabiconhide" cookie is not set or is set to "false"
  document.querySelector('link[rel="icon"]').href = 'https://cdn.glitch.global/4182429a-2412-45a4-b24a-208c3020ffd7/Amongus.gif?v=1680641785809';
  document.title = "Dev1fy";
}

// Helper function to get a cookie
function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}