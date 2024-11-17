export function Home({ name }: { name: string }) {
  return (
    <main class="h-screen flex justify-center items-center">
      <div class="w-[500px] border p-12 rounded-lg space-y-4">
        <section>
          <h1 class="text-4xl font-semibold">{name} framework</h1>
          <p>A pragmatic javascript fullstack framework</p>
        </section>
        <a
          href="https://lito.indrazm.com"
          class="block w-fit text-sm bg-indigo-600 text-white font-medium px-3 py-2 rounded-lg"
        >
          Read Documentation
        </a>
      </div>
    </main>
  );
}
