#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title add rime dic
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 📔
# @raycast.argument1 { "type": "text", "placeholder": "码值" }
# @raycast.argument2 { "type": "text", "placeholder": "词语" }

# Documentation:
# @raycast.author YanSiqi
# @raycast.authorURL https://github.com/yansq

cd ~/Library/Rime || exit
printf "%s\t%s\n" "${2}" "${1}" >> flypy_user.txt

osascript <<'END'
tell application "System Events"
	keystroke "`" using {control down, option down}
end tell
END
