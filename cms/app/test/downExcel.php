<?php
//数据导出到excel文件中。
header ( "Content-type:application/vnd.ms-excel" );
header ( "Content-Disposition:filename=gift.xls" );
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=gbk' />
<title>down file</title>
</head>
<body>
<table border=1>
<tr>
<td>id</td><td>name</td><td>pwd</td>
</tr>
<tr>
<td>1</td><td>dy</td><td>asdf</td>
</tr>
<tr>
<td>2</td><td>zhp</td><td>123</td>
</tr>
</table>
</body>
</html>