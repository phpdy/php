<?php

class user_model extends BaseModel {
	protected $dbIndex = 'admin';
	
	/**
	 * 用户登录
	 * @param string $username
	 */
	function getUserInfo($username) {
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$log .= "|$username" ;
		$sql = "select * from user where name=?";
		$result = $this->getOne($sql,array($username)) ;
		$log .= "|$sql" ;
		
		$log .= "|".is_array($result) ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}

	/**
	 * 查询出所有的用户
	 */
	function getUserList() {
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$sql = "select * from user order by name";
		$result = $this->getAll($sql) ;
		$log .= "|$sql" ;
		
		$log .= "|".sizeof($result) ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}

	/**
	 * 更新密码
	 * Enter description here ...
	 */
	function updatePWD($userid,$password) {
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$sql = "update user set password=?  where id=? ";
		$params = array($password,$userid) ;
		$result = $this->excuteSQL($sql,$params) ;
		$log .= "|$sql";
		
		$log .= "|".$result ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log);
		return $result ;
	}
	
	/**
	 * insert
	 * @param unknown_type $username
	 * @param unknown_type $password
	 * @param unknown_type $realname
	 */
	public function addUser($username,$password,$realname) {
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		$log .= '|' . $username . '|' . $password . '|' .$realname;

		$sql = "INSERT INTO user (username,password,username) VALUES (?,?,?)";
		$params = array($username,$password,$realname) ;
		$result = $this->excuteSQL($sql,$params) ;
		
		$log .= '|' . $sql;
		$log .= '|' . $result;
		$log .= '|' . (int)(microtime(true)*1000-$start);
		Log::logBehavior($log);
		return $result;	
	}
	
	//根据userid获取真实姓名
	public function getusername($userid) {
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		$log .= '|' . $userid ;
		
		$sql = "SELECT * FROM user WHERE id = ?";
		$result = $this->getOne($sql,array($userid));
		
		$log .= '|' . $sql;
		$log .= '|' . $result;
		$log .= '|' . (int)(microtime(true)*1000-$start);
		Log::logBehavior($log);
		return $result;
	}

	/**
	 * delete
	 * @param int $userid
	 */
	public function deleteUserByUserId($userid) {
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		$log .= '|' . $userid ;
		
		$sql = "delete FROM user WHERE id = ?";
		$result = $this->findObjectById($sql, $userid) ;
		
		$log .= '|' . $sql;
		$log .= '|' . $result;
		$log .= '|' . (int)(microtime(true)*1000-$start);
		Log::logBehavior($log);
		return $result;
	}
	


}

