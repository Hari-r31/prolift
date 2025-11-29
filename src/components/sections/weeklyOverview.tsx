'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const weeklySchedule = [
  { day: 'Monday', sessions: ['5-7 AM', '10 AM-1 PM', '4-7 PM', '7:30-9 PM'] },
  { day: 'Tuesday', sessions: ['5-7 AM', '10 AM-1 PM', '4-7 PM', '7:30-9 PM'] },
  { day: 'Wednesday', sessions: ['5-7 AM', '10 AM-1 PM', '4-7 PM', '7:30-9 PM'] },
  { day: 'Thursday', sessions: ['5-7 AM', '10 AM-1 PM', '4-7 PM', '7:30-9 PM'] },
  { day: 'Friday', sessions: ['5-7 AM', '10 AM-1 PM', '4-7 PM', '7:30-9 PM'] },
  { day: 'Saturday', sessions: ['6-8 AM', '9 AM-12 PM', '2-5 PM'] },
  { day: 'Sunday', sessions: ['6-8 AM', '9 AM-12 PM', '2-5 PM'] }
];

const WeeklyOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Weekly <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete weekly schedule to help you plan your training routine
          </p>
        </motion.div>

        {/* Weekly Schedule Table */}
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
            <div className="grid grid-cols-8 gap-4 min-w-[800px]">

              {/* Header Row */}
              <div className="font-bold text-foreground">Day</div>
              <div className="font-bold text-foreground text-center">5-7 AM</div>
              <div className="font-bold text-foreground text-center">10 AM-1 PM</div>
              <div className="font-bold text-foreground text-center">4-7 PM</div>
              <div className="font-bold text-foreground text-center">7:30-9 PM</div>
              <div className="font-bold text-foreground text-center">6-8 AM</div>
              <div className="font-bold text-foreground text-center">9 AM-12 PM</div>
              <div className="font-bold text-foreground text-center">2-5 PM</div>

              {/* Data Rows */}
              {weeklySchedule.map((day) => (
                <Fragment key={day.day}>
                  <div className="font-semibold text-foreground py-3">{day.day}</div>

                  {['5-7 AM', '10 AM-1 PM', '4-7 PM', '7:30-9 PM', '6-8 AM', '9 AM-12 PM', '2-5 PM']
                    .map((slot) => (
                      <div key={slot} className="text-center py-3">
                        {day.sessions.includes(slot) ? (
                          <CheckCircle size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <XCircle size={20} className="text-muted-foreground mx-auto opacity-40" />
                        )}
                      </div>
                    ))}
                </Fragment>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-border">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-sm text-muted-foreground">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <XCircle size={16} className="text-muted-foreground opacity-50" />
                <span className="text-sm text-muted-foreground">Not Available</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyOverview;