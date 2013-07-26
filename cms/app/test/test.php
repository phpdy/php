<?php

require dirname(dirname(dirname(__FILE__))) . DIRECTORY_SEPARATOR . 'frame' .DIRECTORY_SEPARATOR . 'define.php';

require FRAME_PATH.'Util.php';

echo Util::getclientip() ;
//echo Util::gotourl("http://www.baidu.com");

//echo Util::getURLContent("http://www.baidu.com") ;

echo Util::my_file_get_contents("http://www.baidu.com") ;


?>