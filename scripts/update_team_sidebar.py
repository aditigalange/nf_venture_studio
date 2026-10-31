p = 'd:/NFVS/src/pages/NFTeamPage.tsx'
c = open(p, 'r', encoding='utf-8').read()
old = """                  <div className="space-y-1">
                    <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-[#1746A2] dark:text-white leading-tight">
                      NF Venture Studio
                    </h2>
                    <div className="w-10 sm:w-12 h-0.5 bg-[#D4AF37] mx-auto rounded-full" />
                  </div>"""

new = """                  <div className="space-y-1">
                    <h2 className="text-base sm:text-lg font-extrabold tracking-tight text-[#1746A2] dark:text-white leading-tight">
                      NF Venture Studio
                    </h2>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37]">
                      Ideas &bull; Innovation &bull; Growth
                    </p>
                    <div className="w-10 sm:w-12 h-0.5 bg-[#D4AF37] mx-auto rounded-full mt-1" />
                  </div>"""

if old in c:
    c = c.replace(old, new)
    open(p, 'w', encoding='utf-8').write(c)
    print('Updated NFTeamPage sidebar brand tagline')
else:
    print('Pattern not matched')
