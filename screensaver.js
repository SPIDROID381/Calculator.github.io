(function() {
  const currentScript = document.currentScript;
  window.addEventListener(
    "load",
    function() {
      const id = `s${Date.now()}`;
      const el = document.body.appendChild(document.createElement("div"));
      el.id = id;
      el.style.position = "fixed";

      el.className = "Screensaver";
      el.innerHTML = `<div></div><div><div>${(currentScript &&
        currentScript.getAttribute("message")) ||
       "😴" + window.location.hostname}</div></div>`;

      const width = el.offsetWidth;
      const height = el.offsetHeight;

      const style = document.body.appendChild(document.createElement("style"));

      style.textContent = `
#${id} {
  left: 0; top: 0; right: 0; bottom: 0;
  z-index: 100000;
  color: rgb(10, 251, 130);
  background-color: #000;
}
#${id} div {
  width: ${width}px;
  height: ${height}px;
  text-align: center;
  position:fixed;
  margin-left:auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#${id} > div {
  animation: x${id} 13s linear infinite alternate;
}
#${id} > div > div {
  animation: y${id} 7s  linear infinite alternate;
}
@keyframes x${id} {
  
}

@keyframes y${id} {
  

}
`;
      let timeoutId = null;
      let timeout =
        (currentScript && Number(currentScript.getAttribute("timeout"))) ||
        180000;

      function disable() {
        el.style.display = "none";
        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
          el.style.display = "block";
        }, timeout);
      }
      disable();
      document.addEventListener("mousemove", disable);
      document.addEventListener("keydown", disable);
      document.addEventListener("scroll", disable);
    },
    { once: true }
  );
})();