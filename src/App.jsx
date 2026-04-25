import { useEffect, useMemo, useState } from "react";

const toAsset = (fileName) => `/assets/images/${encodeURIComponent(fileName)}`;

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_k7cag6v";
const EMAILJS_TEMPLATE_ID = "__ejs-test-mail-service__";
const EMAILJS_PUBLIC_KEY = "o_KO4-CTdKSrSA-nx";

const logoImage = toAsset("WhatsApp Image 2026-04-20 at 5.34.13 PM.jpeg");
const usaImage = toAsset("image18.jpg");

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

const consultancyImpact = [
  ["5+ Years", "Experience in MBBS Abroad Counselling"],
  ["200+ Students", "From Telangana and Andhra Pradesh"],
];

const consultancyHighlights = [
  "Personal profile evaluation with country-wise university matching.",
  "Transparent fee planning and complete admission-document support.",
  "Visa guidance, pre-departure support, and post-arrival student coordination.",
  "Regular parent updates across admission, visa, and travel milestones.",
];

const consultancyMotive =
  "Our motive is simple: guide every student with honesty, clarity, and commitment so they can build a strong medical career abroad with confidence.";

const whyRussia = [
  "Globally recognized medical universities with strong clinical base.",
  "Affordable tuition when compared with many private options.",
  "Structured international student support and campus housing.",
  "Practical pathway planning for FMGE/NEXT-focused preparation.",
];

const nmcRules = [
  "Eligibility: Candidate must be 17+ years by 31st December of the admission year and must qualify NEET-UG.",
  "Course Structure: Minimum 54 months (4.5 years) academic study plus 12-month supervised internship in the same country and institution.",
  "Medium: Entire MBBS course must be in English.",
  "Licensing: Student should be registered with the relevant regulatory body abroad and be eligible to practice there.",
  "Clinical Training: Offline clinical training is mandatory; online-only training is not accepted.",
  "Curriculum: Should include Medicine, Surgery, Pediatrics, Gynecology, Psychiatry, Orthopedics and Anesthesia aligned to Indian standards.",
  "Internship: Mandatory 12-month internship must be completed in the same foreign university or hospital.",
  "Post-Completion: Graduate must clear FMGE or NExT to practice in India.",
];

