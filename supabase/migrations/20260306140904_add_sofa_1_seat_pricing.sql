/*
  # Add 1-seat sofa pricing option
  
  Add sofa_1_seat column to prices table to support 1-seat sofás.
  Uses the base_price value (71 euros) as default.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'prices' AND column_name = 'sofa_1_seat'
  ) THEN
    ALTER TABLE prices ADD COLUMN sofa_1_seat numeric DEFAULT 71;
  END IF;
END $$;
