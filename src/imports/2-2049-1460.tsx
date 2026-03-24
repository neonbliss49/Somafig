import svgPaths from "./svg-715vfgbge6";
import imgImage from "figma:asset/c3a9e0d26438d10a4790c66aac563e15393ba22b.png";

function Image() {
  return (
    <div className="absolute h-[844px] left-0 opacity-30 top-0 w-[390px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return <div className="absolute h-[844px] left-0 mix-blend-multiply top-0 w-[390px]" data-name="Container" style={{ backgroundImage: "linear-gradient(179.957deg, rgba(10, 26, 33, 0.5) 13.921%, rgba(10, 26, 33, 0.15) 56.948%, rgba(10, 26, 33, 0.5) 99.974%)" }} />;
}

function Bg() {
  return (
    <div className="absolute bg-[#142934] h-[844px] left-0 overflow-clip top-0 w-[390px]" data-name="BG">
      <Image />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] text-white whitespace-nowrap">Low recovery capacity</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">3 adjustments for today</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[249px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold_Italic',sans-serif] font-semibold italic leading-[18px] relative shrink-0 text-[#fe7a2e] text-[12px] whitespace-nowrap">Watch out: Energy dip likely in 3–4 hours</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[300px]" data-name="Card Header">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">28</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M6 2.5V9.5" id="Vector" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.5 6L6 9.5L2.5 6" id="Vector_2" stroke="var(--stroke-0, #FE7A2E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[36.258px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text />
        <Icon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#afd2e0] text-[12px] top-px uppercase whitespace-nowrap">HRV</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pr-px relative size-full">
        <Container4 />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[58.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">5h 42m</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[36.383px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#afd2e0] text-[12px] top-px uppercase whitespace-nowrap">SLEEP</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pr-px relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[20.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">68</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#afd2e0] text-[12px] top-px uppercase whitespace-nowrap">RHR</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pr-px relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[41.852px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#fe7a2e] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">+0.3°</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#afd2e0] text-[12px] top-px uppercase whitespace-nowrap">TEMP</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start py-[13px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container3 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[13.117px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1172 14">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.p1791d400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0931" />
          <path d={svgPaths.pc3551c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0931" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.8px] uppercase w-[270px]">LUTEAL PHASE · DAY 18 · PERIOD IN ~10 DAYS</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[51px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text8 />
    </div>
  );
}

function StateCard() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 to-[rgba(255,255,255,0.2)] w-full" data-name="StateCard">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <CardHeader />
        <Container2 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.5)] h-[166px] left-[19px] rounded-[16777200px] to-[#fe7a2e] top-[54px] via-1/2 via-[rgba(254,122,46,0.7)] w-[2px]" data-name="Container" />;
}

function Icon2() {
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
    <div className="bg-[#2a677f] relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Screen2Causality">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Screen2Causality1() {
  return (
    <div className="flex-[278_0_0] min-h-px min-w-px relative" data-name="Screen2Causality">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative w-full whitespace-nowrap">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-white">Sleep depth reduced</p>
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)]" style={{ fontVariationSettings: "'opsz' 9" }}>
          3 short nights
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] h-[49.25px] items-center relative shrink-0 w-full" data-name="Container">
      <Screen2Causality />
      <Screen2Causality1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2049_1119)" id="Icon">
          <path d={svgPaths.p1e4f5a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2049_1119">
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
        <Icon3 />
      </div>
    </div>
  );
}

function Screen2Causality3() {
  return (
    <div className="flex-[278_0_0] min-h-px min-w-px relative" data-name="Screen2Causality">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] relative w-full whitespace-nowrap">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[18px] text-white">HRV dropped 15%</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[15px] text-[rgba(255,255,255,0.75)]">Sign of nervous system load</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] h-[49.25px] items-center relative shrink-0 w-full" data-name="Container">
      <Screen2Causality2 />
      <Screen2Causality3 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#fe7a2e] left-[14px] rounded-[16777200px] size-[12px] top-[14px]" data-name="Container" />;
}

function Container16() {
  return <div className="absolute border border-[rgba(255,255,255,0.2)] border-solid left-0 rounded-[16777200px] size-[40px] top-0" data-name="Container" />;
}

function Screen2Causality4() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Screen2Causality">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Screen2Causality5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-[278px]" data-name="Screen2Causality">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[20px] text-white tracking-[-0.425px] whitespace-nowrap">Reduced recovery capacity</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Screen2Causality4 />
      <Screen2Causality5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white tracking-[2.5px] uppercase whitespace-nowrap">{`WHAT'S DRIVING THIS`}</p>
      <Container10 />
      <Container11 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Italic',sans-serif] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium font-normal italic leading-[0] min-h-px min-w-px relative text-[#f2ede5] text-[0px] text-[24px] tracking-[0.0703px]">
        <span className="leading-[normal]">{`"Your body is shifting energy from `}</span>
        <span className="leading-[normal] text-[#fe7a2e]">performance</span>
        <span className="leading-[normal]">{` to `}</span>
        <span className="leading-[normal] text-[#fe7a2e]">regulation</span>
        <span className="leading-[normal]">{`."`}</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Paragraph1 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[87px] leading-[1.4] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] w-[302px]">Your nervous system is prioritizing restoration. This is a natural response to your current hormonal phase. Pushing hard now will likely extend recovery.</p>
    </div>
  );
}

