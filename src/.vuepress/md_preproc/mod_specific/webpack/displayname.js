module.exports = (_, displayName) => `<code-group>
<code-block title="GooseMod" active>
<code-group>
<code-block title="ESM" active>
\`\`\`js
import { findByDisplayName } from '@goosemod/webpack';
const ${displayName} = findByDisplayName('${displayName}');
\`\`\`
</code-block>

<code-block title="CJS">
\`\`\`js
const { findByDisplayName } = require('@goosemod/webpack');
const ${displayName} = findByDisplayName('${displayName}');
\`\`\`
</code-block>
</code-group>
</code-block>

<code-block title="Powercord (v2)">
\`\`\`js
const { getModuleByDisplayName } = require('powercord/webpack');
const ${displayName} = getModuleByDisplayName('${displayName}', false);
\`\`\`
</code-block>

<code-block title="BetterDiscord">
\`\`\`js
// This uses BD's built-in API, you may be using a library which has it's own Webpack API
const { findByDisplayName } = BdApi;
const ${displayName} = findByDisplayName('${displayName}');
\`\`\`
</code-block>

<code-block title="Vizality">
\`\`\`js
import { getModuleByDisplayName } from '@vizality/webpack';
const ${displayName} = getModuleByDisplayName('${displayName}');
\`\`\`
</code-block>

</code-group>`;