/**
 * WebSocket Test Script
 * 
 * Simple test to verify WebSocket functionality
 * Run with: node test-websocket.js
 */
const WebSocket = require('ws');

const testWebSocket = () => {
  console.log('🧪 Testing WebSocket connection...');
  
  // Replace with your actual JWT token
  const token = 'your-jwt-token-here';
  const wsUrl = `ws://localhost:5000/ws?token=${token}`;
  
  const ws = new WebSocket(wsUrl);
  
  ws.on('open', () => {
    console.log('✅ WebSocket connected successfully');
    
    // Send a ping message
    ws.send(JSON.stringify({ type: 'ping' }));
    
    // Subscribe to a channel
    ws.send(JSON.stringify({ type: 'subscribe', channel: 'inventory' }));
  });
  
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data.toString());
      console.log('📨 Received message:', message);
    } catch (error) {
      console.error('Failed to parse message:', error);
    }
  });
  
  ws.on('error', (error) => {
    console.error('❌ WebSocket error:', error.message);
  });
  
  ws.on('close', (code, reason) => {
    console.log(`🔌 WebSocket closed: ${code} - ${reason}`);
  });
  
  // Close connection after 10 seconds
  setTimeout(() => {
    ws.close();
    console.log('🏁 Test completed');
  }, 10000);
};

// Run test if this file is executed directly
if (require.main === module) {
  testWebSocket();
}

module.exports = { testWebSocket };