import ClickSVG from "./common/clicksvg";

export default function NoAppNeeded() {
  return (
    <section className="px-4 py-10 mt-6 custombg2 space-y-9 rounded-3xl customcolor">
      <div className="flex flex-col items-center px-5">
        <div className="flex items-center justify-center p-4 mb-3 bg-white rounded-full shadow-sm">
          <ClickSVG styles="w-8 h-8 fill-current" />
        </div>
        <div className="mb-1 text-3xl font-semibold">No App Needed</div>
        <div className="text-lg leading-tight tracking-tight text-center text-gray-600">
          Telly profiles are viewed directly through a browser making Telly
          compatible with all smartphones.
          <div className="font-semibold text-center text-white rounded-lg bg-rose-600">
            NOTE: Others dont need an app or a Telly to connect
          </div>
        </div>
      </div>
    </section>
  );
}
