SUBFLOW: Procure Standard Asset
Inputs: laptop_model (string), requested_for (reference)
Steps:
1. Create SCTASK - Group: IT Procurement, Short Desc: Order laptop
2. Create Record - alm_hardware - Asset Tag: AUTO, Model: laptop_model, Assigned To: requested_for
3. Return: asset_sys_id