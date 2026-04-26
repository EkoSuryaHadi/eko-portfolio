export type ProjectStatus = "LIVE" | "IN DEVELOPMENT";
export type ProjectCategory = "AI & ML" | "BI + ML" | "Analytics Dashboard" | "Power BI" | "Web Application" | "AI Automation" | "Mobile App";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  industry: "Oil & Gas" | "EPC" | "General";
  status: ProjectStatus;
  accent: "teal" | "purple" | "amber";
  summary: string;
  impact: string;
  stack: string[];
  challenge: string;
  solution: string;
  features: string[];
  businessImpact: string[];
  lessons: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "epc-delay-predictor",
    name: "EPC Delay Predictor",
    category: "AI & ML",
    industry: "EPC",
    status: "LIVE",
    accent: "purple",
    summary: "Flags schedule slippage risk earlier than standard project reports so EPC teams can act before delays harden into cost exposure.",
    impact: "Designed for earlier intervention in schedule reviews, contractor follow-up, and management escalation.",
    stack: ["Python", "XGBoost", "Pandas", "Streamlit"],
    challenge: "EPC teams often see schedule risk after it has already affected procurement, construction sequencing, or contractor coordination.",
    solution: "Built a predictive workflow that reads project-control indicators, scores delay risk, and explains the drivers in plain project language.",
    features: ["Delay risk scoring", "Critical driver explanation", "Project filter views", "Executive-ready summary cards"],
    businessImpact: ["Surfaces projects that need earlier management attention", "Supports clearer risk prioritisation in project-control meetings", "Reduces dependence on fragmented Excel tracking"],
    lessons: ["Prediction needs trust, so explanations matter as much as accuracy.", "Project-control users need simple risk language, not model jargon."]
  },
  {
    slug: "pmo-intelligence-system",
    name: "PMO Intelligence System",
    category: "AI & ML",
    industry: "EPC",
    status: "LIVE",
    accent: "purple",
    summary: "Turns project-control data into portfolio-level early warnings, budget visibility, and executive-ready PMO reporting.",
    impact: "Scenario model estimates USD 750K-1.2M annual value for a 10-project portfolio when delays are reduced earlier.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL"],
    challenge: "PMO leaders need a portfolio view that identifies schedule, budget, and delivery risk before monthly reports become historical evidence.",
    solution: "Created an intelligence layer for portfolio health, delay prediction, budget control, and executive reporting workflows.",
    features: ["Portfolio risk overview", "Schedule and budget health", "AI risk flags", "Management reporting views"],
    businessImpact: ["Frames an on-time delivery target around measurable portfolio signals", "Gives executives a clearer view of project exposure", "Connects ROI narrative to schedule-risk reduction"],
    lessons: ["Portfolio analytics should start from business questions, then map back to data.", "A PMO tool must be explainable enough for non-technical decision makers."]
  },
  {
    slug: "production-intelligence-dashboard",
    name: "Production Intelligence Dashboard",
    category: "BI + ML",
    industry: "Oil & Gas",
    status: "LIVE",
    accent: "teal",
    summary: "Combines production monitoring, anomaly signals, and operational insight so field teams can review performance from one trusted view.",
    impact: "Helps production teams move from delayed reporting to faster operational review.",
    stack: ["Power BI", "DAX", "Python", "SQL"],
    challenge: "Production teams need fast visibility into field performance, but source data often lives across manual sheets, delayed reports, and inconsistent KPI definitions.",
    solution: "Designed an interactive BI layer for production KPIs, variance analysis, and operational monitoring across field and management views.",
    features: ["Production KPI cards", "Trend and variance analysis", "Field/well filtering", "Executive dashboard layer"],
    businessImpact: ["Shortens time from data refresh to review", "Improves consistency in production discussions", "Supports clearer operating decisions with shared KPI definitions"],
    lessons: ["The best dashboard mirrors the decision rhythm of the field team.", "Domain naming and KPI definitions are critical for adoption."]
  },
  {
    slug: "aria-asset-reliability",
    name: "ARIA - Asset Reliability Intelligence",
    category: "AI & ML",
    industry: "Oil & Gas",
    status: "LIVE",
    accent: "purple",
    summary: "Detects anomaly patterns and reliability risks so maintenance and production teams can triage asset issues earlier.",
    impact: "Designed around a 72-hour early-warning target and a 20% unplanned-downtime reduction scenario.",
    stack: ["Python", "Isolation Forest", "TimescaleDB", "Docker"],
    challenge: "Asset issues are often detected only after operating symptoms become downtime events, making maintenance response more reactive and expensive.",
    solution: "Built an anomaly detection and reliability intelligence workflow for early warning, triage, and asset-health review.",
    features: ["Anomaly detection", "Reliability scoring", "Time-series monitoring", "Alert-ready architecture"],
    businessImpact: ["Frames maintenance action around earlier warning signals", "Supports downtime-reduction initiatives with measurable targets", "Improves prioritisation of reliability investigations"],
    lessons: ["Reliability AI must be tuned around real operating context.", "A model is useful only when it fits maintenance workflow."]
  },
  {
    slug: "risk-analyst-pro",
    name: "Risk Analyst Pro",
    category: "Analytics Dashboard",
    industry: "EPC",
    status: "LIVE",
    accent: "amber",
    summary: "Transforms spreadsheet-based risk registers into a visual project-risk dashboard for prioritisation and stakeholder review.",
    impact: "Improves risk communication by making exposure, mitigation status, and priority actions easier to see.",
    stack: ["Streamlit", "Python", "Pandas", "Plotly"],
    challenge: "Risk registers are often maintained in spreadsheets but rarely translated into action-oriented insight for project teams and sponsors.",
    solution: "Created a dashboard that analyses probability, impact, exposure, and mitigation status in a practical review interface.",
    features: ["Risk heatmap", "Exposure ranking", "Mitigation tracker", "Portfolio summary"],
    businessImpact: ["Improves focus on top risks", "Makes risk reviews more visual and easier to facilitate", "Reduces spreadsheet dependency during review meetings"],
    lessons: ["Risk tools must simplify prioritisation, not add administration.", "Visual hierarchy is essential for risk communication."]
  },
  {
    slug: "oil-production-forecasting",
    name: "Oil Production Forecasting",
    category: "AI & ML",
    industry: "Oil & Gas",
    status: "LIVE",
    accent: "purple",
    summary: "Forecasts production using decline-curve methods and machine-learning experiments for practical planning and variance review.",
    impact: "Supports production planning with transparent scenarios that engineers and managers can compare.",
    stack: ["Python", "Scikit-learn", "DCA", "Pandas"],
    challenge: "Production planning needs forecasts that are transparent enough for engineers and flexible enough for changing field behaviour.",
    solution: "Implemented forecasting workflows that combine domain methods with ML experiments for practical production analysis.",
    features: ["Forecast scenarios", "Decline curve analysis", "Model comparison", "Variance tracking"],
    businessImpact: ["Improves production planning conversations", "Supports target setting with comparable forecast scenarios", "Makes model tradeoffs visible instead of hidden"],
    lessons: ["Forecasting is a conversation between physics, data, and operational reality.", "Simple baselines are essential before adding advanced models."]
  },
  {
    slug: "kinanti-dashboard",
    name: "KINANTI Production Dashboard",
    category: "Power BI",
    industry: "Oil & Gas",
    status: "LIVE",
    accent: "teal",
    summary: "Power BI dashboard for KINANTI field production monitoring, KPI tracking, and recurring production-review workflows.",
    impact: "Centralises field visibility so daily and management reviews work from consistent KPI definitions.",
    stack: ["Power BI", "DAX", "Power Query", "SQL"],
    challenge: "Field production reporting needs consistent KPI definitions, refreshable data, and clean visuals for daily operations and management reporting.",
    solution: "Developed a Power BI reporting layer with production KPIs, trend review, and field-level filtering.",
    features: ["Daily production views", "KPI trend analysis", "Field filters", "Management summary page"],
    businessImpact: ["Improves report consistency", "Reduces manual reporting effort", "Supports faster production review"],
    lessons: ["Power BI success depends on data modelling as much as visuals.", "Stakeholder terminology must be reflected directly in the report."]
  },
  {
    slug: "sra-app",
    name: "SRA App",
    category: "Web Application",
    industry: "General",
    status: "LIVE",
    accent: "amber",
    summary: "Digitises structured review and analysis workflows that are difficult to track in ad-hoc spreadsheets or documents.",
    impact: "Moves manual process steps into a repeatable application flow with persistent records.",
    stack: ["React", "FastAPI", "PostgreSQL", "TailwindCSS"],
    challenge: "Manual review workflows can be difficult to repeat, audit, and analyse when they depend on disconnected spreadsheets or documents.",
    solution: "Built a structured web application with clear user flows, persistent data, and reusable interface components.",
    features: ["Structured forms", "Review workflow", "Data persistence", "Responsive UI"],
    businessImpact: ["Improves process consistency", "Reduces manual handoffs", "Creates a foundation for future analytics"],
    lessons: ["Workflow apps need fewer screens and clearer states.", "Data capture should be designed with future reporting in mind."]
  },
  {
    slug: "ai-contract-agent",
    name: "AI Contract Agent",
    category: "AI Automation",
    industry: "EPC",
    status: "IN DEVELOPMENT",
    accent: "purple",
    summary: "AI assistant concept for contract review, clause extraction, and risk flagging in project and commercial workflows.",
    impact: "Aims to shorten first-pass contract review while keeping source references visible for human judgement.",
    stack: ["Python", "LLM", "FastAPI", "Vector DB"],
    challenge: "Contract risk review is time-consuming and depends heavily on manual reading across long project documents.",
    solution: "Developing an AI workflow for clause extraction, document Q&A, and risk summary generation with reference-backed answers.",
    features: ["Clause extraction", "Document Q&A", "Risk summary", "Reference-backed answers"],
    businessImpact: ["Shortens first-pass review", "Supports contract-risk visibility", "Improves document searchability"],
    lessons: ["AI contract tools must cite source text to build trust.", "Human review remains essential for legal and commercial decisions."]
  },
  {
    slug: "kurvaup",
    name: "KurvaUp",
    category: "Mobile App",
    industry: "General",
    status: "IN DEVELOPMENT",
    accent: "amber",
    summary: "Mobile application concept for structured learning, progress tracking, and productivity workflows.",
    impact: "Explores mobile-first product development with clean UX, reliable state management, and scalable architecture.",
    stack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    challenge: "Mobile productivity tools need fast interaction, clear progress tracking, and reliable user-state management.",
    solution: "Building a Flutter app with modular state management, authentication, and a scalable feature structure.",
    features: ["Mobile-first UX", "User authentication", "Progress tracking", "Clean architecture"],
    businessImpact: ["Demonstrates product-building breadth", "Adds mobile capability to portfolio", "Creates reusable Flutter patterns"],
    lessons: ["Mobile apps require disciplined state management early.", "Small UX details define whether users return."]
  }
];

export const featuredProjects = projects.slice(0, 4);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
