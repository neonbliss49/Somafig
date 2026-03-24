import svgPaths from "./svg-58ulk8y74i";
import imgImage from "figma:asset/c3a9e0d26438d10a4790c66aac563e15393ba22b.png";

function Image() {
  return (
    <div className="absolute h-[844px] left-0 opacity-60 top-0 w-[390px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-gradient-to-b from-[#14323d] inset-0 mix-blend-difference to-[#14323d] via-1/2 via-[rgba(42,103,127,0.5)]" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
    </div>
  );
}

function InsightFlow() {
  return (
    <div className="absolute bg-[#2a677f] h-[844px] left-0 overflow-clip top-0 w-[390px]" data-name="InsightFlow">
      <Image />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[19.5px] opacity-90 relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#fe7a2e] text-[16px] top-0 tracking-[1.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Good Morning, Hanna
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.16] min-h-px min-w-px relative text-[48px] text-white tracking-[-1.05px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Your body is entering a low-recovery phase today.
      </p>
    </div>
  );
}

function Screen1Hero() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[272.281px] items-start left-[24px] top-[64px] w-[342px]" data-name="Screen1Hero">
      <Heading1 />
      <Heading />
    </div>
  );
}

function Screen1Hero2() {
  return (
    <div className="relative shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Screen1Hero">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[22.5px] relative shrink-0 text-[20px] text-center text-white tracking-[0.375px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          See what’s driving this
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.333px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 23.3334">
        <g id="Icon">
          <path d="M11.6667 4.86129V18.4724" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94444" />
          <path d={svgPaths.p66f9900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94444" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[19573402px] shrink-0 size-[58px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[19573403px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex items-center justify-center px-[15.167px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16.511px] items-center relative">
        <Screen1Hero2 />
        <Container3 />
      </div>
    </div>
  );
}

function Screen1Hero1() {
  return (
    <div className="absolute content-stretch flex h-[182.5px] items-start justify-center left-[24px] px-[88.047px] top-[661.5px] w-[342px]" data-name="Screen1Hero">
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-name="Container">
      <Screen1Hero />
      <Screen1Hero1 />
    </div>
  );
}

function InsightFlow1() {
  return (
    <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-name="InsightFlow">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-name="Container">
      <InsightFlow />
      <InsightFlow1 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-[#2a677f] overflow-clip relative rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Step 1">
      <Container />
    </div>
  );
}