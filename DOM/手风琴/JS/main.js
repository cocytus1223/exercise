  //1. 获取元素
  var lis = document.querySelectorAll('li');

  //2.遍历li 
  for (var i = 0; i < lis.length; i++) {

    //2.1 设置背景图片
    lis[i].style.background = 'url(images/' + (i + 1) + '.jpg)';

    //2.2 布局位置 
    lis[i].style.left = i * 240 + 'px';

    //2.3 注册 over 事件
    lis[i].index = i;
    lis[i].onmouseover = function () {

      // 因为触摸中间的一个,会发现左边的left值和右边的left 规律不一样 
      // 先来获取当前的索引,,根据索引进行判断  
      // < 当前索引 => 布局
      // >当前索引  => 布局 
      //1. 获取当前索引
      //2. <= 当前索引 i * 100 + 'px';

      console.log(this.index);


      // 重新布局  i * 100
      for (var i = 0; i < lis.length; i++) {

        if (i <= this.index) { // 比当前索引小

          // lis[i].style.left = i * 100 + 'px';

          animate(lis[i], {
            'left': i * 100
          });
        } else { // 比当前索引大
          // lis[i].style.left = i*100 + 700 + 'px';

          animate(lis[i], {
            'left': i * 100 + 700
          });
        }
      }
    }

    //2.4 注册 out 事件
    lis[i].onmouseout = function () {

      // 复原之前的 240位置
      // 重新布局
      for (var i = 0; i < lis.length; i++) {

        // lis[i].style.left = i * 240 + 'px';
        animate(lis[i], {
          'left': i * 240
        });
      }
    }
  }