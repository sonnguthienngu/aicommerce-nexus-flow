
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSampleData = () => {
  useEffect(() => {
    const setupSampleData = async () => {
      try {
        // Check if categories already exist
        const { data: existingCategories } = await supabase
          .from('automation_categories')
          .select('id')
          .limit(1);

        if (existingCategories && existingCategories.length > 0) {
          console.log('Categories already exist, skipping sample data setup');
          return;
        }

        // Insert sample categories
        const categories = [
          {
            name: 'Communication',
            description: 'Email, chat, and messaging automations',
            icon: 'MessageSquare',
            color_class: 'bg-blue-100 text-blue-600',
            automation_count: 127
          },
          {
            name: 'Data Processing',
            description: 'Document analysis and data extraction',
            icon: 'FileText',
            color_class: 'bg-green-100 text-green-600',
            automation_count: 89
          },
          {
            name: 'Marketing',
            description: 'Social media, campaigns, and analytics',
            icon: 'Share2',
            color_class: 'bg-purple-100 text-purple-600',
            automation_count: 156
          },
          {
            name: 'Customer Service',
            description: 'Support bots and ticket management',
            icon: 'Headphones',
            color_class: 'bg-orange-100 text-orange-600',
            automation_count: 73
          },
          {
            name: 'Sales',
            description: 'Lead generation and CRM automation',
            icon: 'TrendingUp',
            color_class: 'bg-red-100 text-red-600',
            automation_count: 94
          },
          {
            name: 'Supply Chain',
            description: 'Inventory and logistics optimization',
            icon: 'Package',
            color_class: 'bg-teal-100 text-teal-600',
            automation_count: 45
          },
          {
            name: 'Workflow',
            description: 'Process automation and task management',
            icon: 'Zap',
            color_class: 'bg-yellow-100 text-yellow-600',
            automation_count: 112
          },
          {
            name: 'Security',
            description: 'Threat detection and compliance monitoring',
            icon: 'Shield',
            color_class: 'bg-indigo-100 text-indigo-600',
            automation_count: 38
          }
        ];

        const { data: insertedCategories, error: categoriesError } = await supabase
          .from('automation_categories')
          .insert(categories)
          .select();

        if (categoriesError) {
          console.error('Error inserting categories:', categoriesError);
          return;
        }

        console.log('Sample categories inserted successfully');

        // Create a sample profile for the demo automations
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          console.log('No user logged in, skipping automation creation');
          return;
        }

        // Insert sample automations
        const sampleAutomations = [
          {
            title: 'Smart Email Responder',
            description: 'AI-powered email automation that analyzes context and generates personalized responses',
            category_id: insertedCategories?.find(c => c.name === 'Communication')?.id,
            price: 29.00,
            rating: 4.9,
            total_users: 2843,
            image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop',
            tags: ['Email', 'AI', 'Productivity'],
            is_featured: true,
            status: 'published',
            created_by: user.id
          },
          {
            title: 'Document Intelligence',
            description: 'Extract, analyze, and process documents with advanced OCR and NLP capabilities',
            category_id: insertedCategories?.find(c => c.name === 'Data Processing')?.id,
            price: 49.00,
            rating: 4.8,
            total_users: 1567,
            image_url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop',
            tags: ['OCR', 'NLP', 'Documents'],
            is_featured: true,
            status: 'published',
            created_by: user.id
          },
          {
            title: 'Social Media Manager',
            description: 'Automate posting, engagement, and analytics across all major social platforms',
            category_id: insertedCategories?.find(c => c.name === 'Marketing')?.id,
            price: 39.00,
            rating: 4.7,
            total_users: 3921,
            image_url: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=240&fit=crop',
            tags: ['Social Media', 'Marketing', 'Analytics'],
            is_featured: true,
            status: 'published',
            created_by: user.id
          },
          {
            title: 'Customer Support Bot',
            description: 'Intelligent chatbot that handles 80% of customer inquiries with natural conversations',
            category_id: insertedCategories?.find(c => c.name === 'Customer Service')?.id,
            price: 79.00,
            rating: 4.9,
            total_users: 5234,
            image_url: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=240&fit=crop',
            tags: ['Chatbot', 'Customer Service', 'AI'],
            is_featured: true,
            status: 'published',
            created_by: user.id
          },
          {
            title: 'Sales Pipeline Optimizer',
            description: 'Automatically qualify leads, schedule meetings, and update CRM with AI insights',
            category_id: insertedCategories?.find(c => c.name === 'Sales')?.id,
            price: 99.00,
            rating: 4.8,
            total_users: 1892,
            image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
            tags: ['Sales', 'CRM', 'Lead Generation'],
            is_featured: true,
            status: 'published',
            created_by: user.id
          },
          {
            title: 'Inventory Predictor',
            description: 'Predict inventory needs and automate restocking using advanced ML algorithms',
            category_id: insertedCategories?.find(c => c.name === 'Supply Chain')?.id,
            price: 149.00,
            rating: 4.6,
            total_users: 743,
            image_url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=240&fit=crop',
            tags: ['Inventory', 'ML', 'Predictions'],
            is_featured: true,
            status: 'published',
            created_by: user.id
          }
        ];

        const { error: automationsError } = await supabase
          .from('automations')
          .insert(sampleAutomations);

        if (automationsError) {
          console.error('Error inserting sample automations:', automationsError);
          return;
        }

        console.log('Sample automations inserted successfully');

      } catch (error) {
        console.error('Error setting up sample data:', error);
      }
    };

    setupSampleData();
  }, []);
};
