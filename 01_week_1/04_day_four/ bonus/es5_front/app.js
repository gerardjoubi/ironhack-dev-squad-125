const app = (function app() {
  "use strict";

  var count = 0;
  var user = { avatar: "ironhacker", name: "you", id: 125 };

  function handler(evt) {
    console.log("click", evt);
  }

  window.addEventListener("DOMContentLoaded", function observer() {
    document.getElementById("launch_event").onclick = handler;
  });

  return {
    avatar: user.avatar,
    avatar: user.id
  };
})();

console.log("app's public api => \n", app);
