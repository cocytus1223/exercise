<?php

// 1. 获取用户数据
$uname = $_POST['uname'];
$psw = $_POST['psw'];
// 2. 根据上传数据判断是否正确
if($uname === 'zs' && $psw ==='1234'){
  //用户名密码正确
  echo 'yes';
}else{
  echo 'no';
}
// 3. 根据判断结果给浏览器返回不同的结果
?>