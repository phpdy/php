<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8" />
<title>用户角色修改</title>
<link rel="stylesheet" href="/css/style.css" />
</head>
<body>
<div class="content">
    <div id="main" class="main">
        <div id="gamefeatures"><h2>用户角色修改</h2></div>
        <form method="post" action="index.php?dir=admin&control=userrole&action=up_sub">
			<input type="hidden" name = "id" value = "<?php echo $id; ?>"/>
            <div id="gamemain">
                <table>
                    <tbody><tr>
                        <td class="title"><b>用户:</b></td>
                        <td>
                        	<?php echo $usernames['username'] . '-' . $usernames['realname'];?>
                        </td>
                    </tr>
                    <tr>
                        <td class="title"><b>角色:</b></td>
                        <td><table class="RoleOfAdd-listTab"><tbody><tr>
						<?php
						if (!empty($show_rolelist)) { 
							$i = 0;
							foreach ($show_rolelist as $item){
								$id = $item['id'];
								$name = $item['rolse'];
								echo "<td><input type='checkbox' ";
								if (!empty($rolelist)){
									foreach ($rolelist as $v) {
										if ($v['id'] == $id) {
											echo 'checked = "checked"';
										}
									}
								}
								echo " name='rolses[]' value='$id' id='$id'><label for='$id'>$name</label></td>" ;
								if($i>8){echo '<tr/><tr>';$i=0;}
								$i++;
							}
						}	
						?>	
                        </tr></tbody>
                        </table></td>
                    </tr>
                    <tr>
                        <table>
                            <tr><td class="RoleOfAdd-btn"><input type="submit" value="提  交" name="sub"></td></tr>
                        </table>
                    </tr>
                    </tbody></table>
            </div>
        </form>
    </div>
</div>
</body>
</html>