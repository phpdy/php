$(function(){
    /********************************************************
     **                     common                         **
     ********************************************************/
    var lenReg = function lenReg(str){
        return str.replace(/[^\x00-\xFF]/g,'**').length;
    };

    //nav
    $("#nav h2").live("click",function(){
        window.open($(this).attr("data-href"),'_self');
        $(this).parent("li").siblings().children("h2").removeClass("active");
        $(this).addClass("active").siblings("ul").slideToggle(500);
    });

    //���б�ɫ
    function changeColor(){
        $(".MH-table tbody tr:odd").css("background","#FFF");
        $(".MH-table tbody tr:even").css("background","#FFFFCC");
    };
    changeColor();

    var aEditData = []; //��ű༭ʱ��ǰ�е�����
    var aTextData = []; //��ű༭ʱ��ǰ�е�����

    //�༭
    $(".J_operateEdit").live("click",function(){
        var _this = $(this);
		// var idata = $(this).parents().children('.J_operateEdit').attr('id');
        var idata = _this.attr('id');
		var ch = new Array;
		ch = idata.split("-");
		var mark = ch[0];
		var id = ch[1];
        if(!$(".J_operateSave").length){
            var aInput = _this.parents("td").siblings("td").children("input");
            var aSelect = _this.parents("td").siblings("td").children("select");
	    var aTextarea = _this.parents("td").siblings("td").children("textarea");
            for (var i=0; i<aInput.length; i++){
                aEditData[i] = aInput.eq(i).val();
                aInput.eq(i).removeAttr("disabled");
            }

            for (var i=0; i<aSelect.length; i++){
                aSelect.eq(i).removeAttr("disabled");
            }

	     for (var i=0; i<aTextarea.length; i++){
                aTextData[i] = aTextarea.eq(i).val();
                aTextarea.eq(i).removeAttr("disabled");
            }

            aInput.css({"background":"#fff","border":"1px red solid","margin":"-1px"});
            aSelect.css({"background":"#fff","border":"1px red solid"});
	    aTextarea.css({"background":"#fff","border":"1px red solid"});
            /** 2013-03-06 �����޸� **/
            var str = '<input id="save" class="J_operateSave" type="button" value="����" data="' + id + ',' + mark + '" onClick="javascript:save('+id+','+"'"+mark+"'"+');" />&nbsp;';
            str += ' <input class="J_operateCancel" type="button" data="' + id + ',' + mark + '" value="ȡ��" />';
            _this.parent(".MHT-operate").html(str);
        }else{
            hiAlert("�Բ���������Ϣ��δ���棡","��ʾ");
        }
    });

    //ȡ��
    $(".J_operateCancel").live("click",function(){
        var aInput = $(this).parents("td").siblings("td").children("input");
        // var aSelect = $(this).parents("td").siblings("td").children("select");
        var aSelect = $(this).parents('tr').find('select');
	var aTextarea = $(this).parents("td").siblings("td").children("textarea");
	
        for (var i=0; i<aInput.length; i++){
            aInput.eq(i).val(aEditData[i]);
            aInput.eq(i).attr("disabled","disabled");
            aInput.eq(i).siblings(".tips").remove();
        }

        for (var i=0; i<aSelect.length; i++){
            aSelect.eq(i).attr("disabled","disabled");
            // aSelect.css({"background":"#fff","border":"1px #ccc solid"});
	     aSelect.eq(i).siblings(".tips").remove();
        }
	for (var i=0; i<aTextarea.length; i++){
            aTextarea.val(aTextData[i]);
            aTextarea.eq(i).attr("disabled","disabled");
            aTextarea.eq(i).siblings(".tips").remove();
        }
	
        var data = ($(this).attr('data')).split(',');

        aInput.css({"background":"none","border":"none","margin":"0"});
        aSelect.css({"background":"#fff","border":"1px #ccc solid"});
	 aTextarea.css({"background":"#fff","border":"1px #ccc solid"});
        // <input type="button" value="�༭" class="J_operateEdit" id="collaborator-5">
        var str = '<input type="button" value="�༭" class="J_operateEdit" id="' + data[1] + '-' + data[0] + '">&nbsp;';
        str += '<input type="button" value="ɾ��" class="J_operateDele">';
        var MHT_operate = $(this).parent(".MHT-operate");
        MHT_operate.html(str);
        // $(this).parent(".MHT-operate").html(str);
    });

    /********************************************************
     **                     �ƶ��Ʒ��б�                   **
     ********************************************************/

    //�ƶ�-����
    $(".J_ydListTab .J_operateSave").live("click",function(){
        var aInput = $(this).parents("td").siblings("td").children("input");
        var _this = $(this);

        //�ж��Ƿ����ظ�����
        var aAppName = [],aMoney = [],aKey = [];
        for (var i=0; i<$(".J_ydListTab tbody tr").length; i++){
            aAppName[i] = $(".J_ydListTab tbody tr").eq(i).children("td").eq(1).children("input").val();
            aMoney[i] = $(".J_ydListTab tbody tr").eq(i).children("td").eq(7).children("input").val();
            aKey[i] = $(".J_ydListTab tbody tr").eq(i).children("td").eq(8).children("input").val();
        }

        var oInputAppName = aInput.eq(0).val();
        var iInputAppNameNum = 0;
        for (var i=0; i<aAppName.length; i++){
            if(aAppName[i] == oInputAppName){
                iInputAppNameNum ++;
            }
        }

        var oMoney = aInput.eq(6).val();
        var iMoneyNum = 0;
        for (var i=0; i<aMoney.length; i++){
            if(aMoney[i] == oMoney){
                iMoneyNum ++;
            }
        }

        var oKey = aInput.eq(7).val();
        var iKeyNum = 0;
        for (var i=0; i<aKey.length; i++){
            if(aKey[i] == oKey){
                iKeyNum ++;
            }
        }

        if(
            lenReg(aInput.eq(0).val()) >0 && lenReg(aInput.eq(0).val())<= 50 &&
            lenReg(aInput.eq(1).val()) >0 && lenReg(aInput.eq(1).val())<= 50 &&
            lenReg(aInput.eq(2).val()) >0 && lenReg(aInput.eq(2).val())<= 11 &&
            lenReg(aInput.eq(3).val()) >0 && lenReg(aInput.eq(3).val())<= 20 &&
            lenReg(aInput.eq(4).val()) >0 && lenReg(aInput.eq(4).val())<= 11 &&
            lenReg(aInput.eq(5).val()) >0 && lenReg(aInput.eq(5).val())<= 11 &&
            lenReg(aInput.eq(6).val()) >0 && lenReg(aInput.eq(6).val())<= 11 &&
            lenReg(aInput.eq(7).val()) >0 && lenReg(aInput.eq(7).val())<= 50 &&
            lenReg(aInput.eq(8).val()) >0 && lenReg(aInput.eq(8).val())<= 50 &&
            iKeyNum <= 1 && (iInputAppNameNum <= 1 || iMoneyNum <= 1)
            )
        {
            for (var i=0; i<aInput.length; i++){
                aInput.eq(i).siblings(".tips").remove();
                aInput.eq(i).attr("disabled","disabled");
                // aInput.css({"background":"none","border":"none","margin":"0"});
            }
            aInput.css({"background":"none","border":"none","margin":"0"});

            // _this.parent(".MHT-operate").html('<input class="J_operateEdit" type="button" value="�༭" /> <input class="J_operateDele" type="button" value="ɾ��" />');
            var data = (_this.attr('data')).split(',');
            var str = '<input type="button" value="�༭" class="J_operateEdit" id="' + data[1] + '-' + data[0] + '">';
            str += '<input type="button" value="ɾ��" class="J_operateDele" id="' + data[0] + '">';
            _this.parent(".MHT-operate").html(str);
        }
        else{

            function forbiddenInfo(i){
                aInput.eq(i).siblings(".tips").remove();
                aInput.eq(i).attr("disabled","disabled");
                aInput.eq(i).css({"background":"none","border":"none","margin":"0"});
            }

            if(lenReg(aInput.eq(0).val()) ==0 || lenReg(aInput.eq(0).val()) > 50 || (iInputAppNameNum >1 && iMoneyNum > 1)){
                aInput.eq(0).css("background","#FF9999");
                if(lenReg(aInput.eq(0).val()) ==0 && !aInput.eq(0).siblings(".tips").length){
                    aInput.eq(0).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(0).val()) >50 && !aInput.eq(0).siblings(".tips").length){
                    aInput.eq(0).after('<div class="tips">��������</div>');
                }else if(iInputAppNameNum > 1 && iMoneyNum > 1 && !aInput.eq(0).siblings(".tips").length){ //AppName�ͽ����ͬʱ
                    aInput.eq(0).after('<div class="tips">�����ظ���</div>');
                }
            }
            else{
                forbiddenInfo(0);
            }

            if(lenReg(aInput.eq(1).val()) ==0 || lenReg(aInput.eq(1).val()) > 50){
                aInput.eq(1).css("background","#FF9999");
                if(lenReg(aInput.eq(1).val()) ==0 && !aInput.eq(1).siblings(".tips").length){
                    aInput.eq(1).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(1).val()) >50 && !aInput.eq(1).siblings(".tips").length){
                    aInput.eq(1).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(1);
            }

            if(lenReg(aInput.eq(2).val()) ==0 || lenReg(aInput.eq(2).val()) > 11){
                aInput.eq(2).css("background","#FF9999");
                if(lenReg(aInput.eq(2).val()) ==0 && !aInput.eq(2).siblings(".tips").length){
                    aInput.eq(2).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(2).val()) >11 && !aInput.eq(2).siblings(".tips").length){
                    aInput.eq(2).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(2);
            }

            if(lenReg(aInput.eq(3).val()) ==0 || lenReg(aInput.eq(3).val()) > 20){
                aInput.eq(3).css("background","#FF9999");
                if(lenReg(aInput.eq(3).val()) ==0 && !aInput.eq(3).siblings(".tips").length){
                    aInput.eq(3).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(3).val()) >20 && !aInput.eq(3).siblings(".tips").length){
                    aInput.eq(3).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(3);
            }

            if(lenReg(aInput.eq(4).val()) ==0 || lenReg(aInput.eq(4).val()) > 11){
                aInput.eq(4).css("background","#FF9999");
                if(lenReg(aInput.eq(4).val()) ==0 && !aInput.eq(4).siblings(".tips").length){
                    aInput.eq(4).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(4).val()) >11 && !aInput.eq(4).siblings(".tips").length){
                    aInput.eq(4).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(4);
            }

            if(lenReg(aInput.eq(5).val()) ==0 || lenReg(aInput.eq(5).val()) > 11){
                aInput.eq(5).css("background","#FF9999");
                if(lenReg(aInput.eq(5).val()) ==0 && !aInput.eq(5).siblings(".tips").length){
                    aInput.eq(5).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(5).val()) >11 && !aInput.eq(5).siblings(".tips").length){
                    aInput.eq(5).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(5);
            }

            if(lenReg(aInput.eq(6).val()) ==0 || lenReg(aInput.eq(6).val()) > 11 || (iInputAppNameNum > 1 && iMoneyNum > 1)){
                aInput.eq(6).css("background","#FF9999");
                if(lenReg(aInput.eq(6).val()) ==0 && !aInput.eq(6).siblings(".tips").length){
                    aInput.eq(6).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(6).val()) >11 && !aInput.eq(6).siblings(".tips").length){
                    aInput.eq(6).after('<div class="tips">��������</div>');
                }else if(iInputAppNameNum > 1 && iMoneyNum > 1 && !aInput.eq(6).siblings(".tips").length){ //AppName�ͽ����ͬʱ
                    aInput.eq(6).after('<div class="tips">�����ظ���</div>');
                }
            }
            else{
                forbiddenInfo(6);
            }

            if(lenReg(aInput.eq(7).val()) ==0 || lenReg(aInput.eq(7).val()) > 50 || iKeyNum > 1){
                aInput.eq(7).css("background","#FF9999");
                if(lenReg(aInput.eq(7).val()) ==0 && !aInput.eq(7).siblings(".tips").length){
                    aInput.eq(7).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(7).val()) >50 && !aInput.eq(7).siblings(".tips").length){
                    aInput.eq(7).after('<div class="tips">��������</div>');
                }else if(iKeyNum > 1 && !aInput.eq(7).siblings(".tips").length){ //AppName�ͽ����ͬʱ
                    aInput.eq(7).after('<div class="tips">�����ظ���</div>');
                }
            }
            else{
                forbiddenInfo(7);
            }

            if(lenReg(aInput.eq(8).val()) ==0 || lenReg(aInput.eq(8).val()) > 50){
                aInput.eq(8).css("background","#FF9999");
                if(lenReg(aInput.eq(8).val()) ==0 && !aInput.eq(8).siblings(".tips").length){
                    aInput.eq(8).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(8).val()) >50 && !aInput.eq(8).siblings(".tips").length){
                    aInput.eq(8).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(8);
            }
        }
    });

    //�ƶ�-ɾ��
    $(".J_ydListTab .J_operateDele").live("click",function(){
        var _this = $(this);
		
		var id = $(this).parents().children('.J_operateDele').attr('id');
		
        hiConfirm('ȷ��Ҫɾ��������Ϣ��?', 'ȷ�Ͽ�', function(r) {
            if(r){
				yddelete(id);
                _this.parents("tr").remove();
                var aListTabTr = $(".J_ydListTab tbody tr");
//                for(var i=0; i<aListTabTr.length; i++){
//                    aListTabTr.eq(i).children("td:first").html(i+1);
//                }
                changeColor();
            }
        });
    });

    //�ƶ�-����
    $(".J_newydList").live("click",function(){
        var _this = $(this);
        if(!$(".J_operateSave").length){
            aEditData.length = 0;
            // var iNum = parseInt(($(".J_ydListTab>tbody tr").last()).find('td').html()) + 1;
            var channel = $('#channel').val();
            var iNum = 0
            $.ajax({
         		url : '/index.php?module=business&control=ydcollaborator&action=getLastData&channel=' + channel,
        		type : 'get',
        		dataType : 'json',
        		async : false,
        		success : function(result){
        			iNum = ++result.id;
        		}
        	})
            var aTabList = '<tr>\
                <td>'+ iNum +'</td>\
                <td><input name="appName" class="operateEdit" type="text" value=""/></td>\
                <td><input name="ydappname" class="operateEdit" type="text" value=""/></td>\
                <td><input name="CPID" class="operateEdit" type="text" value=""/></td>\
                <td><input name="CPServiceID" class="operateEdit" type="text" value=""/></td>\
                <td><input name="ChannelID" class="operateEdit" type="text" value=""/></td>\
                <td><input name="sender" class="operateEdit" type="text" value=""/></td>\
                <td><input name="money" class="operateEdit" type="text" value=""/></td>\
                <td><input name="consumeCode" class="operateEdit" type="text" value=""/></td>\
                <td><input name="ydKey" class="operateEdit" type="text" value=""/></td>\
                <td>\
                    <p class="MHT-operate">\
                        <input class="J_operateSave" type="button" data="' + iNum + ',collaborator" value="����" onClick="javascript:addsave();" />\
                        <input class="J_operateCancel" type="button" data="' + iNum + ',collaborator" value="ȡ��" />\
                    </p>\
                </td>\
            </tr>';
            if($(".J_ydListTab tbody tr").length){
                $(".J_ydListTab tbody tr:last").after(aTabList);
            }else{
                $(".J_ydListTab tbody").html(aTabList);
            }
            changeColor();
        }else{
            hiAlert("�Բ���������Ϣ��δ���棡","��ʾ");
        }
    });

    /********************************************************
     **                     ���������б�                   **
     ********************************************************/

    //����-ɾ��
    $(".J_qdListTab .J_operateDele").live("click",function(){
        var _this = $(this);
		var id = $(this).parents().children('.J_operateDele').attr('id');
		
        hiConfirm('ȷ��Ҫɾ��������Ϣ��?', 'ȷ�Ͽ�', function(r) {
            if(r){
				collaboratordelete(id); 			
                _this.parents("tr").remove();
                var aListTabTr = $(".J_qdListTab tbody tr");
                for(var i=0; i<aListTabTr.length; i++){
                    aListTabTr.eq(i).children("td:first").html(i+1);
                }
                changeColor();
            }
        });
    });

    //����-����
    $(".J_newqdList").live("click",function(){
        var _this = $(this);
        if(!$(".J_operateSave").length){
            aEditData.length = 0;
//            var iNum = $(".J_qdListTab>tbody").children("tr").length+1;
            var channel = $('#channel').val();
            var iNum = 0
            $.ajax({
         		url : '/index.php?module=business&control=ydcollaborator&action=getLastData&channel=' + channel,
        		type : 'get',
        		dataType : 'json',
        		async : false,
        		success : function(result){
        			iNum = ++result.id;
        		}
        	})
            var aTabList = '<tr>\
                <td>'+ iNum +'</td>\
                <td><input name="coopName" class="operateEdit" type="text" value=""/></td>\
                <td><input name="coop_name" class="operateEdit" type="text" value=""/></td>\
                <td><input name="coopAppName" class="operateEdit" type="text" value=""/></td>\
                <td><input name="coop_appname" class="operateEdit" type="text" value=""/></td>\
                <td><input name="coop_key" class="operateEdit" type="text" value=""/></td>\
		 <td><textarea class="oIpTextarea J_IpTextarea operateEdit" name="safeip" cols="20" rows="2">���IP����"|"����</textarea></td>\
                <td>\
                    <div class="MH-selectTips">\
                        <p class="MHST-title"><input name="payway" class="operateEdit" disabled="disabled" type="text" value="�ֻ�" /><a class="oSelectBtn" href="javascript:;">��ѡ��</a></p>\
                        <div class="MHST-bd">\
                            <ul>\
                                <li><input type="checkbox" /><label>ȫ��</label></li>\
                                <li><input type="checkbox" /><label>�ֻ�</label></li>\
                                <li><input type="checkbox" /><label>����</label></li>\
                            </ul>\
                            <input class="MHST-foot" type="button" value="ȷ��" />\
                        </div>\
                    </div>\
                </td>\
                    <td>\
                    <select name="isuse" class="operateEdit">\
                        <option value="1">����</option>\
                        <option value="0">ͣ��</option>\
                    </select>\
                </td>\
                <td>\
                   <input name="consumecode_name" class="operateEdit" type="text" value=""/>\
                </td>\
                <td>\
                    <div class="MH-selectTips">\
                        <p class="MHST-title"><input name="avail" class="operateEdit" disabled="disabled" type="text" value="ȫ��" /><a class="oSelectBtn" href="javascript:;">��ѡ��</a></p>\
                         <div class="MHST-bd">\
                            <ul>\
                                <li><input type="checkbox" /><label>ȫ��</label></li>\
                            </ul>\
                            <input class="MHST-foot" type="button" value="ȷ��" />\
                        </div>\
                    </div>\
                </td>\
                <td>\
                    <p class="MHT-operate">\
                        <input class="J_operateSave" type="button" data="' + iNum + ',collaborator" value="����" onClick="javascript:collaboratorsave();" />\
                        <input class="J_operateCancel" type="button" data="' + iNum + ',collaborator" value="ȡ��" />\
                    </p>\
                </td>\
            </tr>';
            if($(".J_qdListTab tbody tr").length){
                $(".J_qdListTab tbody tr:last").after(aTabList);
            }else{
                $(".J_qdListTab tbody").html(aTabList);
            }
            changeColor();
        }else{
            hiAlert("�Բ���������Ϣ��δ���棡","��ʾ");
        }
    });

    //����-������IP
    $(".J_IpTextarea").live("focus",function(){
        if($(this).val() == '���IP����"|"����'){
            $(this).val('');
        }
    });

    $(".J_IpTextarea").live("blur",function(){
        if($(this).val() == ''){
            $(this).val('���IP����"|"����');
        }
    });
    //����-����
    $(".J_qdListTab .J_operateSave").live("click",function(){
        var aInput = $(this).parents("td").siblings("td").children("input");
        var aSelect = $(this).parents("td").siblings("td").children("select");
	var aTextarea = $(this).parents("td").siblings("td").children("textarea");
        var _this = $(this);

        //�ж��Ƿ����ظ�����
        var aCooperationName = [],aKey = [];
        for (var i=0; i<$(".J_qdListTab tbody tr").length; i++){
            aCooperationName[i] = $(".J_qdListTab tbody tr").eq(i).children("td").eq(1).children("input").val();
            aKey[i] = $(".J_qdListTab tbody tr").eq(i).children("td").eq(5).children("input").val();
        }

        var oCooperationName = aInput.eq(0).val();
        var iCooperationNameNum = 0;
        for (var i=0; i<aCooperationName.length; i++){
            if(aCooperationName[i] == oCooperationName){
                iCooperationNameNum ++;
            }
        }

        var oKey = aInput.eq(4).val();
        var iKeyNum = 0;
        for (var i=0; i<aKey.length; i++){
            if(aKey[i] == oKey){
                iKeyNum ++;
            }
        }

        if(
            lenReg(aInput.eq(0).val()) >0 && lenReg(aInput.eq(0).val())<= 50 &&
            lenReg(aInput.eq(1).val()) >0 && lenReg(aInput.eq(1).val())<= 20 &&
            lenReg(aInput.eq(2).val()) >0 && lenReg(aInput.eq(2).val())<= 50 &&
            lenReg(aInput.eq(3).val()) >0 && lenReg(aInput.eq(3).val())<= 20 &&
            lenReg(aInput.eq(4).val()) >0 && lenReg(aInput.eq(4).val())<= 50 &&
            iCooperationNameNum <= 1 && iKeyNum <= 1 && lenReg(aTextarea.eq(0).val()) <= 200
            )
        {
            for (var i=0; i<aInput.length; i++){
                aInput.eq(i).siblings(".tips").remove();
                aInput.eq(i).attr("disabled","disabled");
            }
	    
            for (var i=0; i<aSelect.length; i++){
                aSelect.eq(i).siblings(".tips").remove();
                aSelect.eq(i).attr("disabled","disabled");
            }
 	    	for (var i=0; i<aTextarea.length; i++){
                aTextarea.eq(i).siblings(".tips").remove();
                aTextarea.eq(i).attr("disabled","disabled");
            }

           
            aSelect.css({"background":"#fff","border":"1px #ccc solid"});
            aInput.css({"background":"none","border":"none","margin":"0"});
            aTextarea.css({"background":"#fff","border":"1px #ddd solid"});
            // <input type="button" value="�༭" class="J_operateEdit" id="collaborator-5">
            // <input type="button" value="ɾ��" class="J_operateDele" id="5">
            var data = (_this.attr('data')).split(',');
            var str = '<input type="button" value="�༭" class="J_operateEdit" id="' + data[1] + '-' + data[0] + '">';
            str += '<input type="button" value="ɾ��" class="J_operateDele" id="' + data[0] + '">';
            _this.parent(".MHT-operate").html(str);

        }
        else{

            function forbiddenInfo(i){
                aInput.eq(i).siblings(".tips").remove();
                aInput.eq(i).attr("disabled","disabled");
                aInput.eq(i).css({"background":"none","border":"none","margin":"0"});
            }

            if(lenReg(aInput.eq(0).val()) ==0 || lenReg(aInput.eq(0).val()) > 50 || iCooperationNameNum > 1){
                aInput.eq(0).css("background","#FF9999");
                if(lenReg(aInput.eq(0).val()) ==0 && !aInput.eq(0).siblings(".tips").length){
                    aInput.eq(0).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(0).val()) >50 && !aInput.eq(0).siblings(".tips").length){
                    aInput.eq(0).after('<div class="tips">��������</div>');
                }else if( iCooperationNameNum > 1 && !aInput.eq(0).siblings(".tips").length){
                    aInput.eq(0).after('<div class="tips">�����ظ���</div>');
                }
            }
            else{
                forbiddenInfo(0);
            }

            if(lenReg(aInput.eq(1).val()) ==0 || lenReg(aInput.eq(1).val()) > 20){
                aInput.eq(1).css("background","#FF9999");
                if(lenReg(aInput.eq(1).val()) ==0 && !aInput.eq(1).siblings(".tips").length){
                    aInput.eq(1).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(1).val()) >50 && !aInput.eq(1).siblings(".tips").length){
                    aInput.eq(1).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(1);
            }

            if(lenReg(aInput.eq(2).val()) ==0 || lenReg(aInput.eq(2).val()) > 50){
                aInput.eq(2).css("background","#FF9999");
                if(lenReg(aInput.eq(2).val()) ==0 && !aInput.eq(2).siblings(".tips").length){
                    aInput.eq(2).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(2).val()) >11 && !aInput.eq(2).siblings(".tips").length){
                    aInput.eq(2).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(2);
            }

            if(lenReg(aInput.eq(3).val()) ==0 || lenReg(aInput.eq(3).val()) > 20){
                aInput.eq(3).css("background","#FF9999");
                if(lenReg(aInput.eq(3).val()) ==0 && !aInput.eq(3).siblings(".tips").length){
                    aInput.eq(3).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(3).val()) >20 && !aInput.eq(3).siblings(".tips").length){
                    aInput.eq(3).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(3);
            }

            if(lenReg(aInput.eq(4).val()) ==0 || lenReg(aInput.eq(4).val()) > 50 || iKeyNum > 1){
                aInput.eq(4).css("background","#FF9999");
                if(lenReg(aInput.eq(4).val()) ==0 && !aInput.eq(4).siblings(".tips").length){
                    aInput.eq(4).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(4).val()) >11 && !aInput.eq(4).siblings(".tips").length){
                    aInput.eq(4).after('<div class="tips">��������</div>');
                }else if(iKeyNum > 1 && !aInput.eq(4).siblings(".tips").length){
                    aInput.eq(4).after('<div class="tips">�����ظ���</div>');
                }
            }
            else{
                forbiddenInfo(4);
            }

             if(lenReg(aTextarea.eq(0).val()) > 200 && !aTextarea.eq(0).siblings(".tips").length){
                aTextarea.eq(0).css("background","#FF9999");
                aTextarea.eq(0).after('<div class="tips">��������</div>');
            }
        }
    });

    //ģ������ѡ���
    $(".MH-selectTips .MHST-title .oSelectBtn").live("click",function(){
        $(this).parent(".MHST-title").siblings(".MHST-bd").slideToggle(400);
    });

    //�Ƿ�ȫѡ
    $(".MH-selectTips").each(function(){
        $(this).find(".MHST-bd ul li:first").live("click",function(){
            if(!!$(this).eq(0).children("input").attr("checked")){
                $(this).siblings("li").find("input").attr("checked","checked");
            }
            else{
                $(this).siblings("li").find("input").removeAttr("checked");
            }
        });
    });

    //ȷ��
    $(".MHST-foot").live("click",function(){
        var aLabelVal = [], _this = $(this);
        for (var i=0;i<$(this).siblings("ul").find("li").length; i++){
            if(!!$(this).siblings("ul").find("li").eq(i).find("input").attr("checked")){
                aLabelVal[i] = $(this).siblings("ul").find("li").eq(i).find("label").html();
            }
        }

        if($(this).siblings("ul").find("li").eq(0).children("input").attr("checked")){
            _this.parents(".MHST-bd").siblings(".MHST-title").children("input").val("ȫ��");
        }
        else{
            _this.parents(".MHST-bd").siblings(".MHST-title").children("input").val((aLabelVal.join(" ")).replace(/^\s*|\s*$/,""));
        }

        _this.parents(".MHST-bd").slideToggle(400);

        console.log(aLabelVal)
    });

    /********************************************************
     **                     �û�����                       **
     ********************************************************/

    //�û�-����
    $(".J_newUser").live("click",function(){
        var _this = $(this);
        if(!$(".J_operateSave").length){
            aEditData.length = 0;
            var aTabList = '<tr>\
                <td><input type="text" value="" class="operateEdit"/></td>\
                <td><input type="text" value="" class="operateEdit"/></td>\
                <td>\
                    <select class="operateEdit">\
                        <option>�ֻ�</option>\
                        <option>����</option>\
                    </select>\
                </td>\
                <td><input type="text" value="" class="operateEdit"/></td>\
                <td>\
                    <select class="operateEdit">\
                        <option>����</option>\
                        <option>ͣ��</option>\
                    </select>\
                </td>\
                <td>\
                    <p class="MHT-operate">\
                        <input class="J_operateSave" type="button" value="����" />\
                        <input class="J_operateCancel" type="button" value="ȡ��" />\
                    </p>\
                </td>\
            </tr>';
            if($(".J_userListTab tbody tr").length){
                $(".J_userListTab tbody tr:last").after(aTabList);
            }else{
                $(".J_userListTab tbody").html(aTabList);
            }
            changeColor();
        }else{
            hiAlert("�Բ���������Ϣ��δ���棡","��ʾ");
        }
    });

    //�û�-ɾ��
    $(".J_userListTab .J_operateDele").live("click",function(){
        var _this = $(this);
        hiConfirm('ȷ��Ҫɾ��������Ϣ��?', 'ȷ�Ͽ�', function(r) {
            if(r){
                _this.parents("tr").remove();
                changeColor();
            }
        });
    });

    //�û�-����
    $(".J_userListTab .J_operateSave").live("click",function(){
        var aInput = $(this).parents("td").siblings("td").children("input");
        var aSelect = $(this).parents("td").siblings("td").children("select");
        var _this = $(this);

        //�ж��Ƿ����ظ�����
        var aUserName = [],aUserID = [];
        for (var i=0; i<$(".J_userListTab tbody tr").length; i++){
            aUserName[i] = $(".J_userListTab tbody tr").eq(i).children("td").eq(0).children("input").val();
            aUserID[i] = $(".J_userListTab tbody tr").eq(i).children("td").eq(2).children("input").val();
        }

        var oUserName = aInput.eq(0).val();
        var iUserNameNum = 0;
        for (var i=0; i<aUserName.length; i++){
            if(aUserName[i] == oUserName){
                iUserNameNum ++;
            }
        }

        var oUserID = aInput.eq(2).val();
        var iUserID = 0;
        for (var i=0; i<aUserID.length; i++){
            if(aUserID[i] == oUserID){
                iUserID ++;
            }
        }

        console.log(iUserNameNum+'|'+iUserID);

        if(
            lenReg(aInput.eq(0).val()) >0 && lenReg(aInput.eq(0).val())<= 50 &&
            lenReg(aInput.eq(1).val()) >0 && lenReg(aInput.eq(1).val())<= 50 &&
            lenReg(aInput.eq(2).val()) >0 && lenReg(aInput.eq(2).val())<= 20 &&
            iUserNameNum <= 1 && iUserID <= 1
            )
        {
            for (var i=0; i<aInput.length; i++){
                aInput.eq(i).siblings(".tips").remove();
                aInput.eq(i).attr("disabled","disabled");
            }

            for (var i=0; i<aSelect.length; i++){
                aSelect.eq(i).attr("disabled","disabled");
            }

            aInput.css({"background":"none","border":"none","margin":"0"});
            aSelect.css({"background":"#fff","border":"1px red solid"});
            _this.parent(".MHT-operate").html('<input class="J_operateEdit" type="button" value="�༭" /> <input class="J_operateDele" type="button" value="ɾ��" />');

        }
        else{

            function forbiddenInfo(i){
                aInput.eq(i).siblings(".tips").remove();
                aInput.eq(i).attr("disabled","disabled");
                aInput.eq(i).css({"background":"none","border":"none","margin":"0"});
            }

            if(lenReg(aInput.eq(0).val()) ==0 || lenReg(aInput.eq(0).val()) > 50 || iUserNameNum > 1 ){
                aInput.eq(0).css("background","#FF9999");
                if(lenReg(aInput.eq(0).val()) ==0 && !aInput.eq(0).siblings(".tips").length){
                    aInput.eq(0).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(0).val()) >50 && !aInput.eq(0).siblings(".tips").length){
                    aInput.eq(0).after('<div class="tips">��������</div>');
                }else if( iUserNameNum > 1 && !aInput.eq(0).siblings(".tips").length){
                    aInput.eq(0).after('<div class="tips">�����ظ���</div>');
                }
            }
            else{
                forbiddenInfo(0);
            }

            if(lenReg(aInput.eq(1).val()) ==0 || lenReg(aInput.eq(1).val()) > 20){
                aInput.eq(1).css("background","#FF9999");
                if(lenReg(aInput.eq(1).val()) ==0 && !aInput.eq(1).siblings(".tips").length){
                    aInput.eq(1).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(1).val()) >50 && !aInput.eq(1).siblings(".tips").length){
                    aInput.eq(1).after('<div class="tips">��������</div>');
                }
            }
            else{
                forbiddenInfo(1);
            }

            if(lenReg(aInput.eq(2).val()) ==0 || lenReg(aInput.eq(2).val()) > 50 || iUserID > 1){
                aInput.eq(2).css("background","#FF9999");
                if(lenReg(aInput.eq(2).val()) ==0 && !aInput.eq(2).siblings(".tips").length){
                    aInput.eq(2).after('<div class="tips">��δ��д��</div>');
                }else if(lenReg(aInput.eq(2).val()) >11 && !aInput.eq(2).siblings(".tips").length){
                    aInput.eq(2).after('<div class="tips">��������</div>');
                }else if( iUserNameNum > 1 && !aInput.eq(2).siblings(".tips").length){
                    aInput.eq(2).after('<div class="tips">�����ظ���</div>');
                }
            }
            else{
                forbiddenInfo(2);
            }

        }
    });

});