import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone, Play, Sparkles } from "lucide-react";
import "./styles.css";

const services = [
  {
    number: "01",
    title: "Influencer Marketing",
    text: "Connect your brand with relevant creators and build campaigns designed for local reach and attention."
  },
  {
    number: "02",
    title: "Social Media Management",
    text: "Strategy, content planning and day-to-day page management that keeps your brand active and consistent."
  },
  {
    number: "03",
    title: "Reels Production",
    text: "Short-form videos, promotional reels and behind-the-scenes content built for today's social platforms."
  },
  {
    number: "04",
    title: "Offline Marketing",
    text: "Campaign support that connects digital content with real-world events, launches and local activations."
  }
];

const work = [
  { tag: "REELS", title: "Brand stories that stop the scroll", className: "work-one" },
  { tag: "CAMPAIGNS", title: "Creator-led local campaigns", className: "work-two" },
  { tag: "PRODUCTION", title: "Content made for the moment", className: "work-three" }
];

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Social School home">
          <span className="brand-mark">S</span>
          <span>social<span>school</span></span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's Talk <ArrowUpRight size={16}/></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15}/> ROURKELA • ODISHA</div>
            <h1>Make your brand <em>impossible</em> to ignore.</h1>
            <p>
              Influencer marketing, social media management and reels production
              for brands that want to be seen, remembered and talked about.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#contact">Start a campaign <ArrowUpRight size={18}/></a>
              <a className="secondary" href="#work"><Play size={16} fill="currentColor"/> See our work</a>
            </div>
            <div className="proof">
              <strong>100+</strong>
              <span>happy clients</span>
              <i></i>
              <strong>RKL</strong>
              <span>local-first marketing</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="orb orb-a"></div>
            <div className="orb orb-b"></div>
            <div className="phone">
              <div className="phone-top"><span></span><span></span></div>
              <div className="reel-card">
                <div className="fake-video">
                  <span className="play-circle"><Play size={18} fill="currentColor"/></span>
                  <span className="video-label">REELS<br/><b>THAT MOVE</b></span>
                </div>
                <div className="reel-meta">
                  <b>@social_school.in</b>
                  <span>Influencer • Content • Growth</span>
                </div>
              </div>
            </div>
            <div className="float-card card-top">TRENDING<br/><b>NOW ↗</b></div>
            <div className="float-card card-bottom">LOCAL<br/><b>REACH</b></div>
          </div>
        </section>

        <section className="ticker">
          <span>INFLUENCER MARKETING</span><b>✦</b>
          <span>REELS PRODUCTION</span><b>✦</b>
          <span>SOCIAL MEDIA</span><b>✦</b>
          <span>Rourkela, Odisha</span>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2>Attention is the <span>new currency.</span></h2>
            </div>
            <p>We turn local businesses into brands people discover, follow and remember.</p>
          </div>
          <div className="services">
            {services.map((item) => (
              <article className="service" key={item.number}>
                <span className="service-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowUpRight className="service-arrow" size={22}/>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-head">
            <div>
              <div className="eyebrow">SELECTED WORK</div>
              <h2>Content people <span>actually watch.</span></h2>
            </div>
            <a className="text-link" href="https://www.instagram.com/social_school.in/" target="_blank" rel="noreferrer">
              Open Instagram <ArrowUpRight size={17}/>
            </a>
          </div>
          <div className="work-grid">
            {work.map((item, index) => (
              <article className={`work-card ${item.className}`} key={item.title}>
                <div className="work-overlay">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <span className="work-play"><Play size={15} fill="currentColor"/></span>
                </div>
              </article>
            ))}
          </div>
          <p className="work-note">Replace these visual placeholders with approved campaign/reel stills from the agency's Instagram before launch.</p>
        </section>

        <section className="about" id="about">
          <div className="about-big">LOCAL<br/><span>BRANDS.</span></div>
          <div className="about-copy">
            <div className="eyebrow">WHY SOCIAL SCHOOL</div>
            <h2>Built for the <span>local scene.</span></h2>
            <p>
              From creator collaborations to promotional reels and social page management,
              Social School helps Rourkela businesses show up with content that feels native
              to the audience.
            </p>
            <div className="mini-stats">
              <div><b>100+</b><span>Happy clients*</span></div>
              <div><b>01</b><span>Local-first approach</span></div>
              <div><b>∞</b><span>Ideas for your brand</span></div>
            </div>
            <small>*Client count shown as stated on Social School's Instagram profile; confirm before publishing.</small>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="cta-glow"></div>
          <div className="eyebrow">HAVE A CAMPAIGN IN MIND?</div>
          <h2>Let's make something<br/><em>worth sharing.</em></h2>
          <p>Tell us what you're launching, promoting or building.</p>
          <a className="primary light" href="mailto:hello@social-school.in">Start the conversation <ArrowUpRight size={18}/></a>
          <div className="contact-row">
            <span><MapPin size={16}/> Rourkela, Odisha</span>
            <a href="https://www.instagram.com/social_school.in/" target="_blank" rel="noreferrer"><Instagram size={16}/> @social_school.in</a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">S</span><span>social<span>school</span></span></a>
        <span>© {new Date().getFullYear()} Social School. Concept website.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