const nmcChecklist = [
  "Confirm the university is recognized by that country's regulatory authority.",
  "Ensure complete training is equivalent to Indian Medical Graduate standards.",
  "Obtain valid medical licensing eligibility in the foreign country.",
  "Avoid universities offering split training across multiple countries.",
  "Follow FMGL Regulations 2021 requirements throughout admission and training.",
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

const russiaUniversitySlides = [
  {
    name: "Bashkir State Medical University",
    city: "Ufa, Russia",
    image: toAsset("img1.jpeg"),
    details:
      "Government medical university known for strong clinical training and a long history of international student admissions.",
    intake: "September",
    duration: "6 Years (including internship)",
  },
  {
    name: "Orenburg State Medical University",
    city: "Orenburg, Russia",
    image: toAsset("img2.jpeg"),
    details:
      "Popular among Indian MBBS aspirants for structured academics, practical training exposure, and student support ecosystem.",
    intake: "September",
    duration: "6 Years (including internship)",
  },
  {
    name: "Kazan State Medical University",
    city: "Kazan, Russia",
    image: toAsset("img3.jpeg"),
    details:
      "Recognized medical university with modern infrastructure and broad clinical exposure across partnered teaching hospitals.",
    intake: "September",
    duration: "6 Years (including internship)",
  },
  {
    name: "Crimea Federal University",
    city: "Simferopol, Russia",
    image: toAsset("img4.jpeg"),
    details:
      "Well-known choice for MBBS abroad with established international student intake and practical-oriented medical education.",
    intake: "September",
    duration: "6 Years (including internship)",
  },
];

const kyrgyzstanUniversities = [
  {
    name: "Kyrgyz State Medical Academy",
    city: "Bishkek, Kyrgyzstan",
    image: toAsset("img5.jpg"),
    details:
      "Premier state medical institution established in 1939. Offers NMC-recognized English-medium MBBS programs with modern medical infrastructure.",
    intake: "September",
    duration: "5 Years + 1 Year Internship",
    fees: "$3,500–$5,500/year",
  },
  {
    name: "International Higher School of Medicine",
    city: "Bishkek/Issykul, Kyrgyzstan",
    image: toAsset("img6.jpg"),
    details:
      "Known for high-quality, globally-focused curriculum with strong emphasis on practical training and international standards.",
    intake: "September",
    duration: "5 Years + 1 Year Internship",
    fees: "$4,000–$5,000/year",
  },
  {
    name: "Osh State University (Medical Faculty)",
    city: "Osh, Kyrgyzstan",
    image: toAsset("img7.jpg"),
    details:
      "Established in 1951, top public university offering NMC-recognized MBBS with comprehensive clinical training programs.",
    intake: "September",
    duration: "5 Years + 1 Year Internship",
    fees: "$3,200–$4,500/year",
  },
  {
    name: "Asian Medical Institute",
    city: "Kant, Kyrgyzstan",
    image: toAsset("img8.jpg"),
    details:
      "Established in 2004, focused on international students with English-medium programs and modern medical facilities.",
    intake: "September",
    duration: "5 Years + 1 Year Internship",
    fees: "$3,500–$4,800/year",
  },
];

const georgiaUniversities = [
  {
    name: "Tbilisi State Medical University",
    city: "Tbilisi, Georgia",
    image: toAsset("img9.jpg"),
    details:
      "Largest and oldest medical university in Georgia. Offers comprehensive English-medium MBBS with strong clinical exposure and international recognition.",
    intake: "September",
    duration: "6 Years (including internship)",
    fees: "$4,000–$7,000/year",
  },
  {
    name: "Batumi Shota Rustaveli State University",
    city: "Batumi, Georgia",
    image: toAsset("img10.jpg"),
    details:
      "Known for affordable fees in Georgia's coastal city. Offers quality MBBS education with strong practical training and supportive environment.",
    intake: "September",
    duration: "6 Years (including internship)",
    fees: "$3,500–$5,500/year",
  },
  {
    name: "David Tvildiani Medical University",
    city: "Tbilisi, Georgia",
    image: toAsset("img11.jpg"),
    details:
      "Specialized medical institution with strong emphasis on clinical training. Modern infrastructure and high standards of medical education.",
    intake: "September",
    duration: "6 Years (including internship)",
    fees: "$5,000–$8,000/year",
  },
  {
    name: "New Vision University",
    city: "Tbilisi, Georgia",
    image: toAsset("img12.jpg"),
    details:
      "Known for modern infrastructure and student-centric approach. Offers comprehensive MBBS with contemporary medical education methods.",
    intake: "September",
    duration: "6 Years (including internship)",
    fees: "$4,500–$7,500/year",
  },
];

const uzbekistanUniversities = [
  {
    name: "Tashkent State Medical University",
    city: "Tashkent, Uzbekistan",
    image: toAsset("img13.jpg"),
    details:
      "Capital-based government university with strong reputation and high international standards. NMC-recognized degree with WHO certification.",
    intake: "September",
    duration: "6 Years (English Medium)",
    fees: "$3,500–$4,500/year",
  },
  {
    name: "Samarkand State Medical University",
    city: "Samarkand, Uzbekistan",
    image: toAsset("img14.jpg"),
    details:
      "Popular choice with high number of international students. Known for excellent faculty, comprehensive curriculum, and clinical training.",
    intake: "September",
    duration: "6 Years (English Medium)",
    fees: "$3,000–$4,000/year",
  },
  {
    name: "Bukhara State Medical Institute",
    city: "Bukhara, Uzbekistan",
    image: toAsset("img15.jpg"),
    details:
      "Frequently ranked top by Ministry of Health. Offers quality medical education with strong research focus and modern infrastructure.",
    intake: "September",
    duration: "6 Years (English Medium)",
    fees: "$3,200–$4,200/year",
  },
  {
    name: "Andijan State Medical Institute",
    city: "Andijan, Uzbekistan",
    image: toAsset("img16.jpg"),
    details:
      "Established government institute recognized by NMC and WHO. Offers practical-focused MBBS with strong student support system.",
    intake: "September",
    duration: "6 Years (English Medium)",
    fees: "$3,000–$3,800/year",
  },
];

const countriesData = [
  {
    id: "russia",
    name: "Russia",
    universities: russiaUniversitySlides,
    courseInfo: "6 Years (including internship)",
    feesInfo: "INR 16L–30L total",
  },
  {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    universities: kyrgyzstanUniversities,
    courseInfo: "5 Years + 1 Year Internship",
    feesInfo: "$3,500–$5,500/year",
  },
  {
    id: "georgia",
    name: "Georgia",
    universities: georgiaUniversities,
    courseInfo: "6 Years (including internship)",
    feesInfo: "$3,500–$8,000/year",
  },
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    universities: uzbekistanUniversities,
    courseInfo: "6 Years (English Medium)",
    feesInfo: "$3,000–$4,500/year",
  },
];

