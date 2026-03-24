import svgPaths from "./svg-x184528jmw";
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
  return <div className="absolute bg-gradient-to-b from-[#122f3a] h-[852.415px] left-0 mix-blend-difference to-[#122f3a] top-0 via-1/2 via-[rgba(18,47,58,0.5)] w-[430.524px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(42,103,127,0.2)] h-[852.415px] left-0 mix-blend-hard-light top-0 w-[430.524px]" data-name="Container" />;
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
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[12px] text-white top-[0.08px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
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
    <div className="content-stretch flex flex-col items-start overflow-clip py-[16px] relative rounded-[16px] shrink-0 w-full" data-name="StateCard" style={{ backgroundImage: "linear-gradient(91.739deg, rgba(255, 255, 255, 0.04) 6.415%, rgba(42, 103, 127, 0.1) 99.537%)" }}>
      <Container5 />
      <Container11 />
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#fe7a2e] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Your Morning Insight
        </p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[39.204px] opacity-90 relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[19.6px] min-h-px min-w-px relative text-[#f2ede5] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Low-recovery phase · sleep debt + hormonal shift · conserving
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative w-full">
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function TodayScreenNew1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="TodayScreenNew">
      <Container13 />
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

function Container14() {
  return <div className="h-[0.995px] shrink-0 w-full" data-name="Container" />;
}

function StateCard1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="StateCard" style={{ backgroundImage: "linear-gradient(4.15573deg, rgba(255, 255, 255, 0.08) 13.442%, rgba(42, 103, 127, 0.2) 86.091%)" }}>
      <Container12 />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.999px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#f2ede5] text-[20px] top-[-0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Take a 10–15 min walk
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#fe7a2e] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        PRIMARY ACTION
      </p>
      <Heading2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.6px] min-h-px min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 9" }}>
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

function Container15() {
  return (
    <div className="content-stretch flex gap-[11.996px] h-[50.064px] items-start pr-[-0.008px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function NowAction() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="NowAction" style={{ backgroundImage: "linear-gradient(92.0353deg, rgba(255, 255, 255, 0.04) 6.415%, rgba(42, 103, 127, 0.1) 99.537%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[19px] items-start p-[16px] relative w-full">
          <Frame2 />
          <Paragraph2 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function TodayScreenNew2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="TodayScreenNew">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#f2ede5] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        What can I do?
      </p>
      <NowAction />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#88deff] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Today's Discovery`}</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 3">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20.8px] relative shrink-0 text-[#f2ede5] text-[16px] w-[339px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Your deep sleep improved 22% since starting Magnesium
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] min-h-px min-w-px relative text-[#afd2e0] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Consistent across 4 nights · Oura sleep data + experiment tracking
      </p>
    </div>
  );
}

function NowAction1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="NowAction" style={{ backgroundImage: "linear-gradient(92.5567deg, rgba(255, 255, 255, 0.04) 6.415%, rgba(42, 103, 127, 0.1) 99.537%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[19px] items-start p-[16px] relative w-full">
          <Frame3 />
          <Heading3 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function TodayScreenNew3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TodayScreenNew">
      <NowAction1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-[382.525px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#f2ede5] text-[20px] top-[0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Through The Day
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[19.995px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.079px] border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[259.122px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20.8px] relative shrink-0 text-[#f2ede5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Eat steady, protein-focused meals
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[322.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pr-[63.417px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[322.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.8px] left-0 text-[#afd2e0] text-[14px] top-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Your system is sensitive to blood sugar dips right now
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[322.539_0_0] h-[41.592px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <Container18 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33313 5.33322">
            <path d={svgPaths.pbce3840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function ThroughTheDayItem() {
  return (
    <div className="h-[66.123px] relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-start pt-[11.995px] relative size-full">
        <Button2 />
        <Container17 />
        <Container19 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[19.995px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.079px] border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[187.604px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20.8px] relative shrink-0 text-[#f2ede5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Limit caffeine after 14:00
        </p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-[73.254px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#fe7a2e] text-[12px] top-[0.08px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          AFTERNOON
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[322.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Paragraph6 />
        <Text11 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[322.539_0_0] h-[20.796px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33313 5.33322">
            <path d={svgPaths.pbce3840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function ThroughTheDayItem1() {
  return (
    <div className="h-[46.524px] relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-start pt-[11.996px] relative size-full">
        <Button3 />
        <Container20 />
        <Container22 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[19.995px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.079px] border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[279.598px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20.8px] relative shrink-0 text-[#f2ede5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Reduce cognitive load where you can
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[322.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pr-[42.941px] relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[322.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.8px] left-0 text-[#aaa] text-[14px] top-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`It's Saturday — a good day to let your system rest`}</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[322.539_0_0] h-[41.592px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <Container24 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33313 5.33322">
            <path d={svgPaths.pbce3840} id="Vector" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function ThroughTheDayItem2() {
  return (
    <div className="h-[65.583px] relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-start pt-[11.995px] relative size-full">
        <Button4 />
        <Container23 />
        <Container25 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <ThroughTheDayItem />
        <ThroughTheDayItem1 />
        <ThroughTheDayItem2 />
      </div>
    </div>
  );
}

function TodayScreenNew4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[212.227px] items-start relative shrink-0 w-full" data-name="TodayScreenNew">
      <Heading1 />
      <Container16 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#fe7a2e] text-[12px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        tonight
      </p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#f2ede5] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Evening
        </p>
        <Text12 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[19.995px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.079px] border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[259.122px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20.8px] relative shrink-0 text-[#f2ede5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Progesterone
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[322.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pr-[63.417px] relative size-full">
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[322.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[16.8px] left-0 text-[#afd2e0] text-[14px] top-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Supports deep sleep at this cycle phase
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[322.539_0_0] h-[41.592px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <Container28 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33313 5.33322">
            <path d={svgPaths.pbce3840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text13() {
  return <div className="absolute h-[18px] left-[317.27px] top-[12px] w-[54px]" data-name="Text" />;
}

function ThroughTheDayItem3() {
  return (
    <div className="h-[66.123px] relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-start pt-[11.995px] relative size-full">
        <Button5 />
        <Container27 />
        <Container29 />
        <Text13 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[19.995px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.079px] border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[259.122px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20.8px] relative shrink-0 text-[#f2ede5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Magnesium 400mg
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[322.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pr-[63.417px] relative size-full">
        <Paragraph11 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[322.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[16.8px] left-0 text-[#afd2e0] text-[14px] top-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Experiment Day 4 of 7
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[322.539_0_0] h-[41.592px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <Container31 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33313 5.33322">
            <path d={svgPaths.pbce3840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function ThroughTheDayItem4() {
  return (
    <div className="h-[66.123px] relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-start pt-[11.995px] relative size-full">
        <Button6 />
        <Container30 />
        <Container32 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[19.995px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.079px] border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[259.122px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20.8px] relative shrink-0 text-[#f2ede5] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Sleep before 23:00
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20.796px] relative shrink-0 w-[322.539px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pr-[63.417px] relative size-full">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16.8px] relative shrink-0 w-[322.539px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[16.8px] left-0 text-[#afd2e0] text-[14px] top-[0.54px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Try to avoid screen 30 minutes before bed
        </p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[322.539_0_0] h-[41.592px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <Container34 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33313 5.33322">
            <path d={svgPaths.pbce3840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function ThroughTheDayItem5() {
  return (
    <div className="h-[66.123px] relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-start pt-[11.995px] relative size-full">
        <Button7 />
        <Container33 />
        <Container35 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative w-full">
        <ThroughTheDayItem3 />
        <ThroughTheDayItem4 />
        <ThroughTheDayItem5 />
      </div>
    </div>
  );
}

function TodayScreenNew5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="TodayScreenNew">
      <Heading4 />
      <Container26 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9934 13.9934">
        <g clipPath="url(#clip0_148_399)" id="Icon">
          <path d={svgPaths.p1662de00} id="Vector" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.16611" />
          <path d="M11.6611 1.74917V4.0814" id="Vector_2" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.16611" />
          <path d="M12.8273 2.91529H10.495" id="Vector_3" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.16611" />
          <path d="M2.33223 9.91197V11.0781" id="Vector_4" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.16611" />
          <path d="M2.91529 10.495H1.74917" id="Vector_5" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.16611" />
        </g>
        <defs>
          <clipPath id="clip0_148_399">
            <rect fill="white" height="13.9934" width="13.9934" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative self-stretch" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Italic',sans-serif] font-normal italic leading-[19.6px] min-h-px min-w-px relative text-[14px] text-[rgba(255,255,255,0.8)]" style={{ fontVariationSettings: "'opsz' 9" }}>{`Day 4 of this pattern. Each time you've adjusted early, recovery improved. You know your body.`}</p>
    </div>
  );
}

function ValidatingMoment() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="ValidatingMoment">
      <Icon8 />
      <Paragraph15 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#88deff] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        active experiment
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#fe7a2e] text-[12px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        DAY 4 OF 7
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[349.446px]">
      <Text14 />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2ede5] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Magnesium before sleep
      </p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 3">
      <Frame5 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:Medium',sans-serif] font-medium leading-[18px] min-h-px min-w-px relative text-[#afd2e0] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Consistent across 4 nights · Oura sleep data + experiment tracking
      </p>
    </div>
  );
}

function NowAction2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="NowAction" style={{ backgroundImage: "linear-gradient(-59.5061deg, rgba(255, 255, 255, 0.08) 27.716%, rgba(254, 122, 46, 0.2) 93.909%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Frame4 />
          <Heading5 />
          <Paragraph16 />
        </div>
      </div>
    </div>
  );
}

function TodayScreenNew6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="TodayScreenNew">
      <NowAction2 />
    </div>
  );
}

function TodayScreen() {
  return (
    <div className="h-[19.498px] relative shrink-0 w-[382.525px]" data-name="TodayScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[16px] text-white top-[0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Looking ahead
        </p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.3333 3.99991">
            <path d="M0.666652 0.666652V3.33326" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.3333 3.99991">
            <path d="M0.666652 0.666652V3.33326" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 13.333">
            <path d={svgPaths.p157da900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.333 1.3333">
            <path d="M0.666652 0.666652H12.6664" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.62%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33997 1.3333">
            <path d="M0.666652 0.666652H0.673319" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[49.96%] top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33997 1.3333">
            <path d="M0.666652 0.666652H0.673319" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_33.29%_41.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33997 1.3333">
            <path d="M0.666652 0.666652H0.673319" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[33.33%] right-[66.62%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33997 1.3333">
            <path d="M0.666652 0.666652H0.673319" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33997 1.3333">
            <path d="M0.666652 0.666652H0.673319" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[66.67%] right-[33.29%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33997 1.3333">
            <path d="M0.666652 0.666652H0.673319" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[342.526px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[15px] text-white top-[-1px] w-[339px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          Next few days may stay heavy. Follicular phase in ~10 days typically brings relief.
        </p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[350.525_0_0] h-[41.98px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph17 />
      </div>
    </div>
  );
}

function PrepareItem() {
  return (
    <div className="h-[74.519px] relative shrink-0 w-full" data-name="PrepareItem">
      <div aria-hidden="true" className="absolute border-b-[0.54px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start pb-[0.54px] pt-[16px] relative size-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6663 14.6663">
            <path d={svgPaths.p2ff5bc80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-25%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.3333 3.99991">
            <path d="M0.666652 3.33326V0.666652" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33997 1.3333">
            <path d="M0.666652 0.666652H0.673319" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20.99px] relative shrink-0 w-[310.526px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] min-h-px min-w-px relative text-[15px] text-white" style={{ fontVariationSettings: "'opsz' 9" }}>
          Gynecologist in 12 days
        </p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[33.786px] relative shrink-0 w-[310.526px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.9px] left-0 text-[13px] text-white top-0 w-[308px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          Collecting: HRV trend, sleep patterns, symptom log, cycle data
        </p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[318.526_0_0] h-[58.772px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.996px] items-start relative size-full">
        <Paragraph18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9996 15.9996">
        <g id="Icon">
          <path d="M3.33326 7.99982H12.6664" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          <path d={svgPaths.p1a50c200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
        </g>
      </svg>
    </div>
  );
}

function PrepareItem1() {
  return (
    <div className="h-[91.311px] relative shrink-0 w-full" data-name="PrepareItem">
      <div aria-hidden="true" className="absolute border-b-[0.54px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start pb-[0.54px] pt-[16px] relative size-full">
        <Container38 />
        <Container39 />
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6663 14.6663">
            <path d={svgPaths.p11bfa80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[342.526px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[15px] text-white top-[-1px] w-[342px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          Your HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles needed.
        </p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[350.525_0_0] h-[41.98px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph20 />
      </div>
    </div>
  );
}

function PrepareItem2() {
  return (
    <div className="h-[73.979px] relative shrink-0 w-full" data-name="PrepareItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start pt-[16px] relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function TodayScreen1() {
  return (
    <div className="h-[239.809px] relative shrink-0 w-full" data-name="TodayScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <PrepareItem />
        <PrepareItem1 />
        <PrepareItem2 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[275.307px] items-start relative shrink-0 w-full" data-name="Section">
      <TodayScreen />
      <TodayScreen1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center px-[16px] py-[48px] relative w-full">
          <StateCard />
          <StateCard1 />
          <TodayScreenNew2 />
          <TodayScreenNew3 />
          <TodayScreenNew4 />
          <TodayScreenNew5 />
          <ValidatingMoment />
          <TodayScreenNew6 />
          <Section />
        </div>
      </div>
    </div>
  );
}

function App2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852.415px] items-start left-0 pt-[72px] top-0 w-[430.524px]" data-name="App">
      <Container4 />
    </div>
  );
}

function Text15() {
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

function Container43() {
  return (
    <div className="absolute bg-[#122f3a] content-stretch flex items-center justify-center left-0 px-[15.005px] py-[0.54px] rounded-[18102700px] size-[39.999px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.54px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[18102700px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Text15 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute left-[24px] size-[39.999px] top-[46px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Icon13() {
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

function Button8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center left-[366.53px] pl-[9.998px] pr-[10.007px] py-[0.54px] rounded-[18102700px] size-[39.999px] top-[46px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.54px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[18102700px]" />
      <Icon13 />
    </div>
  );
}

function Icon14() {
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

function Button9() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[18102700px] shrink-0 size-[31.999px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.54px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[18102700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[6.997px] pr-[9.003px] py-[0.54px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[14.997px] left-[9.24px] top-0 w-[21.513px]" data-name="Text">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.6)] top-[-0.46px] tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sat
      </p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[17.997px] left-[9.64px] top-[16.99px] w-[20.703px]" data-name="Text">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[18px] text-white top-[0.3px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        22
      </p>
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-[#fe7a2e] left-[18px] rounded-[18102700px] shadow-[0px_0px_8px_0px_#fe7a2e] size-[3.996px] top-[40.99px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="h-[44.981px] relative shrink-0 w-[39.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text16 />
        <Text17 />
        <Container46 />
      </div>
    </div>
  );
}

function Icon15() {
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

function Button10() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-[18102700px] shrink-0 size-[31.999px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.54px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[18102700px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[8.995px] pr-[7.006px] py-[0.54px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex gap-[23.999px] h-[44.981px] items-center left-[139.26px] top-[45.5px] w-[151.997px]" data-name="Container">
      <Button9 />
      <Container45 />
      <Button10 />
    </div>
  );
}

function App3() {
  return (
    <div className="absolute bg-gradient-to-b from-[#122f3a] h-[99.994px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(18,47,58,0.8)] w-[430.524px]" data-name="App">
      <Container42 />
      <Button8 />
      <Container44 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[2156px] left-0 top-0 w-[431px]" data-name="Container">
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
    <div className="absolute bg-[#0b1c23] h-[2188px] left-0 top-0 w-[431px]" data-name="App">
      <Container />
    </div>
  );
}

export default function ImplementFeature() {
  return (
    <div className="relative size-full" data-name="Implement Feature">
      <Aa />
      <App />
    </div>
  );
}