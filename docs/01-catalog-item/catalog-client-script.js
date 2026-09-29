function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') return;
    var prices = {'MacBook Pro 14':1850,'Dell XPS 15':1350,'ThinkPad X1':1250};
    var qty = parseInt(g_form.getValue('quantity')) || 1;
    g_form.setValue('u_total_cost', (prices[newValue]||0) * qty);
}