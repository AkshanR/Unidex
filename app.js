/**
 * GradTrack PG - Lightweight, Clean Program Notes & Comparison Logic
 */

const DEFAULT_PROGRAMS = [
  {
    id: "christ-mca-ncr",
    university: "CHRIST UNIVERSITY",
    campus: "Delhi NCR Campus (Mariam Nagar, Ghaziabad)",
    program: "MCA (Master of Computer Applications)",
    mode: "On-Campus",
    duration: "2 Years",
    url: "https://ncr.christuniversity.in/our-programmes/PGP/25",
    applyUrl: "https://ncr.christuniversity.in/our-programmes/PGP/25",
    openFrom: "15-Oct-2026",
    openUntil: "25-Nov-2026",
    statusBadge: "Admissions Open",
    regFee: "INR 8,000 (Non-Refundable)",
    totalFeeDisplay: "₹5,00,000",
    intlTotalDisplay: "$11,400",
    year1Fee: "₹2,50,000",
    year2Fee: "₹2,50,000",
    eligibility: [
      "Candidates who have passed an Undergraduate degree with a minimum aggregate of 50% and above, from any recognised University in India or abroad recognised by UGC / AIU, are eligible to apply.",
      "Applicants from non-Computer Science should have studied any of the following subjects at the Pre-University or Degree level – Mathematics, Computer Science, or Business Mathematics.",
      "Students appearing for their final Degree Examinations in March-June 2027 are also eligible to apply (Applicants who are in the last year of their studies should have secured 50% or above aggregate in all the Semesters / Years of Undergraduate Examinations conducted so far).",
      "Students pursuing an International curriculum must note that eligibility is according to AIU stipulations."
    ],
    feeHeaders: ["Year", "Indian States", "NRI", "OCI", "SAARC/Africa/PIO", "Other Foreign", "Payment Timeline"],
    feeRows: [
      ["Year 1", "2,50,000 INR", "3,50,000 INR", "3,700 USD", "5,100 USD", "5,700 USD", "Within 7 days of result declaration"],
      ["Year 2", "2,50,000 INR", "3,50,000 INR", "3,700 USD", "5,100 USD", "5,700 USD", "On or before March 15, 2028"]
    ],
    adminFees: [
      { name: "Admission Registration Fee", indian: "INR 8,000 (Non-Refundable)", intl: "Mandatory for all admissions" }
    ],
    specializations: [
      {
        name: "Data Science & Machine Learning",
        badge: "Elective Track",
        feeSem: "Included in ₹2.50L/yr",
        totalFee: "₹5,00,000",
        url: "https://ncr.christuniversity.in/our-programmes/PGP/25",
        focus: "Python, Big Data Analytics, Statistical Modeling, Deep Learning & NLP"
      },
      {
        name: "Cloud Computing & Enterprise Architecture",
        badge: "Elective Track",
        feeSem: "Included in ₹2.50L/yr",
        totalFee: "₹5,00,000",
        url: "https://ncr.christuniversity.in/our-programmes/PGP/25",
        focus: "AWS/Azure Cloud, Microservices, DevOps, Containerization, Distributed Systems"
      },
      {
        name: "Intelligent Systems & Full-Stack Development",
        badge: "Elective Track",
        feeSem: "Included in ₹2.50L/yr",
        totalFee: "₹5,00,000",
        url: "https://ncr.christuniversity.in/our-programmes/PGP/25",
        focus: "Modern Web/Mobile Stacks, AI Application Integration, Enterprise APIs"
      }
    ],
    notes: [
      "Located directly inside Ghaziabad (Mariam Nagar, Meerut Road).",
      "It is to be noted that though the fee is fixed, there may be a periodic nominal increase to meet the rise in costs.",
      "The NRI fee is applicable for the first year for candidates who have studied a foreign syllabus in the qualifying examination of study in India.",
      "The NRI fee is applicable for the full duration of the program for candidates who completed qualifying exam outside India or applied under NRI category.",
      "To claim the Indian / Delhi NCR category fee, the candidates should have studied last 7 years in India / Delhi NCR.",
      "Admission registration fee of INR 8000/- is non-refundable in the event of cancellation of admission.",
      "Payment can be made through Net banking / NEFT / RTGS. Transfer of fees does not guarantee admission."
    ]
  },
  {
    id: "christ-mca-online",
    university: "CHRIST (Deemed to be University)",
    campus: "Online Degree Programmes",
    program: "Master of Computer Applications (Online MCA)",
    mode: "Online",
    duration: "2 Years (4 Semesters)",
    url: "https://online.christuniversity.in/courses/Ng==",
    applyUrl: "https://onlineprogrammes.christuniversity.in",
    openFrom: "Admissions open for July Batch!",
    openUntil: "13-Oct-2026 (Noon 12 PM)",
    statusBadge: "Admissions Open",
    regFee: "INR 1,500 (App) + INR 5,000 (Process)",
    totalFeeDisplay: "₹2,30,000",
    intlTotalDisplay: "$4,155",
    year1Fee: "₹1,09,250",
    year2Fee: "₹1,20,750",
    eligibility: [
      "Candidates who have passed an Undergraduate degree with a minimum aggregate of 50% and above, from any recognised University in India or abroad recognised by UGC / AIU, are eligible to apply.",
      "Students appearing for their final degree examinations in March-June 2026 are also eligible to apply (50% or above aggregate in all semesters so far).",
      "Applicants from non-Computer Science should have studied any of the following subjects at Pre-University or Degree level – Mathematics, Computer Science, or Business Mathematics."
    ],
    feeHeaders: ["Academic Year", "Indian Students", "International Students"],
    feeRows: [
      ["1st Year", "Rs. 1,09,250", "$ 1,975"],
      ["2nd Year", "Rs. 1,20,750", "$ 2,180"],
      ["Total Tuition", "Rs. 2,30,000", "$ 4,155"]
    ],
    adminFees: [
      { name: "Application Fees", indian: "INR 1,500 + GST (Non-refundable)", intl: "$ 20 One-time (Non-refundable)" },
      { name: "Admission Process Fees", indian: "INR 5,000 (Non-refundable)", intl: "$ 60 One-time (Non-refundable)" },
      { name: "Examination Fees", indian: "INR 3,000 per year", intl: "$ 50 per year" }
    ],
    specializations: [
      {
        name: "Advanced Software Engineering",
        badge: "Core Track",
        feeSem: "Included in ₹1.09L/yr",
        totalFee: "₹2,30,000",
        url: "https://online.christuniversity.in/courses/Ng==",
        focus: "Software Architecture, OOP Analysis, Design Patterns, Agile Frameworks"
      },
      {
        name: "Data Analytics & Insights",
        badge: "Elective Track",
        feeSem: "Included in ₹1.09L/yr",
        totalFee: "₹2,30,000",
        url: "https://online.christuniversity.in/courses/Ng==",
        focus: "Data Mining, Visualization, Predictive Analytics, Python Analytics"
      },
      {
        name: "Cyber Security & Cloud Infrastructure",
        badge: "Elective Track",
        feeSem: "Included in ₹1.09L/yr",
        totalFee: "₹2,30,000",
        url: "https://online.christuniversity.in/courses/Ng==",
        focus: "Information Security, Cloud Hardening, Network Defense Protocols"
      }
    ],
    notes: [
      "*Flexible EMI options are available for tuition fee payments. Choose a convenient installment plan at checkout to manage fees with ease.",
      "The application fee is non-refundable once the application number is generated.",
      "In case of payment failure, the amount will be refunded within 15 business days.",
      "Payment Methods: Net Banking, Credit Card, Debit Card, or UPI.",
      "Admission Process Fees of INR 5,000 (Indian) / $ 60 (International) is non-refundable.",
      "Admission queries: onlinedegrees@christuniversity.in | Helpline: +91 080-48674444"
    ]
  },
  {
    id: "amity-mca-noida",
    university: "AMITY UNIVERSITY",
    campus: "Noida Campus (Sector 125, closest to Ghaziabad)",
    program: "MCA (Master of Computer Applications)",
    mode: "On-Campus",
    duration: "2 Years (4 Semesters)",
    url: "https://noida.amity.edu/pg/mca",
    detailsUrl: "https://amity.edu/course-details.aspx?fd=FzNymoX3dH0=&cfn=rq3kzaCPdYSngjgUzM2Drw==&CD=rq3kzaCPdYSngjgUzM2Drw==",
    applyUrl: "https://portal.amity.edu",
    openFrom: "Admissions Open 2026 Batch",
    openUntil: "Ongoing / Rolling Admissions",
    statusBadge: "Admissions Open",
    regFee: "INR 1,500 (App) + INR 20,000 (Refundable Deposit)",
    totalFeeDisplay: "₹5,64,000",
    intlTotalDisplay: "$8,400",
    year1Fee: "₹2,82,000",
    year2Fee: "₹2,82,000",
    eligibility: [
      "BCA / B.Sc. (IT) with a minimum aggregate of 50% from a recognised University in India or abroad recognised by UGC / AIU.",
      "OR Bachelor's degree of 4 years in Engineering / Technology with a minimum aggregate of 50%.",
      "OR Any Graduation degree with minimum 50% aggregate AND Mathematics as a subject at 10+2 level or at Graduation level.",
      "Selection Process: Evaluation of qualifying exam scores + Personal Interview / Video Assessment."
    ],
    feeHeaders: ["Semester / Year", "Non-Sponsored (Indian)", "Sponsored (Indian)", "International (USD)", "Payment Schedule"],
    feeRows: [
      ["Semester 1", "Rs. 1,41,000", "Rs. 2,11,500", "$ 2,100", "At admission confirmation"],
      ["Semester 2", "Rs. 1,41,000", "Rs. 2,11,500", "$ 2,100", "Before Semester 2 begins"],
      ["Semester 3", "Rs. 1,41,000", "Rs. 2,11,500", "$ 2,100", "Before Semester 3 begins"],
      ["Semester 4", "Rs. 1,41,000", "Rs. 2,11,500", "$ 2,100", "Before Semester 4 begins"],
      ["Total Tuition (2 Years)", "Rs. 5,64,000", "Rs. 8,46,000", "$ 8,400", "Full 4-Semester Course"]
    ],
    adminFees: [
      { name: "Application Form Fee", indian: "INR 1,500 (Non-refundable)", intl: "$ 50 (Non-refundable)" },
      { name: "Academic Security Deposit", indian: "INR 20,000 (Refundable)", intl: "$ 300 (Refundable)" },
      { name: "Ghaziabad Bus Transport", indian: "Routes from Vaishali, Indirapuram, Vasundhara, Raj Nagar", intl: "-" }
    ],
    specializations: [
      {
        name: "MCA (General)",
        badge: "Core",
        feeSem: "₹1,41,000 / sem",
        totalFee: "₹5,64,000",
        url: "https://noida.amity.edu/pg/mca",
        focus: "Core Computing, Software Development, System Design, Advanced DBMS"
      },
      {
        name: "MCA (Generative AI)",
        badge: "Hot Tech",
        feeSem: "₹1,59,000 / sem",
        totalFee: "₹6,36,000",
        url: "https://noida.amity.edu/pg/mca-generative-ai",
        focus: "LLMs, Prompt Engineering, Diffusion Models, GANs, Autonomous AI Agents"
      },
      {
        name: "MCA (Cyber Security)",
        badge: "High Demand",
        feeSem: "₹1,59,000 / sem",
        totalFee: "₹6,36,000",
        url: "https://noida.amity.edu/pg/mca-cyber-security",
        focus: "Ethical Hacking, Digital Forensics, Cryptography, SIEM, Cloud Threat Hunting"
      },
      {
        name: "MCA (Data Science)",
        badge: "Trending",
        feeSem: "₹1,59,000 / sem",
        totalFee: "₹6,36,000",
        url: "https://noida.amity.edu/pg/mca-data-science",
        focus: "Big Data Analytics, Statistical ML, Deep Learning, PowerBI/Tableau Dashboards"
      }
    ],
    notes: [
      "Closest Amity on-campus option for Ghaziabad: located in Sector 125, Noida (~15-20 min commute).",
      "Specialized MCA tracks (Generative AI, Cyber Security, Data Science) are ₹1,59,000/sem (₹6.36 Lakhs total).",
      "Direct university bus routes connect Ghaziabad (Vaishali, Indirapuram, Vasundhara, Mohan Nagar, Raj Nagar).",
      "Accessible via Delhi Metro: Botanical Garden / Okhla Bird Sanctuary (Magenta Line) or Noida City Centre (Blue Line).",
      "Merit scholarships up to 100% tuition fee waiver available for high achievers (grad aggregate / CUET-PG).",
      "Academic security deposit of Rs. 20,000 is refundable upon course completion."
    ]
  },
  {
    id: "amity-mca-online",
    university: "AMITY UNIVERSITY ONLINE",
    campus: "Online Degree (UGC-DEB & AICTE Approved)",
    program: "Online Master of Computer Applications (MCA)",
    mode: "Online",
    duration: "2 Years (4 Semesters)",
    url: "https://amityonline.com/master-of-computer-applications-online",
    applyUrl: "https://amityonline.com/apply-now",
    openFrom: "Admissions open for Current Batch!",
    openUntil: "Ongoing / Rolling Intake",
    statusBadge: "Admissions Open",
    regFee: "INR 1,100 / Fee Waivers Active",
    totalFeeDisplay: "₹1,99,200",
    intlTotalDisplay: "$4,000",
    year1Fee: "₹99,600",
    year2Fee: "₹99,600",
    eligibility: [
      "Passed BCA / Bachelor Degree in Computer Science Engineering or equivalent with minimum 50% marks.",
      "OR Passed B.Sc. / B.Com. / B.A. with Mathematics at 10+2 level or at Graduation level with minimum 50% marks in aggregate.",
      "Students without Mathematics background can apply by completing Amity's online bridge course.",
      "UGC-DEB entitled, NAAC A+ accredited, and AICTE approved master's degree valid globally."
    ],
    feeHeaders: ["Installment Plan", "Indian Students", "International Students", "Payment Terms"],
    feeRows: [
      ["Semester-wise (Per Sem)", "Rs. 49,800 / sem", "$ 1,000 / sem", "Payable before each of 4 semesters (Total: Rs. 1,99,200)"],
      ["Annual Plan (Per Year)", "Rs. 94,530 / yr", "$ 1,900 / yr", "Payable annually (Total: Rs. 1,89,060 - save ~Rs. 10,000)"],
      ["One-Time Lump Sum", "Rs. 1,76,000", "$ 3,680", "Upfront payment with maximum one-time discount"],
      ["Zero-Cost EMI Option", "From Rs. 7,877 / month", "-", "Flexible monthly financing available"]
    ],
    adminFees: [
      { name: "Application Fee", indian: "INR 1,100 / Fee Waivers during admission drive", intl: "$ 25" },
      { name: "Examination Fees", indian: "Included in tuition fees", intl: "Included" },
      { name: "LMS & Digital Resources", indian: "Included (24/7 access)", intl: "Included" }
    ],
    specializations: [
      {
        name: "Master of Computer Applications (General)",
        badge: "Standard Track",
        feeSem: "₹49,800 / sem",
        totalFee: "₹1,99,200",
        url: "https://amityonline.com/master-of-computer-applications-online",
        focus: "Full-Stack Web Dev, Cloud Architecture, DBMS, Core Software Engineering"
      },
      {
        name: "MCA in Cybersecurity",
        badge: "Specialized Track",
        feeSem: "₹68,750 / sem",
        totalFee: "₹2,75,000",
        url: "https://amityonline.com/mca-cybersecurity",
        focus: "InfoSec Governance, Cloud Security, Threat Defense, VAPT, Incident Response"
      },
      {
        name: "MCA in Project Management",
        badge: "Management Track",
        feeSem: "₹49,800 / sem",
        totalFee: "₹1,99,200",
        url: "https://amityonline.com/mca-in-project-management",
        focus: "Agile/Scrum, IT Project Lifecycle, Risk Assessment, PMP & ITIL Alignment"
      },
      {
        name: "MCA in Software Engineering",
        badge: "HCLTech Co-developed",
        feeSem: "₹68,750 / sem",
        totalFee: "₹2,75,000",
        url: "https://amityonline.com/mca-software-engineering",
        focus: "Enterprise Architecture, DevOps, CI/CD, Microservices with HCLTech Mentorship"
      },
      {
        name: "MCA in Machine Learning",
        badge: "AI Core",
        feeSem: "₹49,800 / sem",
        totalFee: "₹1,99,200",
        url: "https://amityonline.com/mca-machine-learning-online",
        focus: "Math for ML, Supervised/Unsupervised Algorithms, Scikit-learn, Python Stack"
      },
      {
        name: "MCA in Blockchain",
        badge: "Web3 Track",
        feeSem: "₹49,800 / sem",
        totalFee: "₹1,99,200",
        url: "https://amityonline.com/mca-blockchain-online",
        focus: "Ethereum & Solidity, Smart Contracts, Hyperledger Fabric, DApps, Cryptoeconomics"
      },
      {
        name: "MCA in Machine Learning & Artificial Intelligence",
        badge: "Advanced Tech",
        feeSem: "₹68,750 / sem",
        totalFee: "₹2,75,000",
        url: "https://amityonline.com/mca-machine-learning-and-artificial-intelligence-online",
        focus: "Deep Neural Nets, Computer Vision, NLP, Reinforcement Learning, MLOps"
      },
      {
        name: "MCA in FinTech & AI",
        badge: "Paytm Co-developed",
        feeSem: "₹68,750 / sem",
        totalFee: "₹2,75,000",
        url: "https://amityonline.com/mca-fintech-ai-paytm",
        focus: "Digital Payments, Algorithmic Trading, Robo-advisory, Fraud AI with Paytm"
      }
    ],
    notes: [
      "100% online flexibility: ideal for students in Ghaziabad or working professionals needing self-paced study.",
      "Standard MCA & Project Management/Blockchain/ML: ₹1,99,200 total (₹49,800/sem).",
      "Industry-partnered tracks (Paytm FinTech & AI, HCLTech Software Eng, ML & AI, Cybersecurity): ₹2,75,000 total (₹68,750/sem).",
      "Live weekend masterclasses by industry leaders + recorded lectures and e-library access.",
      "Remote proctored online examinations — write exams from home without physical travel.",
      "Career assistance with virtual job drives, mentorship, and 500+ corporate hiring partners.",
      "Zero-cost EMI plans available starting from ₹7,877/month."
    ]
  }
];

