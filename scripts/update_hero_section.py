p = 'd:/NFVS/src/components/nf/NFHeroSection.tsx'
c = open(p, 'r', encoding='utf-8').read()

c = c.replace(
    "import nfLogoTransparent from '../../assets/nf-logo-transparent.png';",
    "import officialEmblem from '../../assets/nfvs_official_emblem.png';"
)

c = c.replace(
    "src={nfLogoTransparent}",
    "src={officialEmblem}"
)

# Enhance headline styling with modern gradient text
old_heading = """              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.10] text-[#10264A] dark:text-white">
                Empowering Innovators to Create{' '}
                <span className="text-[#1746A2] dark:text-[#60A5FA]">
                  Impactful &amp; Sustainable
                </span>{' '}
                <span className="text-[#D4AF37]">Ventures.</span>
              </h1>"""

new_heading = """              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.65rem] font-black tracking-tight leading-[1.08] text-[#10264A] dark:text-white font-display">
                Empowering Innovators to Create{' '}
                <span className="bg-gradient-to-r from-[#1746A2] via-[#2563EB] to-[#10264A] dark:from-sky-300 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                  Impactful &amp; Sustainable
                </span>{' '}
                <span className="text-[#D4AF37] drop-shadow-xs">Ventures.</span>
              </h1>"""

if old_heading in c:
    c = c.replace(old_heading, new_heading)
    print('Replaced heading in NFHeroSection')
else:
    print('Heading pattern not found')

open(p, 'w', encoding='utf-8').write(c)
print('Updated NFHeroSection.tsx')
