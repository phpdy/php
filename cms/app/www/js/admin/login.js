$(function() {
	var url = 'index.php?module=admin&action=login';
	$('input[name="username"]').focus(function(){
		$('input[name="username"]').val('');
	});
	$('input[name="username"]').blur(function(){
		if($('input[name="username"]').val() == ''){
			$('input[name="username"]').val('username');
		}
	});
	$('#submit').click(function() {
		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();
		if(username == ''){
			alert('�û�������Ϊ��!');
			$('input[name="username"]').focus();
			return false;
		}
		
		if(password == ''){
			alert('���벻��Ϊ��!');
			$('input[name="password"]').focus();
			return false;
		}
		if (username && password) {
			$.post(url, {
				username : username,
				password : password
			}, function(data) {
				if(data == '-2') {
					alert('not user');
				}else if (data == '-1'){
					alert("�������");
				}else{
					$('form').submit();
				}
			});
		}
	});
});