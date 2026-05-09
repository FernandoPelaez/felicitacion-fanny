import BirthdayDashboard from "@/features/birthday/components/BirthdayDashboard";

export default function FelicitacionPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background-light to-background-soft">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-primary-soft/30 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute -left-20 top-1/3 h-52 w-52 rounded-full bg-gold/40 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl sm:h-80 sm:w-80" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 py-4 sm:py-6">
          <BirthdayDashboard />
        </div>
      </section>
    </main>
  );
}
