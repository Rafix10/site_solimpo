/*
  # Criar Sistema de Configuração de Serviços

  1. Novas Tabelas
    - `services` - Tabela principal de serviços
      - `id` (uuid, chave primária)
      - `type` (text, único) - Identificador do tipo de serviço
      - `name` (text) - Nome do serviço
      - `description` (text) - Descrição do serviço
      - `icon` (text) - Emoji do ícone
      - `icon_type` (text) - Tipo de ícone (emoji/image)
      - `icon_image_url` (text) - URL da imagem do ícone
      - `price_type` (text) - Tipo de cálculo (fixed/per_seat/per_sqm/per_item)
      - `base_price` (numeric) - Preço base
      - `pricing_rules` (jsonb) - Regras de precificação
      - `service_config` (jsonb) - Configuração do serviço incluindo specifications
      - `display_order` (integer) - Ordem de exibição
      - `active` (boolean) - Serviço ativo
      - Timestamps

  2. Segurança
    - Habilitar RLS em todas as tabelas
    - Permitir leitura pública para serviços ativos
    - Restringir escrita apenas para usuários autenticados
*/

-- Criar tabela de serviços
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  icon text DEFAULT '🧹',
  icon_type text DEFAULT 'emoji',
  icon_image_url text,
  price_type text DEFAULT 'fixed',
  base_price numeric DEFAULT 50,
  pricing_rules jsonb DEFAULT '{"base_price": 50, "unit_label": "unidade", "calculation_type": "fixed", "min_quantity": 1, "max_quantity": 10}'::jsonb,
  service_config jsonb DEFAULT '{"has_quantity": true, "has_subtype": false, "specifications": []}'::jsonb,
  display_order integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Políticas: permitir leitura pública de serviços ativos
CREATE POLICY "Anyone can view active services"
  ON services
  FOR SELECT
  USING (active = true);

-- Políticas: apenas autenticados podem modificar
CREATE POLICY "Authenticated users can insert services"
  ON services
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services
  FOR DELETE
  TO authenticated
  USING (true);

-- Inserir serviço de Vidros com especificações de largura e altura
INSERT INTO services (
  type,
  name,
  description,
  icon,
  price_type,
  base_price,
  pricing_rules,
  service_config,
  display_order,
  active
) VALUES (
  'vidros',
  'Vidros',
  'Limpeza de vidros por metro quadrado',
  '🪟',
  'per_sqm',
  15,
  '{"base_price": 15, "unit_label": "m²", "calculation_type": "per_sqm", "min_quantity": 1, "max_quantity": 100}'::jsonb,
  '{
    "has_quantity": false,
    "has_subtype": false,
    "specifications": [
      {
        "key": "width",
        "name": "Largura",
        "type": "number",
        "required": true,
        "min": 0.1,
        "max": 50,
        "step": 0.1,
        "placeholder": "Ex: 2.5"
      },
      {
        "key": "height",
        "name": "Altura",
        "type": "number",
        "required": true,
        "min": 0.1,
        "max": 50,
        "step": 0.1,
        "placeholder": "Ex: 3.0"
      }
    ]
  }'::jsonb,
  1,
  true
) ON CONFLICT (type) 
DO UPDATE SET
  price_type = EXCLUDED.price_type,
  base_price = EXCLUDED.base_price,
  pricing_rules = EXCLUDED.pricing_rules,
  service_config = EXCLUDED.service_config,
  updated_at = now();