// App State
let programs = [];
let currentView = "cards"; // "cards" | "compare" | "specs"
let currentFilter = "all"; // "all" | "On-Campus" | "Online" | "Specializations"
let universityFilter = "all"; // "all" | "Christ" | "Amity"
let feeSort = "default"; // "default" | "low-to-high" | "high-to-low"
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadPrograms();
  setupEventListeners();
  renderApp();
});

function initTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  updateThemeButtonUI(currentTheme);
}

function updateThemeButtonUI(theme) {
  const icon = document.getElementById("theme-icon");
  const label = document.getElementById("theme-label");
  if (!icon || !label) return;
  if (theme === "dark") {
    icon.textContent = "☀️";
    label.textContent = "Light";
  } else {
    icon.textContent = "🌙";
    label.textContent = "Dark";
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("unidex_theme", newTheme);
  updateThemeButtonUI(newTheme);
  showToast(`Switched to ${newTheme} theme`);
}

function loadPrograms() {
  const saved = localStorage.getItem("unidex_programs_v1") || localStorage.getItem("gradtrack_pg_programs_v5");
  if (saved) {
    try {
      const stored = JSON.parse(saved);
      // Keep any user-added custom programs (IDs that are not part of default built-ins)
      const userCustomPrograms = stored.filter(p => !DEFAULT_PROGRAMS.some(dp => dp.id === p.id));
      // Always use latest fresh DEFAULT_PROGRAMS from app.js + any custom user additions
      programs = [...DEFAULT_PROGRAMS, ...userCustomPrograms];
      savePrograms();
    } catch (e) {
      programs = [...DEFAULT_PROGRAMS];
      savePrograms();
    }
  } else {
    programs = [...DEFAULT_PROGRAMS];
    savePrograms();
  }
}

function savePrograms() {
  localStorage.setItem("unidex_programs_v1", JSON.stringify(programs));
}

function setupEventListeners() {
  // Theme Toggle
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  // Search Input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderApp();
    });
  }

  // Mode / Specialization Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      
      // If user clicked Specializations button, auto switch to specs view
      if (currentFilter === "Specializations") {
        setView("specs");
      } else if (currentView === "specs") {
        setView("cards");
      }
      renderApp();
    });
  });

  // University Filter Dropdown
  const univFilterSelect = document.getElementById("univ-filter");
  if (univFilterSelect) {
    univFilterSelect.addEventListener("change", (e) => {
      universityFilter = e.target.value;
      renderApp();
    });
  }

  // Fee Sort Dropdown
  const feeSortSelect = document.getElementById("fee-sort");
  if (feeSortSelect) {
    feeSortSelect.addEventListener("change", (e) => {
      feeSort = e.target.value;
      renderApp();
    });
  }

  // View Switcher Buttons
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setView(btn.dataset.view);
    });
  });

  // Export Button
  const exportBtn = document.getElementById("btn-export");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportAsMarkdown);
  }

  // Reset Button
  const resetBtn = document.getElementById("btn-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset Unidex to default college notes?")) {
        programs = [...DEFAULT_PROGRAMS];
        savePrograms();
        renderApp();
        showToast("Reset to default Unidex notes");
      }
    });
  }

  // Add Program Modal
  const addModal = document.getElementById("add-modal");
  const openAddBtn = document.getElementById("btn-add-program");
  const closeAddBtn = document.getElementById("btn-close-modal");
  const cancelBtn = document.getElementById("btn-cancel-modal");
  const addForm = document.getElementById("add-program-form");

  if (openAddBtn && addModal) {
    openAddBtn.addEventListener("click", () => addModal.classList.add("open"));
  }

  const closeModal = () => addModal.classList.remove("open");
  if (closeAddBtn) closeAddBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

  if (addForm) {
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addNewProgram(addForm);
      closeModal();
    });
  }

  // Import Modal & AI Skill Logic
  const importModal = document.getElementById("import-modal");
  const openImportBtn = document.getElementById("btn-import");
  const closeImportBtn = document.getElementById("btn-close-import-modal");
  const cancelImportBtn = document.getElementById("btn-cancel-import-modal");
  const submitImportBtn = document.getElementById("btn-submit-import");
  const copySkillBtn = document.getElementById("btn-copy-skill-prompt");
  const fileInput = document.getElementById("import-file-input");
  const jsonTextarea = document.getElementById("import-json-input");
  const fileNameSpan = document.getElementById("import-file-name");

  if (openImportBtn && importModal) {
    openImportBtn.addEventListener("click", () => importModal.classList.add("open"));
  }

  const closeImport = () => importModal.classList.remove("open");
  if (closeImportBtn) closeImportBtn.addEventListener("click", closeImport);
  if (cancelImportBtn) cancelImportBtn.addEventListener("click", closeImport);

  // Copy AI Skill Prompt
  if (copySkillBtn) {
    copySkillBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(UNIDEX_AI_SKILL_PROMPT).then(() => {
        showToast("📋 AI Skill prompt copied! Paste it into ChatGPT / Claude / Gemini");
      }).catch(() => {
        showToast("Could not auto-copy. Open SKILL.md to copy manually.");
      });
    });
  }

  // File Upload (.json)
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (fileNameSpan) fileNameSpan.textContent = file.name;
      const reader = new FileReader();
      reader.onload = (event) => {
        if (jsonTextarea) jsonTextarea.value = event.target.result;
      };
      reader.readAsText(file);
    });
  }

  // Submit Import
  if (submitImportBtn) {
    submitImportBtn.addEventListener("click", () => {
      const text = jsonTextarea ? jsonTextarea.value.trim() : "";
      if (!text) {
        alert("Please paste JSON data or select a .json file.");
        return;
      }
      importProgramFromJson(text);
      closeImport();
    });
  }
}

