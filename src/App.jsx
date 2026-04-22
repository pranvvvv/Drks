import { useEffect, useMemo, useState } from "react";

const toAsset = (fileName) => `/assets/images/${encodeURIComponent(fileName)}`;

const logoImage = toAsset("WhatsApp Image 2026-04-20 at 5.34.13 PM.jpeg");

const galleryFiles = [
  "WhatsApp Image 2026-04-21 at 1.jpeg",
  "WhatsApp Image 2026-04-21 at 12.02.23 AM.jpeg",
  "WhatsApp Image 2026-04-21 at 12.05.01 AM.jpeg",
  "WhatsApp Image 2026-04-21 at 12.07.24 AM.jpeg",
  "dj.jpeg",
  "hhh.jpeg",
  "jdj.jpeg",
  "jjs.jpeg",
];

const tickerItems = [
  "MBBS Russia 2026 Admissions Open",
  "Indian Food and Hostel Assistance",
  "NEET Guidance and Profile Verification",
  "Detailed University Comparison Calls",
  "Transparent Fee and Visa Support",
  "Mobile-Friendly Counselling Journey",
];

const overviewStats = [
  ["6 Years", "Program Duration"],
  ["50% PCB", "Typical Eligibility"],
  ["Sep - Oct", "Main Intake"],
  ["1:1", "Parent Counselling"],
];

const whyRussia = [
  "Globally recognized medical universities with strong clinical base.",
  "Affordable tuition when compared with many private options.",
  "Structured international student support and campus housing.",
  "Practical pathway planning for FMGE/NExT-focused preparation.",
];

const benefits = [
  {
    title: "Fast Profile Fit",
    text: "We map marks, NEET status, and budget to shortlist realistic universities in one consultation.",
    icon: "i-profile",
  },
  {
    title: "Complete Documentation",
    text: "Application, invitation, apostille notes, visa file checks, and travel checklist are handled.",
    icon: "i-file",
  },
  {
    title: "Transparent Costs",
    text: "You get clear split-up of tuition, hostel, insurance, forex, and yearly expected spend.",
    icon: "i-calc",
  },
  {
    title: "Post-Arrival Support",
    text: "Airport transfer guidance, local onboarding, and first-semester follow-up for students and parents.",
    icon: "i-rocket",
  },
];

const eligibilityList = [
  "Minimum age 17 years during admission year",
  "10+2 with PCB background",
  "Minimum 50% in PCB (as per current norms)",
  "NEET qualification as per latest guideline",
];

const docsList = [
  "Passport and clear photographs",
  "10th and 12th marksheets + certificates",
  "NEET scorecard and ID proofs",
  "Medical fitness and supporting documents",
  "University invitation and visa file set",
];

const timeline = [
  ["Step 1", "Counselling and profile review"],
  ["Step 2", "University shortlist + fee planning"],
  ["Step 3", "Admission filing and invite letter"],
  ["Step 4", "Visa process and travel prep"],
  ["Step 5", "Arrival support and settlement"],
];

const feeRows = [
  ["RMU (Russia Medical University Track)", "INR 4.2L", "INR 21L - 26L"],
  ["Rostov State Medical", "INR 3.5L", "INR 16L - 20L"],
  ["Kazan Medical", "INR 4.1L", "INR 19L - 24L"],
  ["Bashkir State", "INR 4.3L", "INR 18L - 23L"],
  ["Pirogov", "INR 5.6L", "INR 26L - 30L"],
  ["Crimean Federal", "INR 3.75L", "INR 14.9L - 18.5L"],
];

const galleryLabels = [
  "RMU main block",
  "Academic block",
  "Campus entrance",
  "Student living zone",
  "Classroom environment",
  "Laboratory setup",
  "University infrastructure",
  "Hostel and support area",
];

const rmuFacts = [
  ["University Focus", "RMU counselling-first intake support"],
  ["Program Duration", "6 Years"],
  ["Teaching Pattern", "English / Bilingual mix by phase"],
  ["Intake Window", "September to October"],
  ["Admission Path", "Profile fit -> invite -> visa -> travel"],
  ["Student Support", "Hostel guidance + post-arrival follow-up"],
];

