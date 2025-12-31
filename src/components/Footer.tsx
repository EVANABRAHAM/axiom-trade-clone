import { ChevronRight, Settings, Star, ChevronDown, ListFilter, Search, Wallet, Twitter, Compass, Activity, BarChart2, Zap, LayoutTemplate, Bell, Palette, FileText } from 'lucide-react';
import React from 'react';

export function Footer() {
    return (
        <div className="hidden sm:block">
            <div className="border-t-[1px] border-solid border-primaryStroke w-full h-[36px] min-h-[36px] text-nowrap">
                <div className="relative flex flex w-full h-full">
                    <div className="absolute right-0 top-0 w-[48px] h-full z-40 bg-gradient-to-l from-background to-transparent flex items-center justify-end pointer-events-none">
                        <button type="button" className="absolute right-0 w-6 h-6 flex items-center justify-center text-textSecondary hover:text-textPrimary transition-all duration-125 ease-in-out opacity-0 mx-[12px]">
                            <ChevronRight className="w-5 h-5 mb-[1px]" />
                        </button>
                    </div>
                    <div className="flex overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-row justify-between w-full h-full px-[24px] gap-[16px] items-center min-w-0">
                        <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center">
                            <span className="contents">
                                <button className="text-primaryBlue bg-primaryBlue/20 flex flex-row h-[24px] px-[8px] gap-[4px] justify-start items-center rounded-[4px] hover:bg-primaryBlue/25 transition-colors duration-[150ms] ease-in-out cursor-pointer">
                                    <ListFilter className="w-4 h-4" />
                                    <span className="text-[12px] font-semibold">PRESET 1</span>
                                </button>
                            </span>
                            <div className="relative flex ">
                                <div data-state="closed" className="w-full">
                                    <span className="contents">
                                        <button className="group/wallets border border-primaryStroke flex flex-row h-[24px] pl-[8px] pr-[5px] gap-[6px] justify-start items-center rounded-full hover:bg-primaryStroke/60 transition-colors duration-[125ms] ease-in-out cursor-pointer">
                                            <div className="flex flex-row gap-[4px] justify-start items-center">
                                                <Wallet className="w-[14px] h-[14px] text-textTertiary group-hover/wallets:text-textSecondary transition-colors duration-[125ms] ease-in-out" />
                                                <span className="text-[12px] group-hover/wallets:text-textSecondary font-medium text-textSecondary transition-colors duration-[125ms] ease-in-out">1</span>
                                            </div>
                                            <div className="flex flex-row gap-[4px] justify-start items-center">
                                                <img alt="SOL" loading="lazy" width="14" height="14" decoding="async" data-nimg="1" src="/images/sol-fill.svg" style={{ color: 'transparent' }} />
                                                <span className="text-[12px] font-medium text-textSecondary"><span>0</span></span>
                                            </div>
                                            <ChevronDown className="w-[14px] h-[14px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer" />
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
                            <div className="flex flex-row gap-[8px] justify-start items-center">
                                <span className="contents">
                                    <button className="-mr-[4px] min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/40 transition-colors duration-125 ease-in-out rounded-[4px]">
                                        <Settings className="w-[14px] h-[14px]" />
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60">
                                        <div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
                                        <Wallet className="text-[16px] w-4 h-4 text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary" />
                                        <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">Wallet</span>
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60">
                                        <div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
                                        <Twitter className="text-[16px] w-4 h-4 text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary" />
                                        <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">Twitter</span>
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60">
                                        <div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
                                        <Compass className="text-[16px] w-4 h-4 text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary" />
                                        <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">Discover</span>
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60">
                                        <div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
                                        <Activity className="text-[16px] w-4 h-4 text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary" />
                                        <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">Pulse</span>
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60">
                                        <BarChart2 className="text-[16px] w-4 h-4 text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary" />
                                        <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">PnL</span>
                                    </button>
                                </span>
                            </div>
                            <div className="hidden lg:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
                            <span className="contents">
                                <button type="button" className="hidden lg:flex flex-row h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out">
                                    <div className="relative">
                                        <div className="relative flex flex-row h-[20px] px-[4px] gap-[4px] justify-start items-center rounded-full opacity-30" style={{ background: 'linear-gradient(to right, rgb(83, 211, 142) 0%, rgb(231, 140, 25) 50%, rgb(75, 188, 207) 100%)', width: '40px' }}></div>
                                        <div className="absolute inset-[2px] bg-background rounded-full flex gap-[0px] justify-center items-center">
                                            <img alt="Pump" draggable="false" loading="eager" width="11" height="11" decoding="async" data-nimg="1" src="/images/pump.svg" style={{ color: 'transparent' }} />
                                            <img alt="Bonk" draggable="false" loading="eager" width="11" height="11" decoding="async" data-nimg="1" src="/images/bonk.svg" style={{ color: 'transparent' }} />
                                            <img alt="LaunchLab" draggable="false" loading="eager" width="11" height="11" decoding="async" data-nimg="1" src="/images/launchlab.svg" style={{ color: 'transparent' }} />
                                        </div>
                                    </div>
                                </button>
                            </span>
                            <div className="hidden lg:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
                            <div className="flex flex-1 flex-row w-full gap-[8px] justify-start items-center">
                                <span className="contents">
                                    <button className="text-[#F7931A] hidden 2xl:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out">
                                        <img alt="BTC" draggable="false" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="/images/btc-fill.svg" style={{ color: 'transparent' }} />
                                        <span className="text-[12px] font-normal">$88.9K</span>
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="text-[#497493] hidden 2xl:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[2px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out">
                                        <img alt="ETH" draggable="false" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="/images/eth-fill.svg" style={{ color: 'transparent' }} />
                                        <span className="text-[12px] font-normal">$2998</span>
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="text-[#14F195] hidden lg:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out">
                                        <img alt="SOL" draggable="false" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src="/images/sol-fill.svg" style={{ color: 'transparent' }} />
                                        <span className="text-[12px] font-normal">$126.36</span>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row flex-shrink-0 gap-[8px] justify-end items-center">
                            <div className="hidden 2xl:flex">
                                <span className="contents">
                                    <button className="-mr-[8px] group flex items-center gap-[4px] h-[24px] px-2 text-[12px] font-medium rounded hover:bg-secondaryStroke/40 text-textTertiary transition-colors duration-150 ease-in-out">
                                        <span className="text-textTertiary group-hover:text-textSecondary transition-colors duration-150 ease-in-out" style={{ fontSize: '14px' }}>💊</span>
                                        <span className="text-textTertiary text-[12px] font-normal group-hover:text-textSecondary transition-colors duration-150 ease-in-out">$51.9K</span>
                                    </button>
                                </span>
                            </div>
                            <div className="hidden 2xl:flex flex-row gap-[4px] justify-start items-center">
                                <span className="contents">
                                    <div className="flex flex-row gap-[4px] h-[24px] min-h-[24px] justify-start items-center">
                                        <Zap className="bg-transparent text-textTertiary w-4 h-4 fill-current" />
                                        <span className="text-textTertiary text-[12px] font-normal">0.0<sub>2</sub>14</span>
                                    </div>
                                </span>
                            </div>
                            <div className="hidden 2xl:flex flex-row gap-[4px] justify-start items-center">
                                <span className="contents">
                                    <div className="flex flex-row gap-[4px] h-[24px] min-h-[24px] justify-start items-center">
                                        <div className="text-textTertiary text-[16px]"><div className="w-4 h-4 rounded-full border border-textTertiary"></div></div>
                                        <span className="text-textTertiary text-[12px] font-normal">0.003</span>
                                    </div>
                                </span>
                            </div>
                            <div className="hidden 2xl:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
                            <div className="flex flex-row h-[24px] xl:px-[8px] gap-[4px] justify-start items-center rounded-[4px] text-primaryGreen xl:bg-primaryGreen/20">
                                <div className="flex flex-row gap-[4px] justify-start items-center ">
                                    <div className="bg-primaryGreen/20 w-[12px] h-[12px] rounded-full flex flex-row gap-[4px] justify-center items-center">
                                        <div className="bg-primaryGreen w-[8px] h-[8px] rounded-full"></div>
                                    </div>
                                </div>
                                <span className="hidden xl:flex text-[12px] font-medium">Connection is stable</span>
                            </div>
                            <div className="relative flex ">
                                <div data-state="closed" className="w-full">
                                    <button className="flex items-center gap-1 px-2 h-[24px] text-[12px] font-medium rounded hover:bg-secondaryStroke/40 text-textSecondary transition-colors duration-150"><span>GLOBAL</span><ChevronDown className="w-[14px] h-[14px]" /></button>
                                </div>
                            </div>
                            <div className="w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
                            <div className="text-textSecondary flex flex-row gap-[8px] justify-start items-center">
                                <span className="contents">
                                    <button className="flex items-center justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out text-textSecondary hover:bg-secondaryStroke/40">
                                        <LayoutTemplate className="w-4 h-4" />
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="text-[12px] hover:bg-secondaryStroke/40 flex items-center gap-1 justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out">
                                        <Bell className="w-4 h-4" />
                                    </button>
                                </span>
                                <span className="contents">
                                    <button className="text-[12px] hover:bg-secondaryStroke/40 flex items-center gap-1 justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out">
                                        <Palette className="w-4 h-4" />
                                    </button>
                                </span>
                            </div>
                            <div className="text-textSecondary flex flex-row gap-[8px] justify-start items-center">
                                <div className="hidden md:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>
                                <div className="hidden md:flex flex-row gap-[16px] justify-start items-center">
                                    <span className="contents">
                                        <a href="https://discord.gg/axiomtrade" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                            {/* Discord Icon placeholder since it's not in Lucide regular set easily mapable without custom path or filling */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" /></svg>
                                        </a>
                                    </span>
                                    <span className="contents">
                                        <a href="https://x.com/axiomexchange" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                                            <Twitter className="w-4 h-4 fill-current" />
                                        </a>
                                    </span>
                                </div>
                                <a href="https://docs.axiom.trade/" target="_blank" rel="noopener noreferrer" className="hidden md:flex flex-row gap-[2px] h-[24px] px-[8px] justify-start items-center rounded-[4px] hover:bg-hoverPrimary">
                                    <FileText className="w-4 h-4" />
                                    <span className="hidden lg:flex text-[12px] font-normal">Docs</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
