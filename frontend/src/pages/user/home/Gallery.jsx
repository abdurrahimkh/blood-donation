import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function Gallery() {
  return (
    <div className="px-24 pb-16 ">
      <h1 className="text-3xl text-center font-brooklyn font-semibold text-gray-800 mb-5">
        Saving Lives, One <span className="text-secondary  ">Drop</span> at a Time.
      </h1>
      <Carousel className="rounded-xl overflow-y-hidden" navigation="" loop autoplay>
        <div className="relative h-[20rem] w-full">
          <img src="/icons/quotes.png" alt="quotes" className="absolute w-32 top-10 left-24 opacity-25 " />
          <img src="/icons/quotes.png" alt="quotes" className="absolute w-32 top-20 right-24 opacity-25 rotate-180" />

          <div className="absolute inset-0 grid h-[20rem] w-full place-items-center bg-black/10  ">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="lead" className="text-center opacity-80 text-gray-800 text-[1.2rem] mb-5">
                Thank you for being a part of my life, thank you for giving me hope, for giving me the opportunity to keep enjoying, to know my grand children, to see the true value of life; thank you, simply thank you, because through your donation you gave me life, thank you because, without
                knowing me, you decided to be the hero/heroin of my life and my family
              </Typography>
              <span variant="lead" className="border-l-2 pl-2 border-black opacity-80 text-black text-sm">
                Riaz Ahmad
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-[20rem] w-full">
          <img src="/icons/quotes.png" alt="quotes" className="absolute w-32 top-10 left-24 opacity-25" />
          <img src="/icons/quotes.png" alt="quotes" className="absolute w-32 top-20 right-24 opacity-25 rotate-180" />

          <div className="absolute inset-0 grid h-[20rem] w-full place-items-center bg-black/10  ">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="lead" className="text-center opacity-80 text-gray-800 text-[1.2rem] mb-5">
                Being a blood donor pushes you to be more careful with your health
              </Typography>
              <span variant="lead" className="border-l-2 pl-2 border-black opacity-80 text-black text-sm">
                Abdul Qadir
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-[20rem] w-full">
          <img src="/icons/quotes.png" alt="quotes" className="absolute w-32 top-10 left-24 opacity-25" />
          <img src="/icons/quotes.png" alt="quotes" className="absolute w-32 top-20 right-24 opacity-25 rotate-180" />

          <div className="absolute inset-0 grid h-[20rem] w-full place-items-center bg-black/10  ">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="lead" className="text-center opacity-80 text-gray-800 text-[1.2rem] mb-5">
                Knowing that you helped someone with your blood is priceless! For everything else there is no MasterCard but there is still health
              </Typography>
              <span variant="lead" className="border-l-2 pl-2 border-black opacity-80 text-black text-sm">
                Sulaiman Ahmad
              </span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
