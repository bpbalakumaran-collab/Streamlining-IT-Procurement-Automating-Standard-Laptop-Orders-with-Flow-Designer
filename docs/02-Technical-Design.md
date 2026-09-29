# Technical Design
Catalog Item: Standard Laptop Order
Table: sc_cat_item
Flow Trigger: sc_req_item insert where cat_item = Standard Laptop Order
Subflow: Procure Standard Asset (reusable for all hardware)
Asset Table: alm_hardware