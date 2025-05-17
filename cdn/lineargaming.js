function finish() {
    document.getElementById("key").innerHTML = (`<div style="position:relative;margin:auto;overflow:hidden;width:200%;padding-top:133%;">
  <iframe class="responsive-iframe" src="404.html"></iframe>
</div>`);
}

document.getElementById("secret").onclick = function() {finish()};