function setView(viewName) {
  currentView = viewName;
  document.querySelectorAll(".view-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.view === viewName);
  });
  toggleViews();
  renderApp();
}

function extractNumericFee(feeString) {
  if (!feeString) return 0;
  const cleaned = feeString.replace(/[^0-9]/g, "");
  return parseInt(cleaned, 10) || 0;
}

function getFilteredPrograms() {
  let list = programs.filter(prog => {
    // 1. University Filter
    if (universityFilter !== "all") {
      if (!prog.university.toLowerCase().includes(universityFilter.toLowerCase())) {
        return false;
      }
    }

    // 2. Mode / Specialization Filter
    if (currentFilter === "On-Campus" && !prog.mode.toLowerCase().includes("campus")) {
      return false;
    }
    if (currentFilter === "Online" && !prog.mode.toLowerCase().includes("online")) {
      return false;
    }
    if (currentFilter === "Specializations" && (!prog.specializations || prog.specializations.length === 0)) {
      return false;
    }

    // 3. Search Query
    if (searchQuery) {
      const basicText = `${prog.university} ${prog.campus} ${prog.program} ${prog.mode}`.toLowerCase();
      const specText = (prog.specializations || []).map(s => `${s.name} ${s.focus || ''} ${s.badge || ''}`).join(" ").toLowerCase();
      if (!basicText.includes(searchQuery) && !specText.includes(searchQuery)) {
        return false;
      }
    }

    return true;
  });

  // 4. Fee Sorting
  if (feeSort === "low-to-high") {
    list.sort((a, b) => extractNumericFee(a.totalFeeDisplay) - extractNumericFee(b.totalFeeDisplay));
  } else if (feeSort === "high-to-low") {
    list.sort((a, b) => extractNumericFee(b.totalFeeDisplay) - extractNumericFee(a.totalFeeDisplay));
  }

  return list;
}

