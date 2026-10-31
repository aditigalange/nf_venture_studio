p = 'd:/NFVS/src/index.css'
c = open(p, 'r', encoding='utf-8').read()

c = c.replace(
    "font-family: 'Inter', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;",
    "font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;"
)

c = c.replace(
    "font-family: 'Manrope', 'Inter', sans-serif;",
    "font-family: 'Plus Jakarta Sans', 'Outfit', sans-serif;"
)

open(p, 'w', encoding='utf-8').write(c)
print('Updated src/index.css with Plus Jakarta Sans and Outfit')
