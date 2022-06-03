# Hospital-API

We’re going to design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

## - Required Routes

- /doctors/register (POST Required) → With **username** and **password** 
- /doctors/login (POST Required) → With **username** and **password** → returns the JWT to be used
- /patients/register (POST Required) → With **phone** and **token** → returns patients information 
- /patients/:id/create_report (POST Required) → With **token**, **status** and **date** 
- /patients/:id/all_reports (POST Required) → With **token** → List all the reports of a patient oldest to latest
- /reports/:status (POST Required) → With **token** → List all the reports of all the patients filtered by a specific status
