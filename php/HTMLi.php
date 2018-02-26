<?php

class HTMLi {
}

function echo_html_select($attr_name=null, $option_list=null) {
    $attr_name = "name=".$attr_name;
    if( isset($option_list) && count($option_list) > 0 ) { $option_list = $option_list; }
    else { $option_list = null; }

    echo "<select ".$attr_name.">";
    for ( $option_counter = 0; $option_counter < count($option_list); $option_counter++ )
    {
        echo "<option value=\"".$option_list[$option_counter]."\">".$option_list[$option_counter]."</option>";
    }
    echo "</select>";
}

?>