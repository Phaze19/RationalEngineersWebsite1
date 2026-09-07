export type IRDocument = {
  /** Display title of the document, e.g. "Q1 FY26 Results". */
  title: string;
  /** Public URL of the PDF. Use a CDN asset URL or a /public path. */
  url: string;
  /** Optional date/period label, e.g. "30 Jun 2026". */
  date?: string;
};

export type IRSubsection = {
  id: string;
  label: string;
  /** Add PDFs here — leave empty until documents are published. */
  documents: IRDocument[];
};

export type IRSection = {
  id: string;
  label: string;
  description: string;
  /** Documents listed directly under the section (when it has no subsections). */
  documents: IRDocument[];
  subsections: IRSubsection[];
};

export const IR_CONTACT = {
  name: "Compliance Officer & Investor Relations",
  email: "info@rationalengineers.com",
  phone: "+91 91686 43114",
};

/**
 * Investor Relations structure for RATIONAL ENGINEERS LIMITED.
 * To publish a document, add an entry to the relevant `documents` array.
 */
export const IR_SECTIONS: IRSection[] = [
  {
    id: "financial-performance",
    label: "Financial Performance",
    description: "Audited and unaudited financial results of the Company.",
    documents: [],
    subsections: [
      { id: "quarterly", label: "Quarterly", documents: [] },
      { id: "annually", label: "Annually", documents: [] },
    ],
  },
  {
    id: "annual-reports",
    label: "Annual Reports & Returns",
    description: "Annual reports, annual returns and related statutory filings.",
    documents: [],
    subsections: [],
  },
  {
    id: "corporate-announcements",
    label: "Corporate Announcement & Press Release",
    description: "Disclosures, policies and announcements made to the exchanges and the press.",
    documents: [],
    subsections: [
      { id: "policies-codes", label: "Policies, Codes & Other Documents", documents: [] },
      { id: "trading-window", label: "Trading Window", documents: [] },
      { id: "newspaper-advertisement", label: "Newspaper Advertisement", documents: [] },
      { id: "esop", label: "ESOP", documents: [] },
      { id: "outcomes", label: "Outcomes", documents: [] },
      { id: "investor-analyst-meet", label: "Investor / Analyst Meet", documents: [] },
      { id: "related-party-transactions", label: "Related Party Transactions", documents: [] },
    ],
  },
  {
    id: "governance",
    label: "Governance & Regulatory Information",
    description: "Board composition, committees and corporate governance disclosures.",
    documents: [],
    subsections: [
      { id: "board-of-directors", label: "Board of Directors", documents: [] },
      { id: "board-committees", label: "Board Committees", documents: [] },
      { id: "corporate-governance", label: "Corporate Governance", documents: [] },
      { id: "subsidiary-financials", label: "Subsidiary Financials", documents: [] },
    ],
  },
  {
    id: "shareholders-information",
    label: "Shareholders Information",
    description: "Shareholding data, dividend details and notices to shareholders.",
    documents: [],
    subsections: [
      { id: "shareholding-pattern", label: "Shareholding Pattern", documents: [] },
      { id: "dividend", label: "Dividend / Unclaimed Dividend", documents: [] },
      { id: "notices", label: "Notices", documents: [] },
    ],
  },
  {
    id: "compliances",
    label: "Compliances",
    description: "Compliance certificates and periodic regulatory reports.",
    documents: [],
    subsections: [
      { id: "certificates-compliance-reports", label: "Certificates / Compliance Reports", documents: [] },
    ],
  },
  {
    id: "general-information",
    label: "General Information",
    description: "Other information of interest to investors and stakeholders.",
    documents: [],
    subsections: [],
  },
];

export const countDocuments = (section: IRSection) =>
  section.documents.length +
  section.subsections.reduce((total, sub) => total + sub.documents.length, 0);
