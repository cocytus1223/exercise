// 功能1: checkbox 选中功能
;(function () {

  // 1. 给所有的 jd_checkbox 注册点击事件
  var all = document.querySelectorAll(".jd_checkbox");
  all.forEach(function (v, i) {
    v.addEventListener("click", function () {
      this.classList.toggle("checked");
    })
  });

  // 2. 全选反选
  var checkAll = document.querySelector(".goods_title .jd_checkbox");
  var checkBtns = document.querySelectorAll(".goods_wrapper .jd_checkbox");

  checkAll.addEventListener("click", function () {
    // 让 checkBtns 全选或反选
    checkBtns.forEach(function (v, i) {

      if (checkAll.classList.contains("checked")) {
        v.classList.add("checked");
      } else {
        v.classList.remove("checked");
      }
    })
  });

  // 3. 给下面所有按钮添加监听
  var total = checkBtns.length; // 总个数

  checkBtns.forEach(function (v, i) {
    v.addEventListener("click", function (v, i) {
      var selects = document.querySelectorAll(".goods_wrapper .jd_checkbox.checked").length;
      if (selects === total) {
        checkAll.classList.add("checked");
      } else {
        checkAll.classList.remove("checked");
      }
    });
  })
})();

// 功能2: 点击垃圾桶功能
;(function () {

  var boxs = document.querySelectorAll(".delete_box");
  var modal = document.querySelector(".jd_modal");
  var cancel = document.querySelector(".cancel");

  var deleteBox;

  boxs.forEach(function (v, i) {
    v.addEventListener("click", function () {
      // 让模态框显示
      modal.style.display = "block";
      // 让盖子翻起来
      deleteBox = this;
      this.classList.add("up")
    });
  })
  // 取消功能
  cancel.addEventListener("click", function () {
    // 让盖子翻回去
    deleteBox.classList.remove("up");
    // 模态框隐藏
    modal.style.display = "none";
  })
})();