const axios = require('axios');

const API_BASE_URL = 'http://localhost:3000';

async function testGraphQL() {
  console.log('🚀 Testing GraphQL API\n');

  try {
    // Test 1: Check if GraphQL endpoint is accessible
    console.log('1. Testing GraphQL endpoint accessibility...');
    try {
      const response = await axios.post(`${API_BASE_URL}/graphql`, {
        query: '{ __schema { types { name } } }'
      });
      console.log('✅ GraphQL endpoint is working!');
      console.log('Response:', JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.log('❌ GraphQL endpoint not accessible:', error.message);
    }

    // Test 2: Test AI-SDR process mutation
    console.log('\n2. Testing AI-SDR process mutation...');
    try {
      const mutation = `
        mutation {
          processAiSdr(input: {
            data: "test data for GraphQL"
            type: "analysis"
          }) {
            status
            message
            data
            timestamp
          }
        }
      `;
      
      const response = await axios.post(`${API_BASE_URL}/graphql`, {
        query: mutation
      });
      console.log('✅ AI-SDR process mutation successful!');
      console.log('Response:', JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.log('❌ AI-SDR process mutation failed:', error.message);
    }

    // Test 3: Test analyze data mutation
    console.log('\n3. Testing analyze data mutation...');
    try {
      const mutation = `
        mutation {
          analyzeData(input: {
            data: "data to analyze via GraphQL"
            analysisType: "comprehensive"
            parameters: "{\\"depth\\": \\"deep\\"}"
          }) {
            status
            message
            analysis {
              processed
              insights
            }
            data
            timestamp
          }
        }
      `;
      
      const response = await axios.post(`${API_BASE_URL}/graphql`, {
        query: mutation
      });
      console.log('✅ Analyze data mutation successful!');
      console.log('Response:', JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.log('❌ Analyze data mutation failed:', error.message);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testGraphQL();