const timeline = [
  ["Step 1", "Counselling and profile review"],
  ["Step 2", "University shortlist + fee planning"],
  ["Step 3", "Admission filing and invite letter"],
  ["Step 4", "Visa process and travel prep"],
  ["Step 5", "Arrival support and settlement"],
];

const rmuFacts = [
  ["Location", "Bishkek, Kyrgyzstan"],
  ["Established", "Around 2019-2022"],
  ["Medium", "English"],
  ["Programs", "MBBS/MD and BDS"],
  ["Recognition", "WHO, WFME, and FAIMER listed"],
  ["Fees", "Often under INR 3,500 $ per year"],
];

const rmuPoints = [
  "Royal Metropolitan University is a fast-growing option for international medical students in Bishkek.",
  "It offers English-medium medical education with MBBS, MD (General Medicine), and BDS pathways.",
  "The university emphasizes hands-on clinical training, internship exposure, and international student support.",
  "Admissions for Indian students usually focus on NEET qualification and strong PCB academic performance.",
  "Royal Metropolitan University serves students from India and other South Asian countries with modern campus and hostel support.",
];

const usaFacts = [
  ["Location", "Tokmok, Kyrgyzstan (near Bishkek)"],
  ["Programs", "MBBS/MD, Dentistry, and Pediatrics"],
  ["Program Duration", "MBBS/MD: 5 to 5.5 years"],
  ["Medium", "English"],
  ["Fees", "Approx. $1,600 per semester"],
  ["Recognition", "WHO and WFME (internationally recognized)"],
  ["Eligibility", "10+2 PCB with NEET qualification for Indian students"],
  ["Hostel", "On-campus secure and affordable accommodation"],
  ["Intakes", "Fall (Sep start) and Spring (Feb start)"],
];

