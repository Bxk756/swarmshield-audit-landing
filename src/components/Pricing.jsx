export default function Pricing() {
  return (
    <section className="px-8 py-20">
      <h2 className="text-4xl font-bold mb-6">Optional Upgrades</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">Starter • $497</h3>
          <p>AI widget + Cloud setup + basic monitoring</p>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-primary">
          <h3 className="text-2xl font-semibold">Advanced • $997</h3>
          <p>Threat monitoring, AI agent, migration, reports</p>
        </div>

        <div className="bg-card p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold">School Bundle • $2000–$5000</h3>
          <p>Full system, dashboards, agents, staff training, reporting</p>
        </div>
      </div>
    </section>
  );
}
