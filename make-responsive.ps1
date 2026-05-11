# Script to make all components responsive
$projectRoot = "c:\Users\tech\Desktop\Web-Transport\web-transport"

# Array of replacements to apply
$replacements = @(
    # Hero and main headings
    @{
        files = @("src/components/Hero.tsx", "src/components/Air/AirHero.tsx", "src/components/Ocean/OceanHero.tsx", "src/components/FtlLcl/FtlLclHero.tsx")
        old = 'py-20 text-'
        new = 'py-12 md:py-20 text-'
    },
    @{
        files = @("src/components/Hero.tsx")
        old = 'text-5xl font-bold leading-tight tracking-tight md:text-7xl'
        new = 'text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight'
    },
    @{
        files = @("src/components/Hero.tsx")
        old = 'text-lg leading-relaxed text-white md:text-xl'
        new = 'text-base md:text-lg lg:text-xl leading-relaxed text-white'
    },
    # Air Headings
    @{
        files = @("src/components/Air/AirHero.tsx", "src/components/Ocean/OceanHero.tsx")
        old = 'text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl'
        new = 'text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight text-slate-900'
    },
    @{
        files = @("src/components/Air/AirHero.tsx", "src/components/Ocean/OceanHero.tsx")
        old = 'text-sm font-bold uppercase tracking-[0.35em]'
        new = 'text-xs md:text-sm font-bold uppercase tracking-[0.35em]'
    },
    @{
        files = @("src/components/Air/AirHero.tsx", "src/components/Ocean/OceanHero.tsx")
        old = 'mt-6 max-w-2xl text-lg leading-8 text-slate-600'
        new = 'mt-4 md:mt-6 max-w-2xl text-sm md:text-base lg:text-lg leading-7 md:leading-8 text-slate-600'
    },
    # Capabilities sections
    @{
        files = @("src/components/Air/AirCapabilities.tsx", "src/components/Ocean/OceanCapabilities.tsx")
        old = 'text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl'
        new = 'text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900'
    },
    @{
        files = @("src/components/Air/AirCapabilities.tsx", "src/components/Ocean/OceanCapabilities.tsx")
        old = 'py-16 text-slate-900'
        new = 'py-12 md:py-16 text-slate-900'
    },
    @{
        files = @("src/components/Air/AirCapabilities.tsx", "src/components/Ocean/OceanCapabilities.tsx")
        old = 'mt-12 grid gap-6 md:grid-cols-2'
        new = 'mt-8 md:mt-12 grid gap-4 md:gap-6 md:grid-cols-2'
    },
    @{
        files = @("src/components/Air/AirCapabilities.tsx", "src/components/Ocean/OceanCapabilities.tsx")
        old = 'text-xl font-bold text-slate-900'
        new = 'text-lg md:text-xl font-bold text-slate-900'
    }
)

# Apply replacements
Set-Location $projectRoot

foreach ($replacement in $replacements) {
    foreach ($file in $replacement.files) {
        if (Test-Path $file) {
            Write-Host "Processing $file..."
            $content = Get-Content $file -Raw
            if ($content -match [regex]::Escape($replacement.old)) {
                $content = $content -replace [regex]::Escape($replacement.old), $replacement.new
                Set-Content $file -Value $content -Encoding UTF8
                Write-Host "  ✓ Updated"
            }
        }
    }
}

Write-Host "`nAll components made responsive!"
