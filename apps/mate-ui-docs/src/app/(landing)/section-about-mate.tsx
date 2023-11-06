import { MateIcon, MateWinkIcon } from '@icons';
import { InformationCircleIcon } from '@heroicons/react/20/solid';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@truenorth/mate-ui';

export const AboutMateSection = () => {
  return (
    <section className="group my-[11.25rem] flex w-full max-w-[54rem] flex-col items-center bg-grey-100 px-14 py-12 text-center md:flex-row md:justify-between md:text-left">
      <div className="3xl:max-w-[660px] mb-12 md:mb-0 md:mr-6 md:max-w-[400px]">
        <h1 className="text-[3rem] font-normal text-grey-900">Why mate?</h1>
        <h4 className="mb-6 text-3xl font-normal text-grey-900">
          It&apos;s designed to be shared -
          <span className="font-medium"> and so is Mate-UI.</span>
        </h4>
        <Dialog
          colorScheme="success"
          isCentered
          size="sm"
          contentAlignment="left"
        >
          <DialogTrigger asChild>
            <div className="flex cursor-pointer items-center justify-center text-grey-600 md:justify-start">
              <div className="text-base font-semibold">More about mate</div>
              <InformationCircleIcon className="ml-1 h-4 w-4" />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>More about mate</DialogTitle>
              <DialogDescription>
                <span className="mt-4 block text-grey-700">
                  <span className="mb-4 block">
                    Pronounced mah-tay, not like the British slang for
                    &apos;friend&apos;.
                  </span>
                  <span className="mb-4 block">
                    Mate is a caffeinated infusion that is a major part of
                    Argentine culture and also enjoyed elsewhere in South
                    America. Typically, the leaves, or yerba, are steeped
                    directly in the mate gourd and a metal straw, called a
                    bombilla, filters each single-serving drink.
                  </span>
                  <span className="mb-2 block">
                    Mate is most commonly enjoyed amongst a small group of
                    people, with the same gourd refilled and passed from person
                    to person.
                  </span>
                </span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button
                  themeColor="neutral"
                  className="w-full bg-grey-800 text-white"
                >
                  Nice, thanks!
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full object-cover group-hover:opacity-0">
          <MateIcon />
        </div>
        <div className="h-full w-full object-cover">
          <MateWinkIcon />
        </div>
      </div>
    </section>
  );
};