function renderApp() {
  renderCards();
  renderMatrix();
  renderSpecializationsDirectory();
}

function toggleViews() {
  const cardsList = document.getElementById("programs-list");
  const matrixSection = document.getElementById("matrix-section");
  const specsSection = document.getElementById("specs-section");

  if (!cardsList || !matrixSection || !specsSection) return;

  cardsList.style.display = currentView === "cards" ? "flex" : "none";
  matrixSection.style.display = currentView === "compare" ? "block" : "none";
  specsSection.style.display = currentView === "specs" ? "block" : "none";
}

function renderCards() {
  const container = document.getElementById("programs-list");
  if (!container) return;

  const filtered = getFilteredPrograms();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 48px 20px; color: var(--text-muted); width: 100%;">
        <p>No programs found matching the selected filters.</p>
        <button class="btn btn-subtle" style="margin-top:12px;" onclick="resetFilters()">Clear Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prog => createCardHtml(prog)).join("");

  // Sub-tabs interaction
  container.querySelectorAll(".program-card").forEach(card => {
    const navTabs = card.querySelectorAll(".nav-tab");
    const tabPanes = card.querySelectorAll(".tab-pane");

    navTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        navTabs.forEach(t => t.classList.remove("active"));
        tabPanes.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        const activePane = card.querySelector(`.pane-${target}`);
        if (activePane) activePane.classList.add("active");
      });
    });
  });
}

