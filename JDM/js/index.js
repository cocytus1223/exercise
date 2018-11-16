// 功能1: 页面滚动, 改变头部透明度

;(function () {
  var jd_header = document.querySelector('.jd_header');

  window.addEventListener("scroll", function () {
    // 获取页面卷去的高度 pageYOffset
    var scrollTop = window.pageYOffset;
    var opacity = 0;

    if (scrollTop > 600) {
      opacity = 0.9;
    } else {
      // 动态的计算透明度
      opacity = scrollTop / 600 * 0.9;
    }

    // 设置给头部
    jd_header.style.backgroundColor = "rgba(222,24,27," + opacity + ")";
  })
})();

// 功能2: 动态设置秒杀底部 ul 的宽度
;
(function () {
  // 获取元素
  var ul = document.querySelector('.seckill_content ul');
  var lis = ul.children;
  var width = lis.length * lis[0].offsetWidth;
  ul.style.width = width + "px";

  // 需要在动态计算渲染完成 ul 之后, 再进行初始化
  new IScroll(".seckill_content", {
    scrollX: true,
    scrollY: false
  });

})();

// 功能3: 倒计时功能
;
(function () {
  var spans = document.querySelectorAll('.seckill_title .time span:nth-child(2n-1)');
  setTime();
  var timer = setInterval(setTime, 1000);

  function setTime() {
    // 秒杀时间
    var seckillTime = new Date("2018/11/11 20:00");
    // 当前时间
    var now = new Date();
    // 需要倒计时的时间的秒数
    var time = parseInt((seckillTime - now) / 1000);

    if (time <= 0) {
      clearInterval(timer);
      time = 0;
    }

    // 转换成时分秒
    var hours = parseInt(time / 3600);
    var minites = parseInt(time / 60) % 60;
    var seconds = time % 60;

    // 设置时分秒给span
    spans[0].innerHTML = addZero(hours);
    spans[1].innerHTML = addZero(minites);
    spans[2].innerHTML = addZero(seconds);
  }

  // 封装一个小方法, 专门用于给 小于10的数字, 前面加0
  function addZero(n) {
    return n < 10 ? "0" + n : n;
  }
})();


// 功能4: 新闻快报效果

;
(function () {

  var ul = document.querySelector(".jd_news .info ul");
  var lis = ul.children; // 获取所有的 li
  var liHeight = lis[0].offsetHeight; // 获取 li 的高度

  var index = 0; // 计数器

  // 让 ul 动
  setInterval(function () {
    if (index >= lis.length - 1) {
      index = 0;

      ul.style.transition = "none";
      ul.style.transform = "translateY(0px)";
    }

    // 重绘回流
    ul.offsetWidth;

    index++;

    // 添加过渡动画
    ul.style.transition = "transform .5s";
    ul.style.transform = "translateY(-" + index * liHeight + "px)";

  }, 1000);


  // 需求: 当 ul 完全抵达最后一个假的时候, 瞬间回到第一个
  // transitionend, 监听过渡动画的结束
  // ul.addEventListener("transitionend", function () {
  //   console.log(index);
  //   if (index >= lis.length - 1) {
  //     index = 0;
  //     // 需要瞬间切换到第一个, 不需要过渡动画
  //     ul.style.transition = "none";
  //     ul.style.transform = "translateY(0px)";
  //   }
  // })
})();

// 功能五 轮播图
;
(function () {

  var ul = document.querySelector(".jd_banner ul");
  var lis = ul.children;
  var width = lis[0].offsetWidth;
  var olLis = document.querySelectorAll('.jd_banner ol li');

  var index = 1;
  setInterval(function () {

    index++;
    // 添加过渡动画
    addTransiton();
    // 设置 ul 的位置
    setTranslateX(-index * width);

  }, 1000);

  // 通过 transitionend 注册transition动画结束事件
  ul.addEventListener("transitionend", function () {

    // 在完全抵达最后一张假图时, 瞬间切换到第一张真图
    if (index >= lis.length - 1) {
      index = 1;

      removeTransition(); // 移除过渡

      setTranslateX(-index * width); // 设置位置
    }

    if (index <= 0) {
      index = lis.length - 2;
      // 瞬间切换
      removeTransition();
      setTranslateX(-index * width);
    }

    // 上面的判断对index进行了限制 范围1-8
    // 小圆点下标范围0-7 index-1
    // 需求： 让对应index-1下标的小圆点高亮
    olLis.forEach(function (v, i) {
      v.classList.remove("current");
    })
    olLis[index - 1].classList.add("current");
  });

  // 封装一些小方法, 专门的用于解决兼容性问题
  // 1. 给 ul 添加过渡
  function addTransiton() {
    ul.style.transition = "transform .2s";
    ul.style.webkitTransition = "transform .2s";
  }

  // 2. 给 ul 移除过渡
  function removeTransition() {
    ul.style.transition = "none";
    ul.style.webkitTransition = "none";
  }

  // 3. 设置 ul 的位置
  function setTranslateX(value) {
    ul.style.transform = "translateX(" + value + "px)";
    ul.style.webkitTransform = "translateX(" + value + "px)";
  }

  // 添加轮播图手指事件
  var startX; // 记录开始的位置
  var startTime; //记录开始触摸的时间
  ul.addEventListener("touchstart", function (e) {

    startTime = new Date(); // 记录手指开始触摸的时间

    // 清除定时器
    clearInterval(timer);

    startX = e.touches[0].clientX; // 记录开始位置

  })

  ul.addEventListener("touchmove", function (e) {

    var distanceX = e.touches[0].clientX - startX; // 手指的相对位移

    console.log(distanceX);

    // 让ul跟着手指动, 不需要transition动画
    removeTransition(); // 移除过渡

    // 将位移设置给 ul (在原有位置基础上叠加)
    setTranslateX(-index * width + distanceX);

  })

  ul.addEventListener("touchend", function (e) {

    var time = new Date() - startTime; // 相对时间差

    var distanceX = e.changedTouches[0].clientX - startX; // 手指的相对位移

    // 如果向右位移大于 1/3,  右滑动, 显示上一张, index--
    if (distanceX > width / 3 || (time < 300 && distanceX > 50)) {
      index--;
    }

    // 如果向左位移大于 1/3,  左滑动, 显示下一张, index++
    if (distanceX < -width / 3 || (time < 300 && distanceX < -50)) {
      index++;
    }

    // 根据 index 重置 ul 的位置
    addTransiton();
    setTranslateX(-index * width);



    // 重新开启定时器
    timer = setInterval(function () {
      index++;
      // 添加过渡动画
      addTransiton();
      // 设置 ul 的位置
      setTranslateX(-index * width);
    }, 3000);

  });

  // resize 事件, 当屏幕可视区域发生改变时触发
  window.addEventListener("resize", function () {

    // 动态更新 width
    width = lis[0].offsetWidth;

    // 根据 新的 width, 重置 ul的位置 (不需要动画)
    removeTransition();
    setTranslateX(-index * width);
  })

})();