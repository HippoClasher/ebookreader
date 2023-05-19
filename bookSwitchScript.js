document.addEventListener('DOMContentLoaded', function() {
    var startX;
    var threshold = 100; // Minimale Verschiebung für einen Wechsel
  
    document.addEventListener('mousedown', handleTouchStart, false);
    document.addEventListener('touchstart', handleTouchStart, false);
  
    document.addEventListener('mouseup', handleTouchEnd, false);
    document.addEventListener('touchend', handleTouchEnd, false);
  
    function handleTouchStart(event) {
      if (event instanceof TouchEvent) {
        startX = event.touches[0].clientX;
      } else {
        startX = event.clientX;
      }
    }
  
    function handleTouchEnd(event) {
      var endX;
  
      if (event instanceof TouchEvent) {
        endX = event.changedTouches[0].clientX;
      } else {
        endX = event.clientX;
      }
  
      var deltaX = endX - startX;
  
      if (deltaX > threshold) {
        // Wechsel zu ik.html
        window.location.href = 'ik.html';
        console.log('switch')
      } else if (deltaX < -threshold) {
        // Wechsel zu index.html
        window.location.href = 'index.html';
        console.log('switch')
      }
    }
  });
  