export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Голос громади. Незалежна громадська ініціатива.
      </div>
    </footer>
  );
}
