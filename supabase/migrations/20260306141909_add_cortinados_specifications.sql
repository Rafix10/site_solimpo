/*
  # Add width and height specifications to Cortinados service
  
  Add specifications for width/height inputs to Cortinados service
  so users can specify dimensions for per_sqm pricing calculation.
*/

UPDATE services 
SET service_config = jsonb_set(
  service_config,
  '{specifications}',
  '[
    {
      "key": "width",
      "min": 1,
      "name": "Largura (metros)",
      "step": 0.1,
      "type": "number",
      "required": true
    },
    {
      "key": "height",
      "min": 1,
      "name": "Altura (metros)",
      "step": 0.1,
      "type": "number",
      "required": true
    }
  ]'::jsonb
)
WHERE name = 'Cortinados';
