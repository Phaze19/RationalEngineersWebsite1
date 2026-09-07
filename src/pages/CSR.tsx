import Navigation from "@/components/Navigation";
import PageTopSpacer from "@/components/PageTopSpacer";
import AboutSubNav from "@/components/AboutSubNav";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Building2, Sprout, Users, Eye } from "lucide-react";
import { assetUrl } from "@/lib/assetUrl";

import nursingAsset from "@/assets/csr/nursing-college.jpg.asset.json";
import schoolProposedAsset from "@/assets/csr/school-proposed.jpg.asset.json";
import schoolConstructionAsset from "@/assets/csr/school-construction.jpg.asset.json";
import schoolAerialAsset from "@/assets/csr/school-aerial.jpg.asset.json";
import mahavirAsset from "@/assets/csr/mahavir-hospital.jpg.asset.json";
import cancerAsset from "@/assets/csr/cancer-hospital.jpg.asset.json";
import villageSchoolAsset from "@/assets/csr/village-school.jpg.asset.json";
import secondInningsAsset from "@/assets/csr/second-innings.jpg.asset.json";
import goshalaAsset from "@/assets/csr/goshala.jpg.asset.json";
import ruralFarmingAsset from "@/assets/csr/rural-farming.jpg.asset.json";
import sarathiAsset from "@/assets/csr/sarathi-braille.jpg.asset.json";

type Initiative = {
  icon: typeof GraduationCap;
  tag: string;
  status: "OPERATIONAL" | "UNDER CONSTRUCTION" | "ONGOING";
  title: string;
  location?: string;
  desc: string;
  points: string[];
  stats?: { value: string; label: string }[];
  images: { src: string; alt: string; caption?: string }[];
};

