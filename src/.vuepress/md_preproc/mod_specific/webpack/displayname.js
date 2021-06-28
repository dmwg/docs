module.exports = (_, displayName) => {
  const split = displayName.split(' ');
  const variableName = split[1] || split[0];
  const realName = split[0];

return `<code-group>
<code-block title="GooseMod" active>
<code-group>
<code-block title="ESM" active>
\`\`\`js
import { findByDisplayName } from '@goosemod/webpack';
const ${variableName} = findByDisplayName('${realName}');
\`\`\`
</code-block>

<code-block title="CJS">
\`\`\`js
const { findByDisplayName } = require('@goosemod/webpack');
const ${variableName} = findByDisplayName('${realName}');
\`\`\`
</code-block>
</code-group>
</code-block>

<code-block title="Powercord (v2)">
\`\`\`js
const { getModuleByDisplayName } = require('powercord/webpack');
const ${variableName} = getModuleByDisplayName('${realName}', false);
\`\`\`
</code-block>

<code-block title="BetterDiscord">
\`\`\`js
// This uses BD's built-in API, you may be using a library which has it's own Webpack API
const { findByDisplayName } = BdApi;
const ${variableName} = findByDisplayName('${realName}');
\`\`\`
</code-block>

<code-block title="Vizality">
\`\`\`js
import { getModuleByDisplayName } from '@vizality/webpack';
const ${variableName} = getModuleByDisplayName('${realName}');
\`\`\`
</code-block>

</code-group>`
};