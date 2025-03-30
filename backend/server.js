const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// In-memory data storage (no database needed)
let mockData = {
  users: [
    { id: 1, name: 'Test User', email: 'test@example.com' }
  ],
  documents: [
    { id: 1, title: 'Sample Document', content: 'Hello World' }
  ]
};

// API Endpoints
app.get('/', (req, res) => res.json({
  status: 'API Working',
  endpoints: [
    'GET    /api/users',
    'GET    /api/documents',
    'POST   /api/documents',
    'GET    /api/documents/:id'
  ]
}));

app.get('/api/users', (req, res) => res.json(mockData.users));
app.get('/api/documents', (req, res) => res.json(mockData.documents));

app.post('/api/documents', (req, res) => {
  const newDoc = {
    id: mockData.documents.length + 1,
    ...req.body
  };
  mockData.documents.push(newDoc);
  res.status(201).json(newDoc);
});

app.get('/api/documents/:id', (req, res) => {
  const doc = mockData.documents.find(d => d.id === parseInt(req.params.id));
  res.json(doc || { error: 'Not found' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server fully working on port ${PORT}`);
  console.log(`Try these endpoints:`);
  console.log(`http://localhost:${PORT}/api/users`);
  console.log(`http://localhost:${PORT}/api/documents`);
});