module.exports = function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (request.method !== 'GET') return response.status(405).json({ error: 'method_not_allowed' });
  return response.status(200).json({ status: 'ok', project: 'hina-locket-username', mode: 'safe-preview', functions: { user_lookup: false, locket_gold_activation: false, admin: false }, note: 'No original credentials, account data or transaction payloads are deployed.' });
};