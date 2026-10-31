p = 'd:/NFVS/index.html'
c = open(p, 'r', encoding='utf-8').read()

old_link = '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">'
new_link = '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">'

if old_link in c:
    c = c.replace(old_link, new_link)
    open(p, 'w', encoding='utf-8').write(c)
    print('Updated index.html font links')
else:
    print('Font link pattern not found')
