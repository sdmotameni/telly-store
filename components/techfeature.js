import ClickSVG from "../components/common/clicksvg";

export default function TechFeature() {
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
        </div>
      </div>
    </section>
  );
}
