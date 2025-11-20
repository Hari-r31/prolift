'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  Clock, 
  Trophy, 
  TrendingUp, 
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    coaches: 0,
    programs: 0,
    scheduleSlots: 0,
    bookings: 0
  });

  const dashboardVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    hover: { 
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" as const}
    }
  };

  const counterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  useEffect(() => {
    // Simulate loading stats
    const timer = setTimeout(() => {
      setStats({
        coaches: 10,
        programs: 6,
        scheduleSlots: 18,
        bookings: 120
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const statCards = [
    {
      title: "Coaches",
      value: stats.coaches,
      icon: Users,
      color: "from-blue-500 to-purple-500",
      change: "+2 this month",
      changeType: "positive"
    },
    {
      title: "Programs",
      value: stats.programs,
      icon: Trophy,
      color: "from-green-500 to-teal-500",
      change: "Active",
      changeType: "neutral"
    },
    {
      title: "Schedule Slots",
      value: stats.scheduleSlots,
      icon: Calendar,
      color: "from-orange-500 to-red-500",
      change: "Daily",
      changeType: "neutral"
    },
    {
      title: "Total Bookings",
      value: stats.bookings,
      icon: Clock,
      color: "from-pink-500 to-purple-500",
      change: "+15% this week",
      changeType: "positive"
    }
  ];

  const menuItems = [
    { icon: Users, label: "Manage Coaches", active: true },
    { icon: Calendar, label: "Schedule", active: false },
    { icon: Users, label: "Students", active: false },
    { icon: Trophy, label: "Programs", active: false },
    { icon: TrendingUp, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">ProLift Admin</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                item.active
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-600 text-white">
                Admin
              </Badge>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          <motion.div
            variants={dashboardVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {statCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="border-0 shadow-xl bg-gray-800 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-linear-to-br ${card.color} rounded-xl flex items-center justify-center`}>
                        <card.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge 
                        variant={card.changeType === 'positive' ? 'default' : 'secondary'}
                        className={card.changeType === 'positive' ? 'bg-green-600 text-white' : 'bg-gray-600 text-white'}
                      >
                        {card.change}
                      </Badge>
                    </div>
                    <h3 className="text-gray-400 text-sm mb-1">{card.title}</h3>
                    <motion.div
                      variants={counterVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-3xl font-bold text-white"
                    >
                      {card.value}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            variants={dashboardVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <Card className="border-0 shadow-xl bg-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Add New Coach
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                  Create Schedule
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                  Manage Bookings
                </Button>
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                  View Reports
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">New booking received</span>
                    <span className="text-gray-500 text-sm">2 min ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Coach profile updated</span>
                    <span className="text-gray-500 text-sm">1 hour ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Schedule modified</span>
                    <span className="text-gray-500 text-sm">3 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">New student enrolled</span>
                    <span className="text-gray-500 text-sm">5 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;