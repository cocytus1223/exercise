function animate(obj, target) {
  if (obj.timer) {
    clearInterval(obj.timer);
  }
  obj.timer = setInterval(function () {
    var leader = obj.offsetLeft;
    var step = (target - leader) / 10;
    //如果step是负数的话，不能向上取整，应该向下取整
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    leader = leader + step;
    obj.style.left = leader + "px";
    console.log("target:" + target + " leader:" + leader + " step:" + step);

    if (leader == target) {
      clearInterval(obj.timer);
    }
  }, 15);
}