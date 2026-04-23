import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#333333]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <EducationSection />
        <WhyUsSection />
        <ClientFitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fdfdfd] border-b border-[#e8e8e8] shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-navy flex items-center justify-center">
             <span className="text-white font-bold text-xs">AX</span>
          </div>
          <span className="font-bold tracking-tight text-xl text-navy">AX PARTNERS</span>
        </Link>
        <nav className="hidden md:flex gap-10 items-center font-sans text-sm font-medium">
          <Link href="#about" className="text-[#767676] hover:text-navy transition-colors">About</Link>
          <Link href="#services" className="text-[#767676] hover:text-navy transition-colors">Services</Link>
          <Link href="#approach" className="text-[#767676] hover:text-navy transition-colors">Approach</Link>
          <Link href="#education" className="text-[#767676] hover:text-navy transition-colors">Education</Link>
          <Link href="#contact" className="bg-navy text-white px-6 py-2 transition-all hover:bg-[#001528]">
            Contact Us →
          </Link>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#001528] text-white overflow-hidden border-b border-[#e8e8e8]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/office123/1920/1080" 
          alt="Office environment" 
          fill 
          className="object-cover opacity-[0.15] mix-blend-overlay grayscale"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-[#001528]/90"></div>
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold tracking-[0.15em] text-blue-200 opacity-80 uppercase mb-6">
            SMB / SME AX Consulting
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.15] mb-8 font-semibold">
            SMB와 SME를 위한 <br /> <span className="italic font-normal text-white">Practical AX Partner</span>
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-sm mb-10 font-sans text-base">
            AI를 도입하는 것을 넘어, 실제 업무에 적용하고 조직에 정착시킵니다. 거대한 로드맵보다 현실적인 우선순위 설정과 빠른 적용으로 작동하는 혁신을 지원합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#services" className="inline-flex justify-center flex-1 sm:flex-none items-center px-8 py-3 bg-white text-navy font-bold text-sm hover:bg-gray-100 transition-colors">
              Explore our services →
            </Link>
            <Link href="#contact" className="inline-flex justify-center flex-1 sm:flex-none items-center px-8 py-3 bg-transparent border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-colors">
              Request introduction →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#fdfdfd] border-b border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.15em] text-[#767676] uppercase mb-6">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] font-semibold mb-8 text-navy">
              거대한 전략과 복잡한 기술이 아닌, <br className="hidden md:block"/> 당장 <span className="italic">실행 가능한 변화</span>에 집중합니다.
            </h2>
            <div className="space-y-6 text-[#767676] leading-relaxed max-w-lg">
              <p>
                수많은 기업이 AI의 필요성을 공감하지만 실제 업무에 적용하는 데는 여전히 큰 어려움을 겪고 있습니다. 내부 인프라가 완벽해야 하거나 대규모 예산이 필요한 것은 아닙니다.
              </p>
              <p>
                우리는 SMB/SME 기업이 부담 없이 AI 전환(AI Transformation)을 시작할 수 있도록 돕는 실무형 파트너입니다. 단순히 AI 솔루션을 제안하고 끝나는 것이 아니라, 실제 업무 환경에 AI를 안착시키고 조직원들의 역량을 높여 스스로 문제를 해결하게 만드는 과정을 함께합니다.
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] w-full border border-[#e8e8e8]">
             <Image 
                src="https://picsum.photos/seed/collaboration/800/600" 
                alt="Team collaboration" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.15em] text-[#767676] uppercase mb-4">Our Services</p>
          <h2 className="font-serif text-4xl leading-[1.15] font-semibold text-navy">
            현재 조직의 준비도와 리소스에 맞춘<br /> 단계별 서비스를 제공합니다.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 border-t border-l border-[#e8e8e8]">
          <ServiceCard 
            label="ADVISORY"
            title="AX Advisory for SMB / SME"
            description="현재 비즈니스 구조와 업무 프로세스를 진단하여, 한정된 리소스에서 가장 효과가 높은 AI 도입 우선순위와 현실적인 단기 로드맵을 설계합니다."
          />
          <ServiceCard 
            label="DISCOVERY"
            title="AI Use Case Discovery & Improvement"
            description="마케팅, 영업, 인사, 고객지원 등 주요 부서의 병목 및 반복 업무를 파악하여, 기성 생성형 AI 도구들을 결합해 즉각적인 효율 개선이 가능한 워크플로우를 도출합니다."
          />
          <ServiceCard 
            label="ENABLEMENT"
            title="Practical AI Enablement for Teams"
            description="사내 스터디나 일회성 도입에 그치지 않고, 실무진들이 실제 자신의 업무망 내에서 AI를 적용하고 활용할 수 있도록 밀착 코칭 및 프로세스 템플릿화 과정을 지원합니다."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({label, title, description}: {label: string, title: string, description: string}) {
  return (
    <div className="bg-[#fdfdfd] p-10 border-b border-r border-[#e8e8e8] hover:bg-slate-50 transition-colors flex flex-col h-full relative">
      <div className="text-[10px] font-bold tracking-[0.15em] text-[#767676] uppercase mb-4">{label}</div>
      <h3 className="font-serif text-xl font-bold mb-3 text-[#333333]">{title}</h3>
      <p className="text-sm text-[#767676] leading-relaxed mt-auto max-w-sm">{description}</p>
    </div>
  );
}

function ApproachSection() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-[#001528] text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="text-[10px] font-bold tracking-[0.15em] text-blue-200 opacity-80 uppercase mb-4">Our Approach</p>
          <h2 className="font-serif text-4xl leading-[1.15] font-semibold">
            거대 로드맵이 아닌 <br className="hidden md:block" /> 당장 전환 가능한 영역부터 행동합니다.
          </h2>
        </div>

        <div className="grid md:grid-cols-3">
          <ApproachStep 
            number="01."
            title="Assess"
            description="기업의 현재 업무 방식, 조직의 AI 이해도, 그리고 데이터 준비도를 빠르고 날카롭게 진단합니다. 무리한 목표를 배제하고 현재 할 수 있는 영역을 파악합니다."
          />
          <ApproachStep 
            number="02."
            title="Prioritize"
            description="적은 노력으로 큰 임팩트를 만들 수 있는 (Quick Win) 유즈케이스를 선별합니다. 여러 문제를 동시에 해결하려 하기보다, 성공 경험을 빨리 만들 가장 중요한 과제를 택합니다."
          />
          <ApproachStep 
            number="03."
            title="Enable"
            description="기술만 던져주고 떠나지 않습니다. 실무 워크숍, 현업 중심의 가이드 제공, 파일럿 프로젝트 밀착 코칭 등 조직 내부의 역량으로 소화될 수 있는 내재화 과정을 거칩니다."
          />
        </div>
      </div>
    </section>
  );
}

function ApproachStep({number, title, description}: {number: string, title: string, description: string}) {
  return (
    <div className="flex flex-col gap-3 py-10 md:pr-10 border-t border-white/10 relative hover:bg-white/5 transition-all w-full h-full">
      <span className="font-serif text-4xl opacity-40 mb-2">{number}</span>
      <div className="font-bold text-lg">{title}</div>
      <p className="text-[13px] text-slate-400 leading-relaxed max-w-sm">{description}</p>
    </div>
  );
}

function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-[#fdfdfd] border-b border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/3] w-full border border-[#e8e8e8]">
             <Image 
                src="https://picsum.photos/seed/workshop/800/600" 
                alt="Corporate practical education workshop" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[10px] font-bold tracking-[0.15em] text-[#767676] uppercase mb-4">Corporate Education</p>
            <h2 className="font-serif text-4xl leading-[1.15] font-semibold mb-8 text-navy">
              조직 내 AI 역량을 <br /> 실제 <span className="italic">실무 수준</span>으로 끌어올립니다.
            </h2>
            <div className="space-y-6 text-[#767676] leading-relaxed max-w-md mb-12">
              <p>
                단순 툴 사용법을 나열하는 강의가 아닙니다. 경영진이 회사의 방향을 잡고, 실무자가 본인의 구체적인 과제에 AI를 활용할 수 있게 만드는 맞춤형 조직 역량 강화(Upskilling) 과정입니다.
              </p>
            </div>
            
            <ul className="space-y-4 mb-10 text-[#333333] font-medium text-sm">
              <li className="flex items-start gap-4">
                <span className="text-navy opacity-60">→</span>
                <span>대표/임원 대상 AX 이해 및 전략 수립 세미나</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-navy opacity-60">→</span>
                <span>팀장/마케터/영업 등 부서별 실무 생성형 AI 워크숍</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-navy opacity-60">→</span>
                <span>사내 맞춤형 프롬프트 라이브러리 및 적용 가이드 설계</span>
              </li>
            </ul>

            <Link href="#contact" className="inline-flex text-xs font-bold uppercase tracking-widest text-navy border-b border-navy pb-1 items-center gap-2 hover:gap-4 transition-all">
              Inquire about education <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="text-[10px] font-bold tracking-[0.15em] text-[#767676] uppercase mb-4">Why Us</p>
          <h2 className="font-serif text-4xl leading-[1.15] font-semibold text-navy">
            Why Partner with Us
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#e8e8e8]">
          <div className="p-10 border-b border-r border-[#e8e8e8] bg-[#fdfdfd] hover:bg-slate-50 transition-colors">
            <h4 className="font-serif text-lg font-bold mb-4 text-[#333333]">Practical, not theoretical</h4>
            <p className="text-[13px] text-[#767676] leading-relaxed">추상적인 기술 담론이나 유행어가 아닌, 당장 조직의 업무 생산성을 높일 수 있는 구체적인 방법과 솔루션에 집중합니다.</p>
          </div>
          <div className="p-10 border-b border-r border-[#e8e8e8] bg-[#fdfdfd] hover:bg-slate-50 transition-colors">
            <h4 className="font-serif text-lg font-bold mb-4 text-[#333333]">Right-sized for SME</h4>
            <p className="text-[13px] text-[#767676] leading-relaxed">대규모 IT 시스템 구축과 비용이 수반되는 방식 대신, 중소·중견기업 리소스 내에서 빠르고 효율적인 현실적 로드맵을 지향합니다.</p>
          </div>
          <div className="p-10 border-b border-r border-[#e8e8e8] bg-[#fdfdfd] hover:bg-slate-50 transition-colors">
            <h4 className="font-serif text-lg font-bold mb-4 text-[#333333]">Consulting & Education</h4>
            <p className="text-[13px] text-[#767676] leading-relaxed">전략만 수립하는 펌이나, 툴 사용법만 알려주는 강연 업체가 아닙니다. 전략적 로드맵이 구성원의 실무 역량으로 연결되게 만듭니다.</p>
          </div>
          <div className="p-10 border-b border-r border-[#e8e8e8] bg-[#fdfdfd] hover:bg-slate-50 transition-colors">
            <h4 className="font-serif text-lg font-bold mb-4 text-[#333333]">Focused on adoption</h4>
            <p className="text-[13px] text-[#767676] leading-relaxed">화려한 진단 보고서 납품이 목적이 아니라, 기존의 일하는 방식이 실제로 바뀌고 체화되도록 정착(Adoption)을 돕는 것을 목표로 합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientFitSection() {
  return (
    <section className="py-24 md:py-32 bg-[#fdfdfd] border-t border-[#e8e8e8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="sticky top-[120px]">
              <p className="text-[10px] font-bold tracking-[0.15em] text-[#767676] uppercase mb-6">Who We Work With</p>
              <h2 className="font-serif text-4xl leading-[1.15] font-semibold text-navy mb-6">
                이런 고민을 가진 조직에게 적합합니다
              </h2>
              <div className="w-8 h-[1px] bg-navy/30"></div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="bg-white p-10 border border-[#e8e8e8] shadow-sm">
              <ul className="space-y-8">
                <li className="flex items-start gap-6">
                   <span className="font-serif text-2xl text-[#d4d4d4] font-bold italic block pt-1">01.</span>
                   <span className="text-[#555555] text-base leading-relaxed">AI가 중요하다는 건 알지만, 우리 사업 어디서부터 적용을 시작해야 할지 막막한 기업</span>
                </li>
                <li className="flex items-start gap-6 pt-8 border-t border-[#e8e8e8]">
                   <span className="font-serif text-2xl text-[#d4d4d4] font-bold italic block pt-1">02.</span>
                   <span className="text-[#555555] text-base leading-relaxed">직원들이 각자 AI를 간간이 쓰고는 있으나 전사적인 체계와 가이드는 없는 조직</span>
                </li>
                <li className="flex items-start gap-6 pt-8 border-t border-[#e8e8e8]">
                   <span className="font-serif text-2xl text-[#d4d4d4] font-bold italic block pt-1">03.</span>
                   <span className="text-[#555555] text-base leading-relaxed">상용 AI 서비스들을 영리하게 조립해 즉시 적용 가능한 업무 프로세스를 만들고 싶은 기업</span>
                </li>
                <li className="flex items-start gap-6 pt-8 border-t border-[#e8e8e8]">
                   <span className="font-serif text-2xl text-[#d4d4d4] font-bold italic block pt-1">04.</span>
                   <span className="text-[#555555] text-base leading-relaxed">실행력 있는 교육과 외부의 추진력 지원을 통해 사내 AX 물꼬를 트고자 하는 경영진</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy text-white text-center flex flex-col items-center justify-center min-h-[500px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] font-semibold mb-8">
          조직의 실질적인 성장을 만드는 AX,<br /> 이제 행동으로 시작할 차례입니다.
        </h2>
        <p className="text-[#b0b0b0] mb-12 max-w-lg mx-auto text-sm leading-relaxed font-sans">
          간단한 문의를 남겨주시면 현재 상황을 이해하고 최적의 협업 방안을 제안해 드립니다. 부담 없이 도입 가능성과 아이디어를 진단해 보세요.
        </p>
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link href="mailto:contact@axpartner.com" className="bg-[#001528] border border-white/20 text-white px-8 py-3.5 transition-all hover:bg-white hover:text-navy text-xs font-bold uppercase tracking-widest flex items-center gap-3">
             Contact email <span>→</span>
          </Link>
          <p className="text-[11px] text-[#767676] uppercase tracking-widest font-semibold mt-4 gap-4 flex space-x-2">
            <span>contact@axpartner.com</span>
            <span>|</span>
            <span>02-1234-5678</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="h-auto md:h-[80px] py-10 md:py-0 border-t border-[#e8e8e8] bg-[#f5f5f0] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-[10px] text-[#767676] font-sans">
        © {new Date().getFullYear()} AX PARTNER. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-8 text-[10px] text-navy font-bold uppercase tracking-widest">
        <span>Trustworthy</span>
        <span>Practical</span>
        <span>Sharp</span>
      </div>
      <div className="text-[10px] text-[#767676] font-sans uppercase tracking-wider">
        SEOUL, KR | CONTACT@AXPARTNER.COM
      </div>
    </footer>
  );
}
