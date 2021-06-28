# BetterDiscord

BetterDiscord themes are made as a single CSS file (often referred to as a "theme file"), commonly named using the format `<name>.theme.css`.


## Meta Comment

Metadata (information about the theme) is provided to BD via a comment block at the top of the CSS file.

### Example

```css
/**
  * @name Revert Rebrand
  * @author GooseNest
  * @donate https://github.com/sponsors/CanadaHonk
  * @description Reverts Discord's 2021 rebrand (font, colors, reactions, mentions, loading screen, home icon, reply ping color, and more)
  * @invite neMncS2
  * @source https://Goose-Nest.github.io/GT-RevertRebrand/src/RevertRebrand.theme.css
  * @website https://github.com/Goose-Nest/GT-RevertRebrand
  * @version 4.2
*/
```

### Properties

- `name`: Name of the theme
- `author`: Name of the author(s), sometimes including their Discord discriminator (eg: `Ducko#4698`)
- `authorId` (optional): User ID of the author(s)
- `version`: Version of the theme, usually using a [Semantic Versioning](https://semver.org)-like format like 1.2.3
- `description`: Description of the theme, usually describing what it does
- `invite` (optional): Invite code of the theme's support Discord
- `source` (optional): Link to the source of the theme
- `website` (optional): Link to a website for the theme
- `donate` (optional): Link to a website for donating to the author(s) of the theme