const initiatives: Initiative[] = [
  {
    icon: GraduationCap,
    tag: "EDUCATION",
    status: "OPERATIONAL",
    title: "Vimladevi Khyalilalji Vagrecha College of Nursing Education",
    location: "Thane, Maharashtra",
    desc:
      "Promoting quality nursing education and healthcare training — with B.Sc Nursing, GNM and ANM programmes that prepare professionals for the healthcare sector.",
    points: [
      "Programmes offered: B.Sc Nursing, GNM, ANM",
      "Empowering women in nursing",
      "Accessible and inclusive education for all",
      "Training the standards of next-generation healthcare",
    ],
    stats: [
      { value: "2,450+", label: "Students enrolled to date" },
      { value: "600+", label: "Students currently enrolled" },
    ],
    images: [
      {
        src: assetUrl(nursingAsset),
        alt: "Vimladevi Khyalilalji Vagrecha College of Nursing Education, Thane",
        caption: "College campus, Thane",
      },
    ],
  },
  {
    icon: Building2,
    tag: "EDUCATION",
    status: "UNDER CONSTRUCTION",
    title: "Lt. Smt. Vimladevi & Lt. Shri. Khyalilalji Vagrecha School",
    location: "Hamrapur, Wada",
    desc:
      "Honouring a legacy, building a future. A new school campus designed to nurture young minds and holistic growth in line with modern educational needs.",
    points: [
      "Purpose-built campus for rural Wada region",
      "Designed for holistic learning and activity-based education",
      "Construction currently in progress on site",
    ],
    images: [
      { src: assetUrl(schoolProposedAsset), alt: "Proposed school building elevation", caption: "Proposed school — front elevation" },
      { src: assetUrl(schoolConstructionAsset), alt: "School construction site at Hamrapur, Wada", caption: "Current status — site under construction" },
      { src: assetUrl(schoolAerialAsset), alt: "Aerial view of the proposed school structure", caption: "Proposed structure — aerial view" },
    ],
  },
  {
    icon: HeartPulse,
    tag: "HEALTHCARE",
    status: "OPERATIONAL",
    title: "Shree Mahavir Jain Hospital",
    location: "Thane, Maharashtra",
    desc:
      "A joint initiative under Shri Mahavir Jain Trust focused on delivering affordable and accessible healthcare, managed by a dedicated board of trustees.",
    points: [
      "100-bed multi-specialty hospital, operational since 2020",
      "Advanced diagnostic and cardiac care facilities",
      "Affordable cardiac surgeries and kidney transplant programme",
      "Thousands of surgeries conducted free of cost",
    ],
    stats: [
      { value: "2,000+", label: "Free dialysis sessions every month" },
      { value: "100", label: "Beds, multi-specialty care" },
    ],
    images: [
      { src: assetUrl(mahavirAsset), alt: "Shree Mahavir Jain Hospital building, Thane", caption: "Shree Mahavir Jain Hospital, Thane" },
    ],
  },
  {
    icon: HeartPulse,
    tag: "HEALTHCARE",
    status: "UNDER CONSTRUCTION",
    title: "600-Bed Cancer Hospital",
    location: "Thane, Maharashtra",
    desc:
      "Building better healthcare for a better tomorrow — developed in collaboration with Tata Memorial Cancer Hospital, Thane Municipal Corporation and the Government of Maharashtra.",
    points: [
      "1 million sq. ft. facility, 600-bed capacity",
      "10% of construction completed",
      "Phase 1 operational target: next 18 months",
      "Increased access to advanced cancer treatment, reduced financial burden on patients",
    ],
    stats: [
      { value: "600", label: "Bed capacity planned" },
      { value: "1 Mn", label: "Sq. ft. facility" },
    ],
    images: [
      { src: assetUrl(cancerAsset), alt: "Architectural rendering of the proposed Cancer Hospital, Thane", caption: "Proposed structure — architect's rendering" },
    ],
  },
  {
    icon: Users,
    tag: "COMMUNITY",
    status: "OPERATIONAL",
    title: "Village School Upgradation",
    location: "Hamrapur, Palghar",
    desc:
      "Upgrading educational infrastructure for local communities surrounding our manufacturing operations, creating a better learning environment.",
    points: [
      "New 1,000 sq. ft. school building",
      "Improved learning environment and facilities",
    ],
    stats: [
      { value: "300+", label: "Students supported" },
      { value: "1,000", label: "Sq. ft. school building" },
    ],
    images: [
      { src: assetUrl(villageSchoolAsset), alt: "Students entering the upgraded village school building", caption: "Z. P. Primary School, Hamrapur" },
    ],
  },
  {
    icon: HeartPulse,
    tag: "ELDERLY CARE",
    status: "OPERATIONAL",
    title: "Second Innings Home",
    location: "Khardi, Maharashtra",
    desc:
      "Creating a safe and dignified living environment for senior citizens, with a focus on dignity, companionship and well-being.",
    points: [
      "Free accommodation and care",
      "Improved quality of life for elderly citizens",
      "Long-term community care infrastructure",
    ],
    stats: [{ value: "100", label: "Residents capacity" }],
    images: [
      { src: assetUrl(secondInningsAsset), alt: "Second Innings Home for senior citizens at Khardi", caption: "Second Innings Home, Khardi" },
    ],
  },
  {
    icon: Sprout,
    tag: "SUSTAINABILITY & RURAL LIVELIHOOD",
    status: "ONGOING",
    title: "Pashupati Goshala",
    desc:
      "Empowering rural communities by promoting agriculture, animal care and natural living — maintaining and caring for approximately 60 cows while promoting sustainable practices.",
    points: [
      "Preservation of traditional knowledge",
      "Promotion of natural farming practices",
      "Community participation and rural wellness",
    ],
    stats: [{ value: "~60", label: "Cows under care" }],
    images: [
      { src: assetUrl(goshalaAsset), alt: "Pashupati Goshala cow shelter", caption: "Pashupati Goshala" },
      { src: assetUrl(ruralFarmingAsset), alt: "Natural farming and organic input preparation with local farmers", caption: "Natural farming & rural livelihood" },
    ],
  },
  {
    icon: Eye,
    tag: "INCLUSION",
    status: "ONGOING",
    title: "SARATHI — Proud Supporter",
    desc:
      "An initiative by Rotary Club of Thane Lake City supporting education, dignity and independence for visually impaired children and students. From darkness to dignity, from limitation to limitless possibilities.",
    points: [
      "Support for education of visually impaired students",
      "Building independence and dignity",
      "Because every individual deserves the opportunity to dream without limits",
    ],
    images: [
      { src: assetUrl(sarathiAsset), alt: "Visually impaired child reading braille", caption: "Supporting visually impaired students" },
    ],
  },
];

