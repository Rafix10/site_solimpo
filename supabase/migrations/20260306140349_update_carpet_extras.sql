/*
  # Update carpet service extras
  
  Remove old carpet extras and add the two new service types:
  - Higienização em lavanderia (com recolhe e entrega)
  - Higienização no local (apenas para tapetes de pelo curto e sem contacto com animais)
*/

DELETE FROM service_extras WHERE service_type = 'tapete';

INSERT INTO service_extras (service_type, extra_key, extra_name, extra_description, extra_price, is_conditional, display_order, active)
VALUES 
  ('tapete', 'higienizacao_lavanderia', 'Higienização em lavanderia (com recolhe e entrega)', 'Serviço de higienização profissional em lavanderia com transporte', 25.00, false, 1, true),
  ('tapete', 'higienizacao_local', 'Higienização no local (apenas para tapetes de pelo curto e sem contacto com animais)', 'Serviço de higienização no local - aplicável apenas a tapetes de pelo curto sem contacto com animais', 18.00, true, 2, true);
