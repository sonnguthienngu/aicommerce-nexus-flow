import { useState, useEffect } from 'react';
import { testSupabaseConnection } from '../utils/testSupabaseConnection';

export default function SupabaseTest() {
  const [testResults, setTestResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function runTest() {
      try {
        const results = await testSupabaseConnection();
        setTestResults(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Test failed');
      } finally {
        setLoading(false);
      }
    }

    runTest();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-2">Testing Supabase connection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-red-800 font-medium">Connection Test Failed</h3>
        <p className="text-red-600 mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900">Supabase Connection Test</h3>
      
      {/* Basic Connection Status */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${testResults?.auth ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
          <span className="text-sm text-gray-600">Authentication: {testResults?.auth ? 'Connected' : 'Failed'}</span>
        </div>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${testResults?.realtime ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
          <span className="text-sm text-gray-600">Realtime: {testResults?.realtime ? 'Connected' : 'Failed'}</span>
        </div>
      </div>

      {/* Table Status */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700">Database Tables Status</h4>
        <div className="mt-2 space-y-2">
          {Object.entries(testResults?.tables || {}).map(([table, status]: [string, any]) => (
            <div key={table} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${status.connected ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                <span className="text-sm text-gray-600">{table}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs ${status.hasData ? 'text-green-600' : 'text-gray-400'}`}>
                  {status.hasData ? 'Has Data' : 'No Data'}
                </span>
                {status.error && (
                  <span className="text-xs text-red-500" title={status.error}>
                    Error
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auth Test Status */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700">Authentication Test</h4>
        <div className="mt-2">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${testResults?.authTest ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
            <span className="text-sm text-gray-600">
              Test User: {testResults?.authTest ? 'Success' : 'Failed'}
            </span>
          </div>
          {testResults?.authTestError && (
            <p className="mt-1 text-xs text-red-500">{testResults.authTestError}</p>
          )}
        </div>
      </div>
    </div>
  );
} 