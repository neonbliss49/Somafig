import svgPaths from "./svg-h0fpdadjzn";
import imgImage from "figma:asset/c3a9e0d26438d10a4790c66aac563e15393ba22b.png";

function Aa() {
  return <div className="absolute h-[852.415px] left-0 top-0 w-[430.524px]" data-name="aa" />;
}

function Image() {
  return (
    <div className="absolute h-[1312px] left-0 opacity-60 top-0 w-[431px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[852.415px] left-0 mix-blend-overlay top-0 w-[430.524px]" data-name="Container" style={{ backgroundImage: "linear-gradient(179.98deg, rgb(18, 47, 58) 13.908%, rgba(18, 47, 58, 0.5) 56.95%, rgb(18, 47, 58) 99.991%)" }} />;
}

function Container2() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[852.415px] left-0 top-0 w-[430.524px]" data-name="Container" />;
}

function App1() {
  return (
    <div className="absolute bg-[#122f3a] h-[852.415px] left-0 overflow-clip top-0 w-[430.524px]" data-name="App">
      <Image />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32.202px] relative shrink-0 w-[333.447px]" data-name="Heading 1">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[32.2px] left-0 text-[#f2ede5] text-[28px] top-[-0.16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Low recovery capacity
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20.998px] relative shrink-0 w-[333.447px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#fe7a2e] text-[16px] top-[0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        3 adjustments for today
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative shrink-0">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="content-stretch flex gap-[4px] items-start leading-[18px] px-[16px] relative text-[#f2ede5] text-[12px] w-full whitespace-nowrap">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>{`Watch out: `}</p>
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 9" }}>
          Energy dip likely in 3–4 hours
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame />
      <Paragraph1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[11.996px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9955 11.9955">
        <g id="Icon">
          <path d="M5.99776 2.49907V9.49645" id="Vector" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49944" />
          <path d={svgPaths.p8af2400} id="Vector_2" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49944" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-[30.684px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#fe7a2e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`28 `}</p>
        <Icon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#afd2e0] text-[12px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          HRV
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[43px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] h-full items-center relative">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#f2ede5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          5h 42m
        </p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#afd2e0] text-[12px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          SLEEP
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[43px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] h-full items-center relative">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#f2ede5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          68
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-[25.34px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#afd2e0] text-[12px] top-[0.08px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          RHR
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[43px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] h-full items-center relative">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#fe7a2e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          +0.3°
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-[34.225px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#afd2e0] text-[12px] top-[0.08px] tracking-[0.5px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          TEMP
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[43px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] h-full items-center relative">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(209,213,220,0.3)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between px-[16px] py-[13px] relative w-full">
        <Container7 />
        <Container8 />
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9934 13.9934">
        <g clipPath="url(#clip0_146_1295)" id="Icon">
          <path d={svgPaths.pf5ba00} id="Vector" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16611" />
          <path d={svgPaths.p2854b770} id="Vector_2" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16611" />
        </g>
        <defs>
          <clipPath id="clip0_146_1295">
            <rect fill="white" height="13.9934" width="13.9934" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-[296.777px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#afd2e0] text-[12px] top-[0.08px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Luteal Phase · Day 18 · Period in ~10 days
        </p>
      </div>
    </div>
  );
}

function TodayScreenNew() {
  return (
    <div className="content-stretch flex gap-[5.994px] h-[18.006px] items-center px-[16px] relative shrink-0 w-[382.525px]" data-name="TodayScreenNew">
      <Icon1 />
      <Text8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <Container6 />
      <TodayScreenNew />
    </div>
  );
}

function Container11() {
  return <div className="h-[0.995px] shrink-0 w-full" data-name="Container" />;
}

function StateCard() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] overflow-clip py-[16px] rounded-[16px] top-[88px] w-[406.524px]" data-name="StateCard">
      <div aria-hidden="true" className="absolute bg-[rgba(12,31,39,0.6)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[16px]" />
      <Container5 />
      <Container11 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9934 13.9934">
        <g clipPath="url(#clip0_146_1324)" id="Icon">
          <path d={svgPaths.p1662de00} id="Vector" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16611" />
          <path d="M11.6611 1.74917V4.0814" id="Vector_2" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16611" />
          <path d="M12.8273 2.91529H10.495" id="Vector_3" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16611" />
          <path d="M2.33223 9.91197V11.0781" id="Vector_4" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16611" />
          <path d="M2.91529 10.495H1.74917" id="Vector_5" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16611" />
        </g>
        <defs>
          <clipPath id="clip0_146_1324">
            <rect fill="white" height="13.9934" width="13.9934" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(254,122,46,0.2)] relative rounded-[18102700px] shrink-0 size-[27.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[6.997px] pr-[7.005px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-[342.534px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#fe7a2e] text-[12px] top-[0.08px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Your Morning Insight
        </p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[39.198px] opacity-90 relative shrink-0 w-[342.534px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.6px] left-0 text-[#f2ede5] text-[14px] top-[-0.46px] w-[328px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          Low-recovery phase · sleep debt + hormonal shift · conserving
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[59.202px] relative shrink-0 w-[342.534px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.998px] items-start relative size-full">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function TodayScreenNew1() {
  return (
    <div className="content-stretch flex gap-[11.996px] items-start relative shrink-0 w-full" data-name="TodayScreenNew">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <TodayScreenNew1 />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="h-[0.995px] shrink-0 w-full" data-name="Container" />;
}

function StateCard1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] overflow-clip rounded-[16px] top-[369.2px] w-[406.524px]" data-name="StateCard">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0.1)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[16px]" />
      <Container12 />
      <Container15 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 2">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#f2ede5] text-[18px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        What can I do?
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#fe7a2e] text-[12px] top-[0.08px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        PRIMARY ACTION
      </p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#f2ede5] text-[20px] top-[-0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Take a 10–15 min walk
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[58.797px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.6px] left-0 text-[#afd2e0] text-[14px] top-[-0.46px] w-[314px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Light movement helps your nervous system shift out of stress — especially effective at this cycle phase.
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[161.809_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.54px] border-solid border-white inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f2ede5] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            Start
          </p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f2ede5] flex-[161.809_0_0] min-h-px min-w-px relative rounded-[14px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.54px] border-solid border-white inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#142934] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            Done
          </p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[11.996px] h-[50.064px] items-start pr-[-0.008px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function NowAction() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="NowAction">
      <div aria-hidden="true" className="absolute bg-[rgba(12,31,39,0.5)] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[20px]" />
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[19px] items-start p-[16px] relative w-full">
          <Text11 />
          <Heading2 />
          <Paragraph2 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function TodayScreenNew2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[12px] top-[501.4px] w-[406.524px]" data-name="TodayScreenNew">
      <Heading1 />
      <NowAction />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[2015.23px] relative shrink-0 w-full" data-name="Container">
      <StateCard />
      <StateCard1 />
      <TodayScreenNew2 />
    </div>
  );
}

function App2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852.415px] items-start left-0 pt-[40px] top-0 w-[430.524px]" data-name="App">
      <Container4 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[19.995px] relative shrink-0 w-[9.989px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[20px] left-0 text-[14px] text-white top-[-0.46px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          H
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#122f3a] content-stretch flex items-center justify-center left-0 px-[15.005px] py-[0.54px] rounded-[18102700px] size-[39.999px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.54px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[18102700px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Text12 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute left-[24px] size-[39.999px] top-[46px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9953 19.9953">
        <g clipPath="url(#clip0_146_1331)" id="Icon">
          <path d={svgPaths.p34233e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66628" />
          <path d="M16.6628 2.49942V5.83198" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66628" />
          <path d="M18.3291 4.1657H14.9965" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66628" />
          <path d="M3.33256 14.1634V15.8296" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66628" />
          <path d="M4.1657 14.9965H2.49942" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66628" />
        </g>
        <defs>
          <clipPath id="clip0_146_1331">
            <rect fill="white" height="19.9953" width="19.9953" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center left-[366.53px] pl-[9.998px] pr-[10.007px] py-[0.54px] rounded-[18102700px] size-[39.999px] top-[46px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.54px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[18102700px]" />
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9996 15.9996">
        <g id="Icon">
          <path d={svgPaths.p10354e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.3333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[18102700px] shrink-0 size-[31.999px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.54px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[18102700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[6.997px] pr-[9.003px] py-[0.54px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[14.997px] left-[9.24px] top-0 w-[21.513px]" data-name="Text">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.6)] top-[-0.46px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sat
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[17.997px] left-[9.64px] top-[16.99px] w-[20.703px]" data-name="Text">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[18px] text-white top-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        22
      </p>
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#fe7a2e] left-[18px] rounded-[18102700px] shadow-[0px_0px_8px_0px_#fe7a2e] size-[3.996px] top-[40.99px]" data-name="Container" />;
}

function Container20() {
  return (
    <div className="h-[44.981px] relative shrink-0 w-[39.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text13 />
        <Text14 />
        <Container21 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9996 15.9996">
        <g id="Icon">
          <path d={svgPaths.p2f23d800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.3333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[18102700px] shrink-0 size-[31.999px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.54px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[18102700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.995px] pr-[7.006px] py-[0.54px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[23.999px] h-[44.981px] items-center left-[139.26px] top-[45.5px] w-[151.997px]" data-name="Container">
      <Button3 />
      <Container20 />
      <Button4 />
    </div>
  );
}

function App3() {
  return (
    <div className="absolute bg-gradient-to-b from-[#122f3a] h-[99.994px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(18,47,58,0.8)] w-[430.524px]" data-name="App">
      <Container17 />
      <Button2 />
      <Container19 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[1968px] left-0 top-0 w-[431px]" data-name="Container">
      <App2 />
      <App3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[1868px] left-0 shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] top-0 w-[431px]" data-name="Container">
      <App1 />
      <Container3 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#0b1c23] h-[2040px] left-0 top-0 w-[431px]" data-name="App">
      <Container />
    </div>
  );
}

export default function ImplementFeature() {
  return (
    <div className="bg-white relative size-full" data-name="Implement Feature">
      <Aa />
      <App />
    </div>
  );
}