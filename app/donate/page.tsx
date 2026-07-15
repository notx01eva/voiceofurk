import { getDonations } from '@/lib/donations';
import DonationCard from '@/components/DonationCard';

export default function DonatePage() {
  const donations = getDonations();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Підтримати</h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Перевірені фонди, яким можна довіряти. Кожен донат наближає перемогу.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {donations.map((donation) => (
          <DonationCard key={donation.slug} donation={donation} />
        ))}
      </div>
    </div>
  );
}
