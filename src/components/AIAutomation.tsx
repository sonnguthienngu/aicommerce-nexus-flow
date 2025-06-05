import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap, Target, TrendingUp, Clock } from 'lucide-react';

// Example AI automation data
const aiFeatures = [
  {
    id: 1,
    title: "Smart Product Recommendations",
    description: "AI-powered suggestions based on browsing history and preferences",
    icon: Brain,
    stats: {
      accuracy: "94%",
      improvement: "+28%",
      timeSaved: "2.5hrs"
    }
  },
  {
    id: 2,
    title: "Automated Inventory Management",
    description: "Predictive stock management with real-time alerts",
    icon: Sparkles,
    stats: {
      accuracy: "97%",
      improvement: "+35%",
      timeSaved: "4hrs"
    }
  },
  {
    id: 3,
    title: "Dynamic Pricing",
    description: "Real-time price optimization based on market trends",
    icon: Zap,
    stats: {
      accuracy: "92%",
      improvement: "+22%",
      timeSaved: "3hrs"
    }
  },
  {
    id: 4,
    title: "Customer Behavior Analysis",
    description: "Deep insights into shopping patterns and preferences",
    icon: Target,
    stats: {
      accuracy: "95%",
      improvement: "+31%",
      timeSaved: "5hrs"
    }
  }
];

// Example AI automation metrics
const automationMetrics = [
  {
    id: 1,
    title: "Process Automation",
    value: "87%",
    description: "of routine tasks automated",
    icon: TrendingUp
  },
  {
    id: 2,
    title: "Time Saved",
    value: "15hrs",
    description: "per week on average",
    icon: Clock
  }
];

export const AIAutomation = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI-Powered Automation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the future of e-commerce with our advanced AI automation features,
            designed to streamline operations and enhance customer experience.
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Accuracy</span>
                  <span className="font-medium text-green-600">{feature.stats.accuracy}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Improvement</span>
                  <span className="font-medium text-blue-600">{feature.stats.improvement}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time Saved</span>
                  <span className="font-medium text-purple-600">{feature.stats.timeSaved}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automation Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-blue-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationMetrics.map((metric) => (
              <div key={metric.id} className="flex items-center space-x-4">
                <metric.icon className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
                  <p className="text-blue-100">{metric.title}</p>
                  <p className="text-sm text-blue-200">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Automation Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Benefits of AI Automation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Increased Efficiency
              </h4>
              <p className="text-gray-600">
                Automate repetitive tasks and focus on strategic initiatives
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Better Decision Making
              </h4>
              <p className="text-gray-600">
                Data-driven insights for smarter business decisions
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Enhanced Customer Experience
              </h4>
              <p className="text-gray-600">
                Personalized recommendations and faster response times
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 