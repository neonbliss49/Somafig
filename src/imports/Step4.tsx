import svgPaths from "./svg-4kwsfntq5f";
import imgImage from "figma:asset/c3a9e0d26438d10a4790c66aac563e15393ba22b.png";

function Image() {
  return (
    <div className="absolute h-[844px] left-0 opacity-60 top-0 w-[390px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[#14323d] h-[844px] left-0 mix-blend-multiply to-[#14323d] top-0 via-1/2 via-[rgba(42,103,127,0.5)] w-[390px]" data-name="Container" />;
}

function InsightFlow() {
  return (
    <div className="absolute h-[844px] left-0 overflow-clip top-0 w-[390px]" data-name="InsightFlow" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(42, 103, 127) 0%, rgb(42, 103, 127) 100%)" }}>
      <Image />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[19.5px] opacity-90 relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[#fe7a2e] text-[16px] top-0 tracking-[1.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Today
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 text-white w-full" data-name="Heading 1">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[36.8px] relative shrink-0 text-[32px] tracking-[-0.8px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        How do you want to approach today?
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        Choose an approach to adapt your daily recommendations.
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p384200b2} id="Vector" stroke="var(--stroke-0, #F2F0E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 11V13" id="Vector_2" stroke="var(--stroke-0, #F2F0E5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] min-h-px min-w-px relative text-[20px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conserve energy
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.3] min-h-px min-w-px relative text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Stabilize faster, reduce fatigue tomorrow
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Screen2Causality() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Screen2Causality" style={{ backgroundImage: "linear-gradient(88.6838deg, rgba(255, 255, 255, 0.04) 0.99224%, rgba(64, 119, 149, 0.1) 67.321%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[13px] py-[33px] relative w-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b8b3180} id="Vector" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(254,122,46,0.2)] relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon1 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.1] min-h-px min-w-px relative text-[20px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Push through
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.3] min-h-px min-w-px relative text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Short-term output, higher fatigue risk tomorrow
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Screen2Causality1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Screen2Causality" style={{ backgroundImage: "linear-gradient(88.6838deg, rgba(255, 255, 255, 0.04) 0.99224%, rgba(64, 119, 149, 0.1) 67.321%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[21px] py-[33px] relative w-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[390px] items-start relative shrink-0 w-full" data-name="Container">
      <Screen2Causality />
      <Screen2Causality1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6f7f7] text-[20px] text-center whitespace-nowrap">
        <p className="leading-none">Continue</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Button">
      <div className="bg-[#407795] flex-[1_0_0] min-h-px min-w-px relative rounded-[74px]" data-name="Buttons">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[20px] py-[18px] relative w-full">
            <Container8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Screen1Hero() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[780px] items-start left-[24px] top-[64px] w-[342px]" data-name="Screen1Hero">
      <Heading1 />
      <Heading />
      <Container3 />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-name="Container">
      <Screen1Hero />
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
    <div className="h-[844px] relative shrink-0 w-[390px]" data-name="Container">
      <InsightFlow />
      <InsightFlow1 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-[#2a677f] content-stretch flex items-start overflow-clip relative rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Step 4">
      <Container />
    </div>
  );
}