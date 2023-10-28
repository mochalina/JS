window.addEventListener('DOMContentLoaded', function () {
  var ellipse = document.getElementById('ellipse');
  var dot = document.createElement('div');
  dot.id = 'dot';
  ellipse.appendChild(dot);



  const btn = this.document.querySelector(".btn");
  btn.addEventListener("click", function () {

    ell();
  });

  function ell() {
    var majorAxis = document.querySelector("#big").value;
    var minorAxis = document.querySelector("#small").value;

    ellipse.style.width = majorAxis + 'px';
    ellipse.style.height = minorAxis + 'px';

    var centerX = ellipse.offsetWidth / 2;
    var centerY = ellipse.offsetHeight / 2;
    var angle = 0;
    var speed = 0.02;

    function moveDot() {
      var x = centerX + majorAxis / 2 * Math.cos(angle);
      var y = centerY + minorAxis / 2 * Math.sin(angle);

      dot.style.left = (x - dot.offsetWidth / 2) + 'px';
      dot.style.top = (y - dot.offsetHeight / 2) + 'px';

      angle += speed;
      requestAnimationFrame(moveDot);
    }

    moveDot();
  }


});