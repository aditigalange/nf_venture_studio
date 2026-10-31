import os

# 1. Update NFAboutPage.tsx
about_path = 'd:/NFVS/src/pages/NFAboutPage.tsx'
content = open(about_path, 'r', encoding='utf-8').read()
content = content.replace(
    "import nfLogoTransparent from '../../assets/nf-logo-transparent.png';",
    "import officialEmblem from '../../assets/nfvs_official_emblem.png';"
)
content = content.replace(
    "src={nfLogoTransparent}",
    "src={officialEmblem}"
)
open(about_path, 'w', encoding='utf-8').write(content)
print('Updated NFAboutPage.tsx')

# 2. Update NFTeamPage.tsx
# Requirements:
# a) Remove the entire Card 2 (Incubation Ecosystem Support sidebar card):
#    "Incubation Ecosystem", "Turnkey Academic Incubation", "Academic Incubation Centres",
#    "Corporate Startup Management", "IIC & IPR Enablement", "Apply for Incubation", "Contact Executive Office"
# b) In team cards:
#    - remove key responsibilities block
#    - remove message/focus from HR, CFO, CMO
# c) Use official emblem for sidebar logo
# d) Ensure CEO signature uses the updated official signature
team_path = 'd:/NFVS/src/pages/NFTeamPage.tsx'
team_content = open(team_path, 'r', encoding='utf-8').read()

# Change logo import to official emblem
team_content = team_content.replace(
    "import nfLogoImg from '../../assets/nf-logo.jpg';",
    "import officialEmblem from '../../assets/nfvs_official_emblem.png';"
)
team_content = team_content.replace(
    "src={nfLogoImg}",
    "src={officialEmblem}"
)

open(team_path, 'w', encoding='utf-8').write(team_content)
print('Updated NFTeamPage logo import')
