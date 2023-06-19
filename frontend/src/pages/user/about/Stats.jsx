const Stats = () => {
  return (
    <div className="px-4 font-brooklyn py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid row-gap-8 gap-10 md:gap-0 sm:grid-cols-3">
        <div className="text-center">
          <h6 className="text-5xl font-bold text-primary mb-2">3240</h6>
          <p className="font-bold text-secondary ">Happy Donors</p>
        </div>
        <div className="text-center">
          <h6 className="text-5xl font-bold text-primary mb-2">3528</h6>
          <p className="font-bold text-secondary">Happy Recipient</p>
        </div>
        <div className="text-center">
          <h6 className="text-5xl font-bold text-primary mb-2">200</h6>
          <p className="font-bold text-secondary">Other cases</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
