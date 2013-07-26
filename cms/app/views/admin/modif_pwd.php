<html>
<head>
	<meta charset="UTF-8">
	<title>修改密码</title>
<link rel="StyleSheet" href="/css/style.css" type="text/css"/>
<script src="http://images.51wan.com/global/js/jquery.min.js"></script>
<script type="text/javascript" src="js/admin.js"></script>
</head>
<body>
<div class="content">
    <div id="main" class="main">
        <div id="gamefeatures"><h2>修改密码</h2></div>
        <form method="get" action="">
            <input type="hidden" value="admin" name="module">
            <input type="hidden" value="passchange" name="control">
            <input type="hidden" value="up_sub" name="action">
            <div id="gamemain">
                <table>
                    <tbody><tr><td class="title"><b>原密码:</b></td><td><input type="password" id="passbefore" name="passbefore"></td></tr>
                    <tr><td class="title"><b>新密码:</b></td><td><input type="password" id="pass" name="pass"></td></tr>
                    <tr><td class="title"><b>确认密码:</b></td><td><input type="password" id="repass" name="repass"></td></tr>
                    <tr><td colspan="2"><input class="sub-btn" type="submit" id="sub" value="提交" name="sub"></td></tr>
                    </tbody></table>
            </div>
        </form>
    </div>
</div>
</body>
</html>
