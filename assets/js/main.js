// Step 3: Build out the panel class
class Panel{
	constructor(panel) {
	  // get panel
	  this.panel = panel;
	  // get all different button options needed
	  this.panelButtons = this.panel.querySelector('.panel-buttons');
	  this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
	  this.panelBtnClosed = this.panel.querySelector('.panel-btn-close');
	  this.panelContent = this.panel.querySelector('.panel-content');
	  
	  // use button options 2x
	 // this.panelButtons.addEventListener('click', this.togglePanel.bind(this));
	  this.panelButtons.addEventListener('click', () => this.togglePanel());
	}
	// Methods
	togglePanel() {
	  this.panelBtnOpen.classList.toggle('hide-btn');
	  this.panelBtnClosed.classList.toggle('hide-btn');
	  this.panelContent.classList.toggle('toggle-on');
	}
  }
  
  // Step 1 : get orginal DOM elements
  const panels = document.querySelectorAll('.panel');
  
  // Step 2 : return a newly constructed DOM element
  panels.forEach( function(panel){
	return new Panel(panel);
  });
  
  console.log(panels);