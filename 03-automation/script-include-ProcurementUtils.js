var ProcurementUtils = Class.create();
ProcurementUtils.prototype = {
    initialize: function() {},
    getManager: function(userId){
        var gr = new GlideRecord('sys_user');
        gr.get(userId);
        return gr.getValue('manager');
    },
    type: 'ProcurementUtils'
};