function Container18() {
  return <div className="bg-[#6fcef4] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="bg-[#2a677f] content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative rounded-[16777200px] shrink-0" data-name="Container">
      <Container18 />
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[12px] text-white tracking-[1px] uppercase whitespace-nowrap">CONSERVING ENERGY</p>
    </div>
  );
}

function InterpretationDecision() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 to-[rgba(255,255,255,0.2)] w-full" data-name="InterpretationDecision">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame2 />
        <Container17 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[358px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Medium_Italic',sans-serif] font-medium italic leading-[normal] left-0 text-[#afd2e0] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Your plan adjusts to conserve energy.</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[358px]" data-name="Heading 2">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-0 text-[20px] text-white top-0 tracking-[-0.4492px] whitespace-nowrap">What can I do?</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Paragraph2 />
      <Heading1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#fe7a2e] text-[14px] tracking-[1.2px] uppercase">PRIMARY ACTION</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#f2ede5] text-[24px] tracking-[-0.4492px]">Take a 10–15 min walk</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Header />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] w-full">Light movement helps your nervous system shift out of stress — especially effective at this cycle phase.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[150.5_0_0] h-[52px] min-h-px min-w-px relative rounded-[14px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-[75.4px] not-italic text-[14px] text-center text-white top-[15.5px] tracking-[-0.1504px] whitespace-nowrap">Start</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white flex-[147.5_0_0] h-[52px] min-h-px min-w-px relative rounded-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-[74.17px] not-italic text-[#0e1e26] text-[14px] text-center top-[15.5px] tracking-[-0.1504px] whitespace-nowrap">Done</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[310px]">
      <Content />
      <Container19 />
    </div>
  );
}

function InterpretationDecision1() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(92,55,25,0.5)] items-start p-[24px] relative rounded-[16px] shrink-0 to-[rgba(254,122,46,0.5)] w-[350px]" data-name="InterpretationDecision">
      <Frame3 />
    </div>
  );
}

function NowAction() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="NowAction">
      <Frame4 />
      <InterpretationDecision1 />
    </div>
  );
}

