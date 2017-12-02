<?php

/////////////////////////////////////////////////////////
///                                                   ///
///                 Emgo SQL Library                  ///
///                Michael Goldspinner                ///
///                 Emgo Development                  ///
///                    05/29/2017                     ///
///                                                   ///
///  ***********************************************  ///
///                                                   ///
///  Custom SQL class for managing interaction        ///
///  with databases in PHP via mysqli.                ///
///                                                   ///
/////////////////////////////////////////////////////////

class emgoSQL {

        // Store credentials
        private $creds       =  array(
                                        "Host"=>null,
                                        "User"=>null,
                                        "Pass"=>null,
                                        "Name"=>null
                                );
        public $link         =  null;     // (object) mysqli object
        public $status       =  null;     // (bool) connection status
        public $stm          =  null;     // (string) mysql query
        public $rst          =  array();  // (object) result object
        public $affected     =  0;        // (integer)
        
        // Open new connection object in $link
        // Give credentials, otherwise defaults $creds above
        function open($creds=null) {
            if( isset($creds[0]) && isset($creds[1]) && isset($creds[2]) && isset($creds[3]) ) {
                $this->creds["Host"] = $creds[0];
                $this->creds["User"] = $creds[1];
                $this->creds["Pass"] = $creds[2];
                $this->creds["Name"] = $creds[3];

                $this->link = new mysqli($creds[0], $creds[1], $creds[2], $creds[3]);
            } else {
                $this->link = new mysqli($this->creds["Host"], $this->creds["User"], $this->creds["Pass"], $this->creds["Name"]);
            }

            if ($this->link->connect_error) {
                die('Conection Error('.$this->link->connect_errno.') '.$this->link->connect_error);
            }
        }
        
        // Close existing connection
        function close() { $this->affected -= $this->affected; $this->link->close(); }

        // Store a statement in $stm
        function load($string) { $this->stm = $string; }
        // function prepare() { isset($this->stm) ? $this->stm_prepared = $this->link->prepare($this->stm) : null; }

        // Send a query
        function send($string, $rstTag = null) { 
            isset($rstTag) ? $this->rst[$rstTag] = $this->link->query($string) : $this->rst = $this->link->query($string);
            $this->affected += $this->link->affected_rows;
        }
        
        // Send a query expecting no return result
        function insert($string) { $this->send($string); }
        
        // Format result objects
        function rstRow($result, $type) { return $result->fetch_array($type); }
        function rstAll($result, $type) { return $result->fetch_all($type); }
        
}

?>