function resetFilters() {
  searchQuery = "";
  currentFilter = "all";
  universityFilter = "all";
  feeSort = "default";

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  const univSelect = document.getElementById("univ-filter");
  if (univSelect) univSelect.value = "all";

  const feeSortSelect = document.getElementById("fee-sort");
  if (feeSortSelect) feeSortSelect.value = "default";

  document.querySelectorAll(".filter-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === "all");
  });

  renderApp();
}

function createCardHtml(prog) {
  const isOnline = prog.mode.toLowerCase().includes("online");
  const tagClass = isOnline ? "tag-online" : "tag-campus";
  const specsCount = prog.specializations ? prog.specializations.length : 0;

  // Fee Table
  const feeTable = `
    <div class="table-wrapper">
      <table class="simple-table">
        <thead>
          <tr>
            ${prog.feeHeaders.map(h => `<th>${h}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${prog.feeRows.map(row => {
            const isTotal = row[0].toLowerCase().includes("total");
            return `
              <tr class="${isTotal ? 'row-total' : ''}">
                ${row.map(cell => `<td>${cell}</td>`).join("")}
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;

  // Specializations Table
  const specializationsTable = specsCount > 0 ? `
    <div class="table-wrapper">
      <table class="simple-table">
        <thead>
          <tr>
            <th>Specialization Track</th>
            <th>Semester Fee</th>
            <th>Total 2-Yr Fee</th>
            <th>Core Technology & Curriculum Focus</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          ${prog.specializations.map(spec => `
            <tr>
              <td>
                <div style="font-weight:600; color:var(--text-main);">
                  ${spec.name}
                  ${spec.badge ? `<span class="spec-badge">${spec.badge}</span>` : ''}
                </div>
              </td>
              <td><span style="font-weight:600;">${spec.feeSem}</span></td>
              <td><span style="color:var(--accent-amber); font-weight:600;">${spec.totalFee}</span></td>
              <td style="font-size:0.84rem; color:var(--text-secondary);">${spec.focus}</td>
              <td>
                <a href="${spec.url}" target="_blank" class="btn btn-subtle btn-sm" style="white-space:nowrap;">
                  Details &rarr;
                </a>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  ` : `<p style="padding:16px; color:var(--text-muted);">Standard curriculum without specialized branch options.</p>`;

  // Admin Fees Table
  const adminFeesTable = `
    <div class="table-wrapper">
      <table class="simple-table">
        <thead>
          <tr>
            <th>Fee Item</th>
            <th>Indian Students</th>
            <th>International</th>
          </tr>
        </thead>
        <tbody>
          ${prog.adminFees.map(f => `
            <tr>
              <td><strong>${f.name}</strong></td>
              <td>${f.indian}</td>
              <td>${f.intl || '-'}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  // Eligibility
  const eligibilityList = `
    <ul class="content-list">
      ${prog.eligibility.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;

  // Notes
  const notesList = `
    <ul class="content-list">
      ${prog.notes.map(note => `<li>${note}</li>`).join("")}
    </ul>
  `;

  return `
    <article class="program-card" id="card-${prog.id}">
      <div class="card-header">
        <div class="header-left">
          <h2>${prog.university}</h2>
          <div class="campus-meta">
            ${prog.campus} &bull; ${prog.program}
          </div>
        </div>

        <div class="pill-tags">
          <span class="tag ${tagClass}">${prog.mode}</span>
          ${specsCount > 0 ? `<span class="tag tag-campus" style="background:rgba(184,151,126,0.18); border-color:rgba(184,151,126,0.4); color:var(--accent-amber);">${specsCount} Specializations</span>` : ''}
          <span class="tag tag-open">${prog.statusBadge}</span>
        </div>
      </div>

      <div class="summary-ribbon">
        <div class="ribbon-item">
          <span class="ribbon-label">Base Tuition</span>
          <span class="ribbon-value highlight">${prog.totalFeeDisplay}</span>
        </div>
        <div class="ribbon-item">
          <span class="ribbon-label">Duration</span>
          <span class="ribbon-value">${prog.duration}</span>
        </div>
        <div class="ribbon-item">
          <span class="ribbon-label">Application Deadline</span>
          <span class="ribbon-value" style="color:var(--accent-amber);">${prog.openUntil}</span>
        </div>
      </div>

      <!-- Card Inner Tabs -->
      <nav class="card-nav">
        <button class="nav-tab active" data-tab="fees">Fees & Structure</button>
        <button class="nav-tab" data-tab="specs">Specializations (${specsCount})</button>
        <button class="nav-tab" data-tab="eligibility">Eligibility</button>
        <button class="nav-tab" data-tab="admin">Admin & Exam Fees</button>
        <button class="nav-tab" data-tab="notes">Notes & Policies</button>
      </nav>

      <div class="tab-pane pane-fees active">
        ${feeTable}
      </div>

      <div class="tab-pane pane-specs">
        ${specializationsTable}
      </div>

      <div class="tab-pane pane-eligibility">
        ${eligibilityList}
      </div>

      <div class="tab-pane pane-admin">
        ${adminFeesTable}
      </div>

      <div class="tab-pane pane-notes">
        ${notesList}
      </div>

      <div class="card-actions">
        <div class="action-dates">
          Applications: <strong>${prog.openFrom}</strong> &rarr; <strong>${prog.openUntil}</strong>
        </div>
        <div class="action-links">
          <a href="${prog.url}" target="_blank" class="btn btn-subtle btn-sm">
            Website &rarr;
          </a>
          ${prog.detailsUrl ? `
            <a href="${prog.detailsUrl}" target="_blank" class="btn btn-subtle btn-sm" title="Detailed Syllabus & Fee Microsite">
              Syllabus / Details &rarr;
            </a>
          ` : ''}
          ${prog.applyUrl ? `
            <a href="${prog.applyUrl}" target="_blank" class="btn btn-primary btn-sm">
              Apply Portal &rarr;
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderMatrix() {
  const container = document.getElementById("matrix-wrapper");
  if (!container) return;

  const filtered = getFilteredPrograms();
  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); padding:20px 0;">No programs to compare.</p>`;
    return;
  }

  container.innerHTML = `
    <table class="matrix-table">
      <thead>
        <tr>
          <th class="col-label">Parameter</th>
          ${filtered.map(p => `
            <th>
              <div style="font-weight:700;">${p.university}</div>
              <div style="font-size:0.82rem; color:var(--text-secondary); margin-top:2px;">${p.campus}</div>
              <div style="margin-top:6px; display:flex; gap:4px; flex-wrap:wrap;">
                <span class="tag ${p.mode.toLowerCase().includes('online') ? 'tag-online' : 'tag-campus'}">${p.mode}</span>
                ${p.specializations ? `<span class="tag" style="background:var(--bg-subtle); color:var(--text-muted); font-size:0.7rem;">${p.specializations.length} Tracks</span>` : ''}
              </div>
            </th>
          `).join("")}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-label">Total Tuition (Indian)</td>
          ${filtered.map(p => `<td><span class="matrix-price">${p.totalFeeDisplay}</span></td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">Total (International)</td>
          ${filtered.map(p => `<td>${p.intlTotalDisplay || 'N/A'}</td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">1st Year Tuition</td>
          ${filtered.map(p => `<td>${p.year1Fee}</td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">2nd Year Tuition</td>
          ${filtered.map(p => `<td>${p.year2Fee}</td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">Available Specializations</td>
          ${filtered.map(p => `
            <td>
              ${(p.specializations && p.specializations.length > 0) ? `
                <div style="display:flex; flex-direction:column; gap:5px; font-size:0.83rem;">
                  ${p.specializations.map(s => `
                    <div>
                      <a href="${s.url}" target="_blank" class="spec-link">&bull; ${s.name}</a>
                      <span style="color:var(--accent-amber); font-size:0.78rem;">(${s.totalFee})</span>
                    </div>
                  `).join("")}
                </div>
              ` : '<span style="color:var(--text-muted);">Standard MCA</span>'}
            </td>
          `).join("")}
        </tr>
        <tr>
          <td class="col-label">Registration / Security Fee</td>
          ${filtered.map(p => `<td>${p.regFee}</td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">Delivery Mode</td>
          ${filtered.map(p => `<td><strong>${p.mode}</strong></td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">Duration</td>
          ${filtered.map(p => `<td>${p.duration}</td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">Application Deadline</td>
          ${filtered.map(p => `<td><strong style="color:var(--accent-amber);">${p.openUntil}</strong></td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">Key Eligibility Criteria</td>
          ${filtered.map(p => `<td>
            <ul style="padding-left:14px; font-size:0.84rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:6px;">
              ${p.eligibility.slice(0, 2).map(e => `<li>${e}</li>`).join("")}
            </ul>
          </td>`).join("")}
        </tr>
        <tr>
          <td class="col-label">Direct Links</td>
          ${filtered.map(p => `<td>
            <div style="display:flex; gap:8px;">
              <a href="${p.url}" target="_blank" class="btn btn-subtle btn-sm">Website</a>
              ${p.applyUrl ? `<a href="${p.applyUrl}" target="_blank" class="btn btn-primary btn-sm">Apply</a>` : ''}
            </div>
          </td>`).join("")}
        </tr>
      </tbody>
    </table>
  `;
}

function renderSpecializationsDirectory() {
  const container = document.getElementById("specs-wrapper");
  const countBadge = document.getElementById("specs-count-badge");
  if (!container) return;

  const filteredPrograms = getFilteredPrograms();
  const allSpecs = [];

  filteredPrograms.forEach(prog => {
    if (prog.specializations && prog.specializations.length > 0) {
      prog.specializations.forEach(spec => {
        allSpecs.push({
          ...spec,
          university: prog.university,
          campus: prog.campus,
          mode: prog.mode
        });
      });
    }
  });

  if (countBadge) {
    countBadge.textContent = `${allSpecs.length} Specialization Tracks`;
  }

  if (allSpecs.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 48px 20px; color: var(--text-muted);">
        <p>No specializations match the current filter selection.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="table-wrapper">
      <table class="simple-table">
        <thead>
          <tr>
            <th>University & Campus</th>
            <th>Mode</th>
            <th>Specialization Track</th>
            <th>Per Semester</th>
            <th>Total 2-Yr Fee</th>
            <th>Core Domains & Technology</th>
            <th>Direct Link</th>
          </tr>
        </thead>
        <tbody>
          ${allSpecs.map(s => {
            const isOnline = s.mode.toLowerCase().includes("online");
            return `
              <tr>
                <td>
                  <div style="font-weight:700; color:var(--text-main);">${s.university}</div>
                  <div style="font-size:0.79rem; color:var(--text-muted);">${s.campus}</div>
                </td>
                <td>
                  <span class="tag ${isOnline ? 'tag-online' : 'tag-campus'}">${s.mode}</span>
                </td>
                <td>
                  <a href="${s.url}" target="_blank" class="spec-link" style="font-size:0.95rem;">
                    ${s.name}
                  </a>
                  ${s.badge ? `<span class="spec-badge">${s.badge}</span>` : ''}
                </td>
                <td><strong>${s.feeSem}</strong></td>
                <td><span style="color:var(--accent-amber); font-weight:700;">${s.totalFee}</span></td>
                <td style="font-size:0.83rem; color:var(--text-secondary); max-width:320px;">${s.focus}</td>
                <td>
                  <a href="${s.url}" target="_blank" class="btn btn-subtle btn-sm" style="white-space:nowrap;">
                    Open Portal &rarr;
                  </a>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function addNewProgram(form) {
  const univ = form.univ.value.trim();
  const campus = form.campus.value.trim();
  const programName = form.programName.value.trim();
  const mode = form.mode.value;
  const duration = form.duration.value.trim() || "2 Years";
  const totalFee = form.totalFee.value.trim();
  const year1 = form.year1.value.trim() || "-";
  const year2 = form.year2.value.trim() || "-";
  const deadline = form.deadline.value.trim();
  const openFrom = form.openFrom.value.trim() || "Open Now";
  const url = form.url.value.trim() || "#";
  const eligibilityRaw = form.eligibility.value.trim();

  const eligibility = eligibilityRaw
    ? eligibilityRaw.split("\n").map(s => s.trim()).filter(Boolean)
    : ["Undergraduate degree with 50%+ aggregate from recognized university."];

  const newProg = {
    id: "prog-" + Date.now(),
    university: univ,
    campus: campus,
    program: programName,
    mode: mode,
    duration: duration,
    url: url,
    openFrom: openFrom,
    openUntil: deadline,
    statusBadge: "Admissions Open",
    regFee: "Standard Registration",
    totalFeeDisplay: totalFee.startsWith("₹") ? totalFee : `₹${totalFee}`,
    intlTotalDisplay: "N/A",
    year1Fee: year1.startsWith("₹") ? year1 : `₹${year1}`,
    year2Fee: year2.startsWith("₹") ? year2 : `₹${year2}`,
    eligibility: eligibility,
    feeHeaders: ["Year", "Indian Students"],
    feeRows: [
      ["Year 1", year1],
      ["Year 2", year2],
      ["Total", totalFee]
    ],
    adminFees: [
      { name: "Registration Fee", indian: "Check official portal", intl: "-" }
    ],
    specializations: [],
    notes: [
      "Check university portal for detailed terms and condition updates."
    ]
  };

  programs.unshift(newProg);
  savePrograms();
  renderApp();
  form.reset();
  showToast(`Added ${univ}!`);
}

function importProgramFromJson(rawText) {
  try {
    let parsed = JSON.parse(rawText);
    let itemsToAdd = Array.isArray(parsed) ? parsed : [parsed];

    let count = 0;
    itemsToAdd.forEach(item => {
      if (!item.university || !item.program) {
        return;
      }

      const programObj = {
        id: item.id || "unidex-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
        university: item.university,
        campus: item.campus || "Main Campus",
        program: item.program,
        mode: item.mode || "On-Campus",
        duration: item.duration || "2 Years",
        url: item.url || "#",
        detailsUrl: item.detailsUrl || "",
        applyUrl: item.applyUrl || "",
        openFrom: item.openFrom || "Open Now",
        openUntil: item.openUntil || "Check Portal",
        statusBadge: item.statusBadge || "Admissions Open",
        regFee: item.regFee || "Standard Application Fee",
        totalFeeDisplay: item.totalFeeDisplay || (item.totalFee ? (item.totalFee.startsWith("₹") ? item.totalFee : `₹${item.totalFee}`) : "Check Portal"),
        intlTotalDisplay: item.intlTotalDisplay || "N/A",
        year1Fee: item.year1Fee || "-",
        year2Fee: item.year2Fee || "-",
        eligibility: Array.isArray(item.eligibility) ? item.eligibility : [item.eligibility || "Check university eligibility criteria."],
        feeHeaders: item.feeHeaders || ["Year / Semester", "Tuition Fee"],
        feeRows: item.feeRows || [["Total Fee", item.totalFeeDisplay || "-"]],
        adminFees: item.adminFees || [],
        specializations: Array.isArray(item.specializations) ? item.specializations : [],
        notes: Array.isArray(item.notes) ? item.notes : ["Imported into Unidex."]
      };

      // Add to programs list (avoid duplicate ID)
      programs = programs.filter(p => p.id !== programObj.id);
      programs.unshift(programObj);
      count++;
    });

    if (count > 0) {
      savePrograms();
      renderApp();
      showToast(`🎉 Imported ${count} program(s) into Unidex!`);
      const jsonTextarea = document.getElementById("import-json-input");
      if (jsonTextarea) jsonTextarea.value = "";
    } else {
      alert("Invalid format: The JSON must include at least 'university' and 'program' fields.");
    }
  } catch (err) {
    alert("Error parsing JSON: " + err.message);
  }
}

const UNIDEX_AI_SKILL_PROMPT = `You are a Higher Education Data Extraction Assistant for Unidex.
Your task is to research and extract complete, accurate program details for a university and return ONLY a valid JSON object matching the Unidex format below.

Target University / Course to research: [INSERT UNIVERSITY & COURSE NAME OR URL HERE]

Please extract:
1. University Name & Campus Location
2. Program Name, Duration, and Mode (On-Campus or Online)
3. Full Tuition Fee (Indian students & International students)
4. Year 1 and Year 2 Fee breakdown
5. Application / Registration / Security Deposit fees
6. Exact Eligibility Criteria (minimum marks, required degree/subjects)
7. Admission deadlines and batch start dates
8. All available Specializations / Branch Tracks with their specific fees and curriculum focus
9. Official Course URL and Application Portal URL

Return ONLY pure valid JSON in this exact structure:
{
  "id": "univ-course-id",
  "university": "University Name",
  "campus": "Campus Name / Location",
  "program": "Degree Program Name",
  "mode": "On-Campus",
  "duration": "2 Years (4 Semesters)",
  "url": "https://official-course-url.edu",
  "detailsUrl": "https://official-syllabus-page.edu",
  "applyUrl": "https://official-admission-portal.edu",
  "openFrom": "Admissions Open / Date",
  "openUntil": "Deadline / Rolling Intake",
  "statusBadge": "Admissions Open",
  "regFee": "Registration / Admin fee details",
  "totalFeeDisplay": "₹5,00,000",
  "intlTotalDisplay": "$10,000",
  "year1Fee": "₹2,50,000",
  "year2Fee": "₹2,50,000",
  "eligibility": [
    "Undergraduate degree with 50%+ aggregate from recognized university",
    "Mathematics / Computer Science studied at 10+2 or graduation level"
  ],
  "feeHeaders": ["Semester / Year", "Tuition Fee", "Payment Schedule"],
  "feeRows": [
    ["Semester 1", "₹1,25,000", "At admission"],
    ["Semester 2", "₹1,25,000", "Before Semester 2"]
  ],
  "adminFees": [
    { "name": "Application Fee", "indian": "INR 1,500", "intl": "$ 50" }
  ],
  "specializations": [
    {
      "name": "Specialization Track Name",
      "badge": "Hot Tech",
      "feeSem": "₹1,40,000 / sem",
      "totalFee": "₹5,60,000",
      "url": "https://specialization-url.edu",
      "focus": "Core subjects and technology domains covered"
    }
  ],
  "notes": [
    "Key policy or admission note 1",
    "Key transport, scholarship, or exam note 2"
  ]
}`;

function exportAsMarkdown() {
  let md = `# Unidex - University Programs & Specializations Dossier\n\n`;

  programs.forEach((p, idx) => {
    md += `## ${idx + 1}. ${p.university} (${p.campus})\n`;
    md += `- **Program**: ${p.program}\n`;
    md += `- **Mode**: ${p.mode}\n`;
    md += `- **Duration**: ${p.duration}\n`;
    md += `- **Base Tuition**: ${p.totalFeeDisplay}\n`;
    md += `- **Official URL**: [${p.url}](${p.url})\n`;
    md += `- **Applications**: ${p.openFrom} to ${p.openUntil}\n`;
    md += `- **Registration Fee**: ${p.regFee}\n\n`;

    md += `### Eligibility\n`;
    p.eligibility.forEach(e => {
      md += `* ${e}\n`;
    });
    md += `\n`;

    md += `### Fee Structure\n`;
    md += `| ${p.feeHeaders.join(" | ")} |\n`;
    md += `| ${p.feeHeaders.map(() => "---").join(" | ")} |\n`;
    p.feeRows.forEach(row => {
      md += `| ${row.join(" | ")} |\n`;
    });
    md += `\n`;

    if (p.specializations && p.specializations.length > 0) {
      md += `### Specializations & Tracks\n`;
      md += `| Specialization Track | Semester Fee | Total Fee | Technology Focus | URL |\n`;
      md += `| --- | --- | --- | --- | --- |\n`;
      p.specializations.forEach(s => {
        md += `| ${s.name} ${s.badge ? `(${s.badge})` : ''} | ${s.feeSem} | ${s.totalFee} | ${s.focus} | [Link](${s.url}) |\n`;
      });
      md += `\n`;
    }

    if (p.notes && p.notes.length) {
      md += `### Notes\n`;
      p.notes.forEach((n, i) => {
        md += `${i + 1}. ${n}\n`;
      });
      md += `\n`;
    }

    md += `---\n\n`;
  });

  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = "Unidex_University_Comparison.md";
  a.click();
  URL.revokeObjectURL(downloadUrl);
  showToast("Exported to Unidex_University_Comparison.md");
}

function showToast(message) {
  let toast = document.querySelector(".toast-msg");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.innerText = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}
