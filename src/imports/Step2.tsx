import svgPaths from "./svg-c42ubuibn4";
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
        trend observed
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.1] min-h-px min-w-px relative text-[32px] text-white tracking-[-0.7px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {`Your body is entering a `}
        <br aria-hidden="true" />
        low-recovery phase.
      </p>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.5)] h-[166px] left-[19px] rounded-[16777200px] to-[#fe7a2e] top-[36px] via-1/2 via-[rgba(254,122,46,0.7)] w-[2px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p12a17a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Screen2Causality() {
  return (
    <div className="bg-[#2a677f] relative rounded-[16777200px] shadow-[0px_0px_20px_0px_rgba(236,242,248,0.05)] shrink-0 size-[40px]" data-name="Screen2Causality">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[24.75px] left-0 text-[18px] text-white top-[-0.5px] tracking-[-0.45px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sleep depth reduced
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[15px] text-white top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        3 short nights
      </p>
    </div>
  );
}

function Screen2Causality1() {
  return (
    <div className="flex-[278_0_0] h-[49.25px] min-h-px min-w-px relative" data-name="Screen2Causality">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading2 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[49.25px] items-center relative shrink-0 w-full" data-name="Container">
      <Screen2Causality />
      <Screen2Causality1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_15_953)" id="Icon">
          <path d={svgPaths.p1e4f5a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_15_953">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Screen2Causality2() {
  return (
    <div className="bg-[#fe7a2e] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Screen2Causality">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(254,122,46,0.4)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_0px_20px_0px_rgba(254,122,46,0.15)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] py-[2px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[24.75px] left-0 text-[18px] text-white top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        HRV dropped 15%
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[15px] text-white top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Sign of nervous system load
      </p>
    </div>
  );
}

function Screen2Causality3() {
  return (
    <div className="flex-[278_0_0] h-[49.25px] min-h-px min-w-px relative" data-name="Screen2Causality">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Heading3 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[49.25px] items-center relative shrink-0 w-full" data-name="Container">
      <Screen2Causality2 />
      <Screen2Causality3 />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[#fe7a2e] left-[14px] rounded-[16777200px] size-[12px] top-[14px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute border border-[rgba(255,255,255,0.2)] border-solid left-0 rounded-[16777200px] size-[40px] top-0" data-name="Container" />;
}

function Screen2Causality4() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Screen2Causality">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[25.5px] left-0 text-[20px] text-white top-[-0.5px] tracking-[-0.425px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Reduced recovery capacity
      </p>
    </div>
  );
}

function Screen2Causality5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-[278px]" data-name="Screen2Causality">
      <Heading4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Screen2Causality4 />
      <Screen2Causality5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ecd6152} id="Vector" stroke="var(--stroke-0, #ECF2F8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p17796300} id="Vector_2" stroke="var(--stroke-0, #ECF2F8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0.16)] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Luteal Phase
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Day 18 of your cycle
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Screen2Causality6() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Screen2Causality" style={{ backgroundImage: "linear-gradient(87.439deg, rgba(255, 255, 255, 0.04) 0.99224%, rgba(64, 119, 149, 0.1) 67.321%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[13px] relative w-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ecd6152} id="Vector" stroke="var(--stroke-0, #ECF2F8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p17796300} id="Vector_2" stroke="var(--stroke-0, #ECF2F8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(255,255,255,0.16)] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128.531px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[16px] text-white top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pattern Match
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-white w-[259px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Seen in 4 of your last 6 similar cycles. This matches your recent cycle behavior.
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Screen2Causality7() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Screen2Causality" style={{ backgroundImage: "linear-gradient(88.3577deg, rgba(255, 255, 255, 0.04) 0.99224%, rgba(64, 119, 149, 0.1) 67.321%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[13px] relative w-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Screen2Causality6 />
      <Screen2Causality7 />
    </div>
  );
}

function Container16() {
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
            <Container16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Screen1Hero() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[24px] top-[64px] w-[342px]" data-name="Screen1Hero">
      <Heading1 />
      <Heading />
      <Container3 />
      <Container11 />
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
    <div className="bg-[#2a677f] content-stretch flex items-start overflow-clip relative rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Step 2">
      <Container />
    </div>
  );
}