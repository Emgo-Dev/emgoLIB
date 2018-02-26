<?php

class SQLi {

    function __construct( $host, $user, $pass, $database, $ignoreError = false ){
        $this->link      =  null;     // mysqli object
        $this->status    =  nulL;     // connection status
        $this->stm       =  array();  // query statements
        $this->rst       =  array();  // result object
        $this->affected  =  0;
        
        $this->open( $host, $user, $pass, $database );
    }

    /**
     * Create and store connection to MySQL database
     *
     * @param  <type>  $creds  Credentials for database connection
     */
    private function open( $host = null, $user = null, $pass = null, $database = null ){
        $this->link = new mysqli( $host, $user, $pass, $database );

        $this->link->connect_error ? die('Conection Error('.$this->link->connect_errno.') '.$this->link->connect_error) : null;
    }

    /**
     * Closes existing connection to MySQL database
     */
    function close() { $this->affected -= $this->affected; $this->link->close(); }

    // function prepare() { isset($this->stm) ? $this->stm_prepared = $this->link->prepare($this->stm) : null; }

    // Send a query
    function send( $string, $rstTag = null ) { 
        isset($rstTag) ? $this->rst[$rstTag] = $this->link->query($string) : $this->rst = $this->link->query($string);
        
        $this->affected += $this->link->affected_rows;
    }

    function change( $database ){
        $this->link->select_db($database);
    }

    function select( $fields = null, $table = null, $condition = null, $format = null, $rstHandling = MYSQLI_STORE_RESULT ){ 

        return $this->link->query("SELECT $fields FROM $table WHERE $condition $format;", $rstHandling);
    }

    function insert( $fields = null, $table = null, $values = null ){
        $this->link->query("INSERT $fields INTO $table VALUES ($values);");
    }
    
    // Format result objects
    // MYSQLI_NUM or MYSQLI_ASSOC
    function rstRow( $result, $type = MYSQLI_NUM ){ return $result->fetch_array($type); }
    function rstAll( $result, $type = MYSQLI_NUM ){ return $result->fetch_all($type); }        
}

?>