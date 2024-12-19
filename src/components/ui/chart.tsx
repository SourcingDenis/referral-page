import * as React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { NameType, Payload, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { cn } from '@/lib/utils';

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[];
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: Payload<ValueType, NameType>[];
  label?: string;
  className?: string;
}

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ active, payload, label, className }, ref) => {
    if (active && payload?.length) {
      return (
        <div ref={ref} className={cn('rounded-lg border bg-background p-2 shadow-sm', className)}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <span className="text-[0.70rem] uppercase text-muted-foreground">
                {label}
              </span>
              <span className="font-bold text-muted-foreground">
                {payload[0].value}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
);
ChartTooltip.displayName = 'ChartTooltip';

const LineChartComponent = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('w-full h-[350px]', className)} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <Tooltip content={<ChartTooltip />} />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: '#8884d8', opacity: 0.25 },
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
);
LineChartComponent.displayName = 'LineChartComponent';

const BarChartComponent = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('w-full h-[350px]', className)} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<ChartTooltip />} />
            <Bar
              dataKey="total"
              fill="currentColor"
              radius={[4, 4, 0, 0]}
              className="fill-primary"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
);
BarChartComponent.displayName = 'BarChartComponent';

const PieChartComponent = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, className, ...props }, ref) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
      <div ref={ref} className={cn('w-full h-[350px]', className)} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_: any, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
);
PieChartComponent.displayName = 'PieChartComponent';

const AreaChartComponent = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ data, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('w-full h-[350px]', className)} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
);
AreaChartComponent.displayName = 'AreaChartComponent';

interface ChartLegendProps extends React.ComponentProps<'div'> {
  payload?: Array<{
    value: string;
    type: string;
    id: string;
    color: string;
  }>;
}

const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ className, payload, ...props }, ref) => {
    if (!payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn('inline-flex gap-4', className)}
        {...props}
      >
        {payload.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center gap-2 text-sm"
          >
            <div
              className="h-3 w-3 rounded"
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
);
ChartLegend.displayName = 'ChartLegend';

export {
  ChartTooltip,
  ChartLegend,
  LineChartComponent,
  BarChartComponent,
  PieChartComponent,
  AreaChartComponent,
};
