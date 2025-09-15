# publish.ps1

Write-Host "Select version update type:"
Write-Host "1) patch (bug fixes)"
Write-Host "2) minor (new features)"
Write-Host "3) major (breaking changes)"
$choice = Read-Host "Enter 1, 2, or 3"

switch ($choice) {
    "1" { $type="patch" }
    "2" { $type="minor" }
    "3" { $type="major" }
    default { Write-Host "Invalid choice"; exit 1 }
}

Write-Host "You selected: $type"

# GitHub に push
git add .
git commit -m "Prepare for npm publish"
git push

# バージョンを更新
npm version $type

# npm に公開
npm publish

Write-Host "✅ bedrockws has been published with $type version update!"