p = 'd:/NFVS/src/pages/NFTeamPage.tsx'
content = open(p, 'r', encoding='utf-8').read()
content = content.replace('Mr. Ashok Patil', 'Mr. Ashok K. Patil')
open(p, 'w', encoding='utf-8').write(content)
print('Updated CEO name to Mr. Ashok K. Patil')