function DiscoveryCard() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="DiscoveryCard">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#fe7a2e] text-[14px] tracking-[1.5px] uppercase whitespace-nowrap">{`TODAY'S DISCOVERY`}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[0px] text-[24px] text-white tracking-[0.0703px] w-[min-content]">
        <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] leading-[30px]">{`Your deep sleep improved `}</span>
        <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[30px] text-[#fe7a2e]">22%</span>
        <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] leading-[30px]">{` since starting Magnesium`}</span>
      </p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] w-[min-content]">Consistent across 4 nights · Oura sleep data + experiment tracking</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Heading 2">
      <p className="font-['Plus_Jakarta_Sans:Italic',sans-serif] font-normal italic leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] tracking-[-0.1504px]">Small adjustments that protect your recovery.</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-white tracking-[-0.4492px]">Through the Day</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.75)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.3125px] w-full">Eat steady, protein-focused meals</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] w-full">Your system is sensitive to blood sugar dips right now</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
            <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function ThroughTheDayItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start py-[12px] relative w-full">
        <Button2 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.75)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Limit caffeine after 14:00</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[85.992px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[#fe7a2e] text-[12px] top-px tracking-[1px] uppercase whitespace-nowrap">AFTERNOON</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Container24 />
      <Text9 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
            <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function ThroughTheDayItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start py-[12px] relative w-full">
        <Button3 />
        <Frame5 />
        <Container25 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.75)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white w-full">Reduce cognitive load</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] w-full">{`It's Saturday — a good day to let your system rest`}</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
            <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[18px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function ThroughTheDayItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start py-[12px] relative w-full">
        <Button4 />
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ThroughTheDayItem />
      <ThroughTheDayItem1 />
      <ThroughTheDayItem2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container21 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[20px] text-white tracking-[-0.4492px] whitespace-nowrap">Tonight’s focus</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[358px]" data-name="Heading 2">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.74)] tracking-[-0.1504px] whitespace-nowrap">Tonight is about recovery support.</p>
      <Frame6 />
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.75)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.3125px] w-full">Progesterone</p>
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[18px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] w-full">Supports deep sleep at this cycle phase</p>
    </div>
  );
}

function ThroughTheDayItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start py-[12px] relative w-full">
        <Button5 />
        <Container30 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.75)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.3125px] w-full">Magnesium 400mg</p>
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[18px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] w-full">Experiment Day 4 of 7</p>
    </div>
  );
}

function ThroughTheDayItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start py-[12px] relative w-full">
        <Button6 />
        <Container31 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(255,255,255,0.75)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[-0.3125px] w-full">Sleep before 23:00</p>
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[18px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] w-full">Experiment Day 4 of 7</p>
    </div>
  );
}

function ThroughTheDayItem5() {
  return (
    <div className="relative shrink-0 w-full" data-name="ThroughTheDayItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start py-[12px] relative w-full">
        <Button7 />
        <Container32 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ThroughTheDayItem3 />
      <ThroughTheDayItem4 />
      <ThroughTheDayItem5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container29 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2049_1122)" id="Icon">
          <path d={svgPaths.p115b3700} id="Vector" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.875" />
          <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.875" />
          <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.875" />
          <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.875" />
          <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="var(--stroke-0, #AFD2E0)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.35" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_2049_1122">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[42px] left-[26px] top-0 w-[332px]" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Italic',sans-serif] font-normal italic leading-[21px] left-0 text-[14px] text-white top-0 tracking-[-0.1504px] w-[316px]">{`"Day 4 of this pattern. Each time you've adjusted early, recovery improved. You know your body."`}</p>
    </div>
  );
}

function ValidatingMoment() {
  return (
    <div className="h-[42px] relative shrink-0 w-[358px]" data-name="ValidatingMoment">
      <Icon7 />
      <Paragraph3 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#fe7a2e] text-[14px] tracking-[1.2px] uppercase">active experiment</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#f2ede5] text-[24px] tracking-[-0.4492px]">Magnesium Experiment</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <Header1 />
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.75)] w-full">Deep sleep +18min on average</p>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#fe7a2e] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container35() {
  return <div className="bg-[#fe7a2e] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container36() {
  return <div className="bg-[#fe7a2e] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container37() {
  return <div className="bg-[#fe7a2e] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container38() {
  return <div className="bg-[rgba(255,255,255,0.3)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container39() {
  return <div className="bg-[rgba(255,255,255,0.3)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container40() {
  return <div className="bg-[rgba(255,255,255,0.3)] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[6px] h-[8px] items-start relative shrink-0 w-[318px]" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[310px]">
      <Content1 />
      <Container33 />
    </div>
  );
}

function InterpretationDecision2() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.1)] items-start p-[24px] relative rounded-[16px] shrink-0 to-[rgba(255,255,255,0.2)] w-[350px]" data-name="InterpretationDecision">
      <Frame7 />
    </div>
  );
}

