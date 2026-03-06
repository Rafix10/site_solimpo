/*
  # Update tapete minimum size to 1x1 meters
  
  Change the minimum width and height from 0.1 to 1 meter for tapete service.
*/

UPDATE services 
SET service_config = jsonb_set(
  jsonb_set(
    service_config,
    '{specifications,0,min}',
    '1'::jsonb
  ),
  '{specifications,1,min}',
  '1'::jsonb
)
WHERE name = 'Tapetes';
