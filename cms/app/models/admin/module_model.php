<?php

class module_model extends BaseModel {
	protected $dbIndex = 'admin';
	
	/**
	 * insert
	 * @param array $data
	 */
	public function insertModule($data){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$name = $data['name'] ;
		$url = $data['url'] ;
		$type = $data['type'] ;
		$parentid = $data['parentid'] ;
		$log .= "|$name,$url,$type,$parentid" ;
		
		$sql = "insert into ".$this->da_pre."_module (name,url,type,parentid) values(?,?,?,?)";
		$params = array($name,$url,$type,$parentid) ;
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
	public function updateModule($data){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$id = $data['id'] ;
		
		$sql = "update ".$this->da_pre."_module set id=?";
		$params = array($id) ;
		$log .= "|$id" ;
		if (isset($data['name'])){
			$sql .= ",name=?";
			$params[] = $data['name'] ;
			$log .= ",$data[name]" ;
		}
		if (isset($data['url'])){
			$sql .= ",url=?";
			$params[] = $data['url'] ;
			$log .= ",$data[url]" ;
		}
		if (isset($data['type'])){
			$sql .= ",type=?";
			$params[] = $data['type'] ;
			$log .= ",$data[type]" ;
		}
		if (isset($data['parentid'])){
			$sql .= ",parentid=?";
			$params[] = $data['parentid'] ;
			$log .= ",$data[parentid]" ;
		}
		if (isset($data['state'])){
			$sql .= ",state=?";
			$params[] = $data['state'] ;
			$log .= ",$data[state]" ;
		}
		$sql .= " where id=?";
		$params[] = $id ;
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
	public function selectModule($data=array()){
		$start = microtime(true)*1000 ;
		$log = __CLASS__."|".__FUNCTION__ ;
		
		$id = $data['id'] ;
		$type = $data['type'] ;
		$parentid = $data['parentid'] ;
		
		$params = array() ;
		$sql = "select * from ".$this->da_pre."_module where 1=1" ;
		
		if (!empty($id)){
			$sql .= " and id=?" ;
			$params[] = $id ;
			$log .= "$id," ;
		}
		if (!empty($type)){
			$sql .= " and type=?" ;
			$params[] = $type ;
			$log .= "$type," ;
		}
		if (!empty($parentid)){
			$sql .= " and parentid=?" ;
			$params[] = $parentid ;
			$log .= "$parentid," ;
		}
		$sql .= " ORDER BY parentid,TYPE,id ";
		$result = $this->getAll($sql,$params) ;
		$log .= "|$sql" ;
		
		$log .= "|".sizeof($result) ;
		$log .= "|".(int)(microtime(true)*1000-$start) ;
		Log::logBehavior($log) ;
		return $result ;
	}
	
}