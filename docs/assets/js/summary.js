document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('summary').forEach(function (s) {
    if (!s.querySelector('.summary-caret')) {
      var span = document.createElement('span');
      span.className = 'summary-caret';
      span.innerHTML = '▶';
      s.prepend(span);
    }
  });
});
