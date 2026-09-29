FLOW: IT Laptop Procurement - Main
Action1: Get Catalog Variables
Action2: Lookup Record - sys_user [requested_for]
Action3: Decision - If u_total_cost > 1500 => finance_needed=true
Action4: Ask For Approval - Manager
Action5: If rejected -> Update RITM to Closed Incomplete
Action6: If finance_needed=true -> Ask For Approval - Group: Finance
Action7: Call Subflow: Procure Standard Asset
Action8: Send Email Notification