
document.getElementById('dark-toggle').addEventListener
('click', () => {
    document.documentElement.style.setProperty
    ('--body-background', '#130F1C')
    document.documentElement.style.setProperty
    ('--box-background', '#1F1B29')
    document.documentElement.style.setProperty
    ('--placeholder-background', '#2E2A36')
    document.documentElement.style.setProperty
    ('--text-color', '#BAB9BD')
    document.documentElement.style.setProperty
    ('--input-color', '#99969EF0')
    document.documentElement.style.setProperty
    ('--a-color', '#BAB9BD')
    document.documentElement.style.setProperty
    ('--hr-color', '#635F6B')
    document.documentElement.style.setProperty
    ('--icons-color', 'white')
})

document.getElementById('light-toggle').addEventListener
('click', () => {
    document.documentElement.style.setProperty
    ('--body-background', '#FAFAFA')
    document.documentElement.style.setProperty
    ('--box-background', '#FFFFFF')
    document.documentElement.style.setProperty
    ('--placeholder-background', '#FAFAFA')
    document.documentElement.style.setProperty
    ('--text-color', '#130F1C')
    document.documentElement.style.setProperty
    ('--input-color', '#18273AF0')
    document.documentElement.style.setProperty
    ('--a-color', '#651FFF')
    document.documentElement.style.setProperty
    ('--hr-color', '#ECECEE')
    document.documentElement.style.setProperty
    ('--icons-color', 'black')
})