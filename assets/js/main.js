class Panel{
	constructor(panel) {
	  this.panel = panel;
	  this.panelButtons = this.panel.querySelector('.panel-buttons');
	  this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
	  this.panelBtnClosed = this.panel.querySelector('.panel-btn-close');
	  this.panelContent = this.panel.querySelector('.panel-content');
	  this.panelButtons.addEventListener('click', () => this.togglePanel());
	}
	
	togglePanel() {
	  this.panelBtnOpen.classList.toggle('hide-btn');
	  this.panelBtnClosed.classList.toggle('hide-btn');
	  this.panelContent.classList.toggle('toggle-on');
		}
  }
  
  const panels = document.querySelectorAll('.panel');
  
  panels.forEach( function(panel){
	return new Panel(panel);
  });
  

