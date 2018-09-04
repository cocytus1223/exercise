var ul = document.querySelector('ul');
var ulis = ul.children;
var ol = document.querySelector('ol');

for (var i = 0; i < ulis.length; i++) {

  var li = document.createElement('li');
  li.innerText = i + 1;
  ol.appendChild(li);
}

var olis = ol.children;
olis[0].className = 'current';

ul.appendChild(ulis[0].cloneNode(true));

var arr_left = document.querySelector('.left');
var arr_right = document.querySelector('.right');
var box = document.querySelector('.box');
var imgWidth = box.offsetWidth;

var index = 0;

arr_right.onclick = function () {

  if (index == 5) {
    index = 0;
    ul.style.left = 0;
  }

  index++;
  animate(ul, -index * imgWidth);

  console.log(index);
  for (var i = 0; i < olis.length; i++) {

    olis[i].className = '';
  }

  if (index == 5) {
    olis[0].className = 'current';
  } else {
    olis[index].className = 'current';
  }
}

arr_left.onclick = function () {

  if (index == 0) {
    index = 5;
    ul.style.left = -index * imgWidth + 'px';
  }

  index--;
  animate(ul, -index * imgWidth);

  console.log(index);
  for (var i = 0; i < olis.length; i++) {

    olis[i].className = '';
  }
  olis[index].className = 'current';

}

var arrow = document.querySelector('.arrow');
var timerId = setInterval(function () {
  arr_right.onclick();
}, 1000);

box.onmouseover = function () {

  clearInterval(timerId);
  arrow.style.display = 'block';
}

box.onmouseout = function () {

  timerId = setInterval(function () {
    arr_right.onclick();
  }, 1000);

  arrow.style.display = 'none';
}

  for (var i = 0; i < olis.length; i++) {

  olis[i].index = i;

  olis[i].onclick = function () {

    for (var i = 0; i < olis.length; i++) {

      olis[i].className = '';
    }
    this.className = 'current';

    console.log(this.index);

    if (index == 5) {
      index = 0;
      ul.style.left = 0;
    }

    index = this.index;
    animate(ul, -this.index * imgWidth);

  }
}
