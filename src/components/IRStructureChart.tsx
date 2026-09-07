import { IR_SECTIONS, countDocuments } from "@/data/investorRelations";

type Props = {
  /** Called when a node is clicked — opens that section in the list below. */
  onSelect: (sectionId: string) => void;
  activeId: string | null;
};

/**
 * Org-chart style map of the Investor Relations structure:
 * a single root node branching into every section and its sub-headings.
 */
const IRStructureChart = ({ onSelect, activeId }: Props) => {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="min-w-[860px]">
        {/* Root */}
        <div className="flex justify-center">
          <div className="border border-rational-red bg-rational-red px-8 py-4 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white">
              Investor Relations
            </span>
          </div>
        </div>

        {/* Trunk */}
        <div className="mx-auto h-8 w-px bg-border" />

        {/* Horizontal bus */}
        <div className="mx-[12.5%] h-px bg-border" />

        <div className="grid grid-cols-4 items-start gap-x-5 gap-y-10">

          {IR_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            const count = countDocuments(section);
            return (
              <div key={section.id} className="flex flex-col items-stretch">
                {/* Branch drop line */}
                <div className="mx-auto h-8 w-px bg-border" />

                <button
                  type="button"
                  onClick={() => onSelect(section.id)}
                  className={`border px-4 py-3.5 text-left transition-colors ${
                    isActive
                      ? "border-rational-red bg-rational-red/5"
                      : "border-border bg-card hover:border-rational-red"
                  }`}
                >
                  <span className="block text-sm font-medium leading-snug text-foreground">
                    {section.label}
                  </span>
                  <span className="mt-1.5 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {count} {count === 1 ? "file" : "files"}
                  </span>
                </button>

                {section.subsections.length > 0 ? (
                  <div className="relative mt-0 pl-5">
                    {/* vertical spine for children */}
                    <span className="absolute left-2 top-0 h-full w-px bg-border" aria-hidden />
                    <ul className="space-y-0">
                      {section.subsections.map((sub) => (
                        <li key={sub.id} className="relative">
                          <span
                            className="absolute -left-3 top-1/2 h-px w-3 bg-border"
                            aria-hidden
                          />
                          <button
                            type="button"
                            onClick={() => onSelect(section.id)}
                            className="w-full border-b border-border/70 py-2 text-left text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-rational-red"
                          >
                            {sub.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IRStructureChart;
