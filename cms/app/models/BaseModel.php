<?php

class BaseModel extends Model {
	protected $dbIndex = 'admin';
	protected $start ;//起始时间
	protected $da_pre = "yd" ;
	
	function __construct(){
		try {
			$this->dbconfig = Configs::$dbconfig[$this->dbIndex] ;
			parent::__construct() ;
		} catch (Exception $e) {
			log::logError($e->__toString() ) ;
			throw new Exception($e) ;
		}
		$this->da_pre = FinalClass::$_system ;
	}
	
	/**
	 * 查询一条结果
	 * @param string $sql
	 * @param array $params
	 */
	public function getOne($sql,$params=array()){
		$list = $this->querySQL($sql,$params) ;
		
		if (!is_array($list) || sizeof($list)!=1){
			return array() ;
		}
		return $list[0] ;
	}
	
	/**
	 * 根据ID号查询结果
	 * @param string $sql
	 * @param int $id
	 */
	public function findObjectById($sql,$id){
		$list = $this->querySQL($sql,array($id)) ;
		
		if (!is_array($list) || sizeof($list)!=1){
			return array() ;
		}
		return $list[0] ;
	}

	/**
	 * 查询所有结果
	 * @param string $sql
	 * @param array $params
	 */
	public function getAll($sql,$params=array()){
		$list = $this->querySQL($sql,$params) ;
		
		return $list ;
	}
}
