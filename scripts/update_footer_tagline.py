p = 'd:/NFVS/src/components/nf/NFFooter.tsx'
c = open(p, 'r', encoding='utf-8').read()
c = c.replace('tagline="impact"', 'tagline="growth"')
open(p, 'w', encoding='utf-8').write(c)
print('Updated footer tagline to growth')
