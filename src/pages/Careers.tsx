import { useState } from "react";
import { ArrowRight, Briefcase, Clock, MapPin, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageTopSpacer from "@/components/PageTopSpacer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { HR_EMAIL, JOB_OPENINGS } from "@/data/careers";

const MAX = { name: 100, email: 255, phone: 20, experience: 60, message: 1500 };

const Careers = () => {
  const { toast } = useToast();
  const [role, setRole] = useState<string>(JOB_OPENINGS[0].title);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value.slice(0, MAX[key]) }));

  const applyTo = (title: string) => {
    setRole(title);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Please check your details",
        description: "A full name and a valid email address are required.",
        variant: "destructive",
      });
      return;
    }

    const subject = `Application — ${role} — ${name}`;
    const lines = [
      `Position: ${role}`,
      `Name: ${name}`,
      `Email: ${email}`,
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : null,
      form.experience.trim() ? `Experience: ${form.experience.trim()}` : null,
      "",
      form.message.trim() || "(Please find my CV attached.)",
      "",
      "Note: kindly attach your CV to this email before sending.",
    ].filter(Boolean) as string[];

    window.location.href = `mailto:${HR_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\r\n"))}`;

    toast({
      title: "Email ready to send",
      description: `Your application to ${HR_EMAIL} has opened in your email app — attach your CV and hit send.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageTopSpacer />

      <section className="border-b border-border bg-muted/30 pt-14 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-rational-red">
              Careers
            </p>
            <div className="mt-4 h-0.5 w-12 bg-rational-red" />
            <h1 className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Build the conductors that
              <br />
              <span className="text-muted-foreground">move power forward.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Since 1990 our teams in Thane have engineered copper and aluminium conductors for
              transformer, motor and switchgear makers across four continents. If you want
              hands-on manufacturing work with real ownership, we would like to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                type="button"
                onClick={() => applyTo(role)}
                className="rounded-none bg-rational-red text-white hover:bg-foreground hover:text-background"
              >
                Apply now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a
                href={`mailto:${HR_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-rational-red"
              >
                <Mail className="h-4 w-4" />
                {HR_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Current openings
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground md:text-4xl">
            {JOB_OPENINGS.length} roles open
          </h2>

          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            {JOB_OPENINGS.map((job) => (
              <article key={job.id} className="flex flex-col bg-background p-7">
                <h3 className="text-xl font-medium text-foreground">{job.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  <li className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-rational-red" />
                    {job.location}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-rational-red" />
                    {job.type}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5 text-rational-red" />
                    {job.experience}
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-rational-red" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => applyTo(job.title)}
                    className="rounded-none"
                  >
                    Apply for this role
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-40 bg-foreground py-20 text-background md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-rational-red">
                Apply
              </p>
              <div className="mt-4 h-0.5 w-12 bg-rational-red" />
              <h2 className="mt-6 text-3xl font-light leading-tight text-background md:text-4xl">
                Send your application to
                <br />
                <span className="text-rational-red">our HR team.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
                Fill in your details and we will open your email app with everything prepared for{" "}
                {HR_EMAIL}. Please attach your CV before sending — that keeps your documents
                private and lets us reply directly.
              </p>
            </div>

            <form onSubmit={submit} className="space-y-5 border border-background/15 p-6 md:p-8">
              <div className="space-y-2">
                <Label htmlFor="role" className="text-background/80">
                  Position
                </Label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-10 w-full border border-background/25 bg-transparent px-3 text-sm text-background outline-none focus:border-rational-red"
                >
                  {JOB_OPENINGS.map((job) => (
                    <option key={job.id} value={job.title} className="text-foreground">
                      {job.title}
                    </option>
                  ))}
                  <option value="Open application" className="text-foreground">
                    Open application / other
                  </option>
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-background/80">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={set("name")}
                    maxLength={MAX.name}
                    required
                    className="rounded-none border-background/25 bg-transparent text-background placeholder:text-background/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-background/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    maxLength={MAX.email}
                    required
                    className="rounded-none border-background/25 bg-transparent text-background placeholder:text-background/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-background/80">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={set("phone")}
                    maxLength={MAX.phone}
                    className="rounded-none border-background/25 bg-transparent text-background placeholder:text-background/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-background/80">
                    Total experience
                  </Label>
                  <Input
                    id="experience"
                    value={form.experience}
                    onChange={set("experience")}
                    maxLength={MAX.experience}
                    placeholder="e.g. 4 years"
                    className="rounded-none border-background/25 bg-transparent text-background placeholder:text-background/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-background/80">
                  A short note
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={set("message")}
                  maxLength={MAX.message}
                  rows={5}
                  placeholder="Tell us about your current role and why this position fits you."
                  className="rounded-none border-background/25 bg-transparent text-background placeholder:text-background/40"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-none bg-rational-red text-white hover:bg-background hover:text-foreground"
              >
                Continue to email
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-background/50">
                Your application goes to {HR_EMAIL}. Remember to attach your CV.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
