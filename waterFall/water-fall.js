// 给jquery增加插件
// 给$对象的原型添加方法即可
// $.fn是jquery的原型, 所有的jquery对象都可以调用waterFall这个方法
$.fn.waterFall = function () {
	// 1.获取父盒子 .box
	var $box = $(this);
	// 2.根据父盒子,获取所有子盒子 item
	var $items = $box.children();
	// 3.获取每一子盒子的高度, 宽度
	var itemWidth = $items.width();
	// 4. 计算每一个item之间的间隔
	var gap = ($box.width() - 5 * itemWidth) / 4;

	// 声明一个数组,用于存储每一列的高度
	var arr = [0, 0, 0, 0, 0];

	// 5. 遍历$items,判断是否是前5个,如果是前5个就设置left和top,进行布局
	$items.each(function (index, item) {
		// 6.1找到数组中最小高度的那一列,以及对应的下标
		var min = arr[0];
		var minIndex = 0;
		arr.forEach(function (itemheight, i) {
			if (min > itemheight) {
				min = itemheight;
				minIndex = i;
			}

		});

		// 6.2根据最小高度的那一列的值,给新的item设置位置
		$(item).css({
			// 最小高度 + gap
			top: min + gap,
			// 最小高度的那一列的下标 * (宽度 + 间隔)
			left: minIndex * (itemWidth + gap)
		})

		// 6.3给刚才的最小高度重新设置值
		// 之前最小高度发生变化 = 原来的高度 + gap + 新的item的高度
		arr[minIndex] += gap + $(item).height();

	})

	// 7.给父盒子设置高度
	// 找到数组中,最高的那一列的高度, 把这个高度,设置给父盒子
	// 7.1 找到arr中的最大值
	var max = Math.max.apply(null, arr);
	// 7.2 把最大值赋值给父盒子
	$box.height(max);
}