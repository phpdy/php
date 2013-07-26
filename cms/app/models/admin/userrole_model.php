<?php

class userrole_model extends BaseModel {
	protected $dbIndex = 'admin';
	public function userLogin($username,$password){
		
		return true ;
	}
	
	public function insertUserinfo($data){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$userid = $data['userid'] ;
		$rolses = $data['rolses'] ;
		$log .= "|$userid,$rolses" ;
		
		$sql = "insert into ".$this->da_pre."_userinfo (userid,rolses) values('$userid','$rolses')";
		$result = $this->insert($sql);
		$log .= "|$sql" ;
		
		$log .= "|".$result ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}

	public function updateUserinfo($data){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$id = $data['id'] ;
		$rolses = $data['rolses'] ;
		$state = $data['state'] ;
		$log .= "|$id,$rolses,$state" ;
		
		$sql = "update ".$this->da_pre."_userinfo set rolses='$rolses',state='$state' where id=$id";
		$result = $this->update($sql) ;
		$log .= "|$sql" ;
		
		$log .= "|".$result ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}

	public function selectUserinfo($data=array()){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$id = $data['id'] ;
		$userid = $data['userid'] ;
		$log .= "|$id,$userid" ;
		
		$sql = "select * from ".$this->da_pre."_userinfo where 1=1" ;
		if (!empty($id)){
			$sql .= " and id=$id" ;
		}
		if (!empty($userid)){
			$sql .= " and userid='$userid'" ;
		}
		$result = $this->getAll($sql) ;
		$log .= "|$sql" ;
		
		$log .= "|".sizeof($result) ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}

	/**
	 * 用户角色查询
	 * @param unknown_type $userid
	 */
	public function selectUserRolseList($userid){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$log .= "|$userid|" ;
		try{
			//查用户角色
			$sql = "SELECT rolses FROM ".$this->da_pre."_userinfo WHERE userid='$userid'" ;
			$result = $this->getAll($sql) ;
			$log .= "$sql,".sizeof($result) ;
	
			if (empty($result) || sizeof($result)==0){
				$log .= "|0|".(int)(microtime(true)*1000-$start) ;
				Log::logBehavior($log) ;
				return array() ;
			}
//			$rolses = array() ;
//			foreach ($result as $item){
//				$rolses[] = $item['rolses'] ;
//			}
//			$rolses = implode(',', array_unique($rolses)) ;
//			
//			//查角色对应的模块ID
//			$sql = "SELECT modules FROM ".$this->da_pre."_rolse WHERE id IN ($rolses)" ;
//			$result = $this->getAll($sql) ;
//			$log .= ",$sql,".sizeof($result) ;
//			
//			if (empty($result) || sizeof($result)==0){
//				$log .= "|0|".(int)(microtime(true)*1000-$start) ;
//				Log::logBehavior($log) ;
//				return array() ;
//			}
			$log .= "|".sizeof($result) ;
		}catch (Exception $e){
			print_r($e);
		}
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}
	/**
	 * 用户权限查询
	 * @param unknown_type $userid
	 */
	public function selectUserRankList($userid){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$log .= "|$userid|" ;
		try{
			$result = $this->selectUserRolseList($userid) ;
			if (empty($result) || sizeof($result)==0){
				$log .= "|0|".(int)(microtime(true)*1000-$start) ;
				Log::logBehavior($log) ;
				return array() ;
			}
			$rolses = array() ;
			foreach ($result as $item){
				$rolses[] = $item['rolses'] ;
			}
			$rolses = implode(',', array_unique($rolses)) ;
			
			//查角色对应的模块ID
			$sql = "SELECT modules FROM ".$this->da_pre."_rolse WHERE id IN ($rolses)" ;
			$result = $this->getAll($sql) ;
			$log .= ",$sql,".sizeof($result) ;
			
			if (empty($result) || sizeof($result)==0){
				$log .= "|0|".(int)(microtime(true)*1000-$start) ;
				Log::logBehavior($log) ;
				return array() ;
			}
			$models = array() ;
			foreach ($result as $item){
				$models = array_merge($models,explode(",", $item['modules'])) ;
			}
			$models = implode(',', array_unique($models)) ;
			$log .= ",$models," ;
			
			//查模块信息
			$sql = "SELECT * FROM ".$this->da_pre."_module WHERE id IN ($models) order by type,parentid,id " ;

			$result = $this->getAll($sql) ;
			$log .= ",$sql,".sizeof($result) ;
			
			$log .= "|".sizeof($result) ;
		}catch (Exception $e){
			print_r($e);
		}
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}
	
	public function delUserinfo($data) {
		return $this->delete('xy_user','game_userinfo',$data);
	}
}