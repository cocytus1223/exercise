<?php

// 1. 获取上传上来的数据
$uname = $_GET['uname'];
// 2. 和后台存储的数据进行对比
$arr = ['zs','ls','嘿嘿嘿'];
//判断$uname里面的值在不在$arr里
//判断查找的内容在不在数组中，在则返回true
// in_array(查找的内容，数组)
$result = in_array($uname,$arr);
// 3. 根据对比结果返回给浏览器对应的内容

if($result) {
  echo 'yes';
}else {
  echo 'no';
}
?>