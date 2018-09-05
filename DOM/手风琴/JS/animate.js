// 封装
function animate(element, obj, callback) {

  // 赋值新的定时器之前 清除上一个
  clearInterval(element.timerId);

  element.timerId = setInterval(function () {

    // 假设成立法
    //1. 假设三个属性动画都完成了
    var flag = true;

    for (var key in obj) {
      // key : width height
      // obj[key] : 300 300
      var attr = key;
      var target = obj[key];

      // 动画三步走
      //3.1 获取当前位置
      var current = window.getComputedStyle(element)[attr]; //'100px'
      current = parseInt(current); // 100px => 100
      //3.2 累加小碎步
      var step = (target - current) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      current += step;
      //3.3 重新赋值
      element.style[attr] = current + 'px';

      //3.4 判断清除定时器
      //2. 打脸
      if (current != target) {
        flag = false;
      }
    }

    //3. 判断 三个动画都完成了
    if (flag == true) { // 所有的动画都完成

      clearInterval(element.timerId);
      // 如果callback有值,就执行后面的代码
      // 如果call没有值 , 就不执行
      callback && callback();
    }

  }, 10);
}
