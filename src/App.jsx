import { useEffect, useState } from "react";

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      event.target.reset();
    }, 1800);
  };

  const russiaUniversities = [
    {
      name: "Novosibirsk",
      mappedTo: "Novosibirsk National Research State University",
      tuition: "6500",
      hostel: "500",
      yearly: "304100",
      total: "As per latest sheet",
    },
    {
      name: "Bashkir",
      mappedTo: "Bashkir State Medical University",
      tuition: "360000",
      hostel: "40000",
      yearly: "745600",
      total: "2685600",
    },
    {
      name: "Tyumen",
      mappedTo: "Not available in uploaded sheet",
      tuition: "TBD",
      hostel: "TBD",
      yearly: "TBD",
      total: "TBD",
    },
    {
      name: "Ingush",
      mappedTo: "Ingush State University",
      tuition: "198000",
      hostel: "28000",
      yearly: "604800",
      total: "1734800",
    },
    {
      name: "Crimea",
      mappedTo: "Crimea Federal University",
      tuition: "330000",
      hostel: "38000",
      yearly: "709000",
      total: "2529600",
    },
    {
      name: "Savostopol",
      mappedTo: "Not available in uploaded sheet",
      tuition: "TBD",
      hostel: "TBD",
      yearly: "TBD",
      total: "TBD",
    },
    {
      name: "Northwestern",
      mappedTo: "North-Western State Medical University",
      tuition: "490000",
      hostel: "36000",
      yearly: "871600",
      total: "3501600",
    },
    {
      name: "Ashtrakan",
      mappedTo: "Astrakhan State Medical University",
      tuition: "300000",
      hostel: "70000",
      yearly: "723900",
      total: "2573900",
    },
    {
      name: "Saratov",
      mappedTo: "Saratov State Medical University",
      tuition: "540000",
      hostel: "15000",
      yearly: "917200",
      total: "3692200",
    },
    {
      name: "Kursk",
      mappedTo: "Kursk State Medical University",
      tuition: "5580",
      hostel: "700",
      yearly: "310380",
      total: "As per latest sheet",
    },
    {
      name: "Orel",
      mappedTo: "Orel State Medical University",
      tuition: "315850",
      hostel: "60000",
      yearly: "721450",
      total: "2375700",
    },
    {
      name: "Kuban",
      mappedTo: "Kuban State Medical University",
      tuition: "275000",
      hostel: "10000",
      yearly: "622300",
      total: "2047300",
    },
    {
      name: "Kabardino",
      mappedTo: "Kabardino-Balkarian State University",
      tuition: "324000",
      hostel: "18000",
      yearly: "687600",
      total: "2382600",
    },
    {
      name: "North Caucasian",
      mappedTo: "North Caucasian State Medical Academy",
      tuition: "300000",
      hostel: "20000",
      yearly: "657300",
      total: "2207300",
    },
    {
      name: "Voronezh",
      mappedTo: "Voronezh State Medical University",
      tuition: "427100",
      hostel: "65000",
      yearly: "829400",
      total: "3284900",
    },
    {
      name: "Lobachevasky",
      mappedTo: "Privolzhsky Research Medical University",
      tuition: "460000",
      hostel: "80000",
      yearly: "877300",
      total: "3527300",
    },
    {
      name: "Tambov",
      mappedTo: "Tambov State University",
      tuition: "385000",
      hostel: "As per sheet",
      yearly: "730600",
      total: "2655600",
    },
    {
      name: "Nosma",
      mappedTo: "North Ossetian State Medical Academy",
      tuition: "310000",
      hostel: "40000",
      yearly: "695600",
      total: "2445600",
    },
    {
      name: "Yaroslav wise",
      mappedTo: "Yaroslav-the-Wise Novgorod State University",
      tuition: "375000",
      hostel: "As per sheet",
      yearly: "720600",
      total: "2595600",
    },
    {
      name: "Ural state",
      mappedTo: "Ural State Medical University",
      tuition: "300000",
      hostel: "12000",
      yearly: "649300",
      total: "2209300",
    },
    {
      name: "Volgograd",
      mappedTo: "Volgograd State Mediacal University",
      tuition: "465000",
      hostel: "40000",
      yearly: "894200",
      total: "As per latest sheet",
    },
    {
      name: "Siberian",
      mappedTo: "Siberian State Medical University",
      tuition: "385600",
      hostel: "70000",
      yearly: "817800",
      total: "3095800",
    },
  ];

  const galleryImages = [
    "/assets/images/IMG_8910.jpg",
    "/assets/images/IMG_8919.jpg",
    "/assets/images/IMG_8946.jpg",
    "/assets/images/IMG_8950.jpg",
    "/assets/images/IMG_9042.jpg",
  ];

  return (
    <>
      <div className="bg-orb bg-orb-a" aria-hidden="true"></div>
      <div className="bg-orb bg-orb-b" aria-hidden="true"></div>

      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="DRKS Home">
            <span className="brand-badge">DR</span>
            <span className="brand-text">DRKS</span>
          </a>
          <nav className="nav-links" aria-label="Primary Navigation">
            <a href="#why-drks">Why DRKS</a>
            <a href="#process">Process</a>
            <a href="#russia-fees">Russia Fees</a>
            <a href="#destinations">Destinations</a>
            <a href="#faq">FAQs</a>
          </nav>
          <a className="btn btn-sm" href="#enquire">
            Book Counselling
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">MBBS Abroad Guidance for Indian Students</p>
              <h1>
                Build Your Medical Career Globally with
                <span> DRKS</span>
              </h1>
              <p className="hero-subtext">
                From country selection to campus arrival, DRKS delivers transparent,
                data-backed counselling so you choose the right MBBS pathway with
                confidence.
              </p>
              <div className="hero-cta">
                <a className="btn" href="#enquire">
                  Get Free Profile Review
                </a>
                <a className="btn btn-ghost" href="#process">
                  Explore Process
                </a>
              </div>
              <div className="hero-points">
                <span>NMC-aligned guidance</span>
                <span>No donation pathways</span>
                <span>End-to-end support</span>
              </div>
            </div>

            <div className="hero-card reveal delay-1">
              <h2>Quick Facts for 2026 Intake</h2>
              <ul>
                <li>
                  <strong>Typical Program Duration:</strong> 6 years (5+1 internship
                  model)
                </li>
                <li>
                  <strong>Core Eligibility:</strong> 10+2 with PCB and valid NEET
                  score
                </li>
                <li>
                  <strong>Most Popular Intakes:</strong> September to October
                </li>
                <li>
                  <strong>Preferred Medium:</strong> English-taught programs
                </li>
              </ul>
              <p className="small-note">
                Details can vary by country and university. DRKS helps verify
                current rules before you apply.
              </p>
            </div>
          </div>
        </section>

        <section className="section soft-bg" id="gallery">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Campus Glimpses</p>
              <h2>Student Lifestyle and University Environments</h2>
            </div>
            <div className="image-grid reveal">
              {galleryImages.map((src, idx) => (
                <figure className="image-card" key={src}>
                  <img src={src} alt={`DRKS Russia MBBS campus visual ${idx + 1}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why-drks">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Why Students Choose Us</p>
              <h2>Designed to Stand Out, Built on Real Support</h2>
            </div>
            <div className="feature-grid">
              <article className="feature-card reveal delay-1">
                <h3>Transparent University Matching</h3>
                <p>
                  We shortlist universities based on budget, recognition, campus
                  ecosystem, and student-fit, not just marketing brochures.
                </p>
              </article>
              <article className="feature-card reveal delay-2">
                <h3>Compliance-First Approach</h3>
                <p>
                  Every recommendation is cross-checked with current eligibility and
                  licensing pathways relevant for Indian students.
                </p>
              </article>
              <article className="feature-card reveal delay-3">
                <h3>Application to Arrival</h3>
                <p>
                  DRKS supports SOP guidance, document checks, offer handling, visa
                  preparation, and practical pre-departure readiness.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section soft-bg" id="process">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Admission Journey</p>
              <h2>Your DRKS Roadmap to MBBS Abroad</h2>
            </div>
            <div className="timeline">
              <article className="timeline-item reveal">
                <span>01</span>
                <div>
                  <h3>Profile Evaluation</h3>
                  <p>
                    Academic profile review, budget planning, and destination
                    preference mapping.
                  </p>
                </div>
              </article>
              <article className="timeline-item reveal delay-1">
                <span>02</span>
                <div>
                  <h3>Country and University Shortlisting</h3>
                  <p>
                    Recognition checks, curriculum comparison, fee estimates, and
                    risk-aware selection.
                  </p>
                </div>
              </article>
              <article className="timeline-item reveal delay-2">
                <span>03</span>
                <div>
                  <h3>Application and Offer Support</h3>
                  <p>
                    Form filing, document verification, and admission communication
                    tracking.
                  </p>
                </div>
              </article>
              <article className="timeline-item reveal delay-3">
                <span>04</span>
                <div>
                  <h3>Visa and Pre-Departure Preparation</h3>
                  <p>
                    Visa checklist support, travel briefing, accommodation planning,
                    and onboarding guidance.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="russia-fees">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">MBBS in Russia 2026</p>
              <h2>Detailed Guidance, University Coverage, and Fee Structure</h2>
              <p className="hero-subtext">
                This page is built as an original DRKS reference covering eligibility,
                admissions, documentation, country planning, and a university-wise
                structure for your Russia counseling cycle.
              </p>
            </div>

            <div className="russia-info-grid">
              <article className="feature-card reveal">
                <h3>Eligibility Snapshot</h3>
                <ul className="content-list">
                  <li>Minimum age 17 years by 31 December of admission year.</li>
                  <li>10+2 with Physics, Chemistry, Biology from recognized board.</li>
                  <li>NEET qualification required for India licensing pathway.</li>
                  <li>Medium options vary by university: English, bilingual, or Russian.</li>
                </ul>
              </article>
              <article className="feature-card reveal delay-1">
                <h3>Admission Workflow</h3>
                <ul className="content-list">
                  <li>Profile evaluation and university matching.</li>
                  <li>Application filing with scanned academic documents.</li>
                  <li>Offer or invitation letter issuance.</li>
                  <li>Fee transfer, visa, travel, and hostel onboarding.</li>
                </ul>
              </article>
              <article className="feature-card reveal delay-2">
                <h3>Documents Required</h3>
                <ul className="content-list">
                  <li>Passport, 10th and 12th marksheets, NEET scorecard.</li>
                  <li>Passport-size photos, birth certificate, medical fitness records.</li>
                  <li>Invitation documents and visa processing paperwork.</li>
                  <li>Additional embassy or university-specific compliance files.</li>
                </ul>
              </article>
            </div>

            <div className="section-head reveal">
              <p className="eyebrow">University-Wise Fee Matrix</p>
              <h2>22 Universities with Fixed OTC</h2>
              <p className="small-note">
                OTC is fixed at <strong>$500</strong> for all 22 universities listed below.
                Tuition and hostel values are finalized during counseling based on the
                latest intake circular and university invoice cycle.
              </p>
            </div>

            <div className="table-wrap reveal">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>University</th>
                    <th>Sheet Match</th>
                    <th>OTC (USD)</th>
                    <th>Tuition</th>
                    <th>Hostel</th>
                    <th>1st Year Package</th>
                    <th>Total Package</th>
                  </tr>
                </thead>
                <tbody>
                  {russiaUniversities.map((item, index) => (
                    <tr key={item.name}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.mappedTo}</td>
                      <td>$500 (Fixed)</td>
                      <td>{item.tuition}</td>
                      <td>{item.hostel}</td>
                      <td>{item.yearly}</td>
                      <td>{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="russia-long-content reveal">
              <h3>Why Students Prefer Russia for MBBS</h3>
              <p>
                Many families choose Russia for practical medical training, relatively
                accessible fee pathways, and globally recognized university options.
                The decision should always be based on recognition status, language
                comfort, city living costs, and long-term licensing plans.
              </p>
              <h3>Important Planning Notes</h3>
              <ul className="content-list">
                <li>Course duration is generally 6 years for many English-track programs.</li>
                <li>Some universities may include bilingual segments and local language modules.</li>
                <li>Climate adaptation, food planning, and hostel quality must be evaluated early.</li>
                <li>Students targeting India practice should align preparation with current exam rules.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="destinations">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Popular Destinations</p>
              <h2>Country Options We Frequently Advise On</h2>
            </div>
            <div className="country-grid">
              <article className="country-card reveal">
                <h3>Russia</h3>
                <p>
                  Affordable pathways, long-standing Indian student ecosystem, and
                  strong medical infrastructure.
                </p>
              </article>
              <article className="country-card reveal delay-1">
                <h3>Georgia</h3>
                <p>
                  English-taught programs with student-friendly environment and
                  growing global visibility.
                </p>
              </article>
              <article className="country-card reveal delay-2">
                <h3>Kazakhstan</h3>
                <p>
                  Value-driven tuition range with practical medical training exposure
                  in selected universities.
                </p>
              </article>
              <article className="country-card reveal delay-3">
                <h3>Uzbekistan and Kyrgyzstan</h3>
                <p>
                  Budget-conscious options with increasing preference among
                  first-generation medical aspirants.
                </p>
              </article>
              <article className="country-card reveal">
                <h3>Romania and Bulgaria</h3>
                <p>
                  European academic environment with institution-specific fee and
                  clinical structure differences.
                </p>
              </article>
              <article className="country-card reveal delay-1">
                <h3>Bangladesh and Others</h3>
                <p>
                  Specific curriculum compatibility and admission policies depending
                  on current intake cycles.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section comparison">
          <div className="container reveal">
            <div className="section-head">
              <p className="eyebrow">Clarity for Families</p>
              <h2>MBBS Abroad vs MBBS in India: Practical Lens</h2>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>MBBS Abroad</th>
                    <th>MBBS in India</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Seat Availability</td>
                    <td>Wider options across countries</td>
                    <td>Highly competitive seat pool</td>
                  </tr>
                  <tr>
                    <td>Fee Range</td>
                    <td>Can be cost-effective in many countries</td>
                    <td>Govt lower, private often very high</td>
                  </tr>
                  <tr>
                    <td>Exposure</td>
                    <td>Multicultural and international environment</td>
                    <td>Primarily domestic ecosystem</td>
                  </tr>
                  <tr>
                    <td>Licensing Route</td>
                    <td>Requires exam pathway for India practice</td>
                    <td>Directly aligned with Indian system</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">FAQs</p>
              <h2>Questions We Hear Most</h2>
            </div>
            <div className="faq-grid">
              <details className="faq-item reveal">
                <summary>Is NEET required for MBBS abroad?</summary>
                <p>
                  For Indian students planning future licensing in India, a valid
                  NEET qualification is generally required. Always confirm with the
                  latest official guidelines.
                </p>
              </details>
              <details className="faq-item reveal delay-1">
                <summary>Do I need IELTS or TOEFL?</summary>
                <p>
                  Many universities do not ask for it, while some may. DRKS verifies
                  this university by university.
                </p>
              </details>
              <details className="faq-item reveal delay-2">
                <summary>What documents are typically needed?</summary>
                <p>
                  Usually 10th and 12th marksheets, passport, NEET scorecard,
                  medical fitness records, photographs, and country-specific
                  paperwork.
                </p>
              </details>
              <details className="faq-item reveal delay-3">
                <summary>Can I practice in India after MBBS abroad?</summary>
                <p>
                  Yes, through the applicable licensing route and regulations in
                  force at the time of graduation. We guide students on pathway
                  planning from day one.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section cta-band" id="enquire">
          <div className="container cta-grid">
            <div className="cta-copy reveal">
              <p className="eyebrow">Start with Confidence</p>
              <h2>Book a One-to-One Strategy Call with DRKS</h2>
              <p>
                Receive a personalized shortlist, realistic fee estimate, and
                timeline roadmap for your MBBS abroad journey.
              </p>
            </div>
            <form className="lead-form reveal delay-1" onSubmit={handleSubmit}>
              <label>
                Student Name
                <input type="text" name="name" placeholder="Enter full name" required />
              </label>
              <label>
                Mobile Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  required
                />
              </label>
              <label>
                Target Intake
                <select name="intake" required>
                  <option value="">Select intake</option>
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </label>
              <label>
                Preferred Destination
                <input
                  type="text"
                  name="country"
                  placeholder="Russia / Georgia / etc."
                />
              </label>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? "Request Sent" : "Request Free Counselling"}
              </button>
              <p className="small-note">
                By submitting, you agree to be contacted by DRKS counsellors.
              </p>
            </form>
          </div>
        </section>
      </main>

      <div className="floating-actions" aria-label="Quick contact actions">
        <a
          className="fab fab-whatsapp"
          href="https://wa.me/916301547173?text=Hello%20DRKS"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp with DRKS"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M19.1 4.9A9.9 9.9 0 0 0 12 2a10 10 0 0 0-8.7 15l-1.1 4 4.1-1.1A10 10 0 1 0 19.1 4.9zm-7.1 15.3a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.4.6.6-2.3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.2c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.9-.1.1-.3.1-.5 0a6.5 6.5 0 0 1-1.9-1.2 7.1 7.1 0 0 1-1.3-1.7c-.1-.2 0-.3.1-.4l.4-.5.2-.4v-.4c-.1-.1-.5-1.2-.7-1.7-.2-.4-.3-.4-.5-.4h-.4c-.1 0-.4.1-.6.3a2.5 2.5 0 0 0-.8 1.8c0 1 .8 2 1 2.2.1.2 1.8 2.9 4.5 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
          </svg>
        </a>

        <a
          className="fab fab-call"
          href="tel:+916301547173"
          aria-label="Direct call to DRKS at +91 6301547173"
          title="Call +91 6301547173"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2 1.2.5 2.5.8 3.8.8.5 0 .9.4.9.9V20c0 .5-.4.9-.9.9C11.9 20.9 3 12 3 1.9c0-.5.4-.9.9-.9h3.2c.5 0 .9.4.9.9 0 1.3.3 2.6.8 3.8.1.4.1.8-.2 1.1l-2 2z" />
          </svg>
        </a>
      </div>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>
            <strong>DRKS</strong> | MBBS Abroad Consultancy
          </p>
          <p className="small-note">
            Original advisory content prepared for student guidance. Verify final
            rules from official authorities.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;