$("#sub").live("click",function(){
	var passbefore = $("#passbefore").val() ;
	var pass = $("#pass").val() ;
	var repass = $("#repass").val() ;
        if(passbefore == ''){
        	alert('����дԭ����');
        	return false;
        }
        if(pass == ''){
        	alert('����д������');
        	return false;
        }
        if(repass == ''){
        	alert('����дȷ������');
        	return false;
        }
        if(pass != repass){
        	alert('��������ȷ�����벻һ��');
        	return false;
        }
  });