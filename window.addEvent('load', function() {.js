window.addEvent('load', function() {
    var regEmail = /\/([a-zA-Z0-9\-\.]+)\.m\.([a-zA-Z0-9\-\.]+)\/([a-zA-Z]{2,6})\//g;
    $document.body.innerHTML = document.body.innerHTML.replace(regEmail, '$1@$2.$3');
    let ;
  });