import SectionA from "./section/SectionA";
import SectionB from "./section/SectionB/SectionB";
import SectionC from "./section/SectionC/SectionC";
import SectionD from "./section/SectionD/SectionD";


export default function Body() {
  return (
    <main >
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
    </main>
  );
}