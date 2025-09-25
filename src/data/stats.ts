export type Stat = {
  id: number;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
};

const stats: Stat[] = [
  {
    id: 1,
    label: "Learners shipped portfolio apps",
    value: 1200,
    suffix: "+",
    description: "Graduates who launched production-ready apps across 38 countries.",
  },
  {
    id: 2,
    label: "Average project ROI",
    value: 330,
    suffix: "%",
    description: "Measured uplift in conversions and efficiency after STACKO product sprints.",
  },
  {
    id: 3,
    label: "Internship partner companies",
    value: 85,
    suffix: "+",
    description: "Startups and enterprises offering STACKO fellows real world experience.",
  },
  {
    id: 4,
    label: "Median time to career transition",
    value: 90,
    suffix: " days",
    description: "From first course module to new job offer or internal promotion.",
  },
];

export default stats;
