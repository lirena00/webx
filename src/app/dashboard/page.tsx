"use client";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { motion } from "motion/react";
import {
  Activity,
  CreditCard,
  DollarSign,
  Download,
  Users,
} from "lucide-react";
const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    icon: <DollarSign className="h-6 w-6 text-white" />,
    bgColor: "bg-green-500",
  },
  {
    title: "Active Users",
    value: "2,345",
    icon: <Users className="h-6 w-6 text-white" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Active Subscriptions",
    value: "1,234",
    icon: <CreditCard className="h-6 w-6 text-white" />,
    bgColor: "bg-purple-500",
  },
  {
    title: "Conversion Rate",
    value: "2.4%",
    icon: <Activity className="h-6 w-6 text-white" />,
    bgColor: "bg-orange-500",
  },
];

const activities = [
  "New user registration: John Doe",
  "Payment received: $299.00",
  "New subscription: Premium Plan",
  "Support ticket resolved: #1234",
  "System update completed",
];

const actions = [
  { label: "Add User", icon: <Users className="h-6 w-6" /> },
  { label: "New Transaction", icon: <DollarSign className="h-6 w-6" /> },
  { label: "Generate Report", icon: <Download className="h-6 w-6" /> },
  { label: "View Analytics", icon: <Activity className="h-6 w-6" /> },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Download Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <div className={`rounded-full p-3 ${stat.bgColor}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm">{activity}</p>
              </motion.div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex h-24 flex-col items-center justify-center space-y-2"
              >
                {action.icon}
                <span>{action.label}</span>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
