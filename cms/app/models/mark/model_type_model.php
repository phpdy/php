<?php

class model_type_model extends BaseModel {
	
	/**
	 * insert
	 * @param array $data
	 */
	public function insertModelType($data){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$sql = "insert into mark_model_type (NAME,info) values(?,?)";
		$params = array($data['name'],$data['info']) ;
		$result = $this->excuteSQL($sql,$params) ;
		$log .= "|$sql" ;
		
		$log .= "|".$result ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}

	/**
	 * update
	 * @param array $data
	 */
	public function updateModelType($data){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$sql = "update mark_model_type set id=?";
		$params = array($data['id']) ;
		$log .= "|$data[id]" ;
		if (isset($data['name'])){
			$sql .= ",name=?";
			$params[] = $data['name'] ;
			$log .= ",$data[name]" ;
		}
		if (isset($data['info'])){
			$sql .= ",info=?";
			$params[] = $data['info'] ;
			$log .= ",$data[info]" ;
		}
		$sql .= " where id=?";
		$params[] = $data['id'] ;
		$result = $this->excuteSQL($sql,$params) ;
		$log .= "|$sql" ;
		
		$log .= "|".$result ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}

	/**
	 * select
	 * @param array $data
	 */
	public function selectModelType($data=array()){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$id = $data['id'] ;
		$params = array() ;
		$sql = "select * from mark_model_type where 1=1" ;
		
		if (!empty($id)){
			$sql .= " and id=?" ;
			$params[] = $id ;
			$log .= "$id," ;
		}
		
		$sql .= " ORDER BY id ";
		$result = $this->getAll($sql,$params) ;
		$log .= "|$sql" ;
		
		$log .= "|".sizeof($result) ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}
	
}