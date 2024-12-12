export function guide(){
  initializeCardCodePreview();
  initializeHighlightJsBadge();
  initializeModalFromURL();
}

// Adds code preview section to cards with ".src" class
function initializeCardCodePreview() {
  var cards = document.querySelectorAll(".uig-card");
  
  cards.forEach(function(card) {
    if (card.querySelector(".src")) {
      var srcHtml = card.querySelector(".src").innerHTML;
      var codeHtml = `
        <div class='uig-card-footer folded'>
          <button class='uig-card-footer-toggle' title='toggle'></button>
          <pre><code class='language-html' style='padding:0;'></code></pre>
        </div>`;
      
      card.innerHTML += codeHtml;
      var code = card.querySelector("code");
      code.textContent = srcHtml;
    }
  });

  // Attach click event to toggle card footer
  $(".uig-card-footer-toggle").on("click", function() {
    $(this).parent().toggleClass("folded");
  });
}

// Initializes highlight.js badge settings (placeholder)
function initializeHighlightJsBadge() {
  setTimeout(function() {
    var options = {
      contentSelector: ".uiguide",
      loadDelay: 0,
      copyIconClass: "fa fa-copy",
      checkIconClass: "fa fa-check text-success"
    };
    // Uncomment below line to enable highlight.js badge
    // window.highlightJsBadge(options);
  }, 10);
}

// Shows modal based on URL parameter "modalID"
function initializeModalFromURL() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  if (urlParams.has('modalID')) {
    var modalSelector = "#" + urlParams.get('modalID');
    $(modalSelector).modal('show');
  }
}
