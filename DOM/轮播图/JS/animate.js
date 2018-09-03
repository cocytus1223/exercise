function animate(element, target) {

  //1. 每次点击 每个函数里都有个timerId,不好管理
  //2. 全局的timerId, 只有一个timerId 方便管理
  //3. 之前的不管理的依然起效果
  //4. 在下一个赋值之前,;要清除上一个

  if (element.timerId) {
    clearInterval(element.timerId);
  }

  element.timerId = setInterval(function () {

    //1. 获取当前位置
    var current = element.offsetLeft;
    // var target = 400;// 0

    //2. 累加小碎步
    // 决定方向 
    var step = current < target ? 20 : -20;
    // 关心什么时候走? 
    // 当前和目标的距离 > 步数 
    if (Math.abs(target - current) >= Math.abs(step)) { // 可以继续小碎步走

      // 累加小碎步
      current += step;

      //3. 重复赋值
      element.style.left = current + 'px';

    } else {

      // 清除定时器
      clearInterval(element.timerId);

      //直接赋值目标位置
      element.style.left = target + 'px';
    }

  }, 15);



}