const usaPoints = [
  "University of South Asia is a popular budget-friendly option for international students, especially from India.",
  "The university focuses on practical clinical exposure through affiliated hospital training.",
  "Graduates can pursue screening and licensing pathways such as FMGE (India), USMLE (USA), and PLAB (UK).",
  "Campus life and student support are structured to provide a safe, study-focused environment.",
  "Admission generally requires academic records, a valid passport, and eligibility under current guidelines.",
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
  
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeUniversity, setActiveUniversity] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [activeCountry, setActiveCountry] = useState("russia");

  // Initialize EmailJS on component mount
  useEffect(() => {
    try {
      window.emailjs?.init(EMAILJS_PUBLIC_KEY);
    } catch (error) {
      console.warn("EmailJS initialization: Ensure you've set up credentials from emailjs.com");
    }
  }, []);

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveUniversity((prev) => (prev + 1) % (currentCountryUniversities.length || 1));
    }, 4200);

    return () => window.clearInterval(timer);
  }, [activeCountry]);

  const currentCountryData = countriesData.find((c) => c.id === activeCountry);
  const currentCountryUniversities = currentCountryData?.universities || [];
  const currentActiveUniv = activeUniversity % (currentCountryUniversities.length || 1);

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!window.emailjs) {
      setSubmitError("Email service is not loaded yet. Please refresh the page and try again.");
      window.setTimeout(() => setSubmitError(""), 4000);
      return;
    }
    
    // Extract form data
    const formData = new FormData(event.currentTarget);
    const studentName = formData.get("studentName") || "";
    const phoneNumber = formData.get("phoneNumber") || "";
    const neetStatus = formData.get("neetStatus") || "Not specified";
    const preferredIntake = formData.get("preferredIntake") || "2026";
    
    // Prepare email template variables
    const emailParams = {
      to_email: "drksstudymbbsabroad9@gmail.com",
      student_name: studentName,
      phone_number: phoneNumber,
      neet_status: neetStatus,
      preferred_intake: preferredIntake,
      from_name: "MBBS Enquiry Form",
      reply_to: phoneNumber
    };
    
    try {
      // Send via EmailJS
      const response = await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams);
      
      if (response.status === 200) {
        // Success - show confirmation
        setSubmitted(true);
        event.currentTarget.reset();
        
        // Auto-hide success message after 3 seconds
        window.setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Email submission failed:", error);
      setSubmitError(
        "Could not submit form. Please ensure EmailJS is properly configured. Call us directly at +91 63015 47173."
      );
      
      // Clear error after 4 seconds
      window.setTimeout(() => setSubmitError(""), 4000);
    }
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
              DrRks Educational Consultancy
              <small>MBBS in Abroad</small>
            </span>
          </a>
          <div className="nav-actions">
            <a
              className="nav-instagram"
              href="https://instagram.com/mbbs_abroad_drrks"
              target="_blank"
              rel="noreferrer"
            >
              @mbbs_abroad_drrks
            </a>
            <a className="btn btn-sm" href="#enquire">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <p className="eyebrow">STUDY MBBS ABROAD</p>
              <h1>
                MBBS in Abroad
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
            <article className="impact-holder reveal">
              <p className="eyebrow">Why Families Trust Us</p>
              <h2>Student Success Backed by Experience</h2>

              <div className="impact-metrics">
                {consultancyImpact.map(([value, label]) => (
                  <div key={label} className="impact-metric-card">
                    <h3>{value}</h3>
                    <p>{label}</p>
                  </div>
                ))}
              </div>

              <ul className="impact-list">
                {consultancyHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <blockquote className="impact-quote">"{consultancyMotive}"</blockquote>
            </article>
          </div>
        </section>

        <section className="section nmc-section">
          <div className="container">
            <article className="nmc-card reveal">
              <p className="eyebrow">NMC Compliance Update (2025-2026)</p>
              <h2>Mandatory NMC Rules for Indian Students Pursuing MBBS Abroad</h2>
              <p className="nmc-intro">
                The National Medical Commission (NMC) requires Indian students to complete
                a minimum 54-month MBBS course in English at a single institution, followed
                by a 12-month internship in the same country, with NEET qualification and
                FMGL Regulations 2021 compliance.
              </p>

              <div className="nmc-grid">
                <div>
                  <h3>Key NMC Rules</h3>
                  <ul className="nmc-list">
                    {nmcRules.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Compliance Checklist</h3>
                  <ul className="nmc-list nmc-list-compact">
                    {nmcChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
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
              <p className="eyebrow">NMC-Recognized Medical Universities</p>
              <h2>Explore Universities Across Multiple Countries</h2>
            </div>

            <div className="country-selector reveal delay-1">
              {countriesData.map((country) => (
                <button
                  key={country.id}
                  className={`country-tab ${activeCountry === country.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveCountry(country.id);
                    setActiveUniversity(0);
                  }}
                >
                  {country.name}
                </button>
              ))}
            </div>

            {currentCountryData && currentCountryUniversities.length > 0 && (
              <>
                <div className="college-showcase reveal delay-1">
                  <div className="college-main-card">
                    <img
                      src={currentCountryUniversities[currentActiveUniv]?.image}
                      alt={currentCountryUniversities[currentActiveUniv]?.name}
                    />
                    <div className="college-main-overlay">
                      <h3>{currentCountryUniversities[currentActiveUniv]?.name}</h3>
                      <p>{currentCountryUniversities[currentActiveUniv]?.city}</p>
                    </div>
                  </div>

                  <div className="college-detail-card">
                    <h3>{currentCountryUniversities[currentActiveUniv]?.name}</h3>
                    <p>{currentCountryUniversities[currentActiveUniv]?.details}</p>
                    <div className="college-meta">
                      <span>
                        <strong>City:</strong> {currentCountryUniversities[currentActiveUniv]?.city}
                      </span>
                      <span>
                        <strong>Intake:</strong> {currentCountryUniversities[currentActiveUniv]?.intake}
                      </span>
                      <span>
                        <strong>Duration:</strong> {currentCountryUniversities[currentActiveUniv]?.duration}
                      </span>
                      {currentCountryUniversities[currentActiveUniv]?.fees && (
                        <span>
                          <strong>Fees:</strong> {currentCountryUniversities[currentActiveUniv]?.fees}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="college-thumb-grid reveal delay-2" role="tablist" aria-label={`${currentCountryData.name} university slides`}>
                  {currentCountryUniversities.map((college, index) => (
                    <button
                      key={college.name}
                      className={`college-thumb ${index === currentActiveUniv ? "active" : ""}`}
                      onClick={() => setActiveUniversity(index)}
                      aria-label={`Show details for ${college.name}`}
                    >
                      <img src={college.image} alt={college.name} loading="lazy" />
                      <span>{college.name}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <section className="section rmu-section">
          <div className="container rmu-layout">
            <article className="rmu-image-card reveal">
              <img src={slides[2]} alt="RMU university image" />
            </article>

            <article className="panel reveal delay-1">
              <p className="eyebrow">Royal Metropolitan University (RMU)</p>
              <h2>Royal Metropolitan University Profile</h2>
              <p className="rmu-copy">
                Royal Metropolitan University in Bishkek, Kyrgyzstan is a fast-growing
                English-medium medical institution offering MBBS, MD, and BDS pathways
                with modern campus facilities, hostel support, and hands-on clinical training.
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

        <section className="section rmu-section">
          <div className="container rmu-layout">
            <article className="rmu-image-card reveal">
              <img src={usaImage} alt="University of South Asia campus" />
            </article>

            <article className="panel reveal delay-1">
              <p className="eyebrow">University of South Asia (Kyrgyzstan)</p>
              <h2>University of South Asia Detailed Profile</h2>
              <p className="rmu-copy">
                The University of South Asia in Tokmok (near Bishkek), Kyrgyzstan, is
                a strong option for international students seeking an English-medium,
                practical, and affordable MBBS/MD pathway.
              </p>

              <div className="rmu-facts">
                {usaFacts.map(([key, value]) => (
                  <div key={key}>
                    <span>{key}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>

              <ul className="list-clean rmu-list">
                {usaPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="rmu-actions">
                <a className="btn btn-sm" href="tel:+916301547173">
                  Talk USA Counsellor
                </a>
                <a
                  className="btn btn-sm btn-ghost"
                  href="https://wa.me/916301547173?text=Hi%20I%20need%20University%20of%20South%20Asia%20MBBS%20details"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get USA Brochure
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
              {submitError && (
                <div className="form-error">
                  <p>{submitError}</p>
                </div>
              )}
              <label>
                Student Name
                <input type="text" name="studentName" required placeholder="Enter full name" />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phoneNumber" required placeholder="Enter mobile number" />
              </label>
              <label>
                NEET Status
                <select name="neetStatus" required>
                  <option value="">Select</option>
                  <option>Qualified</option>
                  <option>Appearing</option>
                </select>
              </label>
              <label>
                Preferred Intake
                <select name="preferredIntake">
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </label>
              <button className="btn" type="submit" disabled={submitted}>
                {submitted ? "Submitted ✓" : "Get Free Call Back"}
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
          <div className="footer-brand">
            <p className="footer-title">DrRks Educational Consultancy</p>
            <p className="footer-copy">
              Trusted MBBS abroad guidance with university support, admission assistance,
              visa help, and student counselling for Indian families.
            </p>
          </div>

          <div className="footer-links">
            <a className="footer-link" href="tel:+916301547173">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C11.3 21 3 12.7 3 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
                </svg>
              </span>
              <span>+91 63015 47173</span>
            </a>
            <a className="footer-link" href="mailto:drksstudymbbsabroad9@gmail.com">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm0 3.2V17h16V8.2l-8 5-8-5z" />
                </svg>
              </span>
              <span>drksstudymbbsabroad9@gmail.com</span>
            </a>
            <a className="footer-link" href="https://instagram.com/mbbs_abroad_drrks" target="_blank" rel="noreferrer">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.3a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                </svg>
              </span>
              <span>@mbbs_abroad_drrks</span>
            </a>
            <div className="footer-link footer-link-static">
              <span className="footer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7zm0 9.5A2.5 2.5 0 1 0 9.5 9 2.5 2.5 0 0 0 12 11.5z" />
                </svg>
              </span>
              <span>Office: 204, Koushik Sai Rama Residency, SR Nagar, Hyderabad - 500038</span>
            </div>
          </div>

          <div className="footer-divider" aria-hidden="true" />

          <div className="footer-bottom">
            <p>© 2026 DrRks Educational Consultancy. All rights reserved.</p>
          </div>
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
