const fs = require('fs');
const path = require('path');

const logsPath = path.join(__dirname, '../logs/api_calls.json');
const ensureLogsFile = () => {
  if (!fs.existsSync(path.dirname(logsPath))) fs.mkdirSync(path.dirname(logsPath), { recursive: true });
  if (!fs.existsSync(logsPath)) fs.writeFileSync(logsPath, JSON.stringify([], null, 2));
};

ensureLogsFile();

module.exports = (req, res, next) => {
  const entry = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
    body: req.body && Object.keys(req.body).length ? req.body : undefined,
    query: Object.keys(req.query).length ? req.query : undefined,
    params: Object.keys(req.params).length ? req.params : undefined,
    ip: req.ip
  };

  // Consola
  console.log(`${entry.timestamp} - ${entry.method} ${entry.url}`);

  // Guardar en JSON (leemos, añadimos, escribimos)
  try {
    const data = JSON.parse(fs.readFileSync(logsPath, 'utf-8'));
    data.push(entry);
    fs.writeFileSync(logsPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error escribiendo logs:', err);
  }

  next();
};