function NowAction1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="NowAction">
      <InterpretationDecision2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M6 1.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M12 1.5V4.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d={svgPaths.p13693a10} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M2.25 7.5H15.75" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M6 10.5H6.0075" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M9 10.5H9.0075" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M12 10.5H12.0075" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M6 13.5H6.0075" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M9 13.5H9.0075" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M12 13.5H12.0075" id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start py-[16px] relative w-full">
        <Icon8 />
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[14px] text-white tracking-[-0.1504px]">Next few days may stay heavy. Follicular phase in ~10 days typically brings relief.</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[18px] top-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2049_1131)" id="Icon">
          <path d={svgPaths.p3dc49580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M9 4.5V9L12 10.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
        <defs>
          <clipPath id="clip0_2049_1131">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal gap-[3px] h-[40.594px] items-start left-[30px] top-[16px] w-[261px]" data-name="Container">
      <p className="leading-[19.6px] relative shrink-0 text-[14px] text-white tracking-[-0.1504px] w-full">Gynecologist in 12 days</p>
      <p className="leading-[18px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] w-full">Collecting: HRV trend, sleep, symptoms, cycle</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[342px] size-[16px] top-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[73.594px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <Container44 />
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.pac54200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(42,103,127,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start py-[16px] relative w-full">
        <Icon11 />
        <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] min-h-px min-w-px relative text-[14px] text-white tracking-[-0.1504px]">Your HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles needed.</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
      <Container45 />
    </div>
  );
}

function LookingAhead() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 to-[rgba(255,255,255,0.2)] w-full" data-name="LookingAhead">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
        <p className="font-['Plus_Jakarta_Sans:Italic',sans-serif] font-normal italic leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.75)] tracking-[-0.1504px] whitespace-nowrap">What Somatiq sees coming.</p>
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#f2ede5] text-[20px] tracking-[-0.4492px] whitespace-nowrap">Looking ahead</p>
        <Container41 />
      </div>
    </div>
  );
}

function TodayScreenNew() {
  return (
    <div className="relative shrink-0 w-full" data-name="TodayScreenNew">
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-[48px] px-[20px] relative w-full">
        <StateCard />
        <Container9 />
        <InterpretationDecision />
        <NowAction />
        <DiscoveryCard />
        <Container20 />
        <Container28 />
        <ValidatingMoment />
        <NowAction1 />
        <LookingAhead />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex flex-col h-[844px] items-start relative shrink-0 w-full" data-name="App">
      <TodayScreenNew />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[844px] items-start left-0 top-[112px] w-[390px]" data-name="Container">
      <App />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[9.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[21px] left-0 text-[14px] text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          H
        </p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#122f3a] content-stretch flex items-center justify-center left-0 pl-[15px] pr-[15.008px] py-[0.5px] rounded-[16777200px] size-[40px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Text10 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute left-[24px] size-[40px] top-[46px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2049_1139)" id="Icon">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2049_1139">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center left-[326px] px-[10px] py-[0.5px] rounded-[16777200px] size-[40px] top-[46px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center left-0 px-[8px] py-[0.5px] rounded-[16777200px] size-[32px] top-[5.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center left-[120px] px-[8px] py-[0.5px] rounded-[16777200px] size-[32px] top-[5.5px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
      <Icon14 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[15px] left-[9.23px] top-0 w-[21.523px]" data-name="Text">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.6)] top-0 tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sat
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[18px] left-[9.65px] top-[17px] w-[20.703px]" data-name="Text">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[18px] text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        22
      </p>
    </div>
  );
}

function Container50() {
  return <div className="absolute bg-[#fe7a2e] left-[18px] rounded-[16777200px] shadow-[0px_0px_8px_0px_#fe7a2e] size-[4px] top-[39px]" data-name="Container" />;
}

function Container49() {
  return (
    <div className="absolute h-[43px] left-[56px] top-[-2px] w-[40px]" data-name="Container">
      <Text11 />
      <Text12 />
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[43px] left-[119px] top-[44.5px] w-[152px]" data-name="Container">
      <Button9 />
      <Button10 />
      <Container49 />
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute bg-gradient-to-b from-[#122f3a] h-[100px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(18,47,58,0.8)] w-[390px]" data-name="Header">
      <Container46 />
      <Button8 />
      <Container48 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#142934] relative rounded-[40px] size-full" data-name="2">
      <Bg />
      <Container1 />
      <Header2 />
    </div>
  );
}