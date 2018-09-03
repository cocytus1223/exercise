//1. 获取元素
var arr_left = document.querySelector('.left');
var arr_right = document.querySelector('.right');
var ul = document.querySelector('ul');
var ulis = ul.children;
var imgWidth = document.querySelector('.box').offsetWidth;
var ol = document.querySelector('ol');
var olis = ol.children;

//2.注册事件
var index = 0;
arr_right.onclick = function () {

  if (index == ulis.length - 1) {
    index = 0;
    ul.style.left = 0;
  }

  index++;
  // 移动
  animate(ul, -index * imgWidth);
  // 同步小圆点 在后面打印索引 : 
  console.log(index);

  // 功能: 同步小圆点
  for (var i = 0; i < olis.length; i++) {
    olis[i].className = '';
  }
  if (index == ulis.length - 1) {

    olis[0].className = 'now';
  } else {

    olis[index].className = 'now';
  }
}

// 点击左键
arr_left.onclick = function () {

  // console.log(index);
  // 在index--之前打印index 出来无缝滚动

  if (index == 0) {
    index = ulis.length - 1;
    ul.style.left = -index * imgWidth + 'px';
  }


  index--;

  animate(ul, -index * imgWidth);

  // 在index--之后 打印index 处理同步小圆点

  // 同步小圆点
  console.log(index);
  for (var i = 0; i < olis.length; i++) {

    olis[i].className = '';
  }
  olis[index].className = 'now';


}