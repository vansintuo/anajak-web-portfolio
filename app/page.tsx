"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  ["01", "Home", "#home"],
  ["02", "Products", "#products"],
  ["03", "Solutions", "#solutions"],
  ["04", "Contact Us", "#contact"],
];

const products = [
  {
    number: "01",
    name: "Asphalt Paver",
    desc: "Precision paving for consistent, high-performance rubber road surfaces.",
    image: "/asphalt-paver.png",
  },
  {
    number: "02",
    name: "Road Roller",
    desc: "Heavy-duty compaction for resilient, long-lasting infrastructure.",
    image: "/road-roller.png",
  },
  {
    number: "03",
    name: "Rubber Recycling Machine",
    desc: "Process end-of-life tires into valuable road construction material.",
    image: "/rubber-recycling-machine.png",
  },
  {
    number: "04",
    name: "Asphalt Mixing Plant",
    desc: "Controlled production of modified asphalt mixtures for every project.",
    image: "/asphalt-mixing-plant.png",
  },
];

const solutions = [
  {
    number: "01",
    title: "Road Solutions",
    text: "Complete road systems built from recovered rubber, engineered for safer journeys and longer service life.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-0ilYGAMDAhjOMdaEEtfUMn7zqPQiTj.jpeg",
    details: [
      "Road planning and site preparation",
      "Rubber-modified asphalt layers",
      "Paving, compaction and quality control",
    ],
  },
  {
    number: "02",
    title: "Asphalt Paving",
    text: "Precision paving creates smooth, durable surfaces that perform through heavy traffic and changing weather.",
    image: "/asphalt-paver.png",
    details: [
      "Prepare and grade the road base",
      "Lay rubber-modified asphalt evenly",
      "Finish with accurate surface levels",
    ],
  },
  {
    number: "03",
    title: "Road Compaction",
    text: "Controlled compaction locks every layer together to create a stable foundation for the finished road.",
    image: "/road-roller.png",
    details: [
      "Compact the aggregate foundation",
      "Seal each asphalt course",
      "Test density before opening traffic",
    ],
  },
  {
    number: "04",
    title: "Rubber Recycling",
    text: "End-of-life tires become high-value construction material instead of waste sent to landfill.",
    image: "/rubber-recycling-machine.png",
    details: [
      "Collect and sort used tires",
      "Shred and process rubber granules",
      "Blend material into road surfaces",
    ],
  },
  {
    number: "05",
    title: "Asphalt Production",
    text: "Consistent mixing plants produce the right rubber-modified asphalt recipe for every project.",
    image: "/asphalt-mixing-plant.png",
    details: [
      "Select the project mix design",
      "Heat and blend recycled rubber",
      "Deliver material at the correct temperature",
    ],
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(([, , href]) => document.querySelector(href))
      .filter(Boolean) as HTMLElement[];

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sections[0]?.id ?? "home";

      for (const section of sections) {
        if (section.offsetTop <= marker) currentSection = section.id;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="site-shell">
      <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="sidebar-top">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">
              <i />
              <i />
              <i />
            </span>
            <span>
              RUBBER
              <br />
              <b>ROAD</b>
            </span>
          </a>
          <button
            className="mobile-close"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <X />
          </button>
        </div>
        <div className="nav-label">Navigation</div>
        <nav aria-label="Main navigation">
          {navItems.map(([num, label, href]) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? "active" : ""}
              aria-current={
                activeSection === href.slice(1) ? "page" : undefined
              }
              onClick={() => {
                setActiveSection(href.slice(1));
                setMenuOpen(false);
              }}
            >
              <span>{num}</span>
              {label}
              <ArrowUpRight />
            </a>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="side-line" />
          <p>
            BUILDING
            <br />
            BETTER ROADS
          </p>
          <span>
            Engineering sustainable infrastructure through advanced rubber road
            technology.
          </span>
          <div className="side-coords">11°33&apos; N &nbsp; 104°55&apos; E</div>
        </div>
      </aside>

      <button
        className="mobile-menu"
        aria-label="Open navigation"
        onClick={() => setMenuOpen(true)}
      >
        <Menu />
      </button>
      <main className="content">
        <section id="home" className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <p className="eyebrow light">
              RUBBER ROAD TECHNOLOGY <span>— 01 / 04</span>
            </p>
            <h1>
              Engineering
              <br />
              the <em>roads</em>
              <br />
              of tomorrow.
            </h1>
            <p className="hero-lede">
              Advanced rubber road technology and infrastructure solutions
              designed for stronger, more durable and sustainable roads.
            </p>
            <div className="hero-actions">
              <a href="#solutions" className="button button-light">
                Explore solutions <ArrowDownRight />
              </a>
              <a href="#products" className="text-link light">
                Our products <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="hero-meta">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>EST. 2014</span>
          </div>
        </section>

        <section className="intro section-pad">
          <div className="section-kicker">
            <span>02</span>
            <span>Our approach</span>
          </div>
          <div className="intro-grid">
            <div>
              <h2>
                From rubber
                <br />
                to <em>road</em>
                <br />
                infrastructure.
              </h2>
            </div>
            <div className="intro-text">
              <p className="large-copy">
                We combine rubber technology, engineering expertise and modern
                construction equipment to create infrastructure that is made to
                last.
              </p>
              <p>
                Every road is a system. From the material beneath the surface to
                the machine that lays it down, we design and deliver the details
                that make performance possible.
              </p>
              <a href="#solutions" className="text-link">
                How we work <ArrowUpRight />
              </a>
            </div>
            <div className="material-image">
              <span>01 / MATERIAL STUDY</span>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stats-inner">
            {[
              ["10+", "Years experience"],
              ["50+", "Road projects"],
              ["100K+", "Materials processed"],
              ["20+", "Construction machines"],
            ].map(([n, l]) => (
              <div className="stat" key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="technology section-pad">
          <div className="section-kicker">
            <span>03</span>
            <span>The process</span>
          </div>
          <div className="tech-heading">
            <h2>
              How we build
              <br />
              <em>better roads.</em>
            </h2>
            <p>
              A considered process, from the first recovered tire to the final
              quality check.
            </p>
          </div>
          <div className="process">
            {[
              "Rubber collection",
              "Material processing",
              "Rubber modification",
              "Road construction",
              "Quality testing",
              "Completed infrastructure",
            ].map((item, i) => (
              <div className="process-step" key={item}>
                <span>0{i + 1}</span>
                <div className="process-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="products section-pad">
          <div className="section-kicker">
            <span>04</span>
            <span>Equipment division</span>
          </div>
          <div className="products-head">
            <h2>
              Machinery for
              <br />
              <em>modern</em> road construction.
            </h2>
            <a href="#contact" className="text-link">
              View catalogue <ArrowUpRight />
            </a>
          </div>
          <div className="product-grid">
            {products.map((product, i) => (
              <article
                className={`product-card product-${i + 1}`}
                key={product.name}
              >
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="product-info">
                  <span>{product.number}</span>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.desc}</p>
                    <a href="#contact">
                      View details <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="solutions" className="solutions">
          <div className="section-pad">
            <div className="section-kicker light">
              <span>05</span>
              <span>Capabilities</span>
            </div>
            <h2>
              Complete road infrastructure
              <br />
              <em>from material to finished road.</em>
            </h2>
          </div>
          <div className="solution-list">
            {solutions.map((solution, i) => (
              <article
                className={`solution-card solution-card-${i + 1}`}
                key={solution.number}
              >
                <div className="solution-card-top">
                  <span className="solution-num">{solution.number}</span>
                  <span className="solution-label">ROAD SYSTEM / 0{i + 1}</span>
                </div>
                <div
                  className="solution-road-visual"
                  style={{ backgroundImage: `url(${solution.image})` }}
                  aria-label={`${solution.title} road infrastructure`}
                  role="img"
                />
                <div className="solution-card-body">
                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.text}</p>
                    <ul>
                      {solution.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    aria-label={`Learn more about ${solution.title}`}
                  >
                    <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="road-strip">
            <span>PLANNING</span>
            <i />
            <span>MATERIAL</span>
            <i />
            <span>PAVING</span>
            <i />
            <span>COMPACTION</span>
            <i />
            <span>QUALITY CONTROL</span>
            <i />
            <span>COMPLETED ROAD</span>
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="section-kicker">
            <span>06</span>
            <span>Start a conversation</span>
          </div>
          <div className="contact-grid">
            <div>
              <h2>
                Let&apos;s build
                <br />
                <em>better roads.</em>
              </h2>
              <p className="large-copy">
                Talk with our engineering team about your next infrastructure
                project.
              </p>
              <div className="contact-details">
                <p>
                  <span>HEAD OFFICE</span>Phnom Penh, Cambodia
                </p>
                <p>
                  <span>EMAIL</span>info@rubberroad.com
                </p>
                <p>
                  <span>PHONE</span>+855 23 555 014
                </p>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label>
                Full name
                <input required placeholder="Your name" />
              </label>
              <label>
                Company
                <input placeholder="Company name" />
              </label>
              <label>
                Email
                <input required type="email" placeholder="you@company.com" />
              </label>
              <label>
                Project type
                <select defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Rubber road technology</option>
                  <option>Road construction</option>
                  <option>Machinery</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="message-field">
                Message
                <textarea
                  required
                  placeholder="Tell us about your project"
                  rows={3}
                />
              </label>
              <button className="button button-dark" type="submit">
                {sent ? "Inquiry sent" : "Send inquiry"} <ArrowUpRight />
              </button>
            </form>
          </div>
        </section>
        <footer>
          <div className="footer-top">
            <a href="#home" className="footer-brand">
              <span className="brand-mark">
                <i />
                <i />
                <i />
              </span>
              <span>
                RUBBER
                <br />
                <b>ROAD</b>
              </span>
            </a>
            <p>
              Engineering the future of road infrastructure through advanced
              rubber technology.
            </p>
            <a href="#home" className="footer-back">
              Back to top <ArrowUpRight />
            </a>
          </div>
          <div className="footer-bottom">
            <span>RUBBER ROAD / ENGINEERING THE FUTURE</span>
            <span>© 2024 Rubber Road Technology</span>
            <span>Phnom Penh, Cambodia</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
