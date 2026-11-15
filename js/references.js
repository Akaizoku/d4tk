// References page — collapsible source groups (click a group head to fold it away).
(function () {
  'use strict';

  function start() {
    var heads = document.querySelectorAll('.ref-head');
    Array.prototype.forEach.call(heads, function (head) {
      var sec = head.parentNode;
      if (!sec || !sec.classList) return;
      head.addEventListener('click', function () {
        sec.classList.toggle('collapsed');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