const recognitions = [
  {
    title: "Rotary Club of Thane Lake City",
    desc: "In recognition of contributions to The Rotary Foundation for CSR India.",
  },
  {
    title: "Government of Maharashtra",
    desc: "Appreciation for contributions to Public Health and Community Service.",
  },
  {
    title: "Rotary International",
    desc: "Excellence in Service to Humanity, for humanitarian service through Rotary (2024–2025).",
  },
];

const covidRelief = [
  "Support for 1,100+ bed COVID healthcare infrastructure",
  "Vaccination drives for 550+ Sadhus and Sadhvis",
  "Distribution of 100,000 food packets",
  "Distribution of 3,300 grocery kits",
];

const statusStyles: Record<Initiative["status"], string> = {
  OPERATIONAL: "border-rational-red/30 bg-rational-red/10 text-rational-red",
  "UNDER CONSTRUCTION": "border-dashed border-muted-foreground/40 bg-muted text-muted-foreground",
  ONGOING: "border-foreground/20 bg-muted text-foreground",
};

const CSR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTopSpacer />
      <AboutSubNav />

      {/* Hero */}
      <section className="pt-14 pb-14 md:pt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-rational-red" />
              <span className="text-minimal tracking-[0.3em] text-muted-foreground">
                ABOUT US — CSR ACTIVITIES
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-light text-architectural md:text-6xl">
              Building Industries.
              <br />
              Empowering Communities.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Through the MJ Education &amp; Medical Trust, the Rational Engineers Group
              invests in education, healthcare, elderly care and rural livelihood — because
              success is not defined by profit alone, but by the value we create for people,
              communities and future generations.
            </p>
            <p className="mt-6 border-l-2 border-rational-red pl-5 text-base italic text-foreground md:text-lg">
              “When we educate one child, we empower an entire generation.”
              <span className="mt-2 block text-sm not-italic text-muted-foreground">
                Mahendra Khyalilal Jain — Founder &amp; Principal Trustee, MJ Education &amp;
                Medical Trust
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl space-y-16 md:space-y-24">
            {initiatives.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14"
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rational-red/10">
                      <item.icon className="h-5 w-5 text-rational-red" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rational-red">
                      {item.tag}
                    </span>
                    <span
                      className={`border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${statusStyles[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h2 className="text-2xl font-light text-architectural md:text-3xl">
                    {item.title}
                  </h2>
                  {item.location && (
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {item.location}
                    </p>
                  )}
                  <p className="mt-5 leading-relaxed text-muted-foreground">{item.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-rational-red" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {item.stats && (
                    <div
                      className={`mt-8 grid gap-px overflow-hidden border border-border bg-border ${
                        item.stats.length > 1 ? "sm:grid-cols-2" : ""
                      }`}
                    >
                      {item.stats.map((s) => (
                        <div key={s.label} className="bg-background px-5 py-5">
                          <p className="text-2xl font-light text-foreground">{s.value}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Images */}
                <div
                  className={
                    item.images.length > 1
                      ? "grid content-start items-start gap-4 self-start sm:grid-cols-2"
                      : "self-start"
                  }
                >
                  {item.images.map((img, idx) => (
                    <figure
                      key={img.src}
                      className={`flex h-full flex-col overflow-hidden border border-border bg-muted ${
                        item.images.length === 3 && idx === 2 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                      {img.caption && (
                        <figcaption className="mt-auto border-t border-border px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>

              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* COVID relief */}
      <section className="mt-20 border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-minimal mb-3 tracking-[0.3em] text-muted-foreground">
              PANDEMIC RESPONSE
            </h2>
            <h3 className="mb-10 text-2xl font-light text-architectural md:text-4xl">
              Standing With Communities When It Mattered Most
            </h3>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {covidRelief.map((cItem) => (
                <div key={cItem} className="bg-background px-6 py-8 text-sm text-foreground">
                  {cItem}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-minimal mb-3 tracking-[0.3em] text-muted-foreground">
              RECOGNITION
            </h2>
            <h3 className="mb-4 text-2xl font-light text-architectural md:text-4xl">
              Honoured to Serve. Inspired to Continue.
            </h3>
            <p className="mb-10 max-w-3xl text-muted-foreground">
              We are grateful to be recognised for our contributions to society, community
              and nation building. These awards belong to our entire team, whose dedication
              drives our purpose every day.
            </p>
            <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              {recognitions.map((r) => (
                <div key={r.title} className="bg-background p-8">
                  <h4 className="text-lg font-medium text-foreground">{r.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Our Commitment. Our Values.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CSR;
