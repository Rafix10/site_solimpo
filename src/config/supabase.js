// Supabase configuration and utilities
export const SUPABASE_URL = 'https://xctdeqkazwdaxhgtyqoo.supabase.co';
export const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjdGRlcWthendkYXhoZ3R5cW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMTg3NjIsImV4cCI6MjA1OTU5NDc2Mn0.s639u_g8KDze-bib_BLFa2f1tECsqJxvPHahCeosa6Q';

// Default pricing rules
export const DEFAULT_PRICING_RULES = {
  sofa: {
    base: 71.00,
    seats: {
      '2': 71.00,
      '3': 81.00,
      '4': 91.00,
      '5': 99.00,
      '6': 109.00
    }
  },
  colchao: {
    solteiro: 50.00,
    casal: 74.00
  }
};

// Services that require quantity selectors
export const QUANTITY_EXTRAS = ['almofadas', 'puffs', 'puffs_xl', 'puffs xl', 'bancos'];

// Get auth token from localStorage
export function getAuthToken() {
  try {
    const keys = Object.keys(localStorage).filter(k => k.includes('supabase') && k.includes('auth'));
    for (const key of keys) {
      const data = JSON.parse(localStorage.getItem(key) || '{}');
      if (data.access_token) return data.access_token;
      if (data.currentSession?.access_token) return data.currentSession.access_token;
    }
  } catch (e) {
    console.error('Error getting auth token:', e);
  }
  return null;
}

// Fetch pricing rules from Supabase
export async function loadPricingFromSupabase() {
  try {
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/services?type=eq.sofa&select=pricing_rules`, {
      headers: {
        'apikey': ANON_KEY,
        'Authorization': `Bearer ${ANON_KEY}`
      }
    });
    const data = await resp.json();
    if (data.length > 0 && data[0].pricing_rules?.prices_by_seats) {
      return {
        ...DEFAULT_PRICING_RULES,
        sofa: {
          ...DEFAULT_PRICING_RULES.sofa,
          seats: data[0].pricing_rules.prices_by_seats,
          base: data[0].pricing_rules.base_price || 71
        }
      };
    }
  } catch (e) {
    console.log('Using default pricing rules:', e.message);
  }
  return DEFAULT_PRICING_RULES;
}

// Update pricing rules in Supabase
export async function updatePricingInSupabase(newPrices) {
  try {
    const token = getAuthToken();
    if (!token) throw new Error('Sessão expirada');

    const headers = {
      'apikey': ANON_KEY,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    // Get current service data
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/services?type=eq.sofa&select=id,pricing_rules`, { headers });
    const services = await resp.json();

    if (services.length > 0) {
      const svc = services[0];
      const updatedRules = { ...svc.pricing_rules, prices_by_seats: newPrices };

      const updateResp = await fetch(`${SUPABASE_URL}/rest/v1/services?id=eq.${svc.id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
          pricing_rules: updatedRules,
          updated_at: new Date().toISOString()
        })
      });

      if (updateResp.ok || updateResp.status === 204) {
        return { success: true, message: 'Preços por lugares atualizados com sucesso!' };
      } else {
        throw new Error('Erro HTTP: ' + updateResp.status);
      }
    }

    // Also try to update prices table
    try {
      const pricesResp = await fetch(`${SUPABASE_URL}/rest/v1/prices?select=id`, { headers });
      const prices = await pricesResp.json();
      if (Array.isArray(prices) && prices.length > 0) {
        await fetch(`${SUPABASE_URL}/rest/v1/prices?id=eq.${prices[0].id}`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify({
            sofa_2_seats: newPrices['2'],
            sofa_3_seats: newPrices['3'],
            sofa_4_seats: newPrices['4'],
            sofa_5_seats: newPrices['5'],
            sofa_6_seats: newPrices['6'],
            updated_at: new Date().toISOString()
          })
        });
      }
    } catch (e) {
      // prices table may not exist
    }

    return { success: true, message: 'Preços atualizados com sucesso!' };
  } catch (err) {
    console.error('Error saving seats prices:', err);
    return { success: false, error: err.message };
  }
}
