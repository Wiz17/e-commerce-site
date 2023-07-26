window.addEventListener('load', function () {
    // Website has finished loading, hide the loading overlay
    var loadingOverlay = document.getElementById('loading');
    var web = document.getElementById('web').style.display='';
    loadingOverlay.style.display = 'none';
    console.log('hiihi')
  });
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
  