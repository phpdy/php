function save(id,mark){
		if(mark=='consumecode'){
			var id = $("#id"+id).val();
			var appName = $("#appName"+id).val();
			var ydappname = $("#ydappname"+id).val();
			var CPID = $("#CPID"+id).val();
			var CPServiceID = $("#CPServiceID"+id).val();
			var ChannelID = $("#ChannelID"+id).val();
			var sender = $("#sender"+id).val();
			var money = $("#money"+id).val();
			var consumeCode = $("#consumeCode"+id).val();
			var ydKey = $("#ydKey"+id).val();
			$.ajax({
				type:"POST",
				url:"./index.php?module=business&control=ydconsumecode&action=update",
				data:{'id':id,'appName':appName,'ydappname':ydappname,'CPID':CPID,'CPServiceID':CPServiceID,'ChannelID':ChannelID,'sender':sender,'money':money,'consumeCode':consumeCode,'ydKey':ydKey},
				dataType:"json",
				success:function(res){
					if(res==0){
					alert("���³ɹ�");
					}else{
						alert("����ʧ��");
					}
					
				},
				error:function(){
					alert("����ʧ��");
			}});
		}else{
			var id = $("#id"+id).val();
			var coopName = $("#coopName"+id).val();
			var coop_name = $("#coop_name"+id).val();
			var coopAppName = $("#coopAppName"+id).val();
			var coop_appname = $("#coop_appname"+id).val();
			var coop_key = $("#coop_key"+id).val();
			var safeip = $("#safeip"+id).val();
			var payway = $("#payway"+id).val();
			var isuse = $("#isuse"+id).val();
			var consumecode_name = $("#consumecode_name"+id).val();
			var avail = $("#avail"+id).val();
			$.ajax({
				type:"POST",
				url:"./index.php?module=business&control=ydcollaborator&action=update",
				data:{'id':id,'coopName':coopName,'coop_name':coop_name,'coopAppName':coopAppName,'coop_appname':coop_appname,'coop_key':coop_key,'safeip':safeip,'payway':payway,'isuse':isuse,'consumecode_name':consumecode_name,"avail":avail},
				dataType:"json",
				success:function(res){
					if(res==0){
					alert("���³ɹ�");
					}
					
				},
				error:function(){
					alert("����ʧ��");
			}});
		}
}
			
function addsave(){
	 data = new Array();
	 var i =0 
	$(".operateEdit").each(function(){
		var name = $(this).attr('name');
		var val = $(this).val();
		data[i] = name+"="+val;
		i++
	});
	datastr =data.join('&');
	$.ajax({
		type:"POST",
		url:"./index.php?module=business&control=ydconsumecode&action=insert",
		data:datastr,
		dataType:"json",
		success:function(res){
			if(res==0){
				alert("��ӳɹ�");
			}else{
				alert("��ӳɹ�");
			}
			

		},
		error:function(){
			alert("���ʧ��");
	}});
}
function collaboratorsave(){
	 data = new Array();
	 var i =0 
	$(".operateEdit").each(function(){
		var name = $(this).attr('name');
		var val = $(this).val();
		data[i] = name+"="+val;
		i++
	});
	datastr =data.join('&');
	$.ajax({
		type:"POST",
		url:"./index.php?module=business&control=ydcollaborator&action=insert",
		data:datastr,
		dataType:"json",
		success:function(res){
			if(res==0){
				alert("��ӳɹ�");
			}
			

		},
		error:function(){
			alert("���ʧ��");
	}});
}

function yddelete(id){

	$.ajax({
		type:"POST",
		url:"./index.php?module=business&control=ydconsumecode&action=delete",
		data:{'id':id},
		dataType:"json",
		success:function(res){
			if(res==0){
				alert("ɾ���ɹ�");
			}
			
		},
		error:function(){
			alert("ɾ��ʧ��");
	}});	
		
}

function collaboratordelete(id){
	$.ajax({
		type:"POST",
		url:"./index.php?module=business&control=ydcollaborator&action=delete",
		data:{'id':id},
		dataType:"json",
		success:function(res){
			if(res==0){
				alert("ɾ���ɹ�");
			}
		},
		error:function(){
			alert("ɾ��ʧ��");
	}});	

} 