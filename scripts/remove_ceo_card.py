import re

# 1. Update NFAboutIntroSection.tsx
p1 = 'd:/NFVS/src/components/nf/NFAboutIntroSection.tsx'
c1 = open(p1, 'r', encoding='utf-8').read()

# Remove imports
c1 = c1.replace("import ashokPatilDeskImg from '../../assets/ashok_patil_desk.png';\n", "")
c1 = c1.replace("import ceoSignatureImg from '../../assets/ceo_signature.png';\n", "")

# Remove CEO message block
pattern1 = re.compile(r'\s*\{\/\* Message from the CEO \(Directly from Page 2 of Brochure\) \*\/\}[\s\S]*?(?=\s*<\/div>\s*<\/section>)')
if pattern1.search(c1):
    c1 = pattern1.sub('', c1)
    print('Removed CEO message block from NFAboutIntroSection.tsx')
else:
    print('Warning: pattern1 not matched')

open(p1, 'w', encoding='utf-8').write(c1)

# 2. Update NFAboutPage.tsx
p2 = 'd:/NFVS/src/pages/NFAboutPage.tsx'
c2 = open(p2, 'r', encoding='utf-8').read()

# Remove imports
c2 = c2.replace("import ashokPatilDeskImg from '../../assets/ashok_patil_desk.png';\n", "")
c2 = c2.replace("import ceoSignatureImg from '../../assets/ceo_signature.png';\n", "")

# Remove Section 4: Message from the CEO
pattern2 = re.compile(r'\s*\{\/\* Section 4: Message from the CEO \*\/\}[\s\S]*?(?=\s*<\/div>\s*<\/main>)')
if pattern2.search(c2):
    c2 = pattern2.sub('', c2)
    print('Removed Section 4 from NFAboutPage.tsx')
else:
    print('Warning: pattern2 not matched')

open(p2, 'w', encoding='utf-8').write(c2)
print('Finished removing CEO card from both files')
