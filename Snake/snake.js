//创建一个蛇对象
function Snake(options) {
  options = options || {};

  this.width = options.width || 20;
  this.height = options.height || 20;
  this.headBgc = options.headBgc || 'green';
  this.bodyBgc = options.bodyBgc || 'red';
  this.direction = options.direction || 'right';
  this.body = options.body || [{
      x: 2,
      y: 0
    },
    {
      x: 1,
      y: 0
    },
    {
      x: 0,
      y: 0
    }
  ]
}

//渲染
Snake.prototype.render = function (target) {
  for (var i = 0; i < this.body.length; i++) {

    var item = this.body[i];
    var span = document.createElement("span");
    span.style.width = this.width + "px";
    span.style.height = this.height + "px";
    span.style.backgroundColor = i === 0 ? this.headBgc : this.bodyBgc;
    span.style.position = "absolute";
    span.style.left = item.x * this.width + "px";
    span.style.top = item.y * this.height + "px";

    target.appendChild(span);
  }
}


//往原型上添加蛇移动的方法move
Snake.prototype.move = function (target,food) {
  var newHead = {
    x: this.body[0].x,
    y: this.body[0].y
  }

  switch (this.direction) {
    case "up":
      newHead.y--;
      break;
    case "down":
      newHead.y++;
      break;
    case "left":
      newHead.x--;
      break;
    case "right":
      newHead.x++;
      break;
  }

  if (newHead.x === food.x && newHead.y === food.y) {
    var div = target.querySelector("div");
    target.removeChild(div);
    food.render(target);
  }else{
    this.body.pop();
  }


  this.body.unshift(newHead);


  var spans = target.querySelectorAll("span");
  for (var i = 0; i < spans.length; i++) {

    target.removeChild(spans[i]);

  }

  this.render(target);
}