import { Donation } from '@/lib/donations';

export default function DonationCard({ donation }: { donation: Donation }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-xl font-semibold">{donation.title}</h3>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        {donation.description}
      </p>
      <a
        href={donation.link}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        {donation.linkLabel}
      </a>
    </div>
  );
}
