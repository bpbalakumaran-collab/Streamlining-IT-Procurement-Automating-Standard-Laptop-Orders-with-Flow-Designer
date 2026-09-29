1. Trigger - Catalog Item Submitted
2. Get Catalog Variables
3. Lookup User -> Manager
4. Decision - Cost > 1500?
5. Ask Approval - Manager
6. Ask Approval - Finance (if needed)
7. Call Subflow - Create SCTASK + Create Asset
8. Wait for SCTASK Complete
9. Close RITM + Send Email