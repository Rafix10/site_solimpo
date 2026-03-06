/*
  # Fix Tapete Pricing - Convert Extras to Subservices

  ## Changes
  
  1. **Create Subservices for Tapete**
     - Create two subservices: "Higienização em lavanderia" and "Higienização no local"
     - Each subservice has per_sqm pricing with appropriate base price
     - Pricing = (width × height × base_price) + extra_cost
  
  2. **Update Tapete Service Config**
     - Enable has_subtype flag
     - Remove has_quantity (not needed for per_sqm services)
  
  3. **Remove Old Extras**
     - Delete the checkbox-style extras that were causing confusion
  
  ## Pricing Structure
  
  - Lavanderia: 12€/m² base + 20€ = (width × height × 12) + 20
  - No local: 12€/m² base + 18€ = (width × height × 12) + 18
*/

-- Create subservices for tapete
INSERT INTO subservices (
  parent_service_type,
  subservice_key,
  name,
  description,
  price_type,
  base_price,
  active,
  display_order,
  service_config
) VALUES
(
  'tapete',
  'higienizacao_lavanderia',
  'Higienização em lavanderia (com recolhe e entrega)',
  'Recolhemos o tapete, higienizamos em lavanderia profissional e entregamos limpo',
  'per_sqm',
  32.00,
  true,
  1,
  '{
    "specifications": [
      {
        "key": "width",
        "name": "Largura (metros)",
        "type": "number",
        "min": 1,
        "step": 0.1,
        "required": true
      },
      {
        "key": "height",
        "name": "Altura (metros)",
        "type": "number",
        "min": 1,
        "step": 0.1,
        "required": true
      }
    ]
  }'::jsonb
),
(
  'tapete',
  'higienizacao_local',
  'Higienização no local (apenas para tapetes de pelo curto e sem contacto com animais)',
  'Higienização realizada no local. Apenas disponível para tapetes de pelo curto sem contacto com animais',
  'per_sqm',
  30.00,
  true,
  2,
  '{
    "specifications": [
      {
        "key": "width",
        "name": "Largura (metros)",
        "type": "number",
        "min": 1,
        "step": 0.1,
        "required": true
      },
      {
        "key": "height",
        "name": "Altura (metros)",
        "type": "number",
        "min": 1,
        "step": 0.1,
        "required": true
      }
    ]
  }'::jsonb
)
ON CONFLICT DO NOTHING;

-- Update tapete service config to enable subservices
UPDATE services 
SET service_config = jsonb_set(
  service_config,
  '{has_subtype}',
  'true'::jsonb
)
WHERE type = 'tapete';

-- Remove old extras (they're now subservices)
DELETE FROM service_extras WHERE service_type = 'tapete';