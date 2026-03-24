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

function Container2() {
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

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center pr-px relative size-full">
        <Container2 />
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

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-r border-solid inset-0 pointer-events-none" />
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

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-r border-solid inset-0 pointer-events-none" />
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

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start py-[13px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.3)] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container1 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#fe7a2e] text-[14px] top-[-0.92px] tracking-[1px] uppercase whitespace-nowrap">Outlook without adjustments</p>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-white left-0 rounded-[18102700px] size-[3.996px] top-[8px]" data-name="Container" />;
}

function ListItem() {
  return (
    <div className="h-[20.998px] relative shrink-0 w-[350.525px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container8 />
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] left-[12px] text-[14px] text-white top-[0.08px] whitespace-nowrap">Short-term: Energy taper within 3–4 hours</p>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-white left-0 rounded-[18102700px] size-[3.996px] top-[8px]" data-name="Container" />;
}

function ListItem1() {
  return (
    <div className="h-[20.998px] relative shrink-0 w-[350.525px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] left-[12px] text-[14px] text-white top-[0.08px] whitespace-nowrap">Next-day: Slightly increased recovery needs</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[3.996px] h-[45.993px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[350.525px]" data-name="Container">
      <Paragraph1 />
      <List />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#fe7a2e] text-[14px] top-[-0.92px] tracking-[1px] uppercase whitespace-nowrap">Hormonal context</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[83.994px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[21px] left-0 text-[14px] text-white top-[0.08px] w-[323px]">Your current luteal phase makes recovery more sensitive to poor sleep. Endometriosis adds additional baseline demand. Adjusting early has a stronger impact today.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[350.525px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative">
        <Container7 />
        <Container10 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center leading-[1.5] relative text-[14px] text-white w-full">
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full whitespace-pre-wrap">
          {`On similar days where you adjusted early, your next-day recovery improved significantly. `}
          <br aria-hidden="true" />
          This pattern has been consistent across
        </p>
        <p className="font-['Plus_Jakarta_Sans:Bold_Italic',sans-serif] font-bold italic relative shrink-0 w-full">4 of 6 similar cycles</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(20,42,51,0.7)] relative rounded-[12px] shrink-0 w-[350.525px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function StateCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[0.54px] relative shrink-0 w-full" data-name="StateCard">
      <div aria-hidden="true" className="absolute border-[rgba(42,103,127,0.12)] border-solid border-t-[0.54px] inset-0 pointer-events-none" />
      <Frame2 />
      <Container11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.525px]" data-name="Container">
      <StateCard1 />
    </div>
  );
}

export default function StateCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.08)] gap-[16px] items-start p-[24px] relative rounded-[16px] size-full to-[rgba(255,255,255,0.15)]" data-name="StateCard">
      <CardHeader />
      <Container />
      <Container6 />
    </div>
  );
}