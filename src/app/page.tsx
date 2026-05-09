import BirthdayLogin from "@/features/birthday/components/BirthdayLogin";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background-light to-background-soft">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <BirthdayLogin />
      </section>
    </main>
  );
}
