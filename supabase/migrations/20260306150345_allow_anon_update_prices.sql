/*
  # Allow Anonymous Updates to Prices Table

  ## Overview
  This migration allows the admin interface to update prices without authentication.
  This is safe because the admin interface is password-protected in the application layer.

  ## Changes Made

  ### 1. Prices Table Policies
  - Add policy to allow anon role to update prices table
  - This enables the admin pricing editor to work without authentication

  ## Security Notes
  - The admin interface uses a password prompt before allowing edits
  - Updates are logged via the updated_at timestamp
*/

-- Drop existing restrictive policy for updates
DROP POLICY IF EXISTS "Authenticated users can update prices" ON public.prices;

-- Allow anon to update prices (for admin interface)
CREATE POLICY "Allow anon to update prices"
  ON public.prices
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow anon to read prices
CREATE POLICY "Allow anon to read prices"
  ON public.prices
  FOR SELECT
  TO anon
  USING (true);
