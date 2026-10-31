p = 'd:/NFVS/tailwind.config.ts'
c = open(p, 'r', encoding='utf-8').read()

old_fonts = """      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },"""

new_fonts = """      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
      },"""

if old_fonts in c:
    c = c.replace(old_fonts, new_fonts)
    open(p, 'w', encoding='utf-8').write(c)
    print('Updated tailwind.config.ts fontFamily')
else:
    print('old_fonts pattern not found')
