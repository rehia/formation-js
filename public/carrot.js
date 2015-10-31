function Carrot(){
  this.domElement = document.createElement('div');
  this.domElement.style.width = this.WIDTH + 'px';
  this.domElement.style.height = this.HEIGHT + 'px';
  this.domElement.style.position = 'absolute';
  this.domElement.style.background = 'url(./img/'+ this.IMG +'.png)';
}

Carrot.prototype.WIDTH = 65; 
Carrot.prototype.HEIGHT = 28; 
Carrot.prototype.IMG = 'carrot';


