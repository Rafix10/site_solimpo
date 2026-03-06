/*
  # Fix Tapete and Cortinados - Copy Vidros Configuration

  ## Changes
  
  1. **Update Tapete Configuration**
     - Copy exact config from Vidros (has_quantity: true, has_subtype: false)
     - Keep specifications with min: 1 (not 0.1 like vidros)
     - Base price: 12€/m²
  
  2. **Update Cortinados Configuration**
     - Copy exact config from Vidros (has_quantity: true)
     - Keep specifications with min: 1
     - Base price: 6.5€/m²
  
  3. **Remove Tapete Subservices**
     - Delete subservices that were causing issues
  
  ## Result
  Both services will work exactly like Vidros with per_sqm pricing
*/

-- Update Tapete to match Vidros config
UPDATE services 
SET service_config = jsonb_build_object(
  'has_subtype', false,
  'has_quantity', true,
  'specifications', jsonb_build_array(
    jsonb_build_object(
      'key', 'width',
      'min', 1,
      'name', 'Largura (metros)',
      'step', 0.1,
      'type', 'number',
      'required', true
    ),
    jsonb_build_object(
      'key', 'height',
      'min', 1,
      'name', 'Altura (metros)',
      'step', 0.1,
      'type', 'number',
      'required', true
    )
  )
)
WHERE type = 'tapete';

-- Update Cortinados to match Vidros config
UPDATE services 
SET service_config = jsonb_build_object(
  'has_subtype', false,
  'has_quantity', true,
  'specifications', jsonb_build_array(
    jsonb_build_object(
      'key', 'width',
      'min', 1,
      'name', 'Largura (metros)',
      'step', 0.1,
      'type', 'number',
      'required', true
    ),
    jsonb_build_object(
      'key', 'height',
      'min', 1,
      'name', 'Altura (metros)',
      'step', 0.1,
      'type', 'number',
      'required', true
    )
  )
)
WHERE type = 'cortinados';

-- Remove tapete subservices
DELETE FROM subservices WHERE parent_service_type = 'tapete';