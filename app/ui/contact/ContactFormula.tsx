import { TagIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export default function ContactFormula() {
  return (
    <main>
      <div>
        <form>
          {/* Ämne */}
          <div className="mb-4">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              Ämne
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="issue"
                  name="issue"
                  type="text"
                  placeholder="Vad vill du kontakta oss i för ämne"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          {/* Meddelande */}
          <div className="mb-4">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              Meddelande
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Här skriver du ditt meddelande"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <PencilSquareIcon className="pointer-events-none absolute left-3 top-1/4 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <Button type="submit">Skicka meddelande</Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
