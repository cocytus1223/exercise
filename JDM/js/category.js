/*
 * IScroll 使用注意事项
 * 1. 有一个有宽高的父容器
 * 2. 有一个溢出父容器的子容器, 只会对第一个子容器进行区域滚动,
 *    其他多的元素将被忽略
 * 3. IScroll 计算临界值添加回弹效果, 需要获取父子元素的宽高
 *    要在 父子元素 高度准确的情况下, 再初始化 IScroll
 *
 *    保证计算的准确性
 *    (1) 将 IScroll 初始化, 放在 onload 事件中 (等待页面dom加载完成, 且等待图片等资源文件加载)
 *    (2) 如果 数据是 通过 ajax 请求回来的, 页面是动态渲染,
 *        需要在数据渲染完成之后, 进行 IScroll 初始化
 *    (3) 要清浮动
 * */

window.addEventListener("load", function () {
  // 默认 IScroll 是纵向的区域滚动, 如果要进行横向的区域滚动, 需要配置
  // 实现了左侧的区域滚动
  new IScroll(".jd_content_left");

  // scrollX 配置横向的区域滚动  默认: false
  // scrollY 配置纵向的区域滚动  默认: true
  // 实现右侧的区域滚动
  new IScroll(".jd_content_right", {
    scrollX: false,
    scrollY: true
  });
})