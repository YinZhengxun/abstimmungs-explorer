type ArgumentLabel = "PRO" | "KONTRA" | "NEUTRAL";

type ArgumentItem = {
  label: ArgumentLabel;
  title: string;
  description: string;
};

export default function AbstimmungsExplorerMockup() {
  const mediaSources = [
    { name: "NZZ", type: "Überregional" },
    { name: "Tages-Anzeiger", type: "Überregional" },
    { name: "SRF", type: "Öffentlich-rechtlich" },
    { name: "20 Minuten", type: "Boulevard" },
    { name: "Le Temps", type: "Westschweiz" },
  ];

  const argumentsList: ArgumentItem[] = [
    {
      label: "PRO",
      title: "Fördert Gleichstellung",
      description: "Beseitigt steuerliche Benachteiligung von Zweitverdienern.",
    },
    {
      label: "PRO",
      title: "Mehr Erwerbsanreize",
      description:
        "Erhöht Arbeitsanreize für Frauen und ermöglicht mehr Erwerbstätigkeit.",
    },
    {
      label: "KONTRA",
      title: "Steuerausfälle",
      description:
        "Mehrere Milliarden CHF Einnahmen fallen bei Bund und Kantonen weg.",
    },
    {
      label: "KONTRA",
      title: "Umsetzungskomplexität",
      description: "Kantone benötigen Jahre für die Systemumstellung.",
    },
    {
      label: "NEUTRAL",
      title: "Verteilungswirkung",
      description:
        "Kritiker und Befürworter bewerten die gesellschaftlichen Effekte unterschiedlich.",
    },
  ];

  const articles = [
    {
      outlet: "NZZ",
      title:
        "Warum die Individualbesteuerung die Frauenbesteuerung entschärfen könnte",
      date: "12. März 2025",
      tag: "Mehr Erwerbsanreize",
    },
    {
      outlet: "Tages-Anzeiger",
      title: "Milliarden-Ausfälle: Was kostet die Reform dem Staat wirklich?",
      date: "8. März 2025",
      tag: "Steuerausfälle",
    },
    {
      outlet: "SRF",
      title: "So würde die Initiative für Steuerleben verändern",
      date: "5. März 2025",
      tag: "Mehr Erwerbsanreize",
    },
    {
      outlet: "20 Minuten",
      title: "«Fairer für alle» – Initianten erklären ihr Ziel",
      date: "1. März 2025",
      tag: "Gleichstellung",
    },
    {
      outlet: "Le Temps",
      title: "La fiscalité individuelle divise les cantons romands",
      date: "27. Feb. 2025",
      tag: "Umsetzungskomplexität",
    },
  ];

  const statCards = [
    { value: "5", label: "Medienquellen" },
    { value: "247", label: "Artikel gesamt" },
    { value: "6", label: "Argumente" },
    { value: "März–Mai 2025", label: "Zeitraum" },
  ];

  const labelStyles: Record<ArgumentLabel, string> = {
    PRO: "bg-emerald-50 text-emerald-700 border-emerald-200",
    KONTRA: "bg-amber-50 text-amber-700 border-amber-200",
    NEUTRAL: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="mb-8 flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-slate-500">
                Swissdox
              </p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight">
                Abstimmungs-Explorer
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                A multi-perspective exploration interface for Swiss political
                initiatives.
              </p>
            </div>
            <button className="inline-flex h-11 items-center justify-center rounded-2xl bg-slate-900 px-5 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
              Export Summary
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Search initiative
              </p>
              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                <span className="text-slate-400">⌕</span>
                <span className="text-sm text-slate-700">
                  Initiative suchen, z. B. “Individualbesteuerung”
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-end gap-2">
              {[
                "Individualbesteuerung",
                "SRG-Initiative",
                "Mietkauf-Initiative",
                "AHV 22",
              ].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-2xl font-semibold tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Initiative
              </h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                2025 vote
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Title
                </p>
                <h3 className="mt-1 text-xl font-semibold leading-snug">
                  Volksinitiative „Individuelle Besteuerung“
                </h3>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Policy domain
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Bundesebene · Steuerpolitik
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Summary
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  The initiative proposes individual taxation instead of joint
                  taxation for married couples, aiming to reduce structural
                  disadvantages for second earners.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Medienquellen
              </h2>
              <button className="text-sm font-medium text-slate-600">
                Filter
              </button>
            </div>

            <div className="space-y-3">
              {mediaSources.map((source) => (
                <div
                  key={source.name}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-slate-900">{source.name}</p>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                      {source.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Perspektiven / Argumente
              </h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                Clustered
              </span>
            </div>

            <div className="space-y-3">
              {argumentsList.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${labelStyles[item.label]}`}
                  >
                    {item.label}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Artikel (Swissdox)
              </h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                247 results
              </span>
            </div>

            <div className="space-y-3">
              {articles.map((article) => (
                <div
                  key={article.title}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-900">
                      {article.outlet}
                    </p>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                      {article.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-medium leading-6 text-slate-800">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500">{article.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}