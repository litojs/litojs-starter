export function Home({ name }: { name: string }) {
  return (
    <main class="h-screen flex justify-center items-center bg-neutral-900 text-white">
      <div class="w-[500px] bg-gradient-to-b from-neutral-900 to-neutral-800/15 shadow-lg shadow-black/5 border border-neutral-800 p-12 rounded-lg space-y-12">
        <section>
          <h1 class="text-2xl font-semibold tracking-tight">
            {name} framework
          </h1>
          <p class="text-neutral-500">
            A pragmatic javascript fullstack framework
          </p>
        </section>
        <a
          href="https://lito.indrazm.com"
          class="block w-fit text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-normal px-3 py-2 rounded-lg transition duration-300"
        >
          Read Documentation
        </a>
      </div>
    </main>
  );
}
