import { useState } from "react";
import { ChevronDown, FileText, Download, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageTopSpacer from "@/components/PageTopSpacer";
import Footer from "@/components/Footer";
import IRStructureChart from "@/components/IRStructureChart";
import {
  IR_CONTACT,
  IR_SECTIONS,
  countDocuments,
  type IRDocument,
} from "@/data/investorRelations";

const DocumentList = ({ documents }: { documents: IRDocument[] }) => {
  if (documents.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No documents published yet. Filings will appear here once released.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-border border-y border-border">
      {documents.map((doc) => (
        <li key={doc.url + doc.title}>
          <a
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-rational-red"
          >
            <span className="flex items-start gap-3">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-rational-red" />
              <span>
                <span className="block text-sm font-medium text-foreground group-hover:text-rational-red">
                  {doc.title}
                </span>
                {doc.date ? (
                  <span className="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {doc.date}
                  </span>
                ) : null}
              </span>
            </span>
            <Download className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-rational-red" />
          </a>
        </li>
      ))}
    </ul>
  );
};

const InvestorRelations = () => {
  const [openSection, setOpenSection] = useState<string | null>(IR_SECTIONS[0].id);
  const totalDocuments = IR_SECTIONS.reduce((total, s) => total + countDocuments(s), 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTopSpacer />

      <section className="border-b border-border bg-muted/30 pt-14 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-rational-red">
              Investor Relations
            </p>
            <div className="mt-4 h-0.5 w-12 bg-rational-red" />
            <h1 className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Transparency for our
              <br />
              <span className="text-muted-foreground">shareholders and stakeholders.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Financial results, annual reports, governance disclosures and compliance documents of
              RATIONAL ENGINEERS LIMITED are published here. Every document opens as a PDF.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span>
                <span className="font-medium text-foreground">{IR_SECTIONS.length}</span> sections
              </span>
              <span>
                <span className="font-medium text-foreground">{totalDocuments}</span> documents
                published
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-16">
        <div className="container mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-rational-red">
            Disclosure Structure
          </p>
          <div className="mt-3 h-0.5 w-12 bg-rational-red" />
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Select any heading below to open its filings.
          </p>
          <div className="mt-10">
            <IRStructureChart
              activeId={openSection}
              onSelect={(id) => {
                setOpenSection(id);
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            <div className="divide-y divide-border border-y border-border">
              {IR_SECTIONS.map((section) => {
                const isOpen = openSection === section.id;
                const count = countDocuments(section);
                return (
                  <article key={section.id} id={section.id} className="scroll-mt-40">
                    <h2>
                      <button
                        type="button"
                        onClick={() => setOpenSection(isOpen ? null : section.id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      >
                        <span>
                          <span className="block text-lg font-medium text-foreground md:text-xl">
                            {section.label}
                          </span>
                          <span className="mt-1 block text-sm text-muted-foreground">
                            {section.description}
                          </span>
                        </span>
                        <span className="flex shrink-0 items-center gap-4">
                          <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                            {count} {count === 1 ? "file" : "files"}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 text-rational-red transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>
                    </h2>

                    {isOpen ? (
                      <div className="pb-8">
                        {section.subsections.length === 0 ? (
                          <DocumentList documents={section.documents} />
                        ) : (
                          <div className="space-y-7">
                            {section.subsections.map((sub) => (
                              <div key={sub.id} id={`${section.id}-${sub.id}`}>
                                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                                  {sub.label}
                                </p>
                                <DocumentList documents={sub.documents} />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <aside className="lg:sticky lg:top-40 lg:self-start">
              <div className="border border-border p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rational-red">
                  Investor Contact
                </p>
                <p className="mt-4 text-sm font-medium text-foreground">{IR_CONTACT.name}</p>
                <a
                  href={`mailto:${IR_CONTACT.email}`}
                  className="mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-rational-red"
                >
                  <Mail className="h-4 w-4 text-rational-red" />
                  {IR_CONTACT.email}
                </a>
                <a
                  href={`tel:${IR_CONTACT.phone.replace(/\s/g, "")}`}
                  className="mt-2 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-rational-red"
                >
                  <Phone className="h-4 w-4 text-rational-red" />
                  {IR_CONTACT.phone}
                </a>
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  For queries on filings, shareholding or dividend records, please write to us with
                  your folio or DP details.
                </p>
              </div>

              <nav className="mt-6 border border-border p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Jump to
                </p>
                <ul className="mt-4 space-y-2.5">
                  {IR_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setOpenSection(section.id);
                          document
                            .getElementById(section.id)
                            ?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="text-left text-sm text-muted-foreground transition-colors hover:text-rational-red"
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorRelations;
