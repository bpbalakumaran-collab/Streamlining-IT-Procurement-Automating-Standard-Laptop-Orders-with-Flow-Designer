// Business Rule: When alm_hardware state = In Transit -> Auto update RITM
// Table: alm_hardware, When: after update
(function executeRule(current, previous){
    if(current.install_status == '2'){ // In Transit
        var ritm = new GlideRecord('sc_req_item');
        ritm.get(current.u_request_item);
        ritm.state = '3'; // Work in Progress
        ritm.update();
    }
})(current, previous);