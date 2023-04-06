import{_ as r,o as s,c,a as e,b as t,d as n,w as a,e as h,r as l}from"./app.859304bd.js";const d={},u=e("p",null,"On first generation PS Vitas, you must have a memory card to install homebrew. This is because they don't have an internal storage partition, unlike the second generation models.",-1),m=h('<h2 id="what-you-need" tabindex="-1"><a class="header-anchor" href="#what-you-need" aria-hidden="true">#</a> What you need</h2><ul><li>A homebrewed device with VitaDeploy installed</li></ul><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><h3 id="section-i-configuring-henkaku" tabindex="-1"><a class="header-anchor" href="#section-i-configuring-henkaku" aria-hidden="true">#</a> Section I - Configuring HENkaku</h3><ol><li>Launch the Settings application</li><li>Navigate to <code>HENkaku Settings</code></li><li>Check &quot;Enable Unsafe Homebrew&quot;</li><li>Return to HENkaku Settings menu</li><li>Close the Settings application</li></ol><h3 id="section-ii-repartitioning" tabindex="-1"><a class="header-anchor" href="#section-ii-repartitioning" aria-hidden="true">#</a> Section II - Repartitioning</h3>',6),p=e("li",null,"Launch the VitaDeploy application",-1),_=e("ul",null,[e("li",null,"If the application crashes, open it and try again")],-1),f=e("li",null,"Once repartitioned, your device will reboot",-1),g=e("h3",{id:"section-iii-reformatting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#section-iii-reformatting","aria-hidden":"true"},"#"),t(" Section III - Reformatting")],-1),y=e("li",null,"If you have a memory card inserted, remove it",-1),b=e("li",null,"Open the Settings application",-1),w=e("li",null,[t("Navigate to "),e("code",null,"Format"),t(" -> "),e("code",null,"Format Memory Card")],-1),k=e("li",null,'When prompted, select "Yes" to confirm',-1),v=e("li",null,'Once formatted, select "OK" to reboot',-1),S=e("p",null,[t("You should now have a 1GB internal partition on your device. You can verify this by opening the Settings application and navigating to "),e("code",null,"System"),t(" -> "),e("code",null,"System Information"),t(".")],-1);function x(N,V){const o=l("router-link"),i=l("Btn");return s(),c("div",null,[u,e("p",null,[t("Fortunately, it's possible to use VitaDeploy to re-partition the internal storage, allowing for homebrew installation without a memory card. VitaDeploy can be installed onto the system by following "),n(o,{to:"using-henlo"},{default:a(()=>[t("Using HENlo")]),_:1}),t(', replacing the system app "NEAR".')]),e("p",null,[t("This partition will only be 1GB in size. We recommend you use this to then install "),n(o,{to:"yamt"},{default:a(()=>[t("YAMT")]),_:1}),t(" for use with an SD2Vita card. This is preferrable, as microSD cards are much cheaper than official Vita memory cards.")]),m,e("ol",null,[p,e("li",null,[t("Press "),n(i,{btn:"confirm"}),t(' on "Miscellaneous"')]),e("li",null,[t("Press "),n(i,{btn:"confirm"}),t(' on "Create an internal memory card"')]),e("li",null,[t("Read the disclaimer, and press "),n(i,{btn:"confirm"}),t(" to continue "),_]),e("li",null,[t("Press "),n(i,{btn:"confirm"}),t(' on "Default 2xxx storage configuration"')]),f]),g,e("ol",null,[y,b,w,e("li",null,[t("Press "),n(i,{btn:"confirm"}),t(' on "Format"')]),k,v]),S,e("p",null,[t("To install VitaDeploy to this new partition, follow "),n(o,{to:"using-henlo"},{default:a(()=>[t("Using HENlo")]),_:1}),t(" and install the application as normal.")])])}var C=r(d,[["render",x],["__file","creating-an-internal-memory-card.html.vue"]]);export{C as default};
