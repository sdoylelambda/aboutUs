// // Step 3: Build out the panel class
// class Panel{
// 	constructor(panel) {
// 	  // get panel
// 	  this.panel = panel;
// 	  // get all different button options needed
// 	  this.panelButtons = this.panel.querySelector('.panel-buttons');
// 	  this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
// 	  this.panelBtnClosed = this.panel.querySelector('.panel-btn-close');
// 	  this.panelContent = this.panel.querySelector('.panel-content');
	  
// 	  // use button options 2x
// 	 // this.panelButtons.addEventListener('click', this.togglePanel.bind(this));
// 	  this.panelButtons.addEventListener('click', () => this.togglePanel());
// 	}
// 	// Methods
// 	togglePanel() {
// 	  this.panelBtnOpen.classList.toggle('hide-btn');
// 	  this.panelBtnClosed.classList.toggle('hide-btn');
// 	  this.panelContent.classList.toggle('toggle-on');
// 	}
//   }
  
//   // Step 1 : get orginal DOM elements
//   const panels = document.querySelectorAll('.panel');
  
//   // Step 2 : return a newly constructed DOM element
//   panels.forEach( function(panel){
// 	return new Panel(panel);
//   });
  
//   console.log(panels);

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
// 			panel.style.display = "none";
// 			console.log(panel);
//     } else {
// 			panel.style.display = "block";
// 			console.log(panel);
//     }
//   });
// }




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
