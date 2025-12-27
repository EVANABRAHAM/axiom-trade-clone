import { TokenTable } from '@/features/token-table/TokenTable';
import { PulseBoard } from '@/features/pulse/PulseList';
import { Search, Menu, Copy, Wallet, ChevronDown, ChevronRight, ListFilter, Settings2, Bell, Palette, ExternalLink, Star, User, Settings, LineChart, HelpCircle, List, Bookmark, Keyboard, Volume2, Crosshair, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full bg-[#06070B] text-textPrimary overflow-hidden font-sans selection:bg-primaryBlue/20">

      {/* Top Navbar */}
      <div className="border-b border-primaryStroke overflow-hidden flex flex-row w-full h-[52px] sm:h-[64px] min-h-[48px] sm:min-h-[64px] px-[16px] sm:px-[16px] lg:px-[24px] gap-[16px] sm:gap-[16px] lg:gap-[24px] justify-between sm:justify-start items-center bg-[#06070B] sticky top-0 z-50">
        {/* Logo Section */}
        <div className="flex flex-row flex-shrink-0 gap-[0px] justify-start items-center w-[36px] sm:w-[24px] 2xl:w-[130px]">
          <a href="/?chain=sol">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                {/* Logo Icon */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[36px] h-[36px] sm:w-[36px] sm:h-[36px] text-textPrimary">
                  <g clipPath="url(#clip0_88_28967)">
                    <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="currentColor"></path>
                    <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_88_28967"><rect width="26" height="22" fill="white" transform="translate(5 7)"></rect></clipPath>
                  </defs>
                </svg>
                {/* Logo Text */}
                <svg width="102" height="21" viewBox="0 0 103 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[102px] hidden 2xl:block text-textPrimary ml-2">
                  <path d="M56.1914 18.3745V1.33447H59.7434L64.8074 15.3265L69.8714 1.33447H73.4234V18.3745H70.8314V5.89447L66.2474 18.3505H63.3674L58.7834 5.89447V18.3745H56.1914Z" fill="currentColor"></path>
                  <path d="M45.9362 18.7584C40.9922 18.7584 37.9922 15.3984 37.9922 9.87844C37.9922 4.35844 40.9922 0.950439 45.9362 0.950439C50.9282 0.950439 53.9042 4.35844 53.9042 9.87844C53.9042 15.3984 50.9282 18.7584 45.9362 18.7584ZM45.9362 16.3824C49.2482 16.3824 51.2162 13.9824 51.2162 9.87844C51.2162 5.77444 49.2482 3.32644 45.9362 3.32644C42.6482 3.32644 40.6802 5.77444 40.6802 9.87844C40.6802 13.9824 42.6482 16.3824 45.9362 16.3824Z" fill="currentColor"></path>
                  <path d="M33.1055 18.3745V1.33447H35.6975V18.3745H33.1055Z" fill="currentColor"></path>
                  <path d="M16.9023 18.3745L22.5663 9.83047L16.9503 1.33447H19.9983L24.1983 7.81447L28.3263 1.33447H31.3503L25.7343 9.78247L31.4223 18.3745H28.3743L24.1503 11.7985L19.9263 18.3745H16.9023Z" fill="currentColor"></path>
                  <path d="M0.980469 18.3745L7.12447 1.33447H10.4125L16.5565 18.3745H13.7965L12.2365 13.9345H5.27647L3.74047 18.3745H0.980469ZM6.09247 11.5825H11.4445L8.75647 3.80647L6.09247 11.5825Z" fill="currentColor"></path>
                  <path d="M99.2929 18.6624C97.0311 18.6624 95.5703 16.9661 95.5703 14.3116C95.5703 11.6571 97.0311 9.96069 99.2929 9.96069C101.539 9.96069 103 11.6571 103 14.3116C103 16.9661 101.539 18.6624 99.2929 18.6624ZM99.2929 17.6729C100.926 17.6729 101.916 16.4006 101.916 14.3116C101.916 12.2225 100.926 10.9502 99.2929 10.9502C97.6437 10.9502 96.6541 12.2225 96.6541 14.3116C96.6541 16.4006 97.6437 17.6729 99.2929 17.6729Z" fill="currentColor"></path>
                  <path d="M90.9961 18.4742V10.1494H91.8914L91.9385 11.7987C92.2684 10.6835 92.9438 10.1494 94.0276 10.1494H94.7501V11.1547H93.9962C92.7396 11.1547 92.0328 12.0186 92.0328 13.4008V18.4742H90.9961Z" fill="currentColor"></path>
                  <path d="M81.2461 18.4741V7.32202H85.1572C87.6075 7.32202 89.0525 8.57859 89.0525 10.6519C89.0525 12.7253 87.6075 13.9818 85.1572 13.9818H82.3142V18.4741H81.2461ZM82.3142 12.9452H85.1572C86.9792 12.9452 87.9216 12.1441 87.9216 10.6519C87.9216 9.14405 86.9792 8.35869 85.1572 8.35869H82.3142V12.9452Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* Navigation Links (Scrollable) */}
        <div className="relative flex hidden sm:flex flex-1 min-w-[0px]">
          <div className="absolute right-0 top-0 w-[32px] h-full z-40 bg-gradient-to-l from-background to-transparent flex items-center justify-end pointer-events-none">
            <button type="button" className="absolute right-0 w-6 h-6 flex items-center justify-center text-textSecondary hover:text-textPrimary transition-all duration-125 ease-in-out opacity-0">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-row gap-[4px] justify-start items-center">
              {['Discover', 'Pulse', 'Trackers', 'Perpetuals', 'Yield', 'Vision', 'Portfolio', 'Rewards'].map((link) => (
                <div key={link}>
                  <a href={`/${link.toLowerCase()}?chain=sol`}>
                    <button className={`
                      flex flex-row h-[32px] text-nowrap px-[8px] xl:px-[14px] 
                      justify-start items-center 
                      [transition:none] duration-0
                      hover:bg-primaryBlue/20 hover:text-primaryBlue hover:[transition:background-color_135ms_ease-in-out,color_135ms_ease-in-out] rounded-[4px]
                      ${link === 'Pulse' ? 'text-primaryBlue' : 'text-textPrimary'}
                    `}>
                      <span className="text-[14px] font-medium">{link}</span>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-row gap-[16px] justify-start items-center">
          <div></div>

          {/* Search Bar */}
          <div>
            <button type="button" className="hidden sm:flex flex-shrink-0 whitespace-nowrap border-primaryStroke font-normal border-[1px] flex-row h-[32px] sm:px-[8px] md:px-[8px] lg:px-[8px] 2xl:pl-[12px] 2xl:pr-[6px] gap-[8px] justify-center items-center rounded-full hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
              <Search className="w-[18px] h-[18px] text-textPrimary" />
              <span className="text-[12px] text-textTertiary font-medium hidden 2xl:block">Search by token or CA...</span>
              <div className="hidden 2xl:block border-primaryStroke border-[1px] text-[12px] h-[20px] flex-row px-[8px] gap-[8px] justify-center items-center rounded-full">
                <span className="text-textPrimary">/</span>
              </div>
            </button>
          </div>

          {/* Chain Selector (SOL) */}
          <div>
            <div className="hidden sm:block">
              <div className="relative flex">
                <div className="w-full">
                  <button className="hover:brightness-125 border-[2px] flex flex-shrink-0 flex-row h-[32px] pl-[8px] pr-[6px] gap-[6px] justify-center items-center rounded-full transition-all duration-150 ease-in-out active:scale-[0.96]" style={{ borderColor: 'rgba(20, 241, 149, 0.1)' }}>
                    <img alt="Solana" width="16" height="16" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" />
                    <span className="text-[14px] text-textPrimary font-medium">SOL</span>
                    <ChevronDown className="text-textPrimary w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-[8px] lg:gap-[16px]">
          {/* Deposit Button */}
          <button className="hidden sm:flex bg-primaryBlue h-[32px] px-[12px] flex-row justify-start items-center rounded-full hover:bg-primaryBlueHover">
            <span className="text-nowrap text-background text-[14px] font-bold">Deposit</span>
          </button>

          <button className="bg-primaryStroke hover:bg-secondaryStroke/80 flex flex-row w-[32px] h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full">
            <Star className="text-textPrimary w-[18px] h-[18px]" />
          </button>
          <div className="relative flex">
            <button className="relative bg-primaryStroke hover:bg-secondaryStroke/80 flex flex-row w-[32px] h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full">
              <Bell className="text-textPrimary w-[18px] h-[18px]" />
            </button>
          </div>

          {/* Wallet Info */}
          <div className="relative flex">
            <div className="w-full">
              <div className="flex-shrink-0">
                <button className="w-fit min-w-max bg-primaryStroke flex flex-row h-[32px] px-[12px] py-[8px] gap-[8px] justify-center items-center rounded-full hover:bg-opacity-80 transition-colors hover:bg-secondaryStroke/80">
                  <Wallet className="text-textPrimary w-[18px] h-[18px]" />
                  <div className="hidden xl:flex flex-shrink-0 whitespace-nowrap flex-row gap-[4px] justify-start items-center">
                    <img alt="SOL" width="16" height="16" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" />
                    <span className="text-[14px] font-semibold text-textPrimary">0</span>
                  </div>
                  <div className="hidden xl:block flex-shrink-0 w-[1px] h-full bg-secondaryStroke"></div>
                  <div className="hidden xl:flex flex-shrink-0 whitespace-nowrap flex-row gap-[4px] justify-start items-center">
                    <span className="text-[14px] font-semibold text-textPrimary">0</span>
                  </div>
                  <ChevronDown className="text-textPrimary w-[18px] h-[18px]" />
                </button>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <span className="contents">
            <button type="button" className="flex flex-row w-[28px] h-[28px] justify-center items-center rounded-full relative overflow-visible transition-all duration-150 ease-in-out active:scale-[0.96] border-transparent bg-primaryStroke hover:bg-secondaryStroke/80 hover:border-transparent">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full border-white/[0.1] border-[1px] z-[15] pointer-events-none rounded-full"></div>
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold">CC</div>
              </div>
              <div className="absolute bottom-[-2px] right-[-2px] w-[14px] h-[14px] rounded-full bg-background z-[20] flex items-center justify-center">
                <div className="w-[8px] h-[8px] rounded-full bg-primaryGreen"></div>
              </div>
            </button>
          </span>

          {/* Settings Component */}
          <div className="relative flex">
            <div className="w-full">
              <button className="bg-primaryStroke flex flex-row w-[32px] h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-secondaryStroke/80">
                <Settings className="text-textPrimary w-[18px] h-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Bar */}
      <div className="grayscale-[30%] hover:grayscale-0 transition-[filter] relative flex flex-row w-full h-[36px] bg-[#06070B] gap-[8px] px-[24px] overflow-hidden border-b border-primaryStroke sm:border-primaryStroke/50 z-40 hidden sm:flex items-center">
        <div className="flex flex-row h-full items-center z-20 gap-[8px]">
          <span className="contents">
            <button type="button" className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/60 transition-colors duration-125 ease-in-out rounded-[4px]">
              <Settings className="w-[14px] h-[14px]" />
            </button>
          </span>
        </div>

        <div className="flex flex-row h-full items-center z-20 gap-[8px]">
          <div className="w-[1px] h-[16px] bg-primaryStroke"></div>
        </div>

        <div className="flex flex-row h-full items-center z-20 gap-[8px]">
          <span className="contents">
            <button type="button" className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/60 transition-colors duration-125 ease-in-out rounded-[4px]">
              <Star className="w-[14px] h-[14px]" />
            </button>
          </span>
          <span className="contents">
            <button type="button" className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textSecondary hover:text-textSecondary hover:bg-primaryStroke/60 transition-colors duration-125 ease-in-out rounded-[4px]">
              <LineChart className="w-[14px] h-[14px]" />
            </button>
          </span>
        </div>

        <div className="flex flex-row h-full items-center z-20 gap-[8px]">
          <div className="w-[1px] h-[16px] bg-primaryStroke"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 w-full relative flex flex-col">
        {/* Background Gradient Effect */}
        <div className="absolute pointer-events-none inset-0 -z-10 h-full w-full bg-[#06070B] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20"></div>

        <div className="flex-1 w-full h-full p-6 flex flex-col">
          {/* Tabs & Controls */}
          {/* Main Content Controls */}
          <div className="flex-none flex flex-row w-full h-[32px] justify-start items-center mb-4 gap-4">
            <div className="flex-1 flex items-center gap-3">
              <span className="text-textPrimary text-[20px] font-medium">Pulse</span>
              <div className="flex items-center gap-1">
                <span className="contents">
                  <button type="button" className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 bg-primaryStroke/60 scale-110" aria-label="Switch to Solana">
                    <img alt="SOL" width="20" height="20" className="" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" />
                  </button>
                </span>
                <span className="contents">
                  <button type="button" className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 hover:bg-primaryStroke/30 opacity-60 hover:opacity-100" aria-label="Switch to BNB">
                    {/* Placeholder for BNB if image missing, using generic orb or similar. User provided path /images/bnb-fill.svg. I will try to use a remote URL for BNB to be safe or just the path if user insists. Let's use a remote BNB logo for safety. */}
                    <img alt="BNB" width="20" height="20" className="grayscale-[0.3]" src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=035" />
                  </button>
                </span>
              </div>
            </div>

            <div className="pr-[8px]"></div>

            <div className="flex flex-row gap-4 items-center">
              <span className="contents">
                <button type="button" className="flex flex-row w-[24px] h-[24px] justify-center items-center">
                  <HelpCircle className="text-[20px] text-textTertiary hover:text-textSecondary transition-all duration-150 ease-in-out w-5 h-5" />
                </button>
              </span>

              <div className="relative flex">
                <div data-state="closed" className="w-full">
                  <button className="bg-primaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-secondaryStroke/80 transition-color duration-[150ms] ease-in-out">
                    <div className="relative">
                      <List className="text-[18px] text-textPrimary w-[18px] h-[18px]" />
                    </div>
                    <div className="whitespace-nowrap flex flex-row gap-[4px] justify-start items-center">
                      <span className="text-[14px] font-bold text-textPrimary">Display</span>
                    </div>
                    <ChevronDown className="text-[18px] text-textPrimary w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>

              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full">
                  <Bookmark className="text-textSecondary group-hover:text-textPrimary w-4 h-4" />
                </button>
              </span>

              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 relative rounded-full hover:bg-primaryStroke/60 bg-transparent transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <Keyboard className="text-[16px] text-textSecondary group-hover:text-textPrimary w-4 h-4" />
                </button>
              </span>

              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full">
                  <Volume2 className="text-[16px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out w-4 h-4" />
                </button>
              </span>

              <span className="contents">
                <button type="button" className="group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full">
                  <Crosshair className="text-textSecondary group-hover:text-textPrimary text-[16px] w-4 h-4" />
                  <Settings className="text-[12px] text-textSecondary group-hover:text-textPrimary absolute bottom-0 right-0 w-3 h-3" />
                </button>
              </span>

              <div className="relative flex">
                <div data-state="closed" className="w-full">
                  <span className="contents">
                    <button type="button" className="flex border border-primaryStroke group flex-row p-[4px] pr-[12px] pl-[12px] h-[32px] gap-[8px] justify-center items-center hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer rounded-full">
                      <div className="flex flex-row gap-[4px] justify-center items-center">
                        <Wallet className="text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer w-[18px] h-[18px]" />
                        <span className="text-[14px] text-textSecondary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">1</span>
                      </div>
                      <div className="flex flex-row gap-[4px] justify-center items-center">
                        <img alt="SOL" width="16" height="16" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" />
                        <span className="text-[14px] text-textPrimary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">
                          <span>0</span>
                        </span>
                      </div>
                      <ChevronDown className="text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer w-[18px] h-[18px]" />
                    </button>
                  </span>
                </div>
              </div>

              <div className="hidden sm:block lg:hidden">
                <div className="flex flex-row h-full gap-[8px] items-center justify-start">
                  <div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border-[1px] flex flex-row min-w-[216px] h-[32px] pl-[12px] gap-[8px] justify-start items-center rounded-full hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
                    <span className="flex text-[14px] text-textTertiary font-medium">
                      <Zap className="w-4 h-4 fill-current" />
                    </span>
                    <div className="flex flex-1 sm:max-w-[60px] min-w-[0px]">
                      <input placeholder="0.0" className="text-[14px] w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent text-left" type="text" />
                    </div>
                    <img alt="SOL" width="16" height="16" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" />
                    <div className="border-primaryStroke border-l-[1px] flex h-full pr-[3px] pl-[3px] gap-[6px] justify-center items-center cursor-pointer">
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryBlueHover/10">
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-primaryBlue hover:text-primaryBlueHover">P1</span>
                        </button>
                      </span>
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60">
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P2</span>
                        </button>
                      </span>
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60">
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P3</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Component */}
          {/* Main Content Component */}
          <div className="flex-1 overflow-hidden h-full">
            <PulseBoard />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav (Optional) */}
      <div className="md:hidden h-[60px] border-t border-primaryStroke bg-[#06070B] flex items-center justify-around px-2 text-[10px] text-textSecondary">
        <div className="flex flex-col items-center gap-1">
          <div className="text-white"><ListFilter className="w-5 h-5" /></div>
          <span className="text-white font-medium">Discover</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Search className="w-5 h-5" />
          <span>Search</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Wallet className="w-5 h-5" />
          <span>Portfolio</span>
        </div>
      </div>
    </main>
  );
}
