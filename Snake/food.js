function Food(options) {
  options = options || {};
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.bgc = options.bgc || "green";
  this.x = options.x || 0;
  this.y = options.y || 0;
}

Food.prototype.render = function (target) {

  var div = document.createElement("div");

  div.style.width = this.width + "px";
  div.style.height = this.height + "px";
  div.style.backgroundColor = this.bgc;

  this.x = parseInt(Math.random() * target.offsetWidth / this.width);
  this.y = parseInt(Math.random() * target.offsetHeight / this.height);
  
  div.style.position = "absolute";
  div.style.left = this.x * this.width + 'px';
  div.style.top = this.y * this.height + 'px';

  target.appendChild(div);
}