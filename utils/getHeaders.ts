export function getHeaders(): Record<string, string> {
  return {
    'x-api-key': 'wcopmakQgX9t0y00HCaQu1uojhd8oKSJanx4S5eI',
    
  };
}

export function getAuthHeaders(): Record<string, string> {
  return {
    ...getHeaders(),
    
  };
}