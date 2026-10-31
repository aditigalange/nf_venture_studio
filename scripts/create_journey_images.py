from PIL import Image
import os

os.makedirs('d:/NFVS/public/assets/journey_cards', exist_ok=True)
os.makedirs('d:/NFVS/src/assets/journey_cards', exist_ok=True)

# 1. Stage 01: IDEA
# Lightbulb from Ecosystem page (media_1792732710081_de6eb71f.png)
im_eco = Image.open(r'C:\Users\aditi\.gemini\antigravity\brain\384ab366-7758-4418-b069-85c2a137f02f\.user_uploaded\media_1792732710081_de6eb71f.png')
c1 = im_eco.crop((340, 10, 575, 220)) # Lightbulb with STARTUP and IDEA
c1 = c1.resize((480, 320), Image.Resampling.LANCZOS)
c1.save('d:/NFVS/public/assets/journey_cards/stage_01_idea.png')
c1.save('d:/NFVS/src/assets/journey_cards/stage_01_idea.png')
print('Stage 1 saved')

# 2. Stage 02: CONCEPT
# Team discussing at table from Cover page (media_1792732613140_313c8816.png)
im_cov = Image.open(r'C:\Users\aditi\.gemini\antigravity\brain\384ab366-7758-4418-b069-85c2a137f02f\.user_uploaded\media_1792732613140_313c8816.png')
c2 = im_cov.crop((190, 430, 455, 615)) # Team reviewing prototype concept on laptop
c2 = c2.resize((480, 320), Image.Resampling.LANCZOS)
c2.save('d:/NFVS/public/assets/journey_cards/stage_02_concept.png')
c2.save('d:/NFVS/src/assets/journey_cards/stage_02_concept.png')
print('Stage 2 saved')

# 3. Stage 03: DEVELOP
# IT Cell tech team with code & cloud monitors from page_it_cell.png
im_it = Image.open('d:/NFVS/public/brochures/page_it_cell.png')
c3 = im_it.crop((320, 10, 595, 270)) # Engineers coding, cloud architecture diagram
c3 = c3.resize((480, 320), Image.Resampling.LANCZOS)
c3.save('d:/NFVS/public/assets/journey_cards/stage_03_develop.png')
c3.save('d:/NFVS/src/assets/journey_cards/stage_03_develop.png')
print('Stage 3 saved')

# 4. Stage 04: LAUNCH
# Entrepreneur standing overlooking sunrise skyline from CEO page (media_1792732643382_aea22af5.png)
im_ceo = Image.open(r'C:\Users\aditi\.gemini\antigravity\brain\384ab366-7758-4418-b069-85c2a137f02f\.user_uploaded\media_1792732643382_aea22af5.png')
c4 = im_ceo.crop((0, 635, 345, 745)) # Entrepreneur looking out at modern cityscape at sunrise
c4 = c4.resize((480, 320), Image.Resampling.LANCZOS)
c4.save('d:/NFVS/public/assets/journey_cards/stage_04_launch.png')
c4.save('d:/NFVS/src/assets/journey_cards/stage_04_launch.png')
print('Stage 4 saved')

# 5. Stage 05: GROW
# Executive handshake with Academia, Industry, Investors, Government network from Partnerships page
im_part = Image.open('d:/NFVS/public/brochures/page_pre_incubation.png')
c5 = im_part.crop((300, 40, 595, 300)) # Handshake with institutional network
c5 = c5.resize((480, 320), Image.Resampling.LANCZOS)
c5.save('d:/NFVS/public/assets/journey_cards/stage_05_grow.png')
c5.save('d:/NFVS/src/assets/journey_cards/stage_05_grow.png')
print('Stage 5 saved')
