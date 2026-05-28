const features = [
  {
    name: 'LiveSkill AI Assessments',
    description:
      'Candidates solve role-specific ML, data, and model evaluation challenges while AI scoring checks reasoning, code quality, and tradeoff clarity.'
  },
  {
    name: 'Transparent Bias Audit Trail',
    description:
      'Every match includes explainable criteria, adverse-impact monitoring, and structured audit logs hiring teams can review before outreach.'
  },
  {
    name: 'Equity + Compensation Benchmarks',
    description:
      'Early-stage offers show salary, equity, vesting, and market percentile ranges so candidates compare upside with confidence.'
  },
  {
    name: 'Real-Time Project Matching',
    description:
      'Open roles become live project briefs. AI maps candidate signals to model stack, domain data, deployment maturity, and team urgency.'
  }
];

const steps = [
  'Candidates complete live validation challenges tailored to NLP, vision, recommendation, MLOps, or analytics roles.',
  'Employers publish project briefs with stack, model maturity, compensation range, equity profile, and hiring timeline.',
  'AI Talent Match ranks mutual fit, explains match drivers, flags bias risk, and opens focused interview loops.'
];

const stats = [
  ['42%', 'less resume screening time'],
  ['3.8x', 'more signal than keyword parsing'],
  ['15-20%', 'commission option on first-year salary'],
  ['24h', 'from validated profile to shortlist']
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-midnight text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-midnight/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
            AI Talent Match
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#features">Platform</a>
            <a className="transition hover:text-white" href="#how">How it works</a>
            <a className="transition hover:text-white" href="#employers">Employers</a>
            <a className="transition hover:text-white" href="#waitlist">Waitlist</a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-electric px-5 py-2.5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-400"
          >
            Join waitlist
          </a>
        </div>
      </nav>

      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="absolute -right-20 top-20 hidden h-80 w-80 rounded-full border border-blue-300/20 bg-blue-500/10 blur-2xl lg:block" />
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-blue-300/30 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-100 shadow-card backdrop-blur">
              Built for data scientists, ML engineers, AI labs, and enterprise AI teams
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Stop Scrolling. Start Matching.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200 md:text-2xl">
              The first AI-powered platform that connects data scientists and ML engineers with top AI labs and enterprises through live skill validation.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#waitlist" className="rounded-full bg-electric px-8 py-4 text-center text-base font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-400">
                Request early access
              </a>
              <a href="#features" className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center text-base font-bold text-white transition hover:-translate-y-1 hover:border-blue-300/60 hover:bg-white/10">
                See matching signals
              </a>
            </div>
          </div>

          <div className="float-slow relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-card backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-blue-300/20 bg-ink/70 p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.28em] text-blue-200">Live match board</span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-100">98% signal fit</span>
              </div>
              <div className="space-y-4">
                {['LLM Evaluation Lead', 'Computer Vision Scientist', 'MLOps Platform Engineer'].map((role, index) => (
                  <div key={role} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{role}</p>
                        <p className="mt-1 text-sm text-slate-400">Validated project score · bias audit clean · comp range verified</p>
                      </div>
                      <div className="text-right font-display text-3xl text-blue-200">{94 - index * 3}</div>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="pulse-line h-full rounded-full bg-electric" style={{ width: `${88 - index * 8}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-blue-300">Beyond resume parsing</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Matching engine built on proof, fairness, and real offer context.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.name} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-8 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.08]">
              <div className="mb-8 h-1.5 w-24 rounded-full bg-electric shadow-glow transition group-hover:w-36" />
              <h3 className="font-display text-3xl font-semibold text-white">{feature.name}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-card backdrop-blur lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-blue-300">How it works</p>
              <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Three steps from validated talent to high-signal interviews.</h2>
            </div>
            <div className="space-y-5">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-5 rounded-3xl border border-white/10 bg-midnight/70 p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-electric font-display text-2xl font-semibold shadow-glow">{index + 1}</span>
                  <p className="text-lg leading-8 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6 text-center">
              <div className="font-display text-5xl font-semibold text-blue-200">{value}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="employers" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-blue-300/30 bg-blue-500/15 p-8 shadow-glow backdrop-blur lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-blue-100">For employers</p>
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Hire AI builders with evidence before interviews start.</h2>
            <p className="mt-6 text-lg leading-8 text-blue-50">
              AI labs and enterprise teams use AI Talent Match to replace keyword screens with live project evidence, calibrated compensation, and bias-audited shortlists.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-8">
              <h3 className="font-display text-3xl font-semibold">Subscription hiring workspace</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">Monthly access for teams running continuous AI hiring: project briefs, validation dashboards, shortlist analytics, and compensation benchmark reports.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-8">
              <h3 className="font-display text-3xl font-semibold">Commission-based success model</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">For targeted searches, pay 15-20% of first-year salary only after a validated candidate accepts. Ideal for staff ML, founding AI, and specialized research roles.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-card backdrop-blur lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-blue-300">Private beta waitlist</p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Get matched by what you can build, not keywords you can stuff.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join early access for validated AI talent profiles, employer project briefs, and transparent compensation intelligence.
          </p>
          <form className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="email">Work email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="rounded-full border border-white/15 bg-midnight/80 px-6 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-300 focus:ring-4 focus:ring-blue-500/20"
            />
            <button type="submit" className="rounded-full bg-electric px-8 py-4 font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-400">
              Join beta
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
        <h2 className="font-display text-5xl font-semibold md:text-7xl">Ready for AI hiring with receipts?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-slate-300">Bring live evidence, bias transparency, and compensation truth into every AI talent match.</p>
        <a href="#waitlist" className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-bold text-midnight shadow-glow transition hover:-translate-y-1 hover:bg-blue-100">
          Build your talent graph
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 AI Talent Match. Live skill validation for serious AI hiring.</p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#features">Platform</a>
            <a className="hover:text-white" href="#employers">Employer pricing</a>
            <a className="hover:text-white" href="#waitlist">Waitlist</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
