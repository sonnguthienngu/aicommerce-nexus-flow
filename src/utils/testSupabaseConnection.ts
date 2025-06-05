import { supabase } from '../integrations/supabase/client';

export async function testSupabaseConnection() {
  try {
    const results: any = {
      auth: false,
      database: false,
      realtime: false,
      tables: {},
      authTest: false
    };

    // Test authentication
    const { data: authData, error: authError } = await supabase.auth.getSession();
    results.auth = !authError;
    console.log('Auth test:', authData ? 'Connected' : 'Not connected', authError);

    // Test database tables
    const tables = [
      'profiles',
      'products',
      'categories',
      'orders',
      'cart',
      'wishlist',
      'reviews',
      'product_variants',
      'product_attributes',
      'discounts',
      'shipping_addresses',
      'payment_methods'
    ];

    for (const table of tables) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('*')
          .limit(1);
        
        results.tables[table] = {
          connected: !error,
          error: error?.message,
          hasData: data && data.length > 0
        };
      } catch (error) {
        results.tables[table] = {
          connected: false,
          error: error instanceof Error ? error.message : 'Unknown error',
          hasData: false
        };
      }
    }

    // Test authentication with test user
    try {
      // First try to sign in with test user
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: 'test@example.com',
        password: 'testpassword123'
      });

      if (signInError) {
        // If sign in fails, try to create test user
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: 'test@example.com',
          password: 'testpassword123',
          options: {
            data: {
              role: 'user',
            },
          },
        });

        if (signUpError) {
          throw signUpError;
        }

        // Create profile for test user
        if (signUpData.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([
              {
                id: signUpData.user.id,
                email: 'test@example.com',
                full_name: 'Test User',
                user_type: 'user'
              }
            ]);

          if (profileError) {
            throw profileError;
          }
        }
      }

      results.authTest = true;
    } catch (error) {
      console.error('Auth test user error:', error);
      results.authTest = false;
      results.authTestError = error instanceof Error ? error.message : 'Unknown error';
    }

    // Test realtime subscription
    const channel = supabase
      .channel('test')
      .on('presence', { event: 'sync' }, () => {
        console.log('Realtime test: Connected');
      })
      .subscribe();

    results.realtime = true;

    return results;
  } catch (error) {
    console.error('Connection test failed:', error);
    return {
      auth: false,
      database: false,
      realtime: false,
      tables: {},
      authTest: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
} 