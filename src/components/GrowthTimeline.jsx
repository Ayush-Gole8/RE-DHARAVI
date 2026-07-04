'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { sharedChartOptions } from '@/lib/chartConfig';

import '@/lib/chartConfig';

export default function GrowthTimeline({ compact = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [animateCharts, setAnimateCharts] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimateCharts(true);
    }
  }, [isInView]);

  const timelineData = {
    labels: ['2004', '2005', '2006', '2007', '2008', '2009', '2010'],
    datasets: [
      {
        label: 'Registered Citizens & Participants',
        data: animateCharts ? [1500, 3200, 6800, 11500, 18200, 24500, 31200] : [0, 0, 0, 0, 0, 0, 0],
        borderColor: '#8c6144', // Navbharat Gold
        backgroundColor: 'rgba(140, 97, 68, 0.12)',
        borderWidth: 3,
        pointBackgroundColor: '#8c6144',
        pointBorderColor: '#8c6144',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const timelineOptions = {
    ...sharedChartOptions,
    animation: {
      duration: 2500,
      easing: 'easeInOutQuart',
    },
    plugins: {
      ...sharedChartOptions.plugins,
      title: {
        display: true,
        text: 'Citizen Participation & Registration (Count)',
        color: 'rgba(255, 255, 255, 0.85)',
        font: {
          family: 'Poppins',
          size: 16,
          weight: 600,
        },
        padding: { bottom: 20 },
      },
      tooltip: {
        ...sharedChartOptions.plugins.tooltip,
        callbacks: {
          label: function (context) {
            return `Participants: ${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      ...sharedChartOptions.scales,
      y: {
        ...sharedChartOptions.scales.y,
        ticks: {
          ...sharedChartOptions.scales.y.ticks,
          callback: function (value) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <section
      ref={ref}
      className={`w-full ${compact ? 'py-4 md:py-8' : 'py-20 md:py-32'}`}
      style={{ backgroundColor: 'var(--dark-navy)' }}
    >
      <div className="nbt-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label-tag block mb-4" style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}>
            COMMUNITY DATA
          </span>
          <h2
            className="font-display text-white m-0 leading-none uppercase"
            style={{ fontSize: compact ? 'clamp(24px, 4vw, 36px)' : 'clamp(32px, 5.5vw, 72px)', letterSpacing: '0.04em' }}
          >
            Citizen Participation & Trust
          </h2>
          <p
            className="font-body mt-6"
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '700px',
              lineHeight: 1.7,
            }}
          >
            More than 85% of residents actively participated in surveys, document submission, and agreement signing, reflecting strong community trust.
          </p>
        </motion.div>

        {/* Chart */}
        <motion.div
          className="mt-6 md:mt-12 p-3 md:p-6 rounded-lg w-full max-w-[850px] mx-auto"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-full h-[220px] md:h-[320px]">
            <Line data={timelineData} options={timelineOptions} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
