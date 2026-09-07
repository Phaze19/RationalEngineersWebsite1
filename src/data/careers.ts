export type JobOpening = {
  id: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
};

export const HR_EMAIL = "hr@rationalengineers.com";

/** Current openings at RATIONAL ENGINEERS LIMITED. */
export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "production-engineer",
    title: "Production Engineer — Copper Conductors",
    location: "Thane, Maharashtra",
    type: "Full time",
    experience: "2–5 years",
    summary:
      "Run day-to-day production of CTC, paper covered and enamelled conductors while holding output, yield and quality targets.",
    responsibilities: [
      "Plan and supervise shift-wise production against the monthly schedule",
      "Track machine utilisation, scrap and yield, and drive corrective actions",
      "Work with quality on in-process checks and customer specifications",
    ],
  },
  {
    id: "quality-engineer",
    title: "Quality Assurance Engineer",
    location: "Thane, Maharashtra",
    type: "Full time",
    experience: "2–6 years",
    summary:
      "Own incoming, in-process and final inspection for copper and aluminium conductor products under our ISO 9001:2015 system.",
    responsibilities: [
      "Perform dimensional, electrical and insulation testing as per IS / IEC standards",
      "Maintain inspection records, calibration schedules and test certificates",
      "Support internal audits and customer / third-party inspections",
    ],
  },
  {
    id: "sales-engineer",
    title: "Sales Engineer — Transformer & OEM Accounts",
    location: "Thane / Field",
    type: "Full time",
    experience: "3–8 years",
    summary:
      "Develop and service transformer, motor and switchgear OEM accounts across India and export markets.",
    responsibilities: [
      "Handle enquiries, technical discussions, costing inputs and follow-up",
      "Build long-term relationships with purchase and design teams at OEMs",
      "Report on pipeline, order status and market intelligence",
    ],
  },
  {
    id: "maintenance-technician",
    title: "Maintenance Technician (Electrical / Mechanical)",
    location: "Thane, Maharashtra",
    type: "Full time",
    experience: "1–4 years",
    summary:
      "Keep drawing, transposing, taping and enamelling lines running with preventive and breakdown maintenance.",
    responsibilities: [
      "Execute the preventive maintenance plan and log all interventions",
      "Diagnose and repair electrical panels, drives and mechanical assemblies",
      "Support safety practices and 5S on the shop floor",
    ],
  },
  {
    id: "graduate-trainee",
    title: "Graduate Engineer Trainee",
    location: "Thane, Maharashtra",
    type: "Trainee (12 months)",
    experience: "Fresher",
    summary:
      "A structured rotation across production, quality and planning for recent electrical or mechanical engineering graduates.",
    responsibilities: [
      "Rotate through core departments with a defined learning plan",
      "Assist on process improvement and documentation projects",
      "Present learnings and improvement proposals to department heads",
    ],
  },
];
