# Hospital-API

We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

## - Required Routes

- /doctors/register (POST Required) → with username and password 
- /doctors/login (POST Required) → with username and password → returns the JWT to be used
- /patients/register (POST Required) →
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