const rmuPoints = [
  "RMU shortlist is prepared only after budget and NEET profile confirmation.",
  "Every RMU estimate is shared in detailed split format for better clarity.",
  "Parent updates are shared across admission, visa and travel milestones.",
  "Academic and city fit are explained before final university confirmation.",
];

const costHeads = [
  ["Tuition", "Year-wise fee planning with receipt-level clarity."],
  ["Hostel", "Safe accommodation options near medical campus."],
  ["Insurance", "Mandatory and optional health protection details."],
  ["Visa + Travel", "End-to-end process checklists and timelines."],
];

const faqs = [
  {
    q: "Is MBBS in Russia good for Indian students?",
    a: "Yes, with proper university selection and planning. We help choose programs aligned to your academic and budget profile.",
  },
  {
    q: "Can parents track progress after admission?",
    a: "Yes. We provide follow-up updates during admission, visa, and post-arrival stages.",
  },
  {
    q: "Do you guide for documents and visa too?",
    a: "Yes. Full support from application documentation to visa readiness and travel planning.",
  },
  {
    q: "Is this website mobile focused?",
    a: "Yes. It is built for quick readability, tap-first actions, and smooth mobile navigation.",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const slides = useMemo(() => galleryFiles.map((fileName) => toAsset(fileName)), []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSubmitted(false), 1800);
  };

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <span>MBBS in Russia Admissions 2026 | Mobile Counselling Open</span>
          <a href="#enquire">Get Free Counselling Slot</a>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <nav className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" id="top">
            <img src={logoImage} alt="DrRks consultancy logo" />
            <span>
              DrRks Overseas
              <small>MBBS in Russia</small>
            </span>
          </a>
          <a className="btn btn-sm" href="#enquire">
            Apply Now
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <p className="eyebrow">Reference-Style Detail Page</p>
              <h1>
                MBBS in Russia
                <span>with Full Counselling, Action Flow and Detailings</span>
              </h1>
              <p>
                Explore eligibility, fee plans, process timeline, and university-focused
                support in one mobile-first page built for fast decision-making.
              </p>

              <div className="hero-actions">
                <a className="btn" href="tel:+916301547173">
                  Call Counsellor
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://wa.me/916301547173?text=Hi%20I%20need%20MBBS%20in%20Russia%20details"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Now
                </a>
              </div>

              <div className="stat-grid">
                {overviewStats.map(([value, label]) => (
                  <article key={label}>
                    <h3>{value}</h3>
                    <p>{label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal delay-1">
              <img src={slides[activeSlide]} alt="MBBS campus visual" />
              <div className="dots" role="tablist" aria-label="Slider indicators">
                {slides.slice(0, 5).map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    className={index === activeSlide % 5 ? "dot active" : "dot"}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Why MBBS in Russia</p>
              <h2>Key Reasons Students and Parents Consider This Route</h2>
            </div>
            <ul className="why-list reveal delay-1">
              {whyRussia.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Counselling Benefits</p>
              <h2>Structured Actions from Profile to Campus</h2>
            </div>

            <div className="benefit-grid">
              {benefits.map((item, index) => (
                <article
                  className={`benefit-card reveal ${index % 2 ? "delay-1" : ""}`}
                  key={item.title}
                >
                  <span className={`mini-icon ${item.icon}`} aria-hidden="true"></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <article className="panel reveal">
              <p className="eyebrow">Eligibility Criteria</p>
              <h2>Who Can Apply</h2>
              <ul className="list-clean">
                {eligibilityList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="panel reveal delay-1">
              <p className="eyebrow">Required Documents</p>
              <h2>Checklist Before Admission</h2>
              <ul className="list-clean">
                {docsList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Campus and Student Gallery</p>
              <h2>Upscaled Image Blocks for Better Visual Clarity</h2>
            </div>

            <div className="gallery-hero reveal delay-1">
              <img src={slides[(activeSlide + 2) % slides.length]} alt="Feature campus visual" />
            </div>

            <div className="gallery-grid">
              {slides.map((src, index) => (
                <figure
                  className={`gallery-card reveal ${index % 3 === 1 ? "delay-1" : ""} ${index % 3 === 2 ? "delay-2" : ""}`}
                  key={src}
                >
                  <img src={src} alt={`Campus snapshot ${index + 1}`} loading="lazy" />
                  <figcaption>{galleryLabels[index] || `Campus and student life visual ${index + 1}`}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section rmu-section">
          <div className="container rmu-layout">
            <article className="rmu-image-card reveal">
              <img src={slides[2]} alt="RMU university image" />
            </article>

            <article className="panel reveal delay-1">
              <p className="eyebrow">RMU University Details</p>
              <h2>RMU-Focused Clarity Block</h2>
              <p className="rmu-copy">
                This section is dedicated to RMU so students and parents can clearly
                understand admission direction, fee planning, timeline, and support level.
              </p>

              <div className="rmu-facts">
                {rmuFacts.map(([key, value]) => (
                  <div key={key}>
                    <span>{key}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>

              <ul className="list-clean rmu-list">
                {rmuPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="rmu-actions">
                <a className="btn btn-sm" href="tel:+916301547173">
                  Talk RMU Counsellor
                </a>
                <a
                  className="btn btn-sm btn-ghost"
                  href="https://wa.me/916301547173?text=Hi%20I%20need%20RMU%20MBBS%20details"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get RMU Brochure
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <article className="panel reveal">
              <p className="eyebrow">Admission Timeline</p>
              <h2>Step-by-Step Process</h2>
              <div className="timeline">
                {timeline.map(([step, text]) => (
                  <div className="timeline-item" key={step}>
                    <span>{step}</span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel reveal delay-1">
              <p className="eyebrow">Cost Heads</p>
              <h2>Detailed Budget Buckets</h2>
              <div className="cost-grid">
                {costHeads.map(([title, text]) => (
                  <div key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Fee Structure</p>
              <h2>Quick Compare Table for Mobile and Desktop</h2>
            </div>
            <div className="table-wrap reveal delay-1">
              <table>
                <thead>
                  <tr>
                    <th>University</th>
                    <th>1st Year</th>
                    <th>Total Estimate</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map(([name, firstYear, total]) => (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{firstYear}</td>
                      <td>{total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="enquire">
          <div className="container form-grid">
            <div className="reveal">
              <p className="eyebrow">Take Action</p>
              <h2>Get Personal Counselling With University Shortlist</h2>
              <p>
                Fill details to receive a call back with university match, budget split,
                eligibility status and next-step timeline.
              </p>

              <div className="quick-actions">
                <a href="tel:+916301547173">Direct Call</a>
                <a
                  href="https://wa.me/916301547173?text=Hi%20I%20want%20MBBS%20in%20Russia%20guidance"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Chat
                </a>
                <a href="mailto:drksstudymbbsabroad9@gmail.com">Email Enquiry</a>
              </div>
            </div>

            <form className="enquire-form reveal delay-1" onSubmit={submitForm}>
              <label>
                Student Name
                <input type="text" required placeholder="Enter full name" />
              </label>
              <label>
                Phone Number
                <input type="tel" required placeholder="Enter mobile number" />
              </label>
              <label>
                NEET Status
                <select required>
                  <option value="">Select</option>
                  <option>Qualified</option>
                  <option>Appearing</option>
                </select>
              </label>
              <label>
                Preferred Intake
                <select>
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </label>
              <button className="btn" type="submit">
                {submitted ? "Submitted" : "Get Free Call Back"}
              </button>
            </form>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">FAQs</p>
              <h2>Quick Answers for Students and Parents</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details
                  className={`faq-item reveal ${index === 1 ? "delay-1" : ""} ${index > 1 ? "delay-2" : ""}`}
                  key={item.q}
                >
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>DrRks Overseas Education | MBBS in Russia Student Guidance</p>
          <p>Phone: +91 63015 47173 | Email: drksstudymbbsabroad9@gmail.com</p>
        </div>
      </footer>

      <div className="mobile-action-bar" aria-label="Mobile sticky actions">
        <a href="tel:+916301547173">Call</a>
        <a
          href="https://wa.me/916301547173?text=Hi%20I%20need%20MBBS%20guidance"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a href="#enquire">Apply</a>
      </div>
    </>
  );
}

export default App;
