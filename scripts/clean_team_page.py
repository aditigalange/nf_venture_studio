import re

team_path = 'd:/NFVS/src/pages/NFTeamPage.tsx'
content = open(team_path, 'r', encoding='utf-8').read()

# 1. Ensure signature import points to official signature
content = content.replace(
    "import ceoSignatureImg from '../../assets/ceo_signature.png';",
    "import ceoSignatureImg from '../../assets/ashok_patil_signature_official.png';"
)

# 2. Remove Card 2 completely (Incubation Ecosystem Support)
# It starts around '{/* CARD 2: INCUBATION ECOSYSTEM SUPPORT */}' and ends before '{/* RIGHT MAIN CONTENT DISPLAY AREA */}' or '</aside>'
card2_pattern = re.compile(r'\{\/\* CARD 2: INCUBATION ECOSYSTEM SUPPORT \*\/\}[\s\S]*?(?=\s*<\/aside>)')
if card2_pattern.search(content):
    content = card2_pattern.sub('', content)
    print('Removed Card 2 successfully')
else:
    print('WARNING: Card 2 pattern not found')

# 3. In team cards (activeTab === 'our-team'):
# Remove member.focus paragraph and Key Responsibilities block
# Target in map:
#                              <div>
#                                 <h3 className="text-base sm:text-lg font-bold text-[#1746A2] dark:text-white leading-tight">
#                                   {member.name}
#                                 </h3>
#                                 <p className="text-xs font-bold text-[#D4AF37] mt-0.5">
#                                   {member.designation}
#                                 </p>
#                               </div>
#
#                               <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
#                                 {member.focus}
#                               </p>
#                             </div>
#
#                             <div className="pt-3 mt-4 border-t border-slate-200 dark:border-slate-700">
#                               <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
#                                 Key Responsibilities:
#                               </span>
#                               <div className="flex flex-wrap gap-1.5">
#                                 ...
#                               </div>
#                             </div>

team_card_pattern = re.compile(
    r'(<p className="text-xs font-bold text-\[#D4AF37\] mt-0\.5">\s*\{member\.designation\}\s*<\/p>\s*<\/div>)'
    r'[\s\S]*?'
    r'(<\/div>\s*<\/div>\s*\)\)\}\s*<\/div>)',
    re.MULTILINE
)

# Let's verify what we want to replace with:
# Simply close the parent inner div, so each card cleanly displays photo, role badge, name, designation
# and has balanced padding and height.
replacement = r'\1\n                            </div>\n                          </div>\n                        ))}\n                      </div>'

if team_card_pattern.search(content):
    content = team_card_pattern.sub(replacement, content)
    print('Removed member.focus and Key Responsibilities successfully')
else:
    print('WARNING: team_card_pattern not found')

open(team_path, 'w', encoding='utf-8').write(content)
print('Saved updated NFTeamPage.tsx')
