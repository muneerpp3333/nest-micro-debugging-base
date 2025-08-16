const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000';

async function testRabbitMQCommunication() {
  console.log('🚀 Testing RabbitMQ Communication between API Gateway and AI-SDR Service\n');

  try {
    // Test 1: Health check
    console.log('1. Testing API Gateway health check...');
    const healthResponse = await axios.get(`${API_BASE_URL}/`);
    console.log('✅ Health check response:', healthResponse.data);
    console.log('');

    // Test 2: Process AI-SDR request
    console.log('2. Testing AI-SDR processing...');
    const processData = {
      data: 'Sample data for AI-SDR processing',
      type: 'analysis',
      timestamp: new Date().toISOString()
    };
    
    const processResponse = await axios.post(`${API_BASE_URL}/ai-sdr/process`, processData);
    console.log('✅ Process response:', JSON.stringify(processResponse.data, null, 2));
    console.log('');

    // Test 3: Analyze data
    console.log('3. Testing data analysis...');
    const analyzeData = {
      data: 'Complex data for analysis',
      analysisType: 'comprehensive',
      parameters: {
        depth: 'deep',
        scope: 'full'
      }
    };
    
    const analyzeResponse = await axios.post(`${API_BASE_URL}/ai-sdr/analyze`, analyzeData);
    console.log('✅ Analysis response:', JSON.stringify(analyzeResponse.data, null, 2));
    console.log('');

    console.log('🎉 All tests passed! RabbitMQ communication is working correctly.');
    console.log('\n📊 Message Flow:');
    console.log('   Client → API Gateway → RabbitMQ → AI-SDR Service → Response');
    console.log('\n🔗 RabbitMQ Management UI: http://localhost:15673 (guest/guest)');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the test
testRabbitMQCommunication();
