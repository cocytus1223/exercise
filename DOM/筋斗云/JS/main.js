//1. 获取元素
var cloud = document.querySelector('#cloud');
var navBar = document.querySelector('#navBar');
var lis = navBar.children;

//2. 遍历
for (var i = 0; i < lis.length; i++) {

  //注册事件
  lis[i].onmouseover = function () {
    console.log(this.offsetLeft);

    animate(cloud, this.offsetLeft);

  }

  var positionL = 0;
  lis[i].onmouseout = function () {

    animate(cloud, positionL);
  }

  // 点击定在哪里
  lis[i].onclick = function () {
    positionL = this.offsetLeft;